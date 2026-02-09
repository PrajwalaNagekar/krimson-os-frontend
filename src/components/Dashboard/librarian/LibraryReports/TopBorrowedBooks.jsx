import React from "react";
import { Award, Book, Clock, TrendingUp } from "lucide-react";

const TopBorrowedBooks = ({ books }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Top Borrowed Books
            </h2>
            <p className="text-sm text-gray-600">
              Most popular titles this month
            </p>
          </div>
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
                Total Borrows
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Currently Out
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Avg Return Time
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Trend
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr
                key={book.rank}
                className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors"
              >
                <td className="p-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${book.rank === 1 ? "from-yellow-400 to-orange-500" : book.rank === 2 ? "from-gray-300 to-gray-400" : book.rank === 3 ? "from-orange-300 to-orange-400" : "from-blue-400 to-cyan-500"} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white font-bold text-lg">
                      {book.rank}
                    </span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg">
                      <Book className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{book.title}</p>
                      <p className="text-sm text-gray-600">{book.author}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded-full text-xs font-semibold">
                          {book.category}
                        </span>
                        {book.popularGrades.map((grade, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs"
                          >
                            {grade}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                    {book.totalBorrows}
                  </p>
                </td>
                <td className="p-4 text-center">
                  <p className="text-lg font-bold text-gray-800">
                    {book.currentlyIssued}
                  </p>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{book.averageReturnTime}</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    {book.trend}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopBorrowedBooks;
