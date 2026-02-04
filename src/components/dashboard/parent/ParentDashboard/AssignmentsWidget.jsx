// import React from "react";
// import { Link } from "react-router-dom";
// import { BookMarked, Clock, ArrowRight, ExternalLink } from "lucide-react";

// const AssignmentsWidget = ({ assignments }) => {
//   return (
//     <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
//       <div className="flex justify-between items-center mb-5">
//         <div className="flex items-center gap-2">
//           <BookMarked size={20} className="text-green-500" />
//           <h3 className="font-bold text-slate-800 text-lg">
//             Upcoming Assignments
//           </h3>
//         </div>
//         <span className="text-xs text-green-600 font-bold bg-green-100 px-3 py-1 rounded-lg">
//           {assignments.length} Pending
//         </span>
//       </div>

//       <div className="space-y-3">
//         {assignments.map((assignment, i) => (
//           <div
//             key={i}
//             className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 transition-colors"
//           >
//             <div className="flex items-start justify-between mb-2">
//               <div>
//                 <h4 className="font-bold text-slate-800 text-sm mb-1">
//                   {assignment.title}
//                 </h4>
//                 <p className="text-xs text-slate-500">{assignment.subject}</p>
//               </div>
//               <span
//                 className={`text-[10px] font-bold px-2 py-1 rounded ${
//                   assignment.priority === "High"
//                     ? "bg-red-100 text-red-700"
//                     : "bg-yellow-100 text-yellow-700"
//                 }`}
//               >
//                 {assignment.priority}
//               </span>
//             </div>
//             <div className="flex items-center gap-2 text-xs text-slate-500">
//               <Clock size={12} />
//               <span>Due: {assignment.due}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex items-center justify-between mt-4">
//         <Link
//           to="/dashboard/parent/homework"
//           className="text-xs font-bold text-green-600 hover:text-green-700 flex items-center gap-1.5"
//         >
//           View All Assignments
//           <ArrowRight size={12} />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default AssignmentsWidget;
