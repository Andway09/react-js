import React, { Component } from 'react';

class Dashboard extends Component {
  state = {
    activities: [
      { activity: 'Logged in', date: 'May 5, 2024', user: 'BINI Aiah' },
      { activity: 'Logged in', date: 'May 6, 2024', user: 'BINI Colet' },
      // Add more activities as needed
    ]
  };

  render() {
    const { activities } = this.state;

    return (
      <main className="flex-1 bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Activity</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">User</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activities.map((activity, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap">{activity.activity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{activity.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{activity.user}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;