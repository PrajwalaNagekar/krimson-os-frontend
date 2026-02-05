import React, { useState } from "react";
import { STUDENT_DATA } from "../../../../data/studentData";
import {
  FileText,
  Image as ImageIcon,
  File,
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  MoreVertical,
  Plus,
} from "lucide-react";

const ProjectsView = () => {
  const { projects } = STUDENT_DATA;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Project Workspace Section - Layout: Content Studio */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              Project Workspace
              <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-600 text-[10px] font-extrabold uppercase tracking-wider border border-purple-200">
                AI2 Generate
              </span>
            </h3>
            <p className="text-slate-500 text-sm">
              Research notes, drafts, media uploads, and resources.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm font-bold">
            <Plus size={16} />
            New Item
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.workspace.map((item) => (
            <div
              key={item.id}
              className="group bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-purple-200 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex justify-between items-start mb-3">
                <div
                  className={`p-2 rounded-lg ${
                    item.type === "Research Note"
                      ? "bg-orange-50 text-orange-500"
                      : item.type === "Draft"
                        ? "bg-blue-50 text-blue-500"
                        : "bg-green-50 text-green-500" // Media Upload
                  }`}
                >
                  {item.type === "Research Note" && <FileText size={20} />}
                  {item.type === "Draft" && <File size={20} />}
                  {item.type === "Media Upload" && <ImageIcon size={20} />}
                </div>
                <button className="text-slate-300 hover:text-slate-600">
                  <MoreVertical size={18} />
                </button>
              </div>

              <h4 className="font-bold text-slate-800 mb-1 group-hover:text-purple-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-slate-400 mb-4">{item.lastModified}</p>

              <p className="text-sm text-slate-600 line-clamp-2 mb-4 bg-slate-50 p-2 rounded-lg border border-slate-100">
                {item.content}
              </p>

              <div className="flex items-center gap-2 flex-wrap">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-full border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Add New Placeholder/Dropzone */}
          <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer min-h-[220px]">
            <div className="p-3 bg-slate-100 rounded-full text-slate-400">
              <Plus size={24} />
            </div>
            <span className="font-bold text-slate-500">Add Resource</span>
            <span className="text-xs text-slate-400">
              Drag & drop or click to create
            </span>
          </div>
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* Project Milestones Section - Layout: Workflow Console */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              Project Milestones
              <span className="px-2 py-0.5 rounded-md bg-pink-100 text-pink-600 text-[10px] font-extrabold uppercase tracking-wider border border-pink-200">
                AI5 Automate
              </span>
            </h3>
            <p className="text-slate-500 text-sm">
              Track progress, manage deadlines, and automate next steps.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {projects.milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col md:flex-row gap-6 relative overflow-hidden"
            >
              {/* Progress Line Connector (Visual only) */}
              {index !== projects.milestones.length - 1 && (
                <div className="absolute left-[2.4rem] top-16 bottom-0 w-0.5 bg-slate-100 -z-10 md:block hidden"></div>
              )}

              {/* Status Icon */}
              <div className="flex-shrink-0">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${
                    milestone.status === "Completed"
                      ? "bg-green-100 border-green-50 text-green-600"
                      : milestone.status === "In Progress"
                        ? "bg-blue-100 border-blue-50 text-blue-600"
                        : "bg-slate-100 border-slate-50 text-slate-400"
                  }`}
                >
                  {milestone.status === "Completed" && (
                    <CheckCircle2 size={24} />
                  )}
                  {milestone.status === "In Progress" && <Clock size={24} />}
                  {milestone.status === "Pending" && <Circle size={24} />}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">
                      {milestone.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          milestone.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : milestone.status === "In Progress"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {milestone.status}
                      </span>
                      <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <Calendar size={12} /> Due: {milestone.dueDate}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-slate-700">
                      {milestone.steps.filter((s) => s.completed).length}/
                      {milestone.steps.length}
                    </span>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Steps
                    </p>
                  </div>
                </div>

                {/* Steps */}
                <div className="bg-slate-50 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-3 border border-slate-100">
                  {milestone.steps.map((step) => (
                    <div
                      key={step.id}
                      className="flex items-center gap-3 p-2 rounded-lg bg-white border border-slate-100 shadow-sm"
                    >
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center cursor-pointer transition-colors ${
                          step.completed
                            ? "bg-green-500 text-white"
                            : "bg-slate-200 text-transparent hover:bg-slate-300"
                        }`}
                      >
                        <CheckCircle2 size={14} />
                      </div>
                      <span
                        className={`text-sm font-medium ${step.completed ? "text-slate-400 line-through" : "text-slate-700"}`}
                      >
                        {step.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;
