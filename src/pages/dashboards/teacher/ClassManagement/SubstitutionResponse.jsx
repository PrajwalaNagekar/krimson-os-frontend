import React, { useState } from "react";
import { TEACHER_DATA } from "../../../../data/teacherData";

import SubstitutionHeader from "../../../../components/dashboard/teacher/ClassManagement/SubstitutionResponse/SubstitutionHeader";
import ActionBanner from "../../../../components/dashboard/teacher/ClassManagement/SubstitutionResponse/ActionBanner";
import SubstitutionDetailsCard from "../../../../components/dashboard/teacher/ClassManagement/SubstitutionResponse/SubstitutionDetailsCard";
import ExtendedDetailsPanel from "../../../../components/dashboard/teacher/ClassManagement/SubstitutionResponse/ExtendedDetailsPanel";

/**
 * SubstitutionResponse — Dedicated response page
 *
 * Route: /teacher/classes/substitution-response
 * Breadcrumb: Class Management / Today's Class / Substitution Response
 *
 * API-ready:
 *   - Accept: POST /api/teacher/substitutions/:id/accept
 *   - Decline: POST /api/teacher/substitutions/:id/decline
 *   - Fetch: GET /api/teacher/substitutions/:id
 */
const SubstitutionResponse = () => {
  // Static data — replace with useEffect + API call
  const notification =
    TEACHER_DATA.classManagement.todayClasses.substitutionNotification;

  const [actionStatus, setActionStatus] = useState(null); // null | "accepted" | "declined"
  const [showDetails, setShowDetails] = useState(true);

  // TODO: API → POST /api/teacher/substitutions/:id/accept
  const handleAccept = () => {
    console.log(
      "API: POST /api/teacher/substitutions/accept",
      notification?.id,
    );
    setActionStatus("accepted");
  };

  // TODO: API → POST /api/teacher/substitutions/:id/decline
  const handleDecline = () => {
    console.log(
      "API: POST /api/teacher/substitutions/decline",
      notification?.id,
    );
    setActionStatus("declined");
  };

  return (
    <div className="space-y-6">
      <SubstitutionHeader />

      <ActionBanner actionStatus={actionStatus} notification={notification} />

      <SubstitutionDetailsCard
        notification={notification}
        actionStatus={actionStatus}
        handleAccept={handleAccept}
        handleDecline={handleDecline}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />

      <ExtendedDetailsPanel
        notification={notification}
        showDetails={showDetails}
      />
    </div>
  );
};

export default SubstitutionResponse;
