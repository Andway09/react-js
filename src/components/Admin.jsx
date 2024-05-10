import React, { Component } from 'react';

class Admin extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold mb-4">Admin</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">User Management</h3>
            <p className="text-gray-700">
              Manage users, roles, and permissions. Add, edit, or remove users as needed.
            </p>
            <a href="/user-management" className="text-blue-500 hover:underline mt-4 inline-block">
              Go to User Management
            </a>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">Settings</h3>
            <p className="text-gray-700">
              Configure application settings such as theme, notifications, and preferences.
            </p>
            <a href="/settings" className="text-blue-500 hover:underline mt-4 inline-block">
              Go to Settings
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Admin;