// import React from "react";
// import { ExternalLink } from "lucide-react";

// const ConnectedAppsWidget = ({ apps }) => {
//   return (
//     <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 col-span-1 lg:col-span-3">
//       <div className="flex justify-between items-center mb-5">
//         <h3 className="font-bold text-slate-800 text-lg">
//           Connected Applications
//         </h3>
//         <span className="text-xs text-slate-400 font-medium bg-slate-100 px-3 py-1 rounded-lg">
//           {apps.length} Connected
//         </span>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//         {apps.map((app, i) => (
//           <div
//             key={i}
//             className="group flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all cursor-pointer bg-slate-50/50 hover:bg-white"
//           >
//             <div
//               className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 text-xl font-bold transition-transform group-hover:scale-110 ${app.bg} ${app.color}`}
//             >
//               {app.icon}
//             </div>
//             <span className="text-sm font-bold text-slate-700">{app.name}</span>
//             <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
//               <span>Launch</span>
//               <ExternalLink size={10} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ConnectedAppsWidget;
