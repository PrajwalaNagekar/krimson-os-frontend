import React, { useState } from 'react';
import { 
  Book, Users, Clock, AlertTriangle, Search, Plus, Edit, 
  Trash2, Download, Filter, Eye, BookOpen, TrendingUp,
  FileText, BarChart3, Archive, Tag
} from 'lucide-react';

/**
 * Screen 1: Library Dashboard & Catalog Overview
 * Purpose: Manage books, digital resources, and inventory summaries
 * Features:
 * - Total Books | Issued | Reserved | Overdue
 * - Search by Title, Author, ISBN, or Category
 * - Add/Edit/Remove titles with stock updates
 * Integration: Library Database + Inventory API
 */

const LibraryDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Static data - ready for API integration
  const stats = [
    { label: 'Total Books', value: '12,458', icon: Book, gradient: 'from-cyan-400 to-blue-500', change: '+245', subtext: 'Books & Digital Media' },
    { label: 'Currently Issued', value: '3,241', icon: Users, gradient: 'from-blue-400 to-pink-500', change: '+89', subtext: 'With students/staff' },
    { label: 'Reserved', value: '156', icon: Clock, gradient: 'from-pink-400 to-purple-500', change: '+12', subtext: 'Awaiting pickup' },
    { label: 'Overdue', value: '47', icon: AlertTriangle, gradient: 'from-orange-400 to-red-500', change: '-8', subtext: 'Requires attention' },
  ];

  // Catalog data
  const catalog = [
    {
      id: 1,
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      isbn: '978-0-262-03384-8',
      category: 'Computer Science',
      stock: 15,
      available: 8,
      issued: 7,
      reserved: 2,
      location: 'CS-A-101',
    },
    {
      id: 2,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      isbn: '978-0-14-143951-8',
      category: 'Literature',
      stock: 25,
      available: 18,
      issued: 5,
      reserved: 0,
      location: 'LIT-B-203',
    },
    {
      id: 3,
      title: 'The Feynman Lectures on Physics',
      author: 'Richard P. Feynman',
      isbn: '978-0-465-02493-3',
      category: 'Physics',
      stock: 12,
      available: 2,
      issued: 10,
      reserved: 3,
      location: 'PHY-C-045',
    },
    {
      id: 4,
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      isbn: '978-0-553-10953-5',
      category: 'Science',
      stock: 20,
      available: 12,
      issued: 7,
      reserved: 1,
      location: 'SCI-D-156',
    },
    {
      id: 5,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '978-0-7432-7356-5',
      category: 'Literature',
      stock: 30,
      available: 22,
      issued: 8,
      reserved: 0,
      location: 'LIT-B-215',
    },
    {
      id: 6,
      title: 'Organic Chemistry',
      author: 'Paula Yurkanis Bruice',
      isbn: '978-0-321-80322-1',
      category: 'Chemistry',
      stock: 18,
      available: 5,
      issued: 12,
      reserved: 4,
      location: 'CHE-E-078',
    },
  ];

  // Popular categories
  const categories = [
    { name: 'Computer Science', count: 342, color: 'from-cyan-400 to-blue-500' },
    { name: 'Literature', count: 987, color: 'from-pink-400 to-purple-500' },
    { name: 'Science', count: 654, color: 'from-green-400 to-emerald-500' },
    { name: 'Mathematics', count: 421, color: 'from-orange-400 to-yellow-500' },
    { name: 'History', count: 289, color: 'from-blue-400 to-cyan-500' },
    { name: 'Arts', count: 156, color: 'from-purple-400 to-pink-500' },
  ];

  const getStockStatus = (available, stock) => {
    const percentage = (available / stock) * 100;
    if (percentage <= 20) return { color: 'bg-red-400', text: 'Low Stock' };
    if (percentage <= 50) return { color: 'bg-yellow-400', text: 'Medium' };
    return { color: 'bg-green-400', text: 'Good' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Library Dashboard & Catalog Overview
              </h1>
              <p className="text-gray-600">Manage books, digital resources, and inventory summaries.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Export Catalog</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-white/20 group hover:scale-105">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 font-medium mb-1">{stat.label}</p>
              <p className="text-xs text-gray-500">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Categories Overview */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Popular Categories</h2>
              <p className="text-sm text-gray-600">Browse by subject area</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.count} books</p>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Catalog Management */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
                <Archive className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Library Catalog</h2>
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
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Book Details</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Category</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">ISBN</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Location</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Stock Status</th>
                  <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {catalog.map((book) => {
                  const stockStatus = getStockStatus(book.available, book.stock);
                  return (
                    <tr key={book.id} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors group">
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
                        <span className="text-sm text-gray-600 font-mono">{book.isbn}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-gray-600">{book.location}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-800">{book.available}</span>
                            <span className="text-sm text-gray-500">/ {book.stock}</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div 
                              className={`h-full rounded-full ${stockStatus.color} transition-all`}
                              style={{ width: `${(book.available / book.stock) * 100}%` }}
                            ></div>
                          </div>
                          <span className={`text-xs font-semibold ${book.available <= book.stock * 0.2 ? 'text-red-600' : book.available <= book.stock * 0.5 ? 'text-yellow-600' : 'text-green-600'}`}>
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

      </div>
    </div>
  );
};

export default LibraryDashboard;
