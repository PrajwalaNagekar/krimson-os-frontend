import React, { useState } from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import AssignmentsHeader from '../../../components/dashboard/student/AssignmentsCenter/AssignmentsHeader';
import AssignmentCard from '../../../components/dashboard/student/AssignmentsCenter/AssignmentCard';
import AssignmentHistoryModal from '../../../components/dashboard/student/AssignmentsCenter/AssignmentHistoryModal';
import AssignmentDetailModal from '../../../components/dashboard/student/AssignmentsCenter/AssignmentDetailModal';
import AssignmentSubmissionModal from '../../../components/dashboard/student/AssignmentsCenter/AssignmentSubmissionModal';
import AssignmentSubmissionViewModal from '../../../components/dashboard/student/AssignmentsCenter/AssignmentSubmissionViewModal';

const AssignmentsCenter = () => {
  // --- State Management ---
  const [tab, setTab] = useState('Pending'); // Current active tab
  const [scanningId, setScanningId] = useState(null); // ID of assignment being scanned
  const [scanResults, setScanResults] = useState({}); // Results of AI scan: { id: { score: 12, flagged: true } }
  const [expandedDecisions, setExpandedDecisions] = useState({}); // Toggles for "Why this decision?"
  const [selectedSubject, setSelectedSubject] = useState('All'); // Filter by subject
  const [showHistoryModal, setShowHistoryModal] = useState(false); // Toggle history modal
  const [selectedAssignment, setSelectedAssignment] = useState(null); // Assignment selected for details/history
  const [showDetailModal, setShowDetailModal] = useState(false); // Toggle detail modal
  const [showSubmissionModal, setShowSubmissionModal] = useState(false); // Toggle submission modal
  const [showSubmissionViewModal, setShowSubmissionViewModal] = useState(false); // Toggle view submission modal

  // --- Data Retrieval ---
  const { assignments, masteryData, assignmentHistory } = STUDENT_DATA;

  // --- Helper Functions (Passed as props to avoid utils.js) ---
  
  // 1. Determine color based on days remaining
  const getDeadlineColor = (days) => {
      if (days <= 1) return 'text-red-500 bg-red-50 border-red-100';
      if (days <= 3) return 'text-orange-500 bg-orange-50 border-orange-100';
      return 'text-green-600 bg-green-50 border-green-100';
  };

  // 2. Determine color based on mastery score
  const getMasteryColor = (score) => {
    if (score >= 90) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (score >= 75) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 60) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (score >= 40) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  // 3. Get badge style based on mastery status string
  const getMasteryBadge = (status) => {
    const badges = {
      'Mastered': 'bg-emerald-500 text-white',
      'Strong Pass': 'bg-green-500 text-white',
      'Pass': 'bg-blue-500 text-white',
      'Weak': 'bg-orange-500 text-white',
      'Not Mastered': 'bg-red-500 text-white'
    };
    return badges[status] || 'bg-gray-500 text-white';
  };

  // 4. Get color for concept tags based on strength
  const getConceptTagColor = (strength) => {
    const colors = {
      'strong': 'bg-green-100 text-green-700 border-green-300',
      'partial': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'weak': 'bg-red-100 text-red-700 border-red-300'
    };
    return colors[strength] || 'bg-gray-100 text-gray-700 border-gray-300';
  };


  // --- Event Handlers ---

  // Handle mock AI scanning process
  const handleScan = (id) => {
      setScanningId(id);
      setTimeout(() => {
          setScanningId(null);
          setScanResults(prev => ({
              ...prev,
              [id]: { score: Math.floor(Math.random() * 15), flagged: true }
          }));
      }, 2000);
  };

  // Toggle explanation text visibility
  const toggleDecisionExplanation = (id) => {
    setExpandedDecisions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Open assignment detail modal
  const handleDetailsClick = (assignment) => {
    setSelectedAssignment(assignment);
    setShowDetailModal(true);
  };

  // Open assignment submission modal
  const handleUploadClick = (assignment) => {
    setSelectedAssignment(assignment);
    setShowSubmissionModal(true);
  };

  // Open view submission modal (for submitted assignments)
  const handleViewSubmissionClick = (assignment) => {
    setSelectedAssignment(assignment);
    setShowSubmissionViewModal(true);
  };

  // Bundle helpers to pass down easily
  const helpers = {
    getDeadlineColor,
    getMasteryColor,
    getMasteryBadge,
    getConceptTagColor,
    onViewSubmissionClick: handleViewSubmissionClick
  };

  // --- Filter Logic ---
  
  // Get list of unique subjects for the filter dropdown
  const uniqueSubjects = ['All', ...new Set(assignments.map(a => a.subject))];

  // Filter assignments based on active tab and selected subject
  const displayedAssignments = assignments.filter(a => {
      // 1. Status Filter (Pending tab includes 'Pending' and 'In Progress')
      const statusMatch = tab === 'Pending' 
        ? (a.status === 'Pending' || a.status === 'In Progress')
        : a.status === tab;
      
      // 2. Subject Filter
      const subjectMatch = selectedSubject === 'All' || a.subject === selectedSubject;
      
      return statusMatch && subjectMatch;
  });

  return (
    <div className="space-y-8">
      {/* 
        Header Section:
        Contains Title, Description, Subject Filter, and Tab Navigation 
      */}
      <AssignmentsHeader 
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        uniqueSubjects={uniqueSubjects}
        tab={tab}
        setTab={setTab}
      />

      {/* 
        Assignments Grid:
        Renders a card for each filtered assignment.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
         {displayedAssignments.map(assign => (
            <AssignmentCard 
              key={assign.id}
              assign={assign}
              tab={tab}
              masteryData={masteryData[assign.id]} // Pass specific mastery data
              scanningId={scanningId}
              scanResults={scanResults}
              handleScan={handleScan}
              expandedDecisions={expandedDecisions}
              toggleDecisionExplanation={toggleDecisionExplanation}
              setSelectedAssignment={setSelectedAssignment}
              setShowHistoryModal={setShowHistoryModal}
              helpers={helpers} // Pass helper functions
              onDetailsClick={handleDetailsClick} // Modal handler
              onUploadClick={handleUploadClick} // Modal handler
            />
         ))}
      </div>

       {/* 
         Reattempt History Modal:
         Displays past attempts when requested 
       */}
       <AssignmentHistoryModal 
         show={showHistoryModal}
         onClose={() => setShowHistoryModal(false)}
         selectedAssignment={selectedAssignment}
         assignmentHistory={assignmentHistory}
         helpers={helpers}
       />

       {/* 
         Assignment Detail Modal:
         Shows task description, rubric, and submission instructions 
       */}
       <AssignmentDetailModal 
         show={showDetailModal}
         onClose={() => setShowDetailModal(false)}
         assignment={selectedAssignment}
       />

       {/* 
         Assignment Submission Modal:
         Allows file upload, text submission, and audio recording 
       */}
       <AssignmentSubmissionModal 
         show={showSubmissionModal}
         onClose={() => setShowSubmissionModal(false)}
         assignment={selectedAssignment}
       />

       {/* 
         Assignment Submission View Modal:
         Displays details of a submitted assignment 
       */}
       <AssignmentSubmissionViewModal 
         show={showSubmissionViewModal}
         onClose={() => setShowSubmissionViewModal(false)}
         assignment={selectedAssignment}
       />
    </div>
  );
};

export default AssignmentsCenter;
