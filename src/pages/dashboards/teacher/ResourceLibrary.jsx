import React, { useState, useEffect } from 'react';
import {
  Upload, Download, Search, Filter, Star, Eye, Share2,
  FileText, Video, FileImage, File, BookOpen, Users,
  Calendar, ThumbsUp, MessageSquare, X, ChevronDown,
  Play, Image, FileSpreadsheet, Award, Cloud, Link,
  Beaker, ClipboardList, AlertTriangle, ExternalLink,
  PlusCircle, Trash2, Repeat, CheckCircle, ShieldAlert
} from 'lucide-react';

const ResourceLibrary = () => {
  // Sample resource data
  const [resources] = useState([
    {
      id: 'R1',
      title: 'Newton\'s Laws of Motion - Complete Guide',
      description: 'Comprehensive presentation covering all three laws with real-world examples',
      subject: 'Physics',
      topic: 'Mechanics',
      grade: 'Grade 9',
      format: 'ppt',
      size: '5.2 MB',
      uploadedBy: 'Dr. Sarah Chen',
      uploadDate: '2026-01-15',
      downloads: 142,
      rating: 4.8,
      reviews: 24,
      tags: ['Mechanics', 'Force', 'Motion']
    },
    {
      id: 'R2',
      title: 'Thermodynamics Video Lecture Series',
      description: '6-part video series explaining thermodynamic principles',
      subject: 'Physics',
      topic: 'Thermodynamics',
      grade: 'Grade 10',
      format: 'video',
      size: '245 MB',
      uploadedBy: 'Prof. Michael Johnson',
      uploadDate: '2026-01-12',
      downloads: 98,
      rating: 4.9,
      reviews: 18,
      tags: ['Heat', 'Energy', 'Temperature']
    },
    {
      id: 'R3',
      title: 'Optics Problem Solving Worksheet',
      description: 'Practice problems on reflection, refraction, and lenses',
      subject: 'Physics',
      topic: 'Optics',
      grade: 'Grade 10',
      format: 'pdf',
      size: '1.8 MB',
      uploadedBy: 'Ms. Emily Zhang',
      uploadDate: '2026-01-18',
      downloads: 67,
      rating: 4.6,
      reviews: 12,
      tags: ['Light', 'Reflection', 'Refraction']
    },
    {
      id: 'R4',
      title: 'Electricity Circuit Diagrams',
      description: 'Collection of circuit diagrams for teaching basic electricity',
      subject: 'Physics',
      topic: 'Electricity',
      grade: 'Grade 9',
      format: 'image',
      size: '3.4 MB',
      uploadedBy: 'Mr. David Lee',
      uploadDate: '2026-01-10',
      downloads: 156,
      rating: 4.7,
      reviews: 31,
      tags: ['Circuits', 'Current', 'Voltage']
    },
    {
      id: 'R5',
      title: 'Wave Motion Interactive Simulation',
      description: 'Interactive worksheet with QR codes to online simulations',
      subject: 'Physics',
      topic: 'Waves',
      grade: 'Grade 10',
      format: 'worksheet',
      size: '2.1 MB',
      uploadedBy: 'Dr. Anna Martinez',
      uploadDate: '2026-01-19',
      downloads: 34,
      rating: 5.0,
      reviews: 8,
      tags: ['Waves', 'Sound', 'Frequency']
    },
  ]);

  const [selectedResource, setSelectedResource] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSubject, setFilterSubject] = useState('all');
  const [filterGrade, setFilterGrade] = useState('all');
  const [filterFormat, setFilterFormat] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // --- Lab & Material State ---
  const [materials, setMaterials] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', qty: '', type: 'Classroom' });
  const [labLink, setLabLink] = useState('');
  const [safetyNotes, setSafetyNotes] = useState([]);
  const [newSafety, setNewSafety] = useState('');
  const [extLinks, setExtLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  // Filter resources
  const filteredResources = resources.filter(resource => {
    // Filter by subject
    if (filterSubject !== 'all' && resource.subject !== filterSubject) return false;

    // Filter by grade
    if (filterGrade !== 'all' && resource.grade !== filterGrade) return false;

    // Filter by format
    if (filterFormat !== 'all' && resource.format !== filterFormat) return false;

    // Filter by search
    if (searchQuery) {
      return resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    return true;
  });

  // Calculate statistics
  const stats = {
    total: resources.length,
    byFormat: {
      pdf: resources.filter(r => r.format === 'pdf').length,
      video: resources.filter(r => r.format === 'video').length,
      ppt: resources.filter(r => r.format === 'ppt').length,
      worksheet: resources.filter(r => r.format === 'worksheet').length,
      image: resources.filter(r => r.format === 'image').length,
    },
    totalDownloads: resources.reduce((sum, r) => sum + r.downloads, 0),
    avgRating: (resources.reduce((sum, r) => sum + r.rating, 0) / resources.length).toFixed(1),
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/resources')
    //   .then(res => res.json())
    //   .then(data => setResources(data));
    console.log('Resource Library loaded - Ready for API integration');
  }, []);

  // Get format icon and color
  const getFormatIcon = (format) => {
    switch (format) {
      case 'pdf':
        return { icon: <FileText size={20} />, color: 'text-red-600', bg: 'bg-red-100' };
      case 'video':
        return { icon: <Video size={20} />, color: 'text-purple-600', bg: 'bg-purple-100' };
      case 'ppt':
        return { icon: <FileSpreadsheet size={20} />, color: 'text-orange-600', bg: 'bg-orange-100' };
      case 'worksheet':
        return { icon: <File size={20} />, color: 'text-blue-600', bg: 'bg-blue-100' };
      case 'image':
        return { icon: <FileImage size={20} />, color: 'text-green-600', bg: 'bg-green-100' };
      default:
        return { icon: <File size={20} />, color: 'text-slate-600', bg: 'bg-slate-100' };
    }
  };

  // Render star rating
  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={star <= Math.round(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-slate-300'}
          />
        ))}
      </div>
    );
  };

  // --- Lab Actions ---
  const addMaterial = () => {
    if (newItem.name) {
      setMaterials([...materials, { ...newItem, id: Date.now() }]);
      setNewItem({ name: '', qty: '', type: 'Classroom' });
    }
  };

  const addSafetyNote = () => {
    if (newSafety) {
      setSafetyNotes([...safetyNotes, newSafety]);
      setNewSafety('');
    }
  };

  const addExternalLink = () => {
    if (newLink) {
      setExtLinks([...extLinks, newLink]);
      setNewLink('');
    }
  };

  const loadPreviousList = () => {
    setMaterials([
      { id: 1, name: 'Beaker (250ml)', qty: '6', type: 'Lab Equipment' },
      { id: 2, name: 'Food Coloring', qty: '1 Box', type: 'Consumable' },
      { id: 3, name: 'Chart Paper', qty: '10', type: 'Classroom' }
    ]);
    setSafetyNotes(['Wear safety goggles', 'Handle glass with care']);
    setLabLink('Lab Session 4: Density Experiments');
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
            Resource Library & Content Sharing
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                Learning Resources Hub
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-base">
                {stats.total} approved materials • {stats.totalDownloads} total downloads
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95">
                <Upload size={20} />
                <div className="text-left">
                  <div>Upload Resource</div>
                  <div className="text-[10px] opacity-70">get in app</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LMS Integration Banner */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
            <Cloud size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">Cloud Storage & LMS Integration</h3>
              <span className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-bold">SKOLARO LMS</span>
            </div>
            <p className="text-sm opacity-90 mb-3">
              All resources are backed up to cloud storage and ready for integration with Skolaro-based LMS modules. Share materials with colleagues and access from anywhere.
            </p>
          </div>
          <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
            <Link size={18} />
            <span>Connect LMS</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-blue-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Resources</p>
            <BookOpen className="text-blue-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">{stats.total}</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-green-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Downloads</p>
            <Download className="text-green-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-green-600">{stats.totalDownloads}</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-yellow-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Avg Rating</p>
            <Star className="text-yellow-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-600">{stats.avgRating}/5.0</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-purple-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contributors</p>
            <Users className="text-purple-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-purple-600">12</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search resources by title, topic, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3 bg-slate-100 text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
          >
            <Filter size={18} />
            <span>Filters</span>
            <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Subject Filter */}
              <div>
                <label className="text-xs font-bold text-slate-600 mb-2 block">Subject</label>
                <select
                  value={filterSubject}
                  onChange={(e) => setFilterSubject(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none"
                >
                  <option value="all">All Subjects</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="Mathematics">Mathematics</option>
                </select>
              </div>

              {/* Grade Filter */}
              <div>
                <label className="text-xs font-bold text-slate-600 mb-2 block">Grade</label>
                <select
                  value={filterGrade}
                  onChange={(e) => setFilterGrade(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none"
                >
                  <option value="all">All Grades</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                </select>
              </div>

              {/* Format Filter */}
              <div>
                <label className="text-xs font-bold text-slate-600 mb-2 block">Format</label>
                <select
                  value={filterFormat}
                  onChange={(e) => setFilterFormat(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none"
                >
                  <option value="all">All Formats</option>
                  <option value="pdf">PDF Documents</option>
                  <option value="video">Videos</option>
                  <option value="ppt">Presentations (PPT)</option>
                  <option value="worksheet">Worksheets</option>
                  <option value="image">Images</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => {
          const formatInfo = getFormatIcon(resource.format);

          return (
            <div
              key={resource.id}
              className="bg-white rounded-3xl p-6 shadow-md border-2 border-transparent hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedResource(resource)}
            >
              {/* Resource Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 ${formatInfo.bg} rounded-xl ${formatInfo.color}`}>
                  {formatInfo.icon}
                </div>
                <div className="flex items-center gap-1">
                  {renderStars(resource.rating)}
                  <span className="text-xs font-bold text-slate-600 ml-1">({resource.reviews})</span>
                </div>
              </div>

              {/* Resource Title */}
              <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">{resource.title}</h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">{resource.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {resource.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Resource Info */}
              <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-slate-50 rounded-xl text-xs">
                <div>
                  <p className="text-slate-500 mb-1">Subject</p>
                  <p className="font-bold text-slate-700">{resource.subject}</p>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">Grade</p>
                  <p className="font-bold text-slate-700">{resource.grade}</p>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">Format</p>
                  <p className="font-bold text-slate-700 uppercase">{resource.format}</p>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">Size</p>
                  <p className="font-bold text-slate-700">{resource.size}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <Download size={12} />
                  {resource.downloads} downloads
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(resource.uploadDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button className="px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors flex items-center justify-center gap-1">
                  <Eye size={14} />
                  Preview
                </button>
                <button className="px-4 py-2 bg-green-50 text-green-600 border border-green-200 rounded-xl text-xs font-bold hover:bg-green-100 transition-colors flex items-center justify-center gap-1">
                  <Download size={14} />
                  <div className="text-left">
                    <div>Download</div>
                    <div className="text-[9px] opacity-70">get in app</div>
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredResources.length === 0 && (
        <div className="bg-white p-12 rounded-3xl shadow-md text-center">
          <BookOpen className="mx-auto text-slate-300 mb-3" size={48} />
          <h3 className="text-lg font-bold text-slate-800 mb-2">No Resources Found</h3>
          <p className="text-sm text-slate-500">
            {searchQuery || filterSubject !== 'all' || filterGrade !== 'all' || filterFormat !== 'all'
              ? 'Try adjusting your filters'
              : 'No resources available'}
          </p>
        </div>
      )}

      {/* --- LAB & MATERIALS MANAGER SECTION --- */}
      <div className="mt-12 pt-8 border-t-2 border-slate-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
            <Beaker size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Lab & Material Manager</h2>
            <p className="text-slate-500 text-sm">Plan lab sessions, manage materials, and ensure safety compliance.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Col: Builder */}
          <div className="lg:col-span-2 space-y-6">
            {/* Linkage Section */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Link size={20} className="text-purple-500" /> Lab Linkage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Linked Lesson</label>
                  <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 outline-none focus:border-purple-400">
                    <option>Select Lesson Plan...</option>
                    <option>Newton's Laws Intro</option>
                    <option>Chemical Reactions Lab</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Lab Session</label>
                  <select
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 outline-none focus:border-purple-400"
                    value={labLink}
                    onChange={(e) => setLabLink(e.target.value)}
                  >
                    <option value="">No Lab Linked</option>
                    <option value="Lab Session 4: Density Experiments">Lab Session 4: Density Experiments</option>
                    <option value="Lab Session 5: Optics">Lab Session 5: Optics</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Materials List Builder */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <ClipboardList size={20} className="text-blue-500" /> Materials List
                </h3>
                <button
                  onClick={loadPreviousList}
                  className="text-xs font-bold text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors flex items-center gap-1"
                >
                  <Repeat size={14} /> Reuse Recent
                </button>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-6">
                <div className="grid grid-cols-12 gap-3 items-end">
                  <div className="col-span-5">
                    <label className="text-xs font-bold text-slate-400 mb-1 block">Item Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Beaker"
                      className="w-full p-2 rounded-lg border border-slate-200 text-sm font-semibold"
                      value={newItem.name}
                      onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                    />
                  </div>
                  <div className="col-span-3">
                    <label className="text-xs font-bold text-slate-400 mb-1 block">Qty</label>
                    <input
                      type="text"
                      placeholder="e.g. 250ml"
                      className="w-full p-2 rounded-lg border border-slate-200 text-sm font-semibold"
                      value={newItem.qty}
                      onChange={e => setNewItem({ ...newItem, qty: e.target.value })}
                    />
                  </div>
                  <div className="col-span-3">
                    <label className="text-xs font-bold text-slate-400 mb-1 block">Type</label>
                    <select
                      className="w-full p-2 rounded-lg border border-slate-200 text-sm font-semibold outline-none"
                      value={newItem.type}
                      onChange={e => setNewItem({ ...newItem, type: e.target.value })}
                    >
                      <option>Classroom</option>
                      <option>Lab Equipment</option>
                      <option>Consumable</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <button
                      onClick={addMaterial}
                      className="w-full h-[38px] bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700"
                    >
                      <PlusCircle size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* List Table */}
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500 font-bold">
                    <tr>
                      <th className="p-3">Item</th>
                      <th className="p-3">Qty</th>
                      <th className="p-3">Type</th>
                      <th className="p-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {materials.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="p-8 text-center text-slate-400 font-medium italic">
                          No materials added yet. Add items above or reuse a list.
                        </td>
                      </tr>
                    ) : (
                      materials.map((item, idx) => (
                        <tr key={item.id} className="border-t border-slate-100 hover:bg-slate-50">
                          <td className="p-3 font-bold text-slate-700">{item.name}</td>
                          <td className="p-3 text-slate-600">{item.qty}</td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded-md text-xs font-bold ${item.type === 'Consumable' ? 'bg-orange-100 text-orange-700' :
                                item.type === 'Lab Equipment' ? 'bg-purple-100 text-purple-700' :
                                  'bg-green-100 text-green-700'
                              }`}>
                              {item.type}
                            </span>
                          </td>
                          <td className="p-3 text-right">
                            <button
                              onClick={() => setMaterials(materials.filter(m => m.id !== item.id))}
                              className="text-red-400 hover:text-red-600"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Col: Safety & External */}
          <div className="space-y-6">
            {/* Safety */}
            <div className="bg-red-50/50 p-6 rounded-3xl shadow-sm border border-red-100">
              <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                <ShieldAlert size={20} /> Safety & SOPs
              </h3>

              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Add safety note..."
                  className="flex-1 p-2 rounded-lg border border-red-200 text-sm focus:border-red-400 outline-none"
                  value={newSafety}
                  onChange={e => setNewSafety(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && addSafetyNote()}
                />
                <button
                  onClick={addSafetyNote}
                  className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
                >
                  <PlusCircle size={20} />
                </button>
              </div>

              <ul className="space-y-2">
                {safetyNotes.map((note, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-red-700 bg-white p-3 rounded-xl border border-red-100 shadow-sm">
                    <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                    {note}
                  </li>
                ))}
                {safetyNotes.length === 0 && (
                  <p className="text-xs text-red-400 italic text-center py-4">No safety notes added.</p>
                )}
              </ul>

              <button className="w-full mt-4 py-2 border-2 border-dashed border-red-200 rounded-xl text-red-500 text-xs font-bold hover:bg-red-50 hover:border-red-300 transition-all flex items-center justify-center gap-2">
                <Upload size={14} /> Upload SOP Document
              </button>
            </div>

            {/* External Links */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <ExternalLink size={20} className="text-blue-500" /> External Resources
              </h3>

              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Add URL (virtual lab, demo)..."
                  className="flex-1 p-2 rounded-lg border border-slate-200 text-sm focus:border-blue-400 outline-none"
                  value={newLink}
                  onChange={e => setNewLink(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && addExternalLink()}
                />
                <button
                  onClick={addExternalLink}
                  className="bg-slate-800 text-white p-2 rounded-lg hover:bg-black"
                >
                  <PlusCircle size={20} />
                </button>
              </div>

              <ul className="space-y-2">
                {extLinks.map((link, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-blue-600 break-all p-2 hover:bg-slate-50 rounded-lg">
                    <Link size={14} className="shrink-0" />
                    <a href="#" className="underline decoration-blue-200 hover:decoration-blue-500">{link}</a>
                  </li>
                ))}
                {extLinks.length === 0 && (
                  <p className="text-xs text-slate-400 italic text-center py-4">No external links.</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Detail Modal */}
      {selectedResource && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {(() => {
                    const formatInfo = getFormatIcon(selectedResource.format);
                    return (
                      <div className={`p-3 ${formatInfo.bg} rounded-xl ${formatInfo.color}`}>
                        {formatInfo.icon}
                      </div>
                    );
                  })()}
                  <div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold uppercase">
                      {selectedResource.format}
                    </span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{selectedResource.title}</h2>
                <p className="text-slate-600">{selectedResource.description}</p>
              </div>
              <button
                onClick={() => setSelectedResource(null)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Resource Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-4">Resource Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subject</span>
                    <span className="font-bold text-slate-800">{selectedResource.subject}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Topic</span>
                    <span className="font-bold text-slate-800">{selectedResource.topic}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Grade Level</span>
                    <span className="font-bold text-slate-800">{selectedResource.grade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">File Size</span>
                    <span className="font-bold text-slate-800">{selectedResource.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Uploaded By</span>
                    <span className="font-bold text-slate-800">{selectedResource.uploadedBy}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <h3 className="font-bold text-slate-800 mb-4">Peer Reviews & Ratings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Average Rating</span>
                    <div className="flex items-center gap-2">
                      {renderStars(selectedResource.rating)}
                      <span className="font-bold text-slate-800">{selectedResource.rating}/5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Total Reviews</span>
                    <span className="font-bold text-slate-800">{selectedResource.reviews}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Downloads</span>
                    <span className="font-bold text-slate-800">{selectedResource.downloads}</span>
                  </div>
                  <button className="w-full mt-2 px-4 py-2 bg-purple-500 text-white rounded-xl text-xs font-bold hover:bg-purple-600 transition-colors flex items-center justify-center gap-2">
                    <ThumbsUp size={14} />
                    <div>
                      <div>Rate & Review</div>
                      <div className="text-[9px] opacity-80">get in app</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="font-bold text-slate-800 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {selectedResource.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <button className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 shadow-md transition-all flex items-center justify-center gap-2">
                <Download size={18} />
                <div className="text-left">
                  <div>Download</div>
                  <div className="text-[10px] opacity-80">get in app</div>
                </div>
              </button>
              <button className="px-6 py-4 bg-white text-blue-600 border-2 border-blue-200 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                <Share2 size={18} />
                <div className="text-left">
                  <div>Share</div>
                  <div className="text-[10px] text-blue-400">get in app</div>
                </div>
              </button>
              <button className="px-6 py-4 bg-white text-purple-600 border-2 border-purple-200 rounded-xl font-bold hover:bg-purple-50 transition-all flex items-center justify-center gap-2">
                <MessageSquare size={18} />
                <div className="text-left">
                  <div>Comment</div>
                  <div className="text-[10px] text-purple-400">get in app</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceLibrary;
