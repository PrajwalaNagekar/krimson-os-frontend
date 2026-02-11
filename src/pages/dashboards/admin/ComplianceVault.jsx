/**
 * @component ComplianceVault
 * @description Compliance & Documentation Vault - Regulatory document management
 */
import React, { useState } from "react";
import { Lock } from "lucide-react";
import { ADMIN_DATA } from "../../../data/adminData";
import ComplianceStats from "../../../components/dashboard/admin/ComplianceVault/ComplianceStats";
import ExpiryAlerts from "../../../components/dashboard/admin/ComplianceVault/ExpiryAlerts";
import CategoryFilter from "../../../components/dashboard/admin/ComplianceVault/CategoryFilter";
import VaultToolbar from "../../../components/dashboard/admin/ComplianceVault/VaultToolbar";
import DocumentRepository from "../../../components/dashboard/admin/ComplianceVault/DocumentRepository";

const ComplianceVault = () => {
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Data from ADMIN_DATA
  const { categories, documents } = ADMIN_DATA.compliance;

  // Expiring Documents Summary
  const expiringDocs = documents.filter(
    (doc) =>
      doc.daysUntilExpiry !== null &&
      doc.daysUntilExpiry > 0 &&
      doc.daysUntilExpiry <= 60,
  );
  const expiredDocs = documents.filter(
    (doc) => doc.daysUntilExpiry !== null && doc.daysUntilExpiry < 0,
  );

  // Statistics
  const stats = {
    totalDocuments: documents.length,
    currentDocuments: documents.filter((d) => d.status === "Current").length,
    expiringDocuments: expiringDocs.length,
    expiredDocuments: expiredDocs.length,
    totalStorage: "12.5 GB",
    lastBackup: "2 hours ago",
  };

  const filteredDocuments = documents.filter((doc) => {
    const matchesCategory =
      selectedCategory === "all" || doc.category === selectedCategory;
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  // Pagination Logic
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDocuments = filteredDocuments.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      {/* ========================================
          HEADER SECTION
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Regulatory Compliance
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                  <Lock size={12} className="text-green-300" />
                  Secure Vault
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Compliance & Documentation Vault
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Centralized repository for institutional documents,
                certifications, and regulatory compliance records.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ComplianceStats stats={stats} />

      <ExpiryAlerts expiringDocs={expiringDocs} expiredDocs={expiredDocs} />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        totalDocuments={documents.length}
      />

      <VaultToolbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <DocumentRepository
        documents={currentDocuments}
        viewMode={viewMode}
        filteredDocumentsCount={filteredDocuments.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        categories={categories}
      />
    </div>
  );
};

export default ComplianceVault;
