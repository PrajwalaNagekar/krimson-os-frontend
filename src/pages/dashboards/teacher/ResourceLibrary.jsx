import React, { useState, useEffect } from 'react';
import { 
  Upload, Download, Search, Filter, Star, Eye, Share2,
  FileText, Video, FileImage, File, BookOpen, Users,
  Calendar, ThumbsUp, MessageSquare, X, ChevronDown,
  Play, Image, FileSpreadsheet, Award, Cloud, Link
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
