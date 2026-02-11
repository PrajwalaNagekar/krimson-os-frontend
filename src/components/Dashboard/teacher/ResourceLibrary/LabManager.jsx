import React, { useState } from "react";
import {
  Beaker,
  Link,
  ClipboardList,
  Repeat,
  PlusCircle,
  Trash2,
  ShieldAlert,
  AlertTriangle,
  Upload,
  ExternalLink,
} from "lucide-react";

const LabManager = ({ initialData }) => {
  // State
  const [materials, setMaterials] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    qty: "",
    type: "Classroom",
  });
  const [labLink, setLabLink] = useState("");
  const [safetyNotes, setSafetyNotes] = useState([]);
  const [newSafety, setNewSafety] = useState("");
  const [extLinks, setExtLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  // Handlers
  const addMaterial = () => {
    if (newItem.name) {
      setMaterials([...materials, { ...newItem, id: Date.now() }]);
      setNewItem({ name: "", qty: "", type: "Classroom" });
    }
  };

  const addSafetyNote = () => {
    if (newSafety) {
      setSafetyNotes([...safetyNotes, newSafety]);
      setNewSafety("");
    }
  };

  const addExternalLink = () => {
    if (newLink) {
      setExtLinks([...extLinks, newLink]);
      setNewLink("");
    }
  };

  const loadPreviousList = () => {
    if (initialData) {
      setMaterials(initialData.labMaterials || []);
      setSafetyNotes(initialData.safetyNotes || []);
      setLabLink("Lab Session 4: Density Experiments"); // Hardcoded default for demo
    }
  };

  return (
    <div className="mt-12 pt-8 border-t-2 border-slate-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
          <Beaker size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Lab & Material Manager
          </h2>
          <p className="text-slate-500 text-sm">
            Plan lab sessions, manage materials, and ensure safety compliance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col: Builder */}
        <div className="lg:col-span-2 space-y-6">
          {/* Linkage Section */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Link size={20} className="text-purple-500" /> Lab Linkage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">
                  Linked Lesson
                </label>
                <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 outline-none focus:border-purple-400">
                  <option>Select Lesson Plan...</option>
                  <option>Newton's Laws Intro</option>
                  <option>Chemical Reactions Lab</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">
                  Lab Session
                </label>
                <select
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 outline-none focus:border-purple-400"
                  value={labLink}
                  onChange={(e) => setLabLink(e.target.value)}
                >
                  <option value="">No Lab Linked</option>
                  <option value="Lab Session 4: Density Experiments">
                    Lab Session 4: Density Experiments
                  </option>
                  <option value="Lab Session 5: Optics">
                    Lab Session 5: Optics
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Materials List Builder */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <ClipboardList size={20} className="text-blue-500" /> Materials
                List
              </h3>
              <button
                onClick={loadPreviousList}
                className="text-xs font-bold text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors flex items-center gap-1"
              >
                <Repeat size={14} /> Reuse Recent
              </button>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-6">
              <div className="grid grid-cols-12 gap-3 items-end">
                <div className="col-span-5">
                  <label className="text-xs font-bold text-slate-400 mb-1 block">
                    Item Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Beaker"
                    className="w-full p-2 rounded-lg border border-slate-200 text-sm font-semibold"
                    value={newItem.name}
                    onChange={(e) =>
                      setNewItem({ ...newItem, name: e.target.value })
                    }
                  />
                </div>
                <div className="col-span-3">
                  <label className="text-xs font-bold text-slate-400 mb-1 block">
                    Qty
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 250ml"
                    className="w-full p-2 rounded-lg border border-slate-200 text-sm font-semibold"
                    value={newItem.qty}
                    onChange={(e) =>
                      setNewItem({ ...newItem, qty: e.target.value })
                    }
                  />
                </div>
                <div className="col-span-3">
                  <label className="text-xs font-bold text-slate-400 mb-1 block">
                    Type
                  </label>
                  <select
                    className="w-full p-2 rounded-lg border border-slate-200 text-sm font-semibold outline-none"
                    value={newItem.type}
                    onChange={(e) =>
                      setNewItem({ ...newItem, type: e.target.value })
                    }
                  >
                    <option>Classroom</option>
                    <option>Lab Equipment</option>
                    <option>Consumable</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <button
                    onClick={addMaterial}
                    className="w-full h-[38px] bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700"
                  >
                    <PlusCircle size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* List Table */}
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 font-bold">
                  <tr>
                    <th className="p-3">Item</th>
                    <th className="p-3">Qty</th>
                    <th className="p-3">Type</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {materials.length === 0 ? (
                    <tr>
                      <td
                        colSpan="4"
                        className="p-8 text-center text-slate-400 font-medium italic"
                      >
                        No materials added yet. Add items above or reuse a list.
                      </td>
                    </tr>
                  ) : (
                    materials.map((item, idx) => (
                      <tr
                        key={item.id}
                        className="border-t border-slate-100 hover:bg-slate-50"
                      >
                        <td className="p-3 font-bold text-slate-700">
                          {item.name}
                        </td>
                        <td className="p-3 text-slate-600">{item.qty}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-1 rounded-md text-xs font-bold ${
                              item.type === "Consumable"
                                ? "bg-orange-100 text-orange-700"
                                : item.type === "Lab Equipment"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-green-100 text-green-700"
                            }`}
                          >
                            {item.type}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() =>
                              setMaterials(
                                materials.filter((m) => m.id !== item.id),
                              )
                            }
                            className="text-red-400 hover:text-red-600"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Col: Safety & External */}
        <div className="space-y-6">
          {/* Safety */}
          <div className="bg-red-50/50 p-6 rounded-3xl shadow-sm border border-red-100">
            <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
              <ShieldAlert size={20} /> Safety & SOPs
            </h3>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Add safety note..."
                className="flex-1 p-2 rounded-lg border border-red-200 text-sm focus:border-red-400 outline-none"
                value={newSafety}
                onChange={(e) => setNewSafety(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addSafetyNote()}
              />
              <button
                onClick={addSafetyNote}
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
              >
                <PlusCircle size={20} />
              </button>
            </div>

            <ul className="space-y-2">
              {safetyNotes.map((note, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-sm text-red-700 bg-white p-3 rounded-xl border border-red-100 shadow-sm"
                >
                  <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                  {note}
                </li>
              ))}
              {safetyNotes.length === 0 && (
                <p className="text-xs text-red-400 italic text-center py-4">
                  No safety notes added.
                </p>
              )}
            </ul>

            <button className="w-full mt-4 py-2 border-2 border-dashed border-red-200 rounded-xl text-red-500 text-xs font-bold hover:bg-red-50 hover:border-red-300 transition-all flex items-center justify-center gap-2">
              <Upload size={14} /> Upload SOP Document
            </button>
          </div>

          {/* External Links */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <ExternalLink size={20} className="text-blue-500" /> External
              Resources
            </h3>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Add URL (virtual lab, demo)..."
                className="flex-1 p-2 rounded-lg border border-slate-200 text-sm focus:border-blue-400 outline-none"
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addExternalLink()}
              />
              <button
                onClick={addExternalLink}
                className="bg-slate-800 text-white p-2 rounded-lg hover:bg-black"
              >
                <PlusCircle size={20} />
              </button>
            </div>

            <ul className="space-y-2">
              {extLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-blue-600 break-all p-2 hover:bg-slate-50 rounded-lg"
                >
                  <Link size={14} className="shrink-0" />
                  <a
                    href="#"
                    className="underline decoration-blue-200 hover:decoration-blue-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
              {extLinks.length === 0 && (
                <p className="text-xs text-slate-400 italic text-center py-4">
                  No external links.
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabManager;
