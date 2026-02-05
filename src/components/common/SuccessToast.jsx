import React, { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

const SuccessToast = ({ message, isOpen, onClose, duration = 3000 }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
            const timer = setTimeout(() => {
                handleClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isOpen, duration]);

    const handleClose = () => {
        setIsAnimating(false);
        setTimeout(onClose, 300); // Wait for exit animation
    };

    if (!isOpen && !isAnimating) return null;

    return (
        <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-300 ease-out ${isAnimating ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
            }`}>
            <div className="bg-white/90 backdrop-blur-md border border-green-100 shadow-2xl rounded-2xl p-4 pr-12 flex items-center gap-4 min-w-[320px] max-w-md">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200">
                    <CheckCircle size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 text-sm">Success!</h4>
                    <p className="text-slate-600 text-xs font-medium">{message}</p>
                </div>
                <button
                    onClick={handleClose}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all"
                >
                    <X size={16} />
                </button>
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-green-500/20 w-full rounded-b-2xl overflow-hidden">
                    <div
                        className="h-full bg-green-500 transition-all duration-[3000ms] ease-linear"
                        style={{ width: isAnimating ? '0%' : '100%' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SuccessToast;
