import React, { useState } from "react";
import { Shield, Lock, Globe, AlertCircle, ArrowRight, Key } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";
import { useAppDispatch } from "../../store/hooks";
import { addNotification } from "../../store/slices/uiSlice";

/**
 * UNIFIED LOGIN PORTAL
 * Centralizes access for all roles with SSO-style authentication and 2FA simulation.
 */
const LoginPage = () => {
  const [step, setStep] = useState(1); // 1 = Credentials, 2 = OTP/2FA
  const [authEmail, setAuthEmail] = useState("admin@krimson.com");
  const [authPassword, setAuthPassword] = useState("admin");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // STEP 1: VALIDATE CREDENTIALS
  const handleCredentialSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!authEmail || !authPassword) {
        throw new Error("Please enter both email and password");
      }

      // Call API to verify credentials
      await authService.login(authEmail, authPassword);
      
      // On success, prepare for Step 2
      setStep(2); // Move to OTP
      dispatch(addNotification({ type: 'info', message: 'Credentials verified. Please enter OTP.' }));
      
    } catch (err) {
      console.error(err);
      const msg = err.message || "Login failed. Invalid credentials.";
      setError(msg);
      dispatch(addNotification({ type: 'error', message: msg }));
    } finally {
      setLoading(false);
    }
  };

  // STEP 2: VERIFY OTP (SIMULATION)
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate OTP verification delay for "PDPA Compliance" feel
    setTimeout(() => {
      // In a real app, we would verify OTP with backend here
      if (otp !== "1234") {
        setError("Invalid OTP. Please enter '1234'");
        setLoading(false);
        return;
      }

      setLoading(false);
      dispatch(addNotification({ type: 'success', message: 'Identity Verified. Redirecting...' }));
      
      // REDIRECT TO WELCOME LANDING
      navigate("/welcome");

    }, 1500);
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-300 via-blue-300 to-pink-300 flex items-center justify-center p-2 sm:p-4 font-sans selection:bg-blue-100">
      {/* Main Glass Card Container */}
      <div className="max-w-6xl w-full bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-[3rem] shadow-2xl shadow-purple-900/10 overflow-hidden flex flex-col lg:flex-row min-h-[500px] sm:min-h-[600px] border border-white/50">
        
        {/* LEFT SIDEBAR: Branding - Unchanged */}
        <div className="lg:w-5/12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-300 via-blue-300 to-pink-300"></div>
          <div className="relative z-10 p-6 sm:p-8 lg:p-12 text-slate-800">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/40 backdrop-blur rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
              <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-slate-800" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
              Krimson SSO
            </h1>
            <p className="text-slate-700 text-sm sm:text-base lg:text-lg">
              Centralized School Ecosystem
            </p>
          </div>
          <div className="relative z-10 p-6 sm:p-8 lg:p-12 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3 text-slate-700">
              <div className="p-1.5 sm:p-2 bg-white/40 rounded-lg shadow-sm">
                <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-slate-800" />
              </div>
              <span className="font-medium text-sm sm:text-base">
                Secure SSO Gateway
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-slate-700">
              <div className="p-1.5 sm:p-2 bg-white/40 rounded-lg shadow-sm">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-slate-800" />
              </div>
              <span className="font-medium text-sm sm:text-base">
                7 Apps Connected
              </span>
            </div>
            <p className="pt-2 text-left text-xs text-slate-600">
              Restricted Access • Krimson OS v2.4 • Singapore
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: UNIFIED LOGIN FORM */}
        <div className="lg:w-7/12 p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative">
          
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              {step === 1 ? "Authorized Login" : "Two-Factor Auth"}
            </h2>
            <p className="text-slate-500 mb-6 sm:mb-8 text-sm sm:text-base">
              {step === 1 
                ? "Access the Singapore Campus Portal via SSO."
                : "Please enter the OTP sent to your device."
              }
            </p>

            {error && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-xl text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            {/* STEP 1: EMAIL & PASSWORD */}
            {step === 1 && (
              <form onSubmit={handleCredentialSubmit} className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">
                    Email / User ID
                  </label>
                  <input
                    type="text"
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    className="w-full p-3.5 border border-slate-200 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                    placeholder="e.g. admin@krimson.edu"
                    autoFocus
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-sm font-bold text-slate-700">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    className="w-full p-3.5 border border-slate-200 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-sans"
                    placeholder="••••••••"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                >
                  {loading ? (
                    "Authenticating..."
                  ) : (
                    <>
                      Continue <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
                
                <button 
                  type="button" 
                  onClick={handleForgotPassword}
                  className="w-full text-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors mt-2"
                >
                  Forgot Password?
                </button>
              </form>
            )}

            {/* STEP 2: OTP / 2FA */}
            {step === 2 && (
              <form onSubmit={handleOtpSubmit} className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-3 items-start">
                   <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                     <Shield className="h-5 w-5" />
                   </div>
                   <div>
                     <p className="text-sm font-bold text-slate-800">PDPA Compliance Verify</p>
                     <p className="text-xs text-slate-500">
                       We've sent a 6-digit code to your registered device.
                     </p>
                   </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">
                    One-Time Password
                  </label>
                  <div className="relative">
                    <Key className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full p-3.5 pl-11 border border-slate-200 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all tracking-widest font-mono text-lg"
                      placeholder="XXXXXX"
                      autoFocus
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                >
                  {loading ? (
                    "Verifying..."
                  ) : (
                    <>
                      Verify Identity <Shield className="h-4 w-4" />
                    </>
                  )}
                </button>
                
                <button 
                  type="button"
                  onClick={() => { setStep(1); setError(""); }}
                  className="w-full text-center text-sm text-slate-500 hover:text-slate-800 font-medium py-2"
                >
                  Back to Login
                </button>
              </form>
            )}
            
            {/* ROLE SIMULATOR : Added as per user request for easy access */}
            <div className="mt-8 pt-6 border-t border-slate-100/50">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Select Role to Simulate Access:</p>
               <div className="grid grid-cols-2 gap-2 h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {[
                    { label: "Student", path: "/dashboard/student" },
                    { label: "Teacher", path: "/dashboard/teacher" },
                    { label: "Parent", path: "/dashboard/parent" },
                    { label: "Principal", path: "/dashboard/principal" },
                    { label: "Administrator", path: "/dashboard/admin" },
                    { label: "Finance", path: "/dashboard/finance" },
                    { label: "Management", path: "/dashboard/management" },
                    { label: "Registrar", path: "/dashboard/registrar" },
                    { label: "Academic Coordinator", path: "/dashboard/coordinator" },
                    { label: "Counselor", path: "/dashboard/counselor" },
                    { label: "Librarian", path: "/dashboard/librarian" },
                    { label: "System Admin", path: "/dashboard/it-admin" },
                  ].map((role) => (
                    <button
                      key={role.label}
                      onClick={() => navigate(role.path)}
                      className="p-2 text-left text-sm font-medium text-slate-600 bg-slate-50 hover:bg-white hover:text-blue-600 border border-slate-200 hover:border-blue-200 rounded-lg transition-all flex items-center justify-between group"
                    >
                      {role.label}
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
               </div>
            </div>

            {/* Version / Info Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400">
                Authorized Use Only. System Activity Monitored.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
