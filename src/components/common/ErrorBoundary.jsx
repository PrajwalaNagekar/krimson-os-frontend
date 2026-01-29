/**
 * @component ErrorBoundary
 * @description Catches JavaScript errors anywhere in the child component tree.
 * Prevents entire app from crashing and displays a fallback UI.
 * Should wrap the entire app in main.jsx
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components to protect
 * @param {React.ReactNode} [props.fallback] - Custom error UI (optional)
 * 
 * @example
 * // In main.jsx
 * <ErrorBoundary>
 *   <App />
 * </ErrorBoundary>
 */
import React from 'react';
import PropTypes from 'prop-types';
import { AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null 
    };
  }

  static getDerivedStateFromError() {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console (in production, send to error tracking service like Sentry)
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // ---------------------------------------------------
    // TODO: API INTEGRATION POINT
    // 1. Backend Route: POST /api/errors/log
    // 2. Action: Send error details to backend for tracking
    // 3. Data: { error: error.toString(), stack: errorInfo.componentStack, userAgent: navigator.userAgent }
    // ---------------------------------------------------
    
    this.setState({
      error,
      errorInfo
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md w-full">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="text-red-600" size={32} />
              </div>
              <h1 className="text-2xl font-bold text-slate-800 mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-slate-600 text-sm">
                We've been notified and are working on a fix.
              </p>
            </div>

            {/* Show error details in development mode only */}
            {import.meta.env.DEV && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-xs text-slate-500 cursor-pointer mb-2 hover:text-slate-700">
                  Technical Details (Dev Only)
                </summary>
                <pre className="text-xs bg-slate-100 p-3 rounded overflow-auto max-h-40 text-left">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="flex gap-3 justify-center">
              <button 
                onClick={this.handleReset}
                className="btn-secondary px-6 py-2.5 text-sm"
                type="button"
              >
                Try Again
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="btn-primary px-6 py-2.5 text-sm"
                type="button"
              >
                Go to Homepage
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node
};

export default ErrorBoundary;
