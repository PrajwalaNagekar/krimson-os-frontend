import React from "react";
import TemplateSelector from "./TemplateSelector";
import DataBindingSection from "./DataBindingSection";
import CertificatePreview from "./CertificatePreview";
import AuditAndBulkOptions from "./AuditAndBulkOptions";

const CertificatesTab = ({ data }) => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
        {/* Left: Template & Forms */}
        <div className="xl:col-span-4 space-y-8">
          <TemplateSelector templates={data.certificates.templates} />
          <DataBindingSection fields={data.certificates.dataBinding} />
        </div>

        {/* Center: Live Preview */}
        <div className="xl:col-span-8 flex flex-col gap-8">
          <CertificatePreview previewData={data.certificates.preview} />
          <AuditAndBulkOptions
            auditId={data.certificates.preview.authIdLarge}
            bulkCount={data.certificates.preview.bulkCount}
          />
        </div>
      </div>
    </div>
  );
};

export default CertificatesTab;
