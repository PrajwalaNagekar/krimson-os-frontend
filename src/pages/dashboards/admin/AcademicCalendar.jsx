/**
 * @component AcademicCalendar
 * @description Academic Calendar page for admin dashboard
 * @path /admin/academic-calendar
 *
 * This component provides:
 * - Interactive calendar view using UnifiedCalendar
 * - Event management and tracking
 * - Category-based filtering
 * - Quick actions and statistics
 * - API integration ready structure
 *
 * Data Flow:
 * - Static data from: src/data/adminData.js (ADMIN_DATA.academicCalendar)
 * - Components: src/components/dashboard/admin/AcademicCalendar/*
 * - API Ready: All handlers prepared for backend integration
 */

import React, { useState, useCallback } from "react";
import { ADMIN_DATA } from "../../../data/adminData.js";
import UnifiedCalendar from "../../../components/common/UnifiedCalendar";
import Header from "../../../components/dashboard/admin/AcademicCalendar/Header";
import CalendarStats from "../../../components/dashboard/admin/AcademicCalendar/CalendarStats";
import EventsList from "../../../components/dashboard/admin/AcademicCalendar/EventsList";
import QuickActions from "../../../components/dashboard/admin/AcademicCalendar/QuickActions";
import CategoryFilters from "../../../components/dashboard/admin/AcademicCalendar/CategoryFilters";
import EventModal from "../../../components/dashboard/admin/AcademicCalendar/EventModal";
import DateEventsViewer from "../../../components/dashboard/admin/AcademicCalendar/DateEventsViewer";

