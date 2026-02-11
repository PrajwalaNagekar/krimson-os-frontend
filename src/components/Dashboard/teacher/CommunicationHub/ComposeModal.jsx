import React, { useState, useEffect } from "react";
import { X, Send } from "lucide-react";

const ComposeModal = ({
  isOpen,
  onClose,
  onSend,
  prefilledData,
  studentList,
  parentList,
  classList,
}) => {
  const [composeData, setComposeData] = useState({
    recipientType: "student",
    recipientName: "",
    subject: "",
    tag: "Academic",
    content: "",
  });

  useEffect(() => {
    if (isOpen && prefilledData) {
      setComposeData(prefilledData);
    } else if (isOpen && !prefilledData) {
      // Reset if opening without prefilled data
      setComposeData({
        recipientType: "student",
        recipientName: "",
        subject: "",
        tag: "Academic",
        content: "",
      });
    }
  }, [isOpen, prefilledData]);

  const handleSubmit = () => {
    if (
      !composeData.subject.trim() ||
      !composeData.content.trim() ||
      !composeData.recipientName.trim()
    )
      return;
    onSend(composeData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800">
            Compose New Message
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Recipient Type */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">
                Send To
              </label>
              <select
                value={composeData.recipientType}
                onChange={(e) =>
                  setComposeData({
                    ...composeData,
                    recipientType: e.target.value,
                    recipientName: "",
                  })
                }
                className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none bg-white text-sm"
              >
                <option value="student">Student</option>
                <option value="parent">Parent</option>
                <option value="class">Whole Class</option>
                <option value="broadcast">Broadcast (All)</option>
              </select>
            </div>

            {/* Recipient Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">
                Recipient Name
              </label>
              {composeData.recipientType === "broadcast" ? (
                <input
                  type="text"
                  value="All Students & Parents"
                  disabled
                  className="w-full p-3 border-2 border-slate-200 rounded-xl bg-slate-100 text-slate-500 text-sm font-bold"
                />
              ) : (
                <select
                  value={composeData.recipientName}
                  onChange={(e) =>
                    setComposeData({
                      ...composeData,
                      recipientName: e.target.value,
                    })
                  }
                  className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none bg-white text-sm"
                >
                  <option value="">Select Recipient</option>
                  {composeData.recipientType === "student" &&
                    studentList.map((s, i) => (
                      <option key={i} value={s}>
                        {s}
                      </option>
                    ))}
                  {composeData.recipientType === "parent" &&
                    parentList.map((p, i) => (
                      <option key={i} value={p}>
                        {p}
                      </option>
                    ))}
                  {composeData.recipientType === "class" &&
                    classList.map((c, i) => (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    ))}
                </select>
              )}
            </div>
          </div>

          {/* Subject & Tag */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-slate-700">
                Subject
              </label>
              <input
                type="text"
                value={composeData.subject}
                onChange={(e) =>
                  setComposeData({ ...composeData, subject: e.target.value })
                }
                placeholder="Enter message subject"
                className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none text-sm font-semibold"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Tag</label>
              <select
                value={composeData.tag}
                onChange={(e) =>
                  setComposeData({ ...composeData, tag: e.target.value })
                }
                className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none bg-white text-sm"
              >
                <option value="Academic">Academic</option>
                <option value="Attendance">Attendance</option>
                <option value="Behavior">Behavior</option>
              </select>
            </div>
          </div>

          {/* Message Content */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">
              Message Content
            </label>
            <textarea
              value={composeData.content}
              onChange={(e) =>
                setComposeData({ ...composeData, content: e.target.value })
              }
              placeholder="Type your message here..."
              className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:border-blue-400 focus:outline-none min-h-[200px] text-sm leading-relaxed"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-4 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-6 py-4 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposeModal;
