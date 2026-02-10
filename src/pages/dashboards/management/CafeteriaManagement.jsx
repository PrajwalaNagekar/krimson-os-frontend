import React, { useState } from 'react';
import {
    Utensils, Calendar, Users, Plus, Search, Filter,
    ChevronRight, Edit2, Trash2, CheckCircle2, AlertCircle,
    X, ArrowRight, Settings, Info, Save, Clock, Menu,
    ShieldCheck, Download, Share2, TrendingUp, Target
} from 'lucide-react';

/**
 * Screen 316: Cafeteria Menu Administration
 * Purpose: Allow school staff to create, manage, and publish cafeteria menus.
 */
const CafeteriaManagement = () => {
    const [menuPeriod, setMenuPeriod] = useState('Weekly'); // Weekly, Monthly, Custom
    const [status, setStatus] = useState('Draft'); // Draft, Published, Archived

    const handlePublish = () => {
        if (status === 'Archived') return;
        setStatus('Published');
        // In a real app, this would hit an API to update visibility for students/parents
    };

    const handleArchive = () => {
        setStatus('Archived');
    };

    const [selectedGrades, setSelectedGrades] = useState(['Grade 1-5', 'Grade 6-10']);
    const [activeDay, setActiveDay] = useState('Monday');

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const grades = ['Grade 1-5', 'Grade 6-10', 'Grade 11-12', 'Staff'];

    const [menuData, setMenuData] = useState({
        Monday: {
            Breakfast: [
                { id: 1, name: 'Oatmeal with Berries', category: 'Veg', tags: ['Healthy'], notes: 'Gluten-free option available' },
                { id: 2, name: 'Scrambled Eggs', category: 'Non-Veg', tags: [], notes: '' }
            ],
            Lunch: [
                { id: 3, name: 'Paneer Butter Masala', category: 'Veg', tags: ['Jain Friendly'], notes: '' },
                { id: 4, name: 'Chicken Curry', category: 'Non-Veg', tags: [], notes: '' },
                { id: 5, name: 'Steamed Rice', category: 'Vegan', tags: [], notes: '' }
            ],
            Snacks: [
                { id: 6, name: 'Fruit Salad', category: 'Vegan', tags: ['Fresh'], notes: '' }
            ]
        },
        Tuesday: { Breakfast: [], Lunch: [], Snacks: [] },
        Wednesday: { Breakfast: [], Lunch: [], Snacks: [] },
        Thursday: { Breakfast: [], Lunch: [], Snacks: [] },
        Friday: { Breakfast: [], Lunch: [], Snacks: [] },
        Saturday: { Breakfast: [], Lunch: [], Snacks: [] },
    });

    const [showItemModal, setShowItemModal] = useState(false);
    const [modalConfig, setModalConfig] = useState({ meal: '', day: '' });
    const [newItem, setNewItem] = useState({ name: '', category: 'Veg', tags: [], notes: '' });

    const addItem = () => {
        if (!newItem.name) return;
        const id = Date.now();
        const { day, meal } = modalConfig;

        setMenuData(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                [meal]: [...(prev[day][meal] || []), { ...newItem, id }]
            }
        }));
        setNewItem({ name: '', category: 'Veg', tags: [], notes: '' });
        setShowItemModal(false);
    };

    const deleteItem = (day, meal, id) => {
        setMenuData(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                [meal]: prev[day][meal].filter(item => item.id !== id)
            }
        }));
    };

    const dietaryTags = ['Nut-Free', 'Jain Friendly', 'Dairy-Free', 'Gluten-Free', 'No Onion/Garlic'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
            {/* Modal for adding/editing items */}
            {showItemModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fadeIn">
                    <div className="bg-white/90 backdrop-blur-xl rounded-[40px] w-full max-w-lg shadow-2xl border border-white overflow-hidden">
                        <div className="p-8 space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-gray-800 tracking-tight">Add {modalConfig.meal} Item</h3>
                                <button onClick={() => setShowItemModal(false)} className="p-2 bg-gray-50 text-gray-400 rounded-full hover:bg-gray-100"><X size={20} /></button>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">Item Designation</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Quinoa Salad"
                                        value={newItem.name}
                                        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                        className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-sm font-semibold text-gray-800 outline-none focus:border-blue-500 transition-all shadow-inner"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">Dietary Category</label>
                                        <select
                                            value={newItem.category}
                                            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                                            className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-sm font-semibold text-gray-800 outline-none focus:border-blue-500 transition-all cursor-pointer shadow-inner"
                                        >
                                            <option>Veg</option>
                                            <option>Non-Veg</option>
                                            <option>Vegan</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">Allergen Flags</label>
                                        <select
                                            onChange={(e) => !newItem.tags.includes(e.target.value) && setNewItem({ ...newItem, tags: [...newItem.tags, e.target.value] })}
                                            className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-sm font-semibold text-gray-400 outline-none focus:border-blue-500 transition-all cursor-pointer shadow-inner"
                                        >
                                            <option value="">Apply Tags...</option>
                                            {dietaryTags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">Preparation Insights</label>
                                    <textarea
                                        placeholder="Note allergens or special handling instructions..."
                                        value={newItem.notes}
                                        onChange={(e) => setNewItem({ ...newItem, notes: e.target.value })}
                                        className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-800 outline-none focus:border-blue-500 transition-all h-24 resize-none shadow-inner"
                                    />
                                </div>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {newItem.tags.map(tag => (
                                        <span key={tag} className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-blue-100">
                                            {tag}
                                            <X size={10} className="cursor-pointer" onClick={() => setNewItem({ ...newItem, tags: newItem.tags.filter(t => t !== tag) })} />
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button onClick={addItem} className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:translate-y-[-2px] transition-all shadow-xl shadow-blue-600/20">
                                    Save Protocol
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Header Section */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 text-white flex items-center justify-center shadow-lg group hover:rotate-6 transition-transform">
                                <Utensils size={32} />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-1">
                                    Cafeteria Menu Admin
                                </h1>
                                <div className="flex items-center gap-3">
                                    <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 ${status === 'Published' ? 'bg-green-100 text-green-700' :
                                        status === 'Archived' ? 'bg-gray-100 text-gray-500' :
                                            'bg-blue-100 text-blue-700'
                                        }`}>
                                        <div className={`w-1.5 h-1.5 rounded-full ${status === 'Published' ? 'bg-green-500 animate-pulse' :
                                            status === 'Archived' ? 'bg-gray-500' : 'bg-blue-500 animate-pulse'
                                            }`} />
                                        {status} MODE
                                    </span>
                                    <span className="text-xs text-gray-500 font-medium flex items-center gap-1.5 border-l border-gray-200 pl-3">
                                        <Clock size={14} className="text-blue-500" /> Last Save: 2 mins ago
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {status !== 'Archived' && (
                                <button
                                    onClick={handleArchive}
                                    className="px-4 py-2.5 bg-white border-2 border-gray-200 text-gray-600 rounded-xl font-bold text-xs uppercase tracking-widest hover:border-red-400 hover:text-red-500 transition-all flex items-center gap-2"
                                >
                                    <X size={18} />
                                    <span>Archive</span>
                                </button>
                            )}
                            <button className="px-4 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-bold text-xs uppercase tracking-widest hover:border-blue-400 transition-all flex items-center gap-2">
                                <Download size={18} className="text-blue-500" />
                                <span>Export Report</span>
                            </button>
                            {status === 'Draft' && (
                                <button
                                    onClick={handlePublish}
                                    className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center gap-2"
                                >
                                    <ShieldCheck size={18} />
                                    <span>Publish Menu</span>
                                </button>
                            )}
                            {status === 'Published' && (
                                <button
                                    onClick={() => setStatus('Draft')}
                                    className="px-6 py-2.5 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:shadow-lg transition-all flex items-center gap-2"
                                >
                                    <Edit2 size={18} className="text-blue-400" />
                                    <span>Revert to Draft</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Configuration Controls */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Period & Visibility Card */}
                    <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/20 shadow-xl flex flex-col md:flex-row gap-8">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-sm">
                                    <Calendar size={18} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">Menu Lifecycle</h3>
                                    <p className="text-xs text-gray-500">Validity and duration control</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Period Type</label>
                                    <select
                                        value={menuPeriod}
                                        onChange={(e) => setMenuPeriod(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl text-sm font-bold text-gray-700 outline-none focus:border-blue-400 transition-all shadow-inner"
                                    >
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                        <option>Special Event</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Start Date</label>
                                    <input type="date" className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl text-sm font-bold text-gray-700 outline-none focus:border-blue-400 transition-all shadow-inner" defaultValue="2026-02-09" />
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 space-y-4 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl shadow-sm">
                                    <Users size={18} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">Visibility Group</h3>
                                    <p className="text-xs text-gray-500">Target grade authorization</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {grades.map(grade => (
                                    <button
                                        key={grade}
                                        onClick={() => setSelectedGrades(prev =>
                                            prev.includes(grade) ? prev.filter(g => g !== grade) : [...prev, grade]
                                        )}
                                        className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${selectedGrades.includes(grade)
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md scale-105'
                                            : 'bg-white border border-gray-200 text-gray-400 hover:border-purple-300 hover:text-purple-500'
                                            }`}
                                    >
                                        {grade}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats/Audit Card */}
                    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl group hover:scale-[1.02] transition-all relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all" />
                        <div className="relative z-10 space-y-5">
                            <div className="flex items-center justify-between">
                                <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-sm">
                                    <TrendingUp size={20} className="text-white" />
                                </div>
                                <span className="text-[10px] font-bold text-emerald-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">ON TRACK</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">84.2%</h3>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Inventory Status</p>
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Current stock levels for selected meal categories are optimized for the upcoming period.
                            </p>
                            <button className="w-full py-3 bg-white border border-gray-100 hover:border-green-400 hover:text-green-600 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm">
                                View Procurement Logs
                            </button>
                        </div>
                    </div>
                </div>

                {/* Day Navigation */}
                <div className="bg-white/60 backdrop-blur-lg p-2 rounded-2xl border border-white/40 shadow-sm flex overflow-x-auto no-scrollbar gap-2">
                    {days.map(day => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`flex-1 min-w-[110px] py-3.5 rounded-xl text-[10px] font-bold transition-all uppercase tracking-widest border ${activeDay === day
                                ? 'bg-white text-blue-600 border-blue-100 shadow-md scale-[1.02]'
                                : 'text-gray-400 border-transparent hover:text-gray-600 hover:bg-white/50'
                                }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Menu Builder Area */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
                    {['Breakfast', 'Lunch', 'Snacks'].map((meal, mIdx) => (
                        <div key={meal} className="space-y-6">
                            <div className="flex items-center justify-between px-2 bg-white/40 backdrop-blur-md py-3 rounded-2xl border border-white/40 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-xl text-white shadow-sm ${mIdx === 0 ? 'bg-gradient-to-br from-orange-400 to-amber-500' :
                                            mIdx === 1 ? 'bg-gradient-to-br from-blue-400 to-cyan-500' :
                                                'bg-gradient-to-br from-purple-400 to-pink-500'
                                        }`}>
                                        <Menu size={16} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 tracking-tight">{meal}</h3>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Protocol Matrix</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        setModalConfig({ day: activeDay, meal });
                                        setShowItemModal(true);
                                    }}
                                    className="p-2 bg-white/50 text-gray-400 rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-sm border border-white"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>

                            <div className="space-y-4">
                                {(menuData[activeDay]?.[meal] || []).map(item => (
                                    <div key={item.id} className="bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-lg hover:shadow-xl transition-all group relative border border-white/20">
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all flex gap-1.5 z-10">
                                            <button className="p-2 text-gray-400 hover:text-blue-500 bg-white/50 backdrop-blur-md border border-white rounded-xl transition-all shadow-sm"><Edit2 size={12} /></button>
                                            <button
                                                onClick={() => deleteItem(activeDay, meal, item.id)}
                                                className="p-2 text-gray-400 hover:text-red-500 bg-white/50 backdrop-blur-md border border-white rounded-xl transition-all shadow-sm"
                                            >
                                                <Trash2 size={12} />
                                            </button>
                                        </div>

                                        <div className="flex items-start gap-3 mb-4">
                                            <div className="mt-1">
                                                <div className={`w-3 h-3 rounded-full border-2 border-white shadow-sm ${item.category === 'Veg' ? 'bg-green-500' :
                                                        item.category === 'Vegan' ? 'bg-emerald-400' : 'bg-red-500'
                                                    }`} />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-800 tracking-tight leading-tight group-hover:text-blue-600 transition-colors uppercase">{item.name}</h4>
                                                <div className="flex items-center gap-1.5 mt-1">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.category}</span>
                                                    <div className="w-1 h-1 bg-gray-200 rounded-full" />
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ID: {item.id.toString().slice(-4)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-1.5">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg text-[9px] font-bold uppercase tracking-widest border border-blue-100 flex items-center gap-1">
                                                    <Target size={10} />
                                                    {tag}
                                                </span>
                                            ))}
                                            <button className="px-2.5 py-1 bg-gray-50 text-gray-400 rounded-lg text-[9px] font-bold uppercase tracking-widest border border-gray-100 hover:border-blue-300 hover:text-blue-500 transition-all flex items-center gap-1">
                                                <Plus size={10} /> Tag
                                            </button>
                                        </div>

                                        {item.notes && (
                                            <div className="mt-4 pt-4 border-t border-gray-50 flex items-start gap-2">
                                                <div className="p-1 bg-gray-50 rounded">
                                                    <Info size={10} className="text-gray-400" />
                                                </div>
                                                <p className="text-[10px] text-gray-500 font-medium italic line-clamp-1 group-hover:line-clamp-none transition-all">{item.notes}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {(!menuData[activeDay]?.[meal] || menuData[activeDay]?.[meal]?.length === 0) && (
                                    <div className="p-10 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center text-gray-300 bg-white/30">
                                        <div className="w-12 h-12 bg-gray-50/50 rounded-2xl flex items-center justify-center mb-3">
                                            <Utensils size={20} />
                                        </div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest">Protocol Required</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CafeteriaManagement;
