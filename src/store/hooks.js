/**
 * @file store/hooks.js
 * @description Custom typed Redux hooks for use throughout the app.
 * Provides type-safe useDispatch and useSelector hooks.
 * 
 * Usage:
 * import { useAppDispatch, useAppSelector } from '../store/hooks';
 */

import { useDispatch, useSelector } from 'react-redux';

/**
 * Custom hook for typed dispatch
 * Use throughout app instead of plain `useDispatch`
 * 
 * @returns {AppDispatch} Typed dispatch function
 * 
 * @example
 * const dispatch = useAppDispatch();
 * dispatch(loginUser({ email, password }));
 */
export const useAppDispatch = () => useDispatch();

/**
 * Custom hook for typed selector
 * Use throughout app instead of plain `useSelector`
 * 
 * @param {Function} selector - State selector function
 * @returns {any} Selected state
 * 
 * @example
 * const user = useAppSelector(state => state.auth.user);
 * const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
 */
export const useAppSelector = useSelector;
