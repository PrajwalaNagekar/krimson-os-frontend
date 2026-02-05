import React, { useState, useRef } from "react";
import {
  CheckCircle,
  Calendar,
  Medal,
  Tag,
  ExternalLink,
  Camera,
  Upload,
} from "lucide-react";
import { getCategoryColor, getCategoryIcon } from "./utils";

/**
 * ActivityCard Component
 * Displays detailed information about a single co-curricular activity
 *
 * @param {Object} activity - Activity object with all details
 */
const ActivityCard = ({ activity }) => {
  const Icon = getCategoryIcon(activity.category);
  const gradientColor = getCategoryColor(activity.category);
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 rounded-2xl p-5 hover:border-blue-200 hover:shadow-lg transition-all">
      <div className="flex items-start gap-4 mb-3">
        <div
          className={`p-3 rounded-xl bg-gradient-to-br ${gradientColor} text-white shadow-md flex-shrink-0`}
        >
          <Icon size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-slate-800 text-base mb-1">
            {activity.name}
          </h3>
          <div className="flex flex-wrap gap-2 items-center">
            <span
              className={`inline-block text-[10px] font-semibold px-2 py-1 rounded-lg bg-gradient-to-r ${gradientColor} text-white`}
            >
              {activity.category}
            </span>
            <span className="text-xs text-slate-500">{activity.type}</span>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-2xl font-bold text-blue-600">
            +{activity.points}
          </div>
          <div className="text-[10px] text-slate-500 font-medium">points</div>
        </div>
      </div>

      <p className="text-sm text-slate-600 mb-3 leading-relaxed">
        {activity.description}
      </p>

      {/* Uploaded Image Preview */}
      {uploadedImage && (
        <div className="mb-3 relative">
          <img
            src={uploadedImage}
            alt="Activity"
            className="w-full h-40 object-cover rounded-xl border-2 border-blue-200"
          />
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
            <CheckCircle size={12} />
            Uploaded
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <div className="flex flex-wrap gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Medal size={12} />
            <span>{activity.achievement}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag size={12} />
            <span>{activity.role}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{activity.date}</span>
          </div>
        </div>
        {activity.certificate && (
          <div className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
            <CheckCircle size={12} />
            Certified
          </div>
        )}
      </div>

      {/* Upload Picture Button */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />
        <button
          onClick={triggerFileInput}
          disabled={uploadedImage !== null}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
            uploadedImage
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-md hover:shadow-lg"
          }`}
        >
          {uploadedImage ? (
            <>
              <CheckCircle size={16} />
              Picture Uploaded
            </>
          ) : (
            <>
              <Camera size={16} />
              Upload Picture
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
