import React from "react";
import {
  Palette,
  Image as ImageIcon,
  Upload,
  Building2,
  Mail,
  Phone,
  MapPin,
  Save,
} from "lucide-react";

/**
 * @component BrandingConfig
 * @description Component for school branding such as logo, contact info, and theme color.
 * @param {Object} branding - The branding configuration data.
 */
const BrandingConfig = ({ branding }) => {
  if (!branding) return null;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <Palette size={24} />
          </div>
          <div>
            <h3 className="font-bold text-xl text-slate-800">
              School Branding
            </h3>
            <p className="text-slate-500 text-sm mt-0.5">
              Logo, name, contact, and theme customization
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Logo Upload */}
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            School Logo
          </label>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center">
              <ImageIcon className="text-slate-400" size={32} />
            </div>
            <div>
              <button className="flex flex-col items-center gap-0.5 px-6 py-2.5 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 transition-colors shadow-lg">
                <div className="flex items-center gap-2">
                  <Upload size={16} />
                  <span>Upload New Logo</span>
                </div>
              </button>
              <p className="text-xs text-slate-400 mt-2">
                Recommended: 512x512px PNG
              </p>
            </div>
          </div>
        </div>

        {/* School Information */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              School Name
            </label>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Building2 size={16} className="text-pink-500" />
              {branding.schoolName}
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Tagline
            </label>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700">
              {branding.tagline}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Contact Email
            </label>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Mail size={16} className="text-blue-500" />
              <span className="truncate">{branding.contactEmail}</span>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Contact Phone
            </label>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Phone size={16} className="text-green-500" />
              {branding.contactPhone}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Address
          </label>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700 flex items-center gap-2">
            <MapPin size={16} className="text-red-500" />
            {branding.address}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Theme Color
          </label>
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl border-2 border-slate-200 shadow-inner"
              style={{
                backgroundColor: branding.themeColor,
              }}
            />
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-700 flex-1">
              {branding.themeColor}
            </div>
          </div>
        </div>

        <button className="w-full flex flex-col items-center gap-0.5 py-3 bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-xl font-bold hover:shadow-xl transition-all shadow-lg">
          <div className="flex items-center gap-2">
            <Save size={18} />
            <span>Save Branding Settings</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BrandingConfig;
