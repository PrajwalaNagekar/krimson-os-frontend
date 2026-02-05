import React, { useState } from "react";
import {
  X,
  QrCode,
  Shield,
  GraduationCap,
  Calendar,
  MapPin,
  Phone,
  RefreshCw,
  Copy,
  Check,
} from "lucide-react";

const DigitalIDModal = ({ isOpen, onClose, user }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  if (!isOpen) return null;

  const handleCopyId = () => {
    navigator.clipboard.writeText(user.id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div className="relative w-full max-w-sm">
        {/* Close Button & Title */}
        <div className="absolute -top-12 left-0 right-0 flex justify-between items-center text-white">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Shield size={18} className="text-cyan-400" /> Digital ID
          </h3>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Card Container with Perspective */}
        <div
          className="perspective-1000 w-full aspect-[1/1.58] relative group cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            className={`relative w-full h-full duration-700 preserve-3d transition-all ${isFlipped ? "rotate-y-180" : ""}`}
          >
            {/* FRONT SIDE */}
            <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
              {/* Pattern Overlay */}
              <div
                className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>

              {/* Header */}
              <div className="h-28 bg-gradient-to-br from-blue-600 to-cyan-500 relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="text-center text-white z-10">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <GraduationCap size={24} />
                    <span className="font-bold text-lg tracking-wide">
                      KRIMSON HIGH
                    </span>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest opacity-80">
                    Student Identity Card
                  </p>
                </div>
              </div>

              {/* Photo */}
              <div className="relative -mt-12 mb-4 flex justify-center">
                <div className="w-32 h-32 rounded-2xl bg-white p-1.5 shadow-lg">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover rounded-xl bg-slate-100"
                  />
                </div>
                {/* Status Indicator */}
                <div className="absolute bottom-2 right-1/2 translate-x-12 translate-y-1 px-3 py-1 bg-green-500 text-white text-[10px] font-bold rounded-full border-2 border-white shadow-sm">
                  ACTIVE
                </div>
              </div>

              {/* Details */}
              <div className="px-6 text-center flex-1">
                <h2 className="text-2xl font-bold text-slate-800 mb-1">
                  {user.name}
                </h2>
                <p className="text-cyan-600 font-bold text-sm mb-4">
                  {user.role}
                </p>

                <div className="grid grid-cols-2 gap-3 text-left bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div>
                    <p className="text-[10px] uppercase text-slate-400 font-bold mb-0.5">
                      Student ID
                    </p>
                    <p className="font-bold text-slate-700 text-sm flex items-center gap-1">
                      {user.id}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-slate-400 font-bold mb-0.5">
                      Section/Class
                    </p>
                    <p className="font-bold text-slate-700 text-sm">
                      {user.section}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-slate-400 font-bold mb-0.5">
                      Date of Birth
                    </p>
                    <p className="font-bold text-slate-700 text-sm">
                      04 Nov 2008
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-slate-400 font-bold mb-0.5">
                      House
                    </p>
                    <p className="font-bold text-slate-700 text-sm opacity-80 truncate">
                      {user.house}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer / Validity */}
              <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase text-slate-400 font-bold">
                    Valid Until
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    31 Mar 2026
                  </span>
                </div>
                <div className="h-8 w-8 bg-slate-800 rounded flex items-center justify-center text-white">
                  <QrCode size={20} />
                </div>
              </div>

              {/* Click to flip hint */}
              <div className="absolute top-2 right-2 text-white/50 animate-pulse">
                <RefreshCw size={14} />
              </div>
            </div>

            {/* BACK SIDE */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white">
              {/* Header */}
              <div className="h-16 bg-slate-900 flex items-center px-6">
                <div className="flex items-center gap-2 opacity-80">
                  <Shield size={16} className="text-cyan-400" />
                  <span className="font-bold text-sm tracking-wide">
                    EMERGENCY INFO
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-6 flex-1">
                {/* Barcode */}
                <div className="bg-white p-3 rounded-lg flex flex-col items-center justify-center gap-1">
                  <div className="h-10 w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Code_39_barcode_1234567890.svg/1200px-Code_39_barcode_1234567890.svg.png')] bg-cover bg-center opacity-80"></div>
                  <p className="text-slate-900 text-[10px] font-mono tracking-[0.2em]">
                    {user.id}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">
                        Blood Group
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <p className="font-bold text-lg">O+</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">
                      Emergency Contact
                    </p>
                    <p className="font-medium text-sm text-cyan-400">
                      Sarah Johnson (Mother)
                    </p>
                    <p className="font-medium text-sm flex items-center gap-2 mt-1">
                      <Phone size={12} className="text-slate-400" /> +1 (555)
                      123-4567
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">
                      School Address
                    </p>
                    <div className="flex gap-2">
                      <MapPin
                        size={14}
                        className="text-slate-400 shrink-0 mt-0.5"
                      />
                      <p className="text-xs text-slate-300 leading-relaxed">
                        42 Knowledge Avenue,
                        <br />
                        Academic District, Krimson City,
                        <br />
                        KC 500021
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <p className="text-[9px] text-slate-500 text-center leading-relaxed">
                    This card is the property of Krimson High School. If found,
                    please return to the school office or call the emergency
                    number provided.
                  </p>
                </div>
              </div>

              {/* Click to flip hint */}
              <div className="absolute top-4 right-4 text-white/30 animate-pulse">
                <RefreshCw size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Actions Below Card */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopyId();
            }}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-medium transition-all backdrop-blur-md"
          >
            {copiedId ? (
              <Check size={14} className="text-green-400" />
            ) : (
              <Copy size={14} />
            )}
            {copiedId ? "Copied ID" : "Copy ID Number"}
          </button>
        </div>
      </div>

      <style>{`
          .perspective-1000 { perspective: 1000px; }
          .preserve-3d { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default DigitalIDModal;
