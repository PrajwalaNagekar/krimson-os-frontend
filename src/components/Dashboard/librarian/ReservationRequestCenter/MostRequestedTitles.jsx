import React from "react";
import { Award, TrendingUp, BarChart3 } from "lucide-react";

const MostRequestedTitles = ({ titles }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
          <Award className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Most Requested Titles
          </h2>
          <p className="text-sm text-gray-600">
            Popular books based on reservation demand
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Rank
              </th>
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Book Details
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Total Requests
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Stock Status
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Trend
              </th>
              <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {titles.map((book) => (
              <tr
                key={book.rank}
                className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors"
              >
                <td className="p-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${book.rank === 1 ? "from-yellow-400 to-orange-500" : book.rank === 2 ? "from-gray-300 to-gray-400" : book.rank === 3 ? "from-orange-300 to-orange-400" : "from-blue-400 to-cyan-500"} flex items-center justify-center`}
                  >
                    <span className="text-white font-bold">{book.rank}</span>
                  </div>
                </td>
                <td className="p-4">
                  <p className="font-bold text-gray-800">{book.title}</p>
                  <p className="text-sm text-gray-600">{book.author}</p>
                  <p className="text-xs text-gray-500 font-mono">{book.isbn}</p>
                </td>
                <td className="p-4 text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                    {book.totalRequests}
                  </p>
                  <p className="text-xs text-gray-500">requests</p>
                </td>
                <td className="p-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-800">
                        {book.available}
                      </span>
                      <span className="text-sm text-gray-500">
                        / {book.currentStock}
                      </span>
                    </div>
                    <div className="w-24 bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-full rounded-full ${book.available <= book.currentStock * 0.2 ? "bg-red-400" : book.available <= book.currentStock * 0.5 ? "bg-yellow-400" : "bg-green-400"}`}
                        style={{
                          width: `${(book.available / book.currentStock) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span
                      className={`text-xs font-semibold ${book.available <= book.currentStock * 0.2 ? "text-red-600" : book.available <= book.currentStock * 0.5 ? "text-yellow-600" : "text-green-600"}`}
                    >
                      {book.available <= book.currentStock * 0.2
                        ? "Low Stock"
                        : book.available <= book.currentStock * 0.5
                          ? "Medium"
                          : "Good"}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-semibold">
                    <TrendingUp className="w-3 h-3" />
                    {book.trend}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1 ml-auto">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-3 h-3" />
                      <span>View Stats</span>
                    </div>
                    <div className="text-[10px] opacity-70">get in app</div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MostRequestedTitles;
