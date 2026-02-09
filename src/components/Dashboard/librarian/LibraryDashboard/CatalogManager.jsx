import React from "react";
import {
  Archive,
  Plus,
  Search,
  Book,
  Eye,
  Edit,
  Trash2,
  Download,
} from "lucide-react";

const CatalogManager = ({
  catalog,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}) => {
  const getStockStatus = (available, stock) => {
    const percentage = (available / stock) * 100;
    if (percentage <= 20) return { color: "bg-red-400", text: "Low Stock" };
    if (percentage <= 50) return { color: "bg-yellow-400", text: "Medium" };
    return { color: "bg-green-400", text: "Good" };
  };

  const filteredCatalog = catalog.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.isbn.includes(searchQuery) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      book.category.toLowerCase().replace(" ", "-") === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
            <Archive className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Library Catalog
            </h2>
            <p className="text-sm text-gray-600">Search and manage inventory</p>
          </div>
        </div>

        <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>Add New Book</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>
      </div>

      {/* Search Section */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Title, Author, ISBN, or Category..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
        >
          <option value="all">All Categories</option>
          <option value="computer-science">Computer Science</option>
          <option value="literature">Literature</option>
          <option value="science">Science</option>
          <option value="mathematics">Mathematics</option>
        </select>
      </div>

      {/* Catalog Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Book Details
              </th>
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Category
              </th>
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                ISBN
              </th>
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Location
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Stock Status
              </th>
              <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCatalog.map((book) => {
              const stockStatus = getStockStatus(book.available, book.stock);
              return (
                <tr
                  key={book.id}
                  className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors group"
                >
                  <td className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg">
                        <Book className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{book.title}</p>
                        <p className="text-sm text-gray-600">{book.author}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-semibold">
                      {book.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-gray-600 font-mono">
                      {book.isbn}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-gray-600">
                      {book.location}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-800">
                          {book.available}
                        </span>
                        <span className="text-sm text-gray-500">
                          / {book.stock}
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className={`h-full rounded-full ${stockStatus.color} transition-all`}
                          style={{
                            width: `${(book.available / book.stock) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span
                        className={`text-xs font-semibold ${book.available <= book.stock * 0.2 ? "text-red-600" : book.available <= book.stock * 0.5 ? "text-yellow-600" : "text-green-600"}`}
                      >
                        {stockStatus.text}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group/btn">
                        <Eye className="w-4 h-4 text-blue-500" />
                      </button>
                      <button className="p-2 hover:bg-green-50 rounded-lg transition-colors group/btn">
                        <Edit className="w-4 h-4 text-green-500" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors group/btn">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Edit className="w-4 h-4" />
            <span>Bulk Edit</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>

        <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Trash2 className="w-4 h-4" />
            <span>Remove Selected</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>

        <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Stock Report</span>
          </div>
          <div className="text-[10px] text-gray-400">get in app</div>
        </button>
      </div>
    </div>
  );
};

export default CatalogManager;
