/**
 * @component LoadingSpinner  
 * @description Reusable loading spinner component with optional text.
 * Used throughout the app for async operations and data fetching states.
 * 
 * @param {Object} props
 * @param {string} [props.text='Loading...'] - Loading message to display
 * @param {string} [props.size='default'] - Spinner size: 'small', 'default', 'large'
 * @param {boolean} [props.fullScreen=false] - Whether to display as full-screen overlay
 * 
 * @example
 * // Inline spinner
 * <LoadingSpinner text="Loading dashboard..." />
 * 
 * // Full-screen overlay
 * <LoadingSpinner fullScreen text="Please wait..." />
 */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const LoadingSpinner = ({ text = 'Loading...', size = 'default', fullScreen = false }) => {
  // Size variant classes
  const sizeClasses = {
    small: 'h-6 w-6 border-2',
    default: 'h-8 w-8 border-4',
    large: 'h-12 w-12 border-4'
  };

  const spinnerElement = (
    <div className="flex flex-col items-center gap-3">
      <div 
        className={clsx(
          "border-blue-600 border-t-transparent rounded-full animate-spin",
          sizeClasses[size]
        )}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className="text-sm font-medium text-slate-600">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        {spinnerElement}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-12">
      {spinnerElement}
    </div>
  );
};

LoadingSpinner.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  fullScreen: PropTypes.bool
};

export default LoadingSpinner;
