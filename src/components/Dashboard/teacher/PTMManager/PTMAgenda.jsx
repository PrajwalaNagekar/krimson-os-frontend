import React, { useState } from "react";
import StudentSelector from "./StudentSelector";
import AgendaWorkspace from "./AgendaWorkspace";

const PTMAgenda = ({ slots, onShowToast }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleGenerateAI = () => {
    onShowToast(
      `High-impact talk track generated for ${selectedSlot.student}.`,
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in slide-in-from-right-8 duration-700">
      <StudentSelector
        slots={slots}
        selectedSlot={selectedSlot}
        onSelectSlot={setSelectedSlot}
      />
      <AgendaWorkspace
        selectedSlot={selectedSlot}
        onGenerateAI={handleGenerateAI}
      />
    </div>
  );
};

export default PTMAgenda;
