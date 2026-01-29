import React from 'react';
import TasksAndNotifications from '../../../components/common/TasksAndNotifications';
import { STUDENT_DATA } from '../../../data/studentData';

/**
 * Student Tasks & Notifications
 * Uses: src/pages/common/TasksAndNotifications.jsx
 * Screen 9: Notifications & To-Do Center
 */
const Tasks = () => {
  return (
    <TasksAndNotifications 
      role="student"
      tasks={[]} // Use internal mocks for now
      notifications={STUDENT_DATA.dashboard?.notifications || []}
    />
  );
};

export default Tasks;
