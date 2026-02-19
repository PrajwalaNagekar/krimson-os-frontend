import React, { useState } from "react";
import {
  Users,
  Plus,
  LayoutGrid,
  List,
  Search,
  Edit3,
  Trash2,
} from "lucide-react";
import GroupCreationForm from "./GroupCreationForm";

const TYPE_STYLES = {
  Support: "bg-orange-50 text-orange-600 border border-orange-100",
  Enrichment: "bg-purple-50 text-purple-600 border border-purple-100",
  "Mixed Ability": "bg-blue-50 text-blue-600 border border-blue-100",
};

const LearningGroups = ({
  groups = [],
  setGroups,
  students = [],
  createNewGroup,
  deleteGroup,
}) => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingGroup, setEditingGroup] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCreateGroup = (newGroupData) => {
    if (editingGroup) {
      setGroups(
        groups.map((g) =>
          g.id === editingGroup.id ? { ...newGroupData, id: g.id } : g,
        ),
      );
      setEditingGroup(null);
    } else {
      const newGroup = {
        ...newGroupData,
        id: Date.now(),
        members: newGroupData.members || [],
      };
      setGroups([...groups, newGroup]);
    }
    setShowCreateForm(false);
  };

  const startEdit = (group) => {
    setEditingGroup(group);
    setShowCreateForm(true);
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    deleteGroup(id);
  };

  const filteredGroups = groups.filter((g) =>
    g.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (showCreateForm) {
    return (
      <GroupCreationForm
        initialData={editingGroup}
        students={students}
        onSubmit={handleCreateGroup}
        onCancel={() => {
          setShowCreateForm(false);
          setEditingGroup(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Learning Groups</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {groups.length} group{groups.length !== 1 ? "s" : ""} ·{" "}
            {students.length} students in class
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search groups..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-md transition-all ${
                viewMode === "grid"
                  ? "bg-white shadow text-blue-600"
                  : "text-slate-500 hover:text-slate-700"
              }`}
              title="Grid View"
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-md transition-all ${
                viewMode === "list"
                  ? "bg-white shadow text-blue-600"
                  : "text-slate-500 hover:text-slate-700"
              }`}
              title="List View"
            >
              <List size={18} />
            </button>
          </div>
          <button
            onClick={() => {
              setEditingGroup(null);
              setShowCreateForm(true);
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200 whitespace-nowrap"
          >
            <Plus size={18} />
            <span>Create Group</span>
          </button>
        </div>
      </div>

      {/* Groups Grid/List */}
      {filteredGroups.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users size={32} className="text-slate-300" />
          </div>
          <h3 className="text-slate-900 font-semibold mb-1">
            {searchQuery
              ? "No groups match your search"
              : "No Learning Groups Yet"}
          </h3>
          <p className="text-slate-500 text-sm mb-6">
            {searchQuery
              ? "Try a different search term."
              : "Create groups for targeted teaching and differentiation."}
          </p>
          {!searchQuery && (
            <button
              onClick={() => {
                setEditingGroup(null);
                setShowCreateForm(true);
              }}
              className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-100"
            >
              Create Your First Group
            </button>
          )}
        </div>
      ) : (
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              : "space-y-4"
          }
        >
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className={`bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg hover:border-slate-300 transition-all duration-300 group/card ${
                viewMode === "list"
                  ? "flex flex-col sm:flex-row items-start sm:items-center gap-4"
                  : "flex flex-col"
              }`}
            >
              {/* Card Body */}
              <div className={`flex-1 ${viewMode === "list" ? "w-full" : ""}`}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1 min-w-0">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide mb-2 ${
                        TYPE_STYLES[group.type] || TYPE_STYLES["Mixed Ability"]
                      }`}
                    >
                      {group.type || "Mixed Ability"}
                    </span>
                    <h3 className="text-base font-bold text-slate-800 leading-tight truncate">
                      {group.name}
                    </h3>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex gap-1 ml-2 opacity-0 group-hover/card:opacity-100 transition-opacity flex-shrink-0">
                    <button
                      onClick={() => startEdit(group)}
                      className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit Group"
                    >
                      <Edit3 size={15} />
                    </button>
                    <button
                      onClick={(e) => handleDelete(e, group.id)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Group"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>

                <p className="text-slate-500 text-sm mb-4 line-clamp-2 min-h-[2.5em]">
                  {group.description || "No description provided."}
                </p>

                {/* Metadata Badges */}
                {(group.subject || group.topic) && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {group.subject && (
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg font-medium">
                        📚 {group.subject}
                      </span>
                    )}
                    {group.topic && (
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg font-medium">
                        🎯 {group.topic}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Footer / Stats */}
              <div
                className={`pt-4 border-t border-slate-100 flex items-center justify-between w-full ${
                  viewMode === "list"
                    ? "sm:border-t-0 sm:pt-0 sm:border-l sm:pl-5 sm:w-auto sm:flex-col sm:items-end sm:gap-2"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  {group.members.length > 0 ? (
                    <>
                      <div className="flex -space-x-2">
                        {group.members.slice(0, 4).map((m, i) => (
                          <div
                            key={i}
                            className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-[10px] font-bold text-white"
                            title={m.name}
                          >
                            {m.name ? m.name[0] : "?"}
                          </div>
                        ))}
                        {group.members.length > 4 && (
                          <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
                            +{group.members.length - 4}
                          </div>
                        )}
                      </div>
                      <span className="text-xs font-medium text-slate-500">
                        {group.members.length} student
                        {group.members.length !== 1 ? "s" : ""}
                      </span>
                    </>
                  ) : (
                    <span className="text-xs text-slate-400 italic">
                      No students yet
                    </span>
                  )}
                </div>

                <button
                  onClick={() => startEdit(group)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Manage →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LearningGroups;
