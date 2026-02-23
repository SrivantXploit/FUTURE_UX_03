import { User, Bell, Shield, Building } from 'lucide-react';
import { teamMembers } from '../data/mockData';

export function Settings() {
  return (
    <div className="p-8 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">
          Manage your CRM preferences and team configuration
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Account Settings */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#3F51B5]/10 rounded-lg flex items-center justify-center">
                <User className="text-[#3F51B5]" size={20} />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                Account Settings
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Admin User"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F51B5] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="admin@agency.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F51B5] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F51B5] focus:border-transparent">
                  <option>Administrator</option>
                  <option>Manager</option>
                  <option>Team Member</option>
                </select>
              </div>

              <button className="px-6 py-2 bg-[#3F51B5] text-white rounded-lg hover:bg-[#3F51B5]/90 transition-colors font-medium">
                Save Changes
              </button>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#3F51B5]/10 rounded-lg flex items-center justify-center">
                <Bell className="text-[#3F51B5]" size={20} />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                Notification Preferences
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">New Lead Alerts</p>
                  <p className="text-sm text-gray-600">
                    Get notified when a new lead is added
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 text-[#3F51B5] border-gray-300 rounded focus:ring-[#3F51B5]"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Task Reminders</p>
                  <p className="text-sm text-gray-600">
                    Receive reminders for upcoming tasks
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 text-[#3F51B5] border-gray-300 rounded focus:ring-[#3F51B5]"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">
                    Client Activity Updates
                  </p>
                  <p className="text-sm text-gray-600">
                    Get updates on client interactions
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 text-[#3F51B5] border-gray-300 rounded focus:ring-[#3F51B5]"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Weekly Reports</p>
                  <p className="text-sm text-gray-600">
                    Receive weekly performance summaries
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="w-5 h-5 text-[#3F51B5] border-gray-300 rounded focus:ring-[#3F51B5]"
                />
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#3F51B5]/10 rounded-lg flex items-center justify-center">
                <Shield className="text-[#3F51B5]" size={20} />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Security</h2>
            </div>

            <div className="space-y-4">
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-left">
                Change Password
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-left">
                Enable Two-Factor Authentication
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-left">
                View Login History
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Team Members */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#3F51B5]/10 rounded-lg flex items-center justify-center">
                <Building className="text-[#3F51B5]" size={20} />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                Team Members
              </h2>
            </div>

            <div className="space-y-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
                >
                  <div className="w-10 h-10 bg-[#3F51B5] rounded-full flex items-center justify-center text-white font-semibold">
                    {member
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{member}</p>
                    <p className="text-xs text-gray-500">Team Member</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 px-4 py-2 border border-[#3F51B5] text-[#3F51B5] rounded-lg hover:bg-[#3F51B5]/5 transition-colors font-medium">
              + Add Team Member
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Export Client Data
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Import Contacts
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Generate Reports
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                API Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