const AcademicCalendar = () => {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState(ADMIN_DATA.academicCalendar.events);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDate, setModalDate] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);
  const [isDateViewerOpen, setIsDateViewerOpen] = useState(false);
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);
  const [viewerDate, setViewerDate] = useState(null);

  // ============================================================================
  // DATA PREPARATION
  // ============================================================================
  const calendarData = ADMIN_DATA.academicCalendar;

  // Filter events based on selected category
  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => {
          const category = calendarData.categories.find(
            (cat) => cat.id === selectedCategory,
          );
          return category && event.category === category.name;
        });

  // Calculate dynamic stats
  const stats = {
    totalEvents: events.length,
    upcomingEvents: events.filter((e) => new Date(e.date) > new Date()).length,
    thisMonth: events.filter((e) => {
      const eventDate = new Date(e.date);
      const now = new Date();
      return (
        eventDate.getMonth() === now.getMonth() &&
        eventDate.getFullYear() === now.getFullYear()
      );
    }).length,
    completedEvents: events.filter((e) => e.status === "Completed").length,
  };

  // ============================================================================
  // EVENT HANDLERS (API Integration Points)
  // ============================================================================

  /**
   * Handle creating a new event
   * Opens modal for event creation
   */
  const handleCreateEvent = useCallback(() => {
    console.log("[API READY] Create new event");
    setEditingEvent(null);
    setModalDate(new Date());
    setIsModalOpen(true);
  }, []);

  /**
   * Handle event click
   * Opens modal with event details for editing
   */
  const handleEventClick = useCallback((event) => {
    console.log("[API READY] Event clicked:", event);
    setSelectedEvent(event);
    setEditingEvent(event);
    setModalDate(null);
    setIsModalOpen(true);
  }, []);

  /**
   * Handle date selection on calendar
   * Check if events exist for this date, show them first, then allow adding new
   */
  const handleDateSelect = useCallback(
    (date) => {
      console.log("[API READY] Date selected:", date);

      // Format date in local timezone (avoid toISOString which converts to UTC)
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const dateStr = `${year}-${month}-${day}`;

      const eventsForDate = events.filter((event) => {
        const eventDateStr = event.date;

        // Check if single day event matches
        if (eventDateStr === dateStr) {
          return true;
        }

        // Check if multi-day event includes this date
        if (event.isMultiDay && event.endDate) {
          const isInRange = dateStr >= eventDateStr && dateStr <= event.endDate;
          return isInRange;
        }
        return false;
      });

      if (eventsForDate.length > 0) {
        // Show existing events first
        setSelectedDateEvents(eventsForDate);
        setViewerDate(date);
        setIsDateViewerOpen(true);
      } else {
        // No events, directly open modal to create new
        setEditingEvent(null);
        setModalDate(date);
        setIsModalOpen(true);
      }
    },
    [events],
  );

  /**
   * Handle category filter change
   */
  const handleCategoryChange = useCallback((categoryId) => {
    console.log("[API READY] Category changed:", categoryId);
    setSelectedCategory(categoryId);
  }, []);

  /**
   * Handle saving event (create or update)
   * Updates local events array
   */
  const handleSaveEvent = useCallback(
    (eventData) => {
      console.log("[API READY] Save event:", eventData);

      if (editingEvent) {
        // Update existing event
        setEvents((prev) =>
          prev.map((e) => (e.id === eventData.id ? eventData : e)),
        );
        console.log("Event updated successfully");
      } else {
        // Add new event
        setEvents((prev) => [...prev, eventData]);
        console.log("Event created successfully");
      }

      setIsModalOpen(false);
      setEditingEvent(null);
      setModalDate(null);
    },
    [editingEvent],
  );

  /**
   * Handle closing modal
   */
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setEditingEvent(null);
    setModalDate(null);
    setSelectedEvent(null);
  }, []);

  /**
   * Handle closing date viewer
   */
  const handleCloseDateViewer = useCallback(() => {
    setIsDateViewerOpen(false);
    setSelectedDateEvents([]);
    setViewerDate(null);
  }, []);

  /**
   * Handle adding new event from date viewer
   */
  const handleAddEventFromViewer = useCallback(() => {
    setIsDateViewerOpen(false);
    setEditingEvent(null);
    setModalDate(viewerDate);
    setIsModalOpen(true);
  }, [viewerDate]);

  /**
   * Handle editing event from date viewer
   */
  const handleEditEventFromViewer = useCallback((event) => {
    setIsDateViewerOpen(false);
    setEditingEvent(event);
    setModalDate(null);
    setIsModalOpen(true);
  }, []);

  /**
   * Handle export calendar
   * TODO: GET /api/admin/calendar/export?format=pdf|excel
   */
  const handleExportCalendar = useCallback(() => {
    console.log("[API READY] Export calendar");
    // TODO: Call API to generate and download calendar export
    alert("Export Calendar feature - API integration pending");
  }, []);

  /**
   * Handle view reports
   * TODO: GET /api/admin/calendar/reports
   */
  const handleViewReports = useCallback(() => {
    console.log("[API READY] View reports");
    // TODO: Navigate to reports page or open reports modal
    alert("View Reports feature - API integration pending");
  }, []);

  /**
   * Handle manage categories
   * TODO: GET /api/admin/calendar/categories
   */
  const handleManageCategories = useCallback(() => {
    console.log("[API READY] Manage categories");
    // TODO: Open categories management modal
    alert("Manage Categories feature - API integration pending");
  }, []);

  // ============================================================================
  // RENDER
  // ============================================================================
  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      {/* Page Header */}
      <Header
        onCreateEvent={handleCreateEvent}
        totalEvents={stats.totalEvents}
      />

      {/* Statistics Cards */}
      <CalendarStats stats={stats} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Left Sidebar - Filters */}
        <div className="xl:col-span-1 space-y-6">
          <CategoryFilters
            categories={calendarData.categories}
            activeCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <QuickActions
            onExportCalendar={handleExportCalendar}
            onViewReports={handleViewReports}
            onManageCategories={handleManageCategories}
          />
        </div>

        {/* Main Calendar Section */}
        <div className="xl:col-span-3 space-y-6">
          {/* UnifiedCalendar Component */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <UnifiedCalendar
              events={(() => {
                // Transform events to include multi-day events across all their dates
                const expandedEvents = [];
                filteredEvents.forEach((event) => {
                  if (event.isMultiDay && event.endDate) {
                    // For multi-day events, create an entry for each date in the range
                    const startDate = new Date(event.date);
                    const endDate = new Date(event.endDate);
                    const currentDate = new Date(startDate);

                    while (currentDate <= endDate) {
                      expandedEvents.push({
                        ...event,
                        date: currentDate.toISOString().split("T")[0],
                        _isMultiDayInstance: true,
                        _originalStartDate: event.date,
                        _originalEndDate: event.endDate,
                      });
                      currentDate.setDate(currentDate.getDate() + 1);
                    }
                  } else {
                    expandedEvents.push(event);
                  }
                });
                return expandedEvents;
              })()}
              role="admin"
              onCreateEvent={handleCreateEvent}
              onDateSelect={handleDateSelect}
              hideSidebar={true}
              showAddButton={true}
              className="bg-transparent"
            />
          </div>

          {/* Upcoming Events List */}
          <EventsList events={filteredEvents} onEventClick={handleEventClick} />
        </div>
      </div>

      {/* Date Events Viewer - Shows existing events before allowing new event creation */}
      <DateEventsViewer
        isOpen={isDateViewerOpen}
        onClose={handleCloseDateViewer}
        selectedDate={viewerDate}
        events={selectedDateEvents}
        onAddEvent={handleAddEventFromViewer}
        onEditEvent={handleEditEventFromViewer}
      />

      {/* Event Creation/Edit Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveEvent}
        event={editingEvent}
        selectedDate={modalDate}
        categories={calendarData.categories}
      />

      {/* Development Info Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-500 rounded-xl text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              Development Mode
            </h3>
            <p className="text-sm text-blue-700 leading-relaxed mb-3">
              This page is currently using static data from{" "}
              <code className="px-2 py-0.5 bg-blue-100 rounded text-xs font-mono">
                src/data/adminData.js
              </code>
              . All event handlers are prepared for API integration. Open
              browser console to see API integration points.
            </p>
            <div className="text-xs text-blue-600 space-y-1">
              <p>
                📍 <strong>Data Source:</strong> ADMIN_DATA.academicCalendar
              </p>
              <p>
                📍 <strong>Components:</strong>{" "}
                src/components/dashboard/admin/AcademicCalendar/
              </p>
              <p>
                📍 <strong>API Endpoints Ready:</strong> Create, Read, Update,
                Delete events
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
