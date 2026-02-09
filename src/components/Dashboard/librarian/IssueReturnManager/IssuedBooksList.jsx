import React from "react";
import {
  Book,
  AlertTriangle,
  User,
  Calendar,
  Clock,
  DollarSign,
  ArrowLeft,
} from "lucide-react";

const IssuedBooksList = ({ issuedBooks, formatDate }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
          <Book className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Currently Issued Books
          </h2>
          <p className="text-sm text-gray-600">Books pending return</p>
        </div>
      </div>

      <div className="space-y-4">
        {issuedBooks.map((book) => (
          <div
            key={book.id}
            className={`p-5 rounded-2xl border-2 ${book.isOverdue ? "bg-red-50 border-red-200" : "bg-white border-gray-200"} hover:shadow-lg transition-all`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {book.isOverdue && (
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      OVERDUE
                    </span>
                  )}
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                    {book.barcode}
                  </span>
                </div>

                <h3 className="font-bold text-gray-800 mb-1">
                  {book.bookTitle}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  ISBN: {book.bookISBN}
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">
                      {book.memberName} ({book.memberId})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-cyan-500" />
                    <span className="text-gray-700">
                      Issued: {formatDate(book.issueDate)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock
                      className={`w-4 h-4 ${book.isOverdue ? "text-red-500" : "text-green-500"}`}
                    />
                    <span
                      className={
                        book.isOverdue
                          ? "text-red-600 font-semibold"
                          : "text-gray-700"
                      }
                    >
                      Due: {formatDate(book.dueDate)}
                      {book.isOverdue && ` (${book.daysOverdue}d overdue)`}
                    </span>
                  </div>
                  {book.isOverdue && (
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-pink-500" />
                      <span className="text-pink-600 font-bold">
                        Fine: ₹{book.fine}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Process Return</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssuedBooksList;
