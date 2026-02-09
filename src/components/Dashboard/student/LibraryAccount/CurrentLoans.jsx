import React from "react";
import {
  BookOpen,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";

const CurrentLoans = ({ books }) => {
  // Get status badge styling
  const getStatusBadge = (book) => {
    switch (book.status) {
      case "overdue":
        return {
          bg: "bg-gradient-to-r from-red-500 to-rose-600",
          text: "text-white",
          label: "Overdue",
          icon: <XCircle size={14} />,
          border: "border-red-300",
        };
      case "dueSoon":
        return {
          bg: "bg-gradient-to-r from-orange-500 to-amber-600",
          text: "text-white",
          label: "Due Soon",
          icon: <AlertCircle size={14} />,
          border: "border-orange-300",
        };
      default:
        return {
          bg: "bg-gradient-to-r from-green-500 to-emerald-600",
          text: "text-white",
          label: "Issued",
          icon: <CheckCircle size={14} />,
          border: "border-green-300",
        };
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const sortedBooks = [...books].sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate),
  );

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/40 to-pink-100/40 rounded-full blur-3xl -z-0"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg">
            <BookOpen className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">
            Currently Issued Books
          </h2>
          <div className="ml-auto px-4 py-2 bg-blue-50 rounded-xl border border-blue-200">
            <span className="text-sm font-bold text-blue-700">
              {books.length} Books
            </span>
          </div>
        </div>

        {/* Desktop Table View - Enhanced */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-50 to-slate-100">
                <th className="text-left py-4 px-6 text-sm font-bold text-slate-700 uppercase tracking-wide">
                  Book Title
                </th>
                <th className="text-left py-4 px-6 text-sm font-bold text-slate-700 uppercase tracking-wide">
                  Author
                </th>
                <th className="text-left py-4 px-6 text-sm font-bold text-slate-700 uppercase tracking-wide">
                  Issue Date
                </th>
                <th className="text-left py-4 px-6 text-sm font-bold text-slate-700 uppercase tracking-wide">
                  Due Date
                </th>
                <th className="text-left py-4 px-6 text-sm font-bold text-slate-700 uppercase tracking-wide">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-sm font-bold text-slate-700 uppercase tracking-wide">
                  Days
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sortedBooks.map((book) => {
                const badge = getStatusBadge(book);
                return (
                  <tr
                    key={book.id}
                    className={`hover:bg-slate-50 transition-all duration-200 ${
                      book.status === "overdue"
                        ? "bg-red-50/50 hover:bg-red-100/50"
                        : ""
                    }`}
                  >
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <BookOpen size={16} className="text-blue-600" />
                        </div>
                        <p className="font-bold text-slate-800">
                          {book.bookTitle}
                        </p>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-slate-600 font-medium">
                      {book.author}
                    </td>
                    <td className="py-5 px-6 text-slate-600">
                      {formatDate(book.issueDate)}
                    </td>
                    <td className="py-5 px-6">
                      <span className="font-semibold text-slate-700">
                        {formatDate(book.dueDate)}
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      <span
                        className={`${badge.bg} ${badge.text} px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2 shadow-md`}
                      >
                        {badge.icon}
                        {badge.label}
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      {book.status === "overdue" ? (
                        <div className="flex items-center gap-2">
                          <TrendingUp size={16} className="text-red-500" />
                          <span className="text-red-700 font-bold">
                            +{book.daysOverdue} days
                          </span>
                        </div>
                      ) : (
                        <span
                          className={`${
                            book.status === "dueSoon"
                              ? "text-orange-700"
                              : "text-green-700"
                          } font-bold flex items-center gap-2`}
                        >
                          <Clock size={16} />
                          {book.daysRemaining} days
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View - Enhanced */}
        <div className="md:hidden space-y-4">
          {sortedBooks.map((book) => {
            const badge = getStatusBadge(book);
            return (
              <div
                key={book.id}
                className={`border-2 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  book.status === "overdue"
                    ? "border-red-300 bg-gradient-to-br from-red-50 to-rose-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <BookOpen size={20} className="text-blue-600" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg leading-tight">
                      {book.bookTitle}
                    </h3>
                  </div>
                  <span
                    className={`${badge.bg} ${badge.text} px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1 shadow-md`}
                  >
                    {badge.icon}
                    {badge.label}
                  </span>
                </div>

                <p className="text-sm text-slate-600 font-medium mb-4 ml-11">
                  {book.author}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1 font-medium">
                      Issue Date
                    </p>
                    <p className="text-sm font-bold text-slate-700">
                      {formatDate(book.issueDate)}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1 font-medium">
                      Due Date
                    </p>
                    <p className="text-sm font-bold text-slate-700">
                      {formatDate(book.dueDate)}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t-2 border-slate-200">
                  {book.status === "overdue" ? (
                    <div className="flex items-center gap-2">
                      <TrendingUp size={18} className="text-red-600" />
                      <p className="text-sm font-bold text-red-700">
                        Overdue by {book.daysOverdue} day
                        {book.daysOverdue !== 1 ? "s" : ""}
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Clock
                        size={18}
                        className={
                          book.status === "dueSoon"
                            ? "text-orange-600"
                            : "text-green-600"
                        }
                      />
                      <p
                        className={`text-sm font-bold ${
                          book.status === "dueSoon"
                            ? "text-orange-700"
                            : "text-green-700"
                        }`}
                      >
                        {book.daysRemaining} day
                        {book.daysRemaining !== 1 ? "s" : ""} remaining
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurrentLoans;
