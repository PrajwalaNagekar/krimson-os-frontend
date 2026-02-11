/**
 * @component Helpdesk
 * @description Internal helpdesk & ticket resolution system
 * @features Ticket categorization, SLA tracking, escalation management, comprehensive dashboard
 */
import React, { useState, useMemo } from "react";
import { ADMIN_DATA } from "../../../data/adminData";
import HelpdeskHeader from "../../../components/dashboard/admin/Helpdesk/HelpdeskHeader";
import HelpdeskStats from "../../../components/dashboard/admin/Helpdesk/HelpdeskStats";
import HelpdeskFilters from "../../../components/dashboard/admin/Helpdesk/HelpdeskFilters";
import HelpdeskToolbar from "../../../components/dashboard/admin/Helpdesk/HelpdeskToolbar";
import TicketsTable from "../../../components/dashboard/admin/Helpdesk/TicketsTable";
import PaginationControls from "../../../components/dashboard/admin/Helpdesk/PaginationControls";
import TicketDetailsModal from "../../../components/dashboard/admin/Helpdesk/TicketDetailsModal";

const Helpdesk = () => {
  const { tickets, helpdeskConfig } = ADMIN_DATA;
  const { itemsPerPage } = helpdeskConfig;

  const [activeTab, setActiveTab] = useState("all"); // all, open, closed
  const [categoryFilter, setCategoryFilter] = useState("All"); // All, Technical, Academic, HR, Finance
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // ==================================================
  // COMPUTED STATISTICS
  // ==================================================
  const stats = useMemo(() => {
    const openTickets = tickets.filter((t) => t.status !== "Resolved");
    const closedTickets = tickets.filter((t) => t.status === "Resolved");
    const criticalOpen = openTickets.filter(
      (t) => t.priority === "Critical",
    ).length;
    const highOpen = openTickets.filter((t) => t.priority === "High").length;
    const mediumOpen = openTickets.filter(
      (t) => t.priority === "Medium",
    ).length;
    const lowOpen = openTickets.filter((t) => t.priority === "Low").length;

    // Average resolution time
    const resolvedWithTime = closedTickets.filter((t) => t.resolutionTime);
    const avgResolution =
      resolvedWithTime.length > 0
        ? (
            resolvedWithTime.reduce((sum, t) => sum + t.resolutionTime, 0) /
            resolvedWithTime.length
          ).toFixed(1)
        : 0;

    // SLA compliance (tickets resolved within 48 hours)
    const slaCompliant = closedTickets.filter(
      (t) => t.resolutionTime && t.resolutionTime <= 48,
    ).length;
    const slaRate =
      closedTickets.length > 0
        ? Math.round((slaCompliant / closedTickets.length) * 100)
        : 0;

    // Category counts
    const technical = tickets.filter((t) => t.category === "Technical").length;
    const academic = tickets.filter((t) => t.category === "Academic").length;
    const hr = tickets.filter((t) => t.category === "HR").length;
    const finance = tickets.filter((t) => t.category === "Finance").length;

    return {
      total: tickets.length,
      open: openTickets.length,
      closed: closedTickets.length,
      criticalOpen,
      highOpen,
      mediumOpen,
      lowOpen,
      avgResolution,
      slaRate,
      technical,
      academic,
      hr,
      finance,
    };
  }, [tickets]);

  // ==================================================
  // FILTERED TICKETS
  // ==================================================
  const filteredTickets = useMemo(() => {
    let filtered = tickets;

    // Filter by tab
    if (activeTab === "open") {
      filtered = filtered.filter((t) => t.status !== "Resolved");
    } else if (activeTab === "closed") {
      filtered = filtered.filter((t) => t.status === "Resolved");
    }

    // Filter by category
    if (categoryFilter !== "All") {
      filtered = filtered.filter((t) => t.category === categoryFilter);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.id.toLowerCase().includes(query) ||
          t.subject.toLowerCase().includes(query) ||
          t.from.toLowerCase().includes(query),
      );
    }

    return filtered;
  }, [tickets, activeTab, categoryFilter, searchQuery]);

  // ==================================================
  // PAGINATION
  // ==================================================
  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);
  const paginatedTickets = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTickets.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTickets, currentPage, itemsPerPage]);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [activeTab, categoryFilter, searchQuery]);

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      <HelpdeskHeader stats={stats} />

      <HelpdeskStats stats={stats} />

      <HelpdeskFilters
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        stats={stats}
      />

      <HelpdeskToolbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        stats={stats}
      />

      <TicketsTable
        tickets={paginatedTickets}
        setSelectedTicket={setSelectedTicket}
      />

      {filteredTickets.length > 0 && (
        <PaginationControls
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          totalItems={filteredTickets.length}
          itemsPerPage={itemsPerPage}
        />
      )}

      {selectedTicket && (
        <TicketDetailsModal
          selectedTicket={selectedTicket}
          setSelectedTicket={setSelectedTicket}
        />
      )}
    </div>
  );
};

export default Helpdesk;
