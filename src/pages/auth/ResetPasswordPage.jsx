import React, { useState } from "react";
import { Shield, Lock, AlertCircle, ArrowLeft, CheckCircle } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { authService } from "../../services/authService";

const ResetPasswordPage = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setMessage("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            if (!password) {
                throw new Error("Please enter a new password");
            }

            await authService.resetPassword(token, password);
            setMessage("Password reset successful! Redirecting to login...");

            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || err.message || "Failed to reset password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-300 via-blue-300 to-pink-300 flex items-center justify-center p-4 font-sans selection:bg-blue-100">
            <div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden p-8 border border-white/50">
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-white/40 backdrop-blur rounded-2xl flex items-center justify-center shadow-sm">
                        <Lock className="h-8 w-8 text-slate-800" />
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">
                    New Password
                </h2>
                <p className="text-center text-slate-500 mb-8">
                    Enter your new password below
                </p>

                {error && (
                    <div className="p-3 mb-4 bg-rose-100 text-rose-700 rounded-xl text-sm flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {error}
                    </div>
                )}

                {message && (
                    <div className="p-3 mb-4 bg-green-100 text-green-700 rounded-xl text-sm flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            New Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-slate-200 bg-white/50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-3 border border-slate-200 bg-white/50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all disabled:opacity-50"
                    >
                        {loading ? "Resetting..." : "Set New Password"}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <Link to="/login" className="text-slate-500 hover:text-blue-600 font-medium inline-flex items-center gap-1 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
