import React, { Component } from 'react';

class Students extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold mb-4">Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">Student Profiles</h3>
            <p className="text-gray-700">
              View and manage student profiles. Add new students, update information, or deactivate accounts.
            </p>
            <a href="/student-profiles" className="text-blue-500 hover:underline mt-4 inline-block">
              Go to Student Profiles
            </a>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">Gradebook</h3>
            <p className="text-gray-700">
              Access and manage student grades, assignments, and progress. Add or update grades and track performance.
            </p>
            <a href="/gradebook" className="text-blue-500 hover:underline mt-4 inline-block">
              Go to Gradebook
            </a>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">Attendance</h3>
            <p className="text-gray-700">
              Record and track student attendance. Mark students present, absent, or excused.
            </p>
            <a href="/attendance" className="text-blue-500 hover:underline mt-4 inline-block">
              Go to Attendance
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Students;