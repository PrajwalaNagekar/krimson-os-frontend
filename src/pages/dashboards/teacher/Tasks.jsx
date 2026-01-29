import React from 'react';
import TasksAndNotifications from '../../../components/common/TasksAndNotifications';
import { TEACHER_DATA } from '../../../data/teacherData';

/**
 * Teacher Tasks & Notifications
 * Uses: src/pages/common/TasksAndNotifications.jsx
 * Screen 9: Notifications & To-Do Center
 */
const Tasks = () => {
  // Assuming TEACHER_DATA might have tasks in future, using mock for now via component default or passing specific data
  // Passing empty arrays will trigger internal mocks in common component for visual demo
  return (
    <TasksAndNotifications 
      role="teacher"
      tasks={[]} 
      notifications={[]}
    />
  );
};

export default Tasks;
