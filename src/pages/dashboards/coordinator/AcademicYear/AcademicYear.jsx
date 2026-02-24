/**
 * @page AcademicYear (list/dashboard)
 * @description Screen A – Displays all academic years with status, Edit/View, and [+ New] navigation.
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import AcademicYearList from "../../../../components/dashboard/coordinator/AcademicYear/AcademicYearList";
import { ACADEMIC_YEARS_LIST } from "../../../../data/coordinatorData";

const AcademicYear = () => {
  const navigate = useNavigate();
  // TODO: Replace with API call — const { data: years } = useGetAcademicYearsQuery();
  const years = ACADEMIC_YEARS_LIST;

  return (
    <AcademicYearList
      years={years}
      onNew={() => navigate("/dashboard/coordinator/academic-year/create")}
      onEdit={(id) =>
        navigate(`/dashboard/coordinator/academic-year/edit/${id}`)
      }
      onView={(id) =>
        navigate(`/dashboard/coordinator/academic-year/view/${id}`)
      }
    />
  );
};

export default AcademicYear;
