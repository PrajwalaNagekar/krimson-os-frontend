import React from "react";
import { MessageSquare, User } from "lucide-react";

const TeacherComments = ({ comments, unreadComments }) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <MessageSquare className="text-blue-500" size={24} />
          Teacher Comments (Shared with Parent)
          {unreadComments > 0 && (
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {unreadComments}
            </span>
          )}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className={`rounded-2xl p-5 border-2 ${
              comment.read
                ? "bg-slate-50 border-slate-100"
                : "bg-blue-50 border-blue-200"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div
                  className={`p-2 rounded-xl ${comment.read ? "bg-slate-200" : "bg-blue-200"}`}
                >
                  <User
                    size={16}
                    className={
                      comment.read ? "text-slate-600" : "text-blue-700"
                    }
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">
                    {comment.teacher}
                  </div>
                  <div className="text-xs text-slate-500">
                    {comment.subject}
                  </div>
                </div>
              </div>
              {!comment.read && (
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                  NEW
                </span>
              )}
            </div>
            <p className="text-sm text-slate-700 mb-2 leading-relaxed">
              {comment.comment}
            </p>
            <div className="text-xs text-slate-500">{comment.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherComments;
