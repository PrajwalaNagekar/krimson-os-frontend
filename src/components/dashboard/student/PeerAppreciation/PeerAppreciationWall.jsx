import React, { useState } from "react";
import { Send, Heart, Info } from "lucide-react";
import AppreciationCard from "./AppreciationCard";
import SendAppreciationModal from "./SendAppreciationModal";

/**
 * Peer Appreciation Wall Component
 * Displays a wall of positive appreciation messages from peers.
 * Allows filtering by values and sending new appreciation.
 */
const PeerAppreciationWall = ({ messages = [] }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localMessages, setLocalMessages] = useState(messages); // Local state for immediate UI feedback

  const categories = [
    "All",
    "Kindness",
    "Teamwork",
    "Helpfulness",
    "Respect",
    "Inclusion",
  ];

  // Filter approved messages based on category
  const filteredMessages = localMessages.filter((msg) => {
    // Only show approved messages in the main feed (unless it's the current user's simulated pending one, but for now we follow the requirement to hide pending)
    const isApproved = msg.status === "approved";
    const matchesCategory =
      activeCategory === "All" || msg.category === activeCategory;
    return isApproved && matchesCategory;
  });

  const handleSendAppreciation = (newMessage) => {
    // In a real app, this would POST to an API
    // Here we just add it to local state (it will be filtered out if status is pending, but we can show a success toast)
    setLocalMessages([newMessage, ...localMessages]);

    // Show a simple alert for feedback (since we don't have a toast component ready)
    alert(
      "Your appreciation has been submitted for moderation! Thanks for spreading kindness.",
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
            Peer Appreciation Wall
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Celebrate kindness, teamwork, and respect in our community.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl font-semibold shadow-lg shadow-pink-200 transition-all flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          Send Appreciation
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-slate-800 text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Messages Grid */}
      {filteredMessages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMessages.map((msg) => (
            <AppreciationCard key={msg.id} message={msg} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-700">No messages yet</h3>
          <p className="text-slate-500">
            Be the first to share some appreciation in this category!
          </p>
        </div>
      )}

      {/* Moderation Notice */}
      <div className="flex items-center gap-3 p-4 bg-blue-50 text-blue-700 rounded-2xl text-sm border border-blue-100">
        <Info className="w-5 h-5 flex-shrink-0" />
        <p>
          All messages are moderated to ensure our community stays positive and
          respectful. Your message will appear after approval.
        </p>
      </div>

      {/* Modal */}
      <SendAppreciationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSendAppreciation}
      />
    </div>
  );
};

export default PeerAppreciationWall;
