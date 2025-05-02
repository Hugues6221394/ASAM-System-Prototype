import {
  Bell,
  BookOpen,
  Calendar,
  CheckSquare,
  Clock,
  FileText,
  LogOut,
  MessageSquare,
  PieChart,
  Settings,
  Shield,
  User,
  Users
} from 'lucide-react';
import { useState } from 'react';
import './App.css';
import './index.css';

// Main Application Component
export default function AssignmentManagementSystem() {
  const [activeView, setActiveView] = useState('login');
  const [activeSidebar, setActiveSidebar] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const aucaColors = {
    primary: '#003366',
    secondary: '#E6A70D',
    accent: '#8B0000',
    light: '#F5F5F5',
    dark: '#222222'
  };

  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
    setActiveSidebar(role === 'admin' ? 'admin' : role === 'instructor' ? 'instructor' : 'student');
    setActiveView(role === 'admin' ? 'adminDashboard' : 'dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setActiveSidebar(null);
    setActiveView('login');
  };

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const handleUserRoleChange = (role) => {
    setActiveSidebar(role);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
          <img 
  src="/aucalogo.png"  // Now looks in public folder
  alt="AUCA Logo" 
  className="mx-auto h-16 w-auto"
/>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              AUCA Assignment Management System
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please sign in to access your account
            </p>
          </div>
          
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 gap-4">
            <button
  onClick={() => handleLogin('student')}
  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  style={{
    backgroundColor: '#003366', // AUCA Dark Blue
    color: 'white',
    borderColor: 'transparent',
  }}
>
  <User 
    className="mr-2 h-5 w-5" 
    style={{
      color: 'white', // Icon color
      strokeWidth: '2.5' // Optional: adjust icon stroke thickness
    }}
  />
  Student Login
</button>
              
<button
  onClick={() => handleLogin('instructor')}
  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  style={{
    backgroundColor: '#003366', // AUCA Dark Blue
    color: 'white',
    borderColor: 'transparent',
  }}
>
  <User 
    className="mr-2 h-5 w-5" 
    style={{
      color: 'white', // Icon color
      strokeWidth: '2.5' // Optional: adjust icon stroke thickness
    }}
  />
  Instructor Login
</button>
              
<button
  onClick={() => handleLogin('admin')}
  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  style={{
    backgroundColor: '#003366', // AUCA Dark Blue
    color: 'white',
    borderColor: 'transparent',
  }}
>
  <User 
    className="mr-2 h-5 w-5" 
    style={{
      color: 'white', // Icon color
      strokeWidth: '2.5' // Optional: adjust icon stroke thickness
    }}
  />
  Admin Login
</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64" style={{ backgroundColor: aucaColors.primary, color: 'white' }}>
        <div className="p-6">
          <div className="flex items-center">
          <img 
  src="/auca.png"  // Now looks in public folder
  alt="AUCA Logo" 
  className="mx-auto h-16 w-auto"
/>
            <h1 className="text-xl font-bold">AUCA Assignment Management System</h1>
          </div>
          
          {userRole === 'student' && (
            <div className="mt-4 flex gap-2">
              <button 
                className={`px-3 py-1 text-xs rounded-full transition-colors ${activeSidebar === 'student' ? 'bg-blue-800' : 'bg-blue-900 hover:bg-blue-800'}`}
                onClick={() => handleUserRoleChange('student')}
              >
                Student
              </button>
              <button 
                className={`px-3 py-1 text-xs rounded-full transition-colors ${activeSidebar === 'group' ? 'bg-blue-800' : 'bg-blue-900 hover:bg-blue-800'}`}
                onClick={() => handleUserRoleChange('group')}
              >
                Group
              </button>
            </div>
          )}
          
          {userRole === 'instructor' && (
            <div className="mt-4">
              <span className="px-3 py-1 text-xs rounded-full bg-yellow-600">
                Instructor
              </span>
            </div>
          )}
          
          {userRole === 'admin' && (
            <div className="mt-4">
              <span className="px-3 py-1 text-xs rounded-full bg-red-600">
                Administrator
              </span>
            </div>
          )}
        </div>
        
        <div className="mt-6 flex-1 overflow-y-auto">
          {/* Student Sidebar */}
          {activeSidebar === 'student' && (
            <nav>
              <SidebarItem 
                icon={<PieChart size={20} />} 
                label="Dashboard" 
                active={activeView === 'dashboard'} 
                onClick={() => handleViewChange('dashboard')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<FileText size={20} />} 
                label="Assignments" 
                active={activeView === 'assignments'} 
                onClick={() => handleViewChange('assignments')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<CheckSquare size={20} />} 
                label="Tasks" 
                active={activeView === 'tasks'} 
                onClick={() => handleViewChange('tasks')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<Calendar size={20} />} 
                label="Schedule" 
                active={activeView === 'schedule'} 
                onClick={() => handleViewChange('schedule')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<Bell size={20} />} 
                label="Notifications" 
                active={activeView === 'notifications'} 
                onClick={() => handleViewChange('notifications')} 
                color={aucaColors.primary}
              />
            </nav>
          )}
          
          {/* Group Sidebar */}
          {activeSidebar === 'group' && (
            <nav>
              <SidebarItem 
                icon={<Users size={20} />} 
                label="My Groups" 
                active={activeView === 'groups'} 
                onClick={() => handleViewChange('groups')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<FileText size={20} />} 
                label="Group Projects" 
                active={activeView === 'groupProjects'} 
                onClick={() => handleViewChange('groupProjects')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<MessageSquare size={20} />} 
                label="Discussions" 
                active={activeView === 'discussions'} 
                onClick={() => handleViewChange('discussions')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<Calendar size={20} />} 
                label="Team Schedule" 
                active={activeView === 'teamSchedule'} 
                onClick={() => handleViewChange('teamSchedule')} 
                color={aucaColors.primary}
              />
            </nav>
          )}
          
          {/* Instructor Sidebar */}
          {activeSidebar === 'instructor' && (
            <nav>
              <SidebarItem 
                icon={<PieChart size={20} />} 
                label="Dashboard" 
                active={activeView === 'instructorDashboard'} 
                onClick={() => handleViewChange('instructorDashboard')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<FileText size={20} />} 
                label="Assignments" 
                active={activeView === 'manageAssignments'} 
                onClick={() => handleViewChange('manageAssignments')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<CheckSquare size={20} />} 
                label="Grading" 
                active={activeView === 'grading'} 
                onClick={() => handleViewChange('grading')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<Users size={20} />} 
                label="Students" 
                active={activeView === 'students'} 
                onClick={() => handleViewChange('students')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<Settings size={20} />} 
                label="Course Settings" 
                active={activeView === 'courseSettings'} 
                onClick={() => handleViewChange('courseSettings')} 
                color={aucaColors.primary}
              />
            </nav>
          )}
          
          {/* Admin Sidebar */}
          {activeSidebar === 'admin' && (
            <nav>
              <SidebarItem 
                icon={<PieChart size={20} />} 
                label="Admin Dashboard" 
                active={activeView === 'adminDashboard'} 
                onClick={() => handleViewChange('adminDashboard')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<Users size={20} />} 
                label="User Management" 
                active={activeView === 'userManagement'} 
                onClick={() => handleViewChange('userManagement')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<BookOpen size={20} />} 
                label="Course Management" 
                active={activeView === 'courseManagement'} 
                onClick={() => handleViewChange('courseManagement')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<Shield size={20} />} 
                label="System Settings" 
                active={activeView === 'systemSettings'} 
                onClick={() => handleViewChange('systemSettings')} 
                color={aucaColors.primary}
              />
              <SidebarItem 
                icon={<FileText size={20} />} 
                label="Reports" 
                active={activeView === 'reports'} 
                onClick={() => handleViewChange('reports')} 
                color={aucaColors.primary}
              />
            </nav>
          )}
        </div>
        
        <div className="p-4 border-t border-blue-900">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
              <span className="font-bold text-white">
                {userRole === 'admin' ? 'A' : userRole === 'instructor' ? 'I' : 'S'}
              </span>
            </div>
            <div className="ml-3">
              <p className="font-medium">
                {userRole === 'admin' ? 'Administrator' : 
                 userRole === 'instructor' ? 'Instructor' : 'Student'} User
              </p>
              <p className="text-xs text-blue-300">
                {userRole === 'admin' ? 'System Admin' : 
                 userRole === 'instructor' ? 'Faculty' : 'Student'}
              </p>
            </div>
            <button 
              className="ml-auto p-1 rounded hover:bg-blue-700 transition-colors"
              onClick={handleLogout}
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {activeView === 'dashboard' && 'Dashboard'}
              {activeView === 'assignments' && 'My Assignments'}
              {activeView === 'tasks' && 'Task Management'}
              {activeView === 'schedule' && 'Schedule'}
              {activeView === 'notifications' && 'Notifications'}
              {activeView === 'groups' && 'My Groups'}
              {activeView === 'groupProjects' && 'Group Projects'}
              {activeView === 'discussions' && 'Group Discussions'}
              {activeView === 'teamSchedule' && 'Team Schedule'}
              {activeView === 'instructorDashboard' && 'Instructor Dashboard'}
              {activeView === 'manageAssignments' && 'Manage Assignments'}
              {activeView === 'grading' && 'Grading Center'}
              {activeView === 'students' && 'Student Management'}
              {activeView === 'courseSettings' && 'Course Settings'}
              {activeView === 'adminDashboard' && 'Admin Dashboard'}
              {activeView === 'userManagement' && 'User Management'}
              {activeView === 'courseManagement' && 'Course Management'}
              {activeView === 'systemSettings' && 'System Settings'}
              {activeView === 'reports' && 'System Reports'}
            </h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900">
                <Bell size={20} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </header>
        
        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {/* Student Views */}
          {activeView === 'dashboard' && <StudentDashboard colors={aucaColors} />}
          {activeView === 'assignments' && <AssignmentsView colors={aucaColors} />}
          {activeView === 'tasks' && <TasksView colors={aucaColors} />}
          {activeView === 'schedule' && <ScheduleView colors={aucaColors} />}
          {activeView === 'notifications' && <NotificationsView colors={aucaColors} />}
          {activeView === 'groups' && <GroupsView colors={aucaColors} />}
          {activeView === 'groupProjects' && <GroupProjectsView colors={aucaColors} />}
          {activeView === 'discussions' && <DiscussionsView colors={aucaColors} />}
          {activeView === 'teamSchedule' && <TeamScheduleView colors={aucaColors} />}
          
          {/* Instructor Views */}
          {activeView === 'instructorDashboard' && <InstructorDashboard colors={aucaColors} />}
          {activeView === 'manageAssignments' && <ManageAssignmentsView colors={aucaColors} />}
          {activeView === 'grading' && <GradingView colors={aucaColors} />}
          {activeView === 'students' && <StudentsView colors={aucaColors} />}
          {activeView === 'courseSettings' && <CourseSettingsView colors={aucaColors} />}
          
          {/* Admin Views */}
          {activeView === 'adminDashboard' && <AdminDashboard colors={aucaColors} />}
          {activeView === 'userManagement' && <UserManagementView colors={aucaColors} />}
          {activeView === 'courseManagement' && <CourseManagementView colors={aucaColors} />}
          {activeView === 'systemSettings' && <SystemSettingsView colors={aucaColors} />}
          {activeView === 'reports' && <ReportsView colors={aucaColors} />}
        </main>
      </div>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({ icon, label, active, onClick, color }) {
  return (
    <button 
      className={`flex items-center w-full px-6 py-3 text-left transition-colors ${active ? 'bg-blue-900 text-white' : 'text-blue-200 hover:bg-blue-700'}`}
      onClick={onClick}
    >
      <span className="mr-3">{icon}</span>
      <span className="text-sm">{label}</span>
    </button>
  );
}

// Student Dashboard Component
function StudentDashboard({ colors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Student Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard 
          title="Active Assignments" 
          value="5" 
          icon={<FileText size={24} />} 
          color={colors.primary}
        />
        <DashboardCard 
          title="Upcoming Deadlines" 
          value="3" 
          icon={<Calendar size={24} />} 
          color={colors.secondary}
        />
        <DashboardCard 
          title="Average Grade" 
          value="85%" 
          icon={<CheckSquare size={24} />} 
          color={colors.accent}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Upcoming Deadlines</h3>
          <div className="space-y-4">
            <DeadlineItem 
              title="Software Engineering Project" 
              course="CS401" 
              dueDate="May 15, 2023" 
              progress={65}
            />
            <DeadlineItem 
              title="Database Design Assignment" 
              course="CS302" 
              dueDate="May 20, 2023" 
              progress={30}
            />
            <DeadlineItem 
              title="Algorithm Analysis Report" 
              course="CS205" 
              dueDate="May 25, 2023" 
              progress={10}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Activity</h3>
          <div className="space-y-4">
            <ActivityItem 
              title="Assignment submitted" 
              description="Web Development Project - CS401" 
              time="2 hours ago" 
            />
            <ActivityItem 
              title="Grade received" 
              description="Database Quiz - 92%" 
              time="1 day ago" 
            />
            <ActivityItem 
              title="New assignment posted" 
              description="Algorithm Analysis Report - CS205" 
              time="2 days ago" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Assignments View Component
function AssignmentsView({ colors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>My Assignments</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <AssignmentRow 
                title="Software Engineering Project" 
                course="CS401" 
                dueDate="May 15, 2023" 
                status="In Progress" 
                statusColor="bg-yellow-100 text-yellow-800"
              />
              <AssignmentRow 
                title="Database Design Assignment" 
                course="CS302" 
                dueDate="May 20, 2023" 
                status="Not Started" 
                statusColor="bg-gray-100 text-gray-800"
              />
              <AssignmentRow 
                title="Algorithm Analysis Report" 
                course="CS205" 
                dueDate="May 25, 2023" 
                status="Not Started" 
                statusColor="bg-gray-100 text-gray-800"
              />
              <AssignmentRow 
                title="Web Development Project" 
                course="CS401" 
                dueDate="May 10, 2023" 
                status="Submitted" 
                statusColor="bg-green-100 text-green-800"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Tasks View Component
function TasksView({ colors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Task Management</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TaskColumn title="To Do" count={3} color="bg-gray-50">
          <TaskCard 
            title="Research for SE Project" 
            assignment="Software Engineering Project" 
            dueDate="May 12, 2023" 
            priority="High"
          />
          <TaskCard 
            title="Create ER Diagram" 
            assignment="Database Design Assignment" 
            dueDate="May 15, 2023" 
            priority="Medium"
          />
          <TaskCard 
            title="Read Chapter 5" 
            assignment="Algorithm Analysis" 
            dueDate="May 18, 2023" 
            priority="Low"
          />
        </TaskColumn>
        
        <TaskColumn title="In Progress" count={2} color="bg-blue-50">
          <TaskCard 
            title="Write Project Proposal" 
            assignment="Software Engineering Project" 
            dueDate="May 10, 2023" 
            priority="High"
          />
          <TaskCard 
            title="Normalize Database" 
            assignment="Database Design Assignment" 
            dueDate="May 15, 2023" 
            priority="Medium"
          />
        </TaskColumn>
        
        <TaskColumn title="Completed" count={1} color="bg-green-50">
          <TaskCard 
            title="Submit Web Project" 
            assignment="Web Development Project" 
            dueDate="May 5, 2023" 
            priority="High"
          />
        </TaskColumn>
      </div>
    </div>
  );
}

// Schedule View Component
function ScheduleView({ colors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Schedule</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Today's Schedule</h3>
          <div className="space-y-3">
            <EventItem 
              title="Software Engineering Lecture" 
              time="9:00 AM - 10:30 AM" 
              location="Room 101, Main Building"
            />
            <EventItem 
              title="Database Systems Lab" 
              time="2:00 PM - 4:00 PM" 
              location="Computer Lab 3"
            />
            <EventItem 
              title="Group Project Meeting" 
              time="5:00 PM - 6:00 PM" 
              location="Library Study Room"
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Upcoming Events</h3>
          <div className="space-y-3">
            <EventItem 
              title="Midterm Exam: Algorithm Analysis" 
              time="May 12, 9:00 AM" 
              location="Room 205, Main Building"
            />
            <EventItem 
              title="Project Submission Deadline" 
              time="May 15, 11:59 PM" 
              location="Online"
            />
            <EventItem 
              title="Final Exam: Database Systems" 
              time="June 5, 9:00 AM" 
              location="Room 101, Main Building"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Notifications View Component
function NotificationsView({ colors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Notifications</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="divide-y divide-gray-100">
          <NotificationItem 
            title="New Assignment Posted" 
            description="Algorithm Analysis Report has been posted. Due May 25." 
            time="2 hours ago" 
            unread={true}
          />
          <NotificationItem 
            title="Grade Received" 
            description="Your Web Development Project has been graded: 92%" 
            time="1 day ago" 
            unread={false}
          />
          <NotificationItem 
            title="Course Announcement" 
            description="Next week's lecture has been moved to Room 205" 
            time="2 days ago" 
            unread={false}
          />
          <NotificationItem 
            title="Group Project Update" 
            description="Your team member John has submitted his part of the project" 
            time="3 days ago" 
            unread={false}
          />
        </div>
      </div>
    </div>
  );
}

// Groups View Component
function GroupsView({ colors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>My Groups</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GroupCard 
          name="SE Project Group" 
          course="CS401 - Software Engineering" 
          members={4} 
          projects={1} 
          active={true}
        />
        <GroupCard 
          name="Database Team" 
          course="CS302 - Database Systems" 
          members={3} 
          projects={2} 
          active={true}
        />
        <GroupCard 
          name="Algorithm Study Group" 
          course="CS205 - Algorithm Analysis" 
          members={5} 
          projects={0} 
          active={false}
        />
      </div>
    </div>
  );
}

// Group Projects View Component
function GroupProjectsView({ colors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Group Projects</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Group</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <ProjectRow 
                title="Software Engineering Project" 
                group="SE Project Group" 
                dueDate="May 15, 2023" 
                progress={65}
              />
              <ProjectRow 
                title="Database Design Project" 
                group="Database Team" 
                dueDate="May 20, 2023" 
                progress={30}
              />
              <ProjectRow 
                title="Algorithm Analysis Report" 
                group="Algorithm Study Group" 
                dueDate="May 25, 2023" 
                progress={10}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Discussions View Component
function DiscussionsView({ colors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Group Discussions</h2>
      
      <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
        <DiscussionItem 
          title="Project Requirements Discussion" 
          group="SE Project Group" 
          lastPost="Today, 10:30 AM" 
          replies={12}
        />
        <DiscussionItem 
          title="Database Schema Review" 
          group="Database Team" 
          lastPost="Yesterday, 4:15 PM" 
          replies={8}
        />
        <DiscussionItem 
          title="Algorithm Selection" 
          group="Algorithm Study Group" 
          lastPost="May 5, 2023" 
          replies={5}
        />
        <DiscussionItem 
          title="Meeting Schedule" 
          group="SE Project Group" 
          lastPost="May 3, 2023" 
          replies={3}
        />
      </div>
    </div>
  );
}

// Team Schedule View Component
function TeamScheduleView({ colors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Team Schedule</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Upcoming Meetings</h3>
          <div className="space-y-3">
            <EventItem 
              title="Project Status Update" 
              time="Today, 5:00 PM - 6:00 PM" 
              location="Library Study Room"
            />
            <EventItem 
              title="Code Review Session" 
              time="May 12, 4:00 PM - 5:30 PM" 
              location="Computer Lab 3"
            />
            <EventItem 
              title="Final Presentation Rehearsal" 
              time="May 14, 10:00 AM - 12:00 PM" 
              location="Room 101, Main Building"
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Team Members</h3>
          <div className="space-y-4">
            <TeamMember 
              name="John Doe" 
              role="Frontend Developer"
            />
            <TeamMember 
              name="Jane Smith" 
              role="Backend Developer"
            />
            <TeamMember 
              name="Mike Johnson" 
              role="Database Specialist"
            />
            <TeamMember 
              name="Sarah Williams" 
              role="Project Manager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Instructor Dashboard Component
function InstructorDashboard({ colors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Instructor Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard 
          title="Active Courses" 
          value="3" 
          icon={<BookOpen size={24} />} 
          color={colors.primary}
        />
        <DashboardCard 
          title="Assignments to Grade" 
          value="24" 
          icon={<CheckSquare size={24} />} 
          color={colors.secondary}
        />
        <DashboardCard 
          title="Students" 
          value="125" 
          icon={<Users size={24} />} 
          color={colors.accent}
        />
        <DashboardCard 
          title="Unread Messages" 
          value="7" 
          icon={<MessageSquare size={24} />} 
          color="#6B7280"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Upcoming Deadlines</h3>
          <div className="space-y-4">
            <InstructorDeadlineItem 
              title="Software Engineering Project" 
              dueDate="May 15, 2023" 
              submissions={32} 
              totalStudents={45}
            />
            <InstructorDeadlineItem 
              title="Database Design Assignment" 
              dueDate="May 20, 2023" 
              submissions={15} 
              totalStudents={45}
            />
            <InstructorDeadlineItem 
              title="Algorithm Analysis Report" 
              dueDate="May 25, 2023" 
              submissions={5} 
              totalStudents={45}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <QuickActionCard 
              title="Create Assignment" 
              description="Add new assignment for your course" 
              icon={<FileText size={20} />}
              color={colors.primary}
            />
            <QuickActionCard 
              title="Grade Submissions" 
              description="Review and grade student work" 
              icon={<CheckSquare size={20} />}
              color={colors.secondary}
            />
            <QuickActionCard 
              title="Send Announcement" 
              description="Post announcement to students" 
              icon={<Bell size={20} />}
              color={colors.accent}
            />
            <QuickActionCard 
              title="View Reports" 
              description="Generate course reports" 
              icon={<PieChart size={20} />}
              color="#6B7280"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Manage Assignments View Component
function ManageAssignmentsView({ colors }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Manage Assignments</h2>
        <button className="px-4 py-2 text-white rounded-md" style={{ backgroundColor: colors.primary }}>
          + Create Assignment
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submissions</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <InstructorAssignmentRow 
                title="Software Engineering Project" 
                course="CS401" 
                dueDate="May 15, 2023" 
                submissions={32} 
                totalStudents={45}
              />
              <InstructorAssignmentRow 
                title="Database Design Assignment" 
                course="CS302" 
                dueDate="May 20, 2023" 
                submissions={15} 
                totalStudents={38}
              />
              <InstructorAssignmentRow 
                title="Algorithm Analysis Report" 
                course="CS205" 
                dueDate="May 25, 2023" 
                submissions={5} 
                totalStudents={42}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Grading View Component
function GradingView({ colors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Grading Center</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Submissions to Grade</h3>
        <div className="space-y-4">
          <SubmissionItem 
            assignment="Software Engineering Project" 
            course="CS401" 
            students={32} 
            dueDate="May 15, 2023"
          />
          <SubmissionItem 
            assignment="Database Design Assignment" 
            course="CS302" 
            students={15} 
            dueDate="May 20, 2023"
          />
          <SubmissionItem 
            assignment="Algorithm Analysis Report" 
            course="CS205" 
            students={5} 
            dueDate="May 25, 2023"
          />
        </div>
      </div>
    </div>
  );
}

// Students View Component
function StudentsView({ colors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Student Management</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courses</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <StudentRow 
                name="Keza Leila " 
                id="26260" 
                email="keza@student.auca.ac.rw" 
                courses={4}
              />
              <StudentRow 
                name="Freedauce" 
                id="23456789" 
                email="free@student.auca.ac.rw" 
                courses={3}
              />
              <StudentRow 
                name="Divin Ngenzi" 
                id="34567890" 
                email="Divin@student.auca.ac.rw" 
                courses={5}
              />
              <StudentRow 
                name="Iris Ghislaine" 
                id="45678901" 
                email="Iris@student.auca.ac.rw" 
                courses={4}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Course Settings View Component
function CourseSettingsView({ colors }) {
  const [course, setCourse] = useState({
    name: "Advanced Software Engineering",
    code: "CS401",
    description: "This course covers advanced topics in software engineering including design patterns, architecture, and project management.",
    credits: 3,
    active: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCourse(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Course Settings</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput 
                label="Course Name" 
                name="name" 
                value={course.name} 
                onChange={handleChange}
              />
              <FormInput 
                label="Course Code" 
                name="code" 
                value={course.code} 
                onChange={handleChange}
              />
            </div>
            
            <FormTextarea 
              label="Description" 
              name="description" 
              value={course.description} 
              onChange={handleChange}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput 
                label="Credits" 
                name="credits" 
                type="number"
                value={course.credits} 
                onChange={handleChange}
              />
              <FormCheckbox 
                label="Active Course" 
                name="active" 
                checked={course.active} 
                onChange={handleChange}
                description="When checked, the course is visible to students"
              />
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <button 
                className="px-4 py-2 text-white rounded-md" 
                style={{ backgroundColor: colors.primary }}
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Admin Dashboard Component
function AdminDashboard({ colors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Admin Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard 
          title="Total Users" 
          value="1,248" 
          icon={<Users size={24} />} 
          color={colors.primary}
        />
        <DashboardCard 
          title="Active Courses" 
          value="42" 
          icon={<BookOpen size={24} />} 
          color={colors.secondary}
        />
        <DashboardCard 
          title="Pending Requests" 
          value="18" 
          icon={<Bell size={24} />} 
          color={colors.accent}
        />
        <DashboardCard 
          title="System Alerts" 
          value="3" 
          icon={<Shield size={24} />} 
          color="#6B7280"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Activity</h3>
          <div className="space-y-4">
            <ActivityItem 
              title="New course created" 
              description="CS401 - Advanced Software Engineering" 
              time="2 hours ago" 
            />
            <ActivityItem 
              title="User account deactivated" 
              description="Instructor: Dr. James Smith" 
              time="1 day ago" 
            />
            <ActivityItem 
              title="System backup completed" 
              description="Database backup for April 2025" 
              time="2 days ago" 
            />
            <ActivityItem 
              title="New admin user added" 
              description="Admin: Jane Doe" 
              time="3 days ago" 
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <QuickActionCard 
              title="Create User" 
              description="Add new student, instructor or admin" 
              icon={<User size={20} />}
              color={colors.primary}
            />
            <QuickActionCard 
              title="Manage Courses" 
              description="View and edit all courses" 
              icon={<BookOpen size={20} />}
              color={colors.secondary}
            />
            <QuickActionCard 
              title="System Settings" 
              description="Configure application settings" 
              icon={<Settings size={20} />}
              color={colors.accent}
            />
            <QuickActionCard 
              title="Generate Reports" 
              description="Create system reports" 
              icon={<FileText size={20} />}
              color="#6B7280"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// User Management Component
function UserManagementView({ colors }) {
  const [activeTab, setActiveTab] = useState('students');
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>User Management</h2>
        <button className="px-4 py-2 text-white rounded-md" style={{ backgroundColor: colors.primary }}>
          + Add User
        </button>
      </div>
      
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('students')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'students' ? `border-${colors.primary} text-${colors.primary}` : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Students
          </button>
          <button
            onClick={() => setActiveTab('instructors')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'instructors' ? `border-${colors.primary} text-${colors.primary}` : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Instructors
          </button>
          <button
            onClick={() => setActiveTab('admins')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'admins' ? `border-${colors.primary} text-${colors.primary}` : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Administrators
          </button>
        </nav>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activeTab === 'students' && (
                <>
                  <UserRow 
                    name="Keza Leila" 
                    id="12345678" 
                    email="keza@student.auca.ac.rw" 
                    status="Active" 
                    statusColor="bg-green-100 text-green-800"
                  />
                  <UserRow 
                    name="divin" 
                    id="23456789" 
                    email="divin@student.auca.ac.rw" 
                    status="Inactive" 
                    statusColor="bg-red-100 text-red-800"
                  />
                </>
              )}
              {activeTab === 'instructors' && (
                <>
                  <UserRow 
                    name="Prof. Sunday Idowu" 
                    id="F12345" 
                    email="sunday@auca.ac.rw" 
                    status="Active" 
                    statusColor="bg-green-100 text-green-800"
                  />
                  <UserRow 
                    name="Prof. prod trigga" 
                    id="F23456" 
                    email="trigga@auca.ac.rw" 
                    status="Active" 
                    statusColor="bg-green-100 text-green-800"
                  />
                </>
              )}
              {activeTab === 'admins' && (
                <>
                  <UserRow 
                    name="Admin User" 
                    id="A12345" 
                    email="admin@auca.ac.rw" 
                    status="Active" 
                    statusColor="bg-green-100 text-green-800"
                  />
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Course Management Component
function CourseManagementView({ colors }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Course Management</h2>
        <button className="px-4 py-2 text-white rounded-md" style={{ backgroundColor: colors.primary }}>
          + Add Course
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <CourseRow 
                code="CS401" 
                name="Advanced Software Engineering" 
                instructor="Dr. James Smith" 
                students={45} 
                status="Active" 
                statusColor="bg-green-100 text-green-800"
              />
              <CourseRow 
                code="CS302" 
                name="Database Systems" 
                instructor="Prof. Sarah Johnson" 
                students={38} 
                status="Active" 
                statusColor="bg-green-100 text-green-800"
              />
              <CourseRow 
                code="CS205" 
                name="Algorithm Analysis" 
                instructor="Dr. Michael Brown" 
                students={42} 
                status="Archived" 
                statusColor="bg-gray-100 text-gray-800"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// System Settings Component
function SystemSettingsView({ colors }) {
  const [settings, setSettings] = useState({
    systemName: "AUCA Assignment Management System",
    maintenanceMode: false,
    registrationEnabled: true,
    defaultUserRole: "student"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>System Settings</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">General Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput 
                  label="System Name" 
                  name="systemName" 
                  value={settings.systemName} 
                  onChange={handleChange}
                />
                <FormSelect 
                  label="Default User Role" 
                  name="defaultUserRole" 
                  value={settings.defaultUserRole} 
                  onChange={handleChange}
                  options={['student', 'instructor']}
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">System Options</h3>
              <div className="space-y-4">
                <FormCheckbox 
                  label="Maintenance Mode" 
                  name="maintenanceMode" 
                  checked={settings.maintenanceMode} 
                  onChange={handleChange}
                  description="When enabled, only administrators can access the system"
                />
                <FormCheckbox 
                  label="Allow User Registration" 
                  name="registrationEnabled" 
                  checked={settings.registrationEnabled} 
                  onChange={handleChange}
                  description="Allow new users to register accounts"
                />
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <button 
                className="px-4 py-2 text-white rounded-md" 
                style={{ backgroundColor: colors.primary }}
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reports Component
function ReportsView({ colors }) {
  const [selectedReport, setSelectedReport] = useState('userActivity');
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>System Reports</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-medium mb-4">Report Types</h3>
            <div className="space-y-2">
              <ReportTypeItem 
                title="User Activity" 
                active={selectedReport === 'userActivity'} 
                onClick={() => setSelectedReport('userActivity')}
              />
              <ReportTypeItem 
                title="Course Statistics" 
                active={selectedReport === 'courseStats'} 
                onClick={() => setSelectedReport('courseStats')}
              />
              <ReportTypeItem 
                title="Assignment Submissions" 
                active={selectedReport === 'assignmentSubmissions'} 
                onClick={() => setSelectedReport('assignmentSubmissions')}
              />
              <ReportTypeItem 
                title="System Usage" 
                active={selectedReport === 'systemUsage'} 
                onClick={() => setSelectedReport('systemUsage')}
              />
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button 
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Generate Report
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            {selectedReport === 'userActivity' && (
              <div>
                <h3 className="font-medium mb-4">User Activity Report</h3>
                <p className="text-gray-600 mb-4">Summary of user activity over the last 30 days</p>
                <div className="h-64 bg-gray-50 rounded flex items-center justify-center text-gray-400">
                  User Activity Chart Placeholder
                </div>
              </div>
            )}
            
            {selectedReport === 'courseStats' && (
              <div>
                <h3 className="font-medium mb-4">Course Statistics Report</h3>
                <p className="text-gray-600 mb-4">Summary of course enrollments and activity</p>
                <div className="h-64 bg-gray-50 rounded flex items-center justify-center text-gray-400">
                  Course Statistics Chart Placeholder
                </div>
              </div>
            )}
            
            {selectedReport === 'assignmentSubmissions' && (
              <div>
                <h3 className="font-medium mb-4">Assignment Submissions Report</h3>
                <p className="text-gray-600 mb-4">Summary of assignment submissions and grading</p>
                <div className="h-64 bg-gray-50 rounded flex items-center justify-center text-gray-400">
                  Assignment Submissions Chart Placeholder
                </div>
              </div>
            )}
            
            {selectedReport === 'systemUsage' && (
              <div>
                <h3 className="font-medium mb-4">System Usage Report</h3>
                <p className="text-gray-600 mb-4">Summary of system usage and performance</p>
                <div className="h-64 bg-gray-50 rounded flex items-center justify-center text-gray-400">
                  System Usage Chart Placeholder
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for dashboard cards
function DashboardCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center">
        <div className={`p-3 rounded-full`} style={{ backgroundColor: color }}>
          <span className="text-white">{icon}</span>
        </div>
        <div className="ml-4">
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
}

// Component for deadline items
function DeadlineItem({ title, course, dueDate, progress }) {
  return (
    <div className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-medium text-gray-800">{title}</h4>
        <span className="text-sm text-gray-500">{course}</span>
      </div>
      <div className="flex items-center mb-2">
        <Clock size={16} className="text-gray-400 mr-1" />
        <span className="text-sm text-gray-500">Due: {dueDate}</span>
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block text-blue-600">
              Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-blue-600">
              {progress}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-blue-200">
          <div 
            style={{ width: `${progress}%` }} 
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-300"
          ></div>
        </div>
      </div>
    </div>
  );
}

// Component for activity items
function ActivityItem({ title, description, time }) {
  return (
    <div className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
      <h4 className="font-medium text-sm text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <span className="text-xs text-gray-500 mt-1 block">{time}</span>
    </div>
  );
}

// Component for assignment rows
function AssignmentRow({ title, course, dueDate, status, statusColor }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{title}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{course}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{dueDate}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">Edit</a>
        <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
      </td>
    </tr>
  );
}

// Component for task columns
function TaskColumn({ title, count, color, children }) {
  return (
    <div className={`${color} rounded-lg shadow p-4 hover:shadow-md transition-shadow`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700">{count}</span>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

// Component for task cards
function TaskCard({ title, assignment, dueDate, priority }) {
  const priorityColors = {
    High: "bg-red-100 text-red-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-green-100 text-green-800"
  };

  return (
    <div className="bg-white rounded-lg shadow p-3 hover:shadow-md transition-shadow">
      <h4 className="font-medium text-sm mb-2 text-gray-800">{title}</h4>
      <p className="text-xs text-gray-600 mb-2">{assignment}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">Due: {dueDate}</span>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[priority]}`}>
          {priority}
        </span>
      </div>
    </div>
  );
}

// Component for grade rows
function GradeRow({ student, assignment, submitted, status, statusColor }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{student}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{assignment}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{submitted}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">Review</a>
        <a href="#" className="text-blue-600 hover:text-blue-900">Download</a>
      </td>
    </tr>
  );
}

// Component for event items
function EventItem({ title, time, location }) {
  return (
    <div className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
      <h4 className="font-medium text-sm text-gray-800">{title}</h4>
      <div className="flex items-center mt-1">
        <Clock size={14} className="text-gray-400 mr-1" />
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <div className="flex items-center mt-1">
        <MessageSquare size={14} className="text-gray-400 mr-1" />
        <span className="text-xs text-gray-500">{location}</span>
      </div>
    </div>
  );
}

// Component for notification items
function NotificationItem({ title, description, time, unread }) {
  return (
    <div className={`p-4 ${unread ? 'bg-blue-50' : 'bg-white'}`}>
      <div className="flex">
        {unread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 mr-2"></div>}
        <div>
          <h4 className={`font-medium text-sm ${unread ? 'text-blue-800' : 'text-gray-800'}`}>{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <span className="text-xs text-gray-500 mt-1 block">{time}</span>
        </div>
      </div>
    </div>
  );
}

// Component for group cards
function GroupCard({ name, course, members, projects, active }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500 mt-1">{course}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs ${active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
          {active ? 'Active' : 'Inactive'}
        </span>
      </div>
      <div className="flex mt-4 pt-4 border-t border-gray-100">
        <div className="pr-4 border-r border-gray-100">
          <p className="text-sm text-gray-500">Members</p>
          <p className="font-medium text-gray-800">{members}</p>
        </div>
        <div className="pl-4">
          <p className="text-sm text-gray-500">Projects</p>
          <p className="font-medium text-gray-800">{projects}</p>
        </div>
      </div>
      <button className="mt-4 w-full py-2 bg-blue-50 text-blue-600 rounded text-sm font-medium hover:bg-blue-100 transition-colors">
        View Group
      </button>
    </div>
  );
}

// Component for project rows
function ProjectRow({ title, group, dueDate, progress }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{title}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{group}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{dueDate}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-full mr-2">
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                <div 
                  style={{ width: `${progress}%` }} 
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-300"
                ></div>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500">{progress}%</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">Edit</a>
        <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
      </td>
    </tr>
  );
}

// Component for discussion items
function DiscussionItem({ title, group, lastPost, replies }) {
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex">
        <div className="flex-shrink-0 mr-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <MessageSquare size={20} className="text-blue-600" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm text-gray-800 truncate">{title}</h4>
          <p className="text-xs text-gray-500 mt-1">Group: {group}</p>
          <p className="text-xs text-gray-500 mt-1">Last post: {lastPost}</p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <div className="flex items-center">
            <MessageSquare size={14} className="text-gray-400 mr-1" />
            <span className="text-xs text-gray-500">{replies} replies</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for team members
function TeamMember({ name, role }) {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
        <span className="text-xs font-medium text-blue-600">{name.split(' ').map(n => n[0]).join('')}</span>
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-800">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
}

// Component for submission items
function SubmissionItem({ assignment, course, students, dueDate }) {
  return (
    <div className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-medium text-gray-800">{assignment}</h4>
        <span className="text-sm text-gray-500">{course}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Users size={16} className="text-gray-400 mr-1" />
          <span className="text-sm text-gray-500">{students} submissions</span>
        </div>
        <div className="flex items-center">
          <Clock size={16} className="text-gray-400 mr-1" />
          <span className="text-sm text-gray-500">Due: {dueDate}</span>
        </div>
      </div>
    </div>
  );
}

// Component for instructor deadline items
function InstructorDeadlineItem({ title, dueDate, submissions, totalStudents }) {
  const submissionPercentage = Math.round((submissions / totalStudents) * 100);
  
  return (
    <div className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-medium text-gray-800">{title}</h4>
        <span className="text-sm text-gray-500">{submissions}/{totalStudents} submitted</span>
      </div>
      <div className="flex items-center mb-2">
        <Clock size={16} className="text-gray-400 mr-1" />
        <span className="text-sm text-gray-500">Due: {dueDate}</span>
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block text-blue-600">
              Submissions
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-blue-600">
              {submissionPercentage}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-blue-200">
          <div 
            style={{ width: `${submissionPercentage}%` }} 
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-300"
          ></div>
        </div>
      </div>
    </div>
  );
}

// Component for instructor assignment rows
function InstructorAssignmentRow({ title, course, dueDate, submissions, totalStudents }) {
  const submissionPercentage = Math.round((submissions / totalStudents) * 100);
  
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{title}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{course}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{dueDate}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-full mr-2">
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                <div 
                  style={{ width: `${submissionPercentage}%` }} 
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-300"
                ></div>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500">{submissions}/{totalStudents}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">Edit</a>
        <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
      </td>
    </tr>
  );
}

// Component for student rows
function StudentRow({ name, id, email, courses }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="font-medium text-blue-600">{name.split(' ').map(n => n[0]).join('')}</span>
            </div>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{id}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{courses} courses</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">Message</a>
        <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
      </td>
    </tr>
  );
}

// Component for form inputs
function FormInput({ label, name, value, onChange, type = "text", readOnly = false }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input 
        type={type} 
        id={name}
        name={name}
        value={value} 
        onChange={onChange}
        readOnly={readOnly}
        className={`w-full px-3 py-2 border rounded-md ${readOnly ? 'bg-gray-100' : 'bg-white'} border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500`}
      />
    </div>
  );
}

// Component for form textareas
function FormTextarea({ label, name, value, onChange }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea 
        id={name}
        name={name}
        value={value} 
        onChange={onChange}
        rows={3}
        className="w-full px-3 py-2 border rounded-md bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}

// Component for form selects
function FormSelect({ label, name, value, onChange, options }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select 
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

// Component for form checkboxes
function FormCheckbox({ label, name, checked, onChange, description }) {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={name} className="font-medium text-gray-700">{label}</label>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

// Component for report type items
function ReportTypeItem({ title, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-md ${active ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}
    >
      {title}
    </button>
  );
}

// Component for quick action cards
function QuickActionCard({ title, description, icon, color }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <div className="p-2 rounded-md" style={{ backgroundColor: color, color: 'white' }}>
          {icon}
        </div>
        <div className="ml-3">
          <h4 className="font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Component for user rows
function UserRow({ name, id, email, status, statusColor }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="font-medium text-gray-600">{name.split(' ').map(n => n[0]).join('')}</span>
            </div>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{id}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">Edit</a>
        <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
      </td>
    </tr>
  );
}

// Component for course rows
function CourseRow({ code, name, instructor, students, status, statusColor }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{code}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{instructor}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{students}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">Edit</a>
        <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
      </td>
    </tr>
  );
}