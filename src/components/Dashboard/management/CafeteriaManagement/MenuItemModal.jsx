import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { CAFETERIA_DATA } from "../../../../data/managementData";

const MenuItemModal = ({ isOpen, config, onClose, onSave }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Veg",
    tags: [],
    notes: "",
  });

  useEffect(() => {
    if (isOpen) {
      setNewItem({ name: "", category: "Veg", tags: [], notes: "" });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!newItem.name) return;
    onSave(newItem);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fadeIn">
      <div className="bg-white/90 backdrop-blur-xl rounded-[40px] w-full max-w-lg shadow-2xl border border-white overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800 tracking-tight">
              Add {config.meal} Item
            </h3>
            <button
              onClick={onClose}
              className="p-2 bg-gray-50 text-gray-400 rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">
                Item Designation
              </label>
              <input
                type="text"
                placeholder="e.g. Quinoa Salad"
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
                className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-sm font-semibold text-gray-800 outline-none focus:border-blue-500 transition-all shadow-inner"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">
                  Dietary Category
                </label>
                <select
                  value={newItem.category}
                  onChange={(e) =>
                    setNewItem({ ...newItem, category: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-sm font-semibold text-gray-800 outline-none focus:border-blue-500 transition-all cursor-pointer shadow-inner"
                >
                  <option>Veg</option>
                  <option>Non-Veg</option>
                  <option>Vegan</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">
                  Allergen Flags
                </label>
                <select
                  onChange={(e) =>
                    !newItem.tags.includes(e.target.value) &&
                    setNewItem({
                      ...newItem,
                      tags: [...newItem.tags, e.target.value],
                    })
                  }
                  className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-sm font-semibold text-gray-400 outline-none focus:border-blue-500 transition-all cursor-pointer shadow-inner"
                >
                  <option value="">Apply Tags...</option>
                  {CAFETERIA_DATA.dietaryTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">
                Preparation Insights
              </label>
              <textarea
                placeholder="Note allergens or special handling instructions..."
                value={newItem.notes}
                onChange={(e) =>
                  setNewItem({ ...newItem, notes: e.target.value })
                }
                className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-800 outline-none focus:border-blue-500 transition-all h-24 resize-none shadow-inner"
              />
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {newItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-blue-100"
                >
                  {tag}
                  <X
                    size={10}
                    className="cursor-pointer"
                    onClick={() =>
                      setNewItem({
                        ...newItem,
                        tags: newItem.tags.filter((t) => t !== tag),
                      })
                    }
                  />
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <button
              onClick={handleSave}
              className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:translate-y-[-2px] transition-all shadow-xl shadow-blue-600/20"
            >
              Save Protocol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemModal;
