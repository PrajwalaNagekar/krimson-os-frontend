/**
 * @file main.jsx
 * @description Application entry point. Initializes React app with:
 * - StrictMode for development warnings
 * - Redux Provider for state management
 * - ErrorBoundary for graceful error handling
 * - BrowserRouter for client-side routing
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";

import App from "./App.jsx";
import ErrorBoundary from "./components/common/ErrorBoundary.jsx";
import { store } from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);
