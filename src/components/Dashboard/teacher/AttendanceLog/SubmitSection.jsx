import { Bell, Send, AlertCircle, CheckCircle } from 'lucide-react';

const SubmitSection = ({ stats, isPastDate, onSubmitRequest, onFinalSubmit, isSubmitting, isSubmitted }) => {
    const getBgGradient = () => {
        if (isSubmitted) return 'from-green-500 via-emerald-500 to-teal-400';
        if (isPastDate) return 'from-orange-500 via-amber-500 to-yellow-400';
        return 'from-purple-500 via-pink-500 to-orange-400';
    };

    return (
        <div className={`rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden transition-all duration-500 bg-gradient-to-r ${getBgGradient()}`}>
            <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
                    {isSubmitted ? (
                        <CheckCircle size={32} />
                    ) : (
                        isPastDate ? <AlertCircle size={32} /> : <Bell size={32} />
                    )}
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">
                        {isSubmitted ? 'Attendance Submitted!' : (isPastDate ? 'Request Edit Permission?' : 'Ready to Submit Today?')}
                    </h3>
                    <p className="text-sm opacity-90">
                        {isSubmitted
                            ? 'The attendance log for this period has been successfully recorded and synced with the school server.'
                            : (isPastDate
                                ? 'This log is from a past date and is currently locked. To make changes, you must submit an edit request to the administration.'
                                : 'Submitting this attendance log will automatically notify parents of absent students via SMS and app notifications.')
                        }
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {!isPastDate && !isSubmitted && (
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium">
                                {stats.absent} parent{stats.absent !== 1 ? 's' : ''} to notify
                            </span>
                        )}
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium">
                            {isSubmitted ? 'Cloud Synced' : (isPastDate ? 'Record Locked' : 'Auto-saved draft')}
                        </span>
                    </div>
                </div>
                <button
                    onClick={isSubmitted ? undefined : (isPastDate ? onSubmitRequest : onFinalSubmit)}
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full md:w-auto px-8 py-4 bg-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95 ${isSubmitted ? 'text-green-600' : (isPastDate ? 'text-orange-600' : 'text-purple-600')
                        } ${isSubmitting || isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
                    ) : (
                        isSubmitted ? <CheckCircle size={20} /> : (isPastDate ? <AlertCircle size={20} /> : <Send size={20} />)
                    )}
                    <div className="text-left">
                        <div className="font-bold">
                            {isSubmitting ? 'Submitting...' : (isSubmitted ? 'Submitted' : (isPastDate ? 'Submit Edit Request' : 'Submit Log'))}
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SubmitSection;
