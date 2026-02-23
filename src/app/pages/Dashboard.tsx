import { DollarSign, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { mockLeads, mockClients, mockTasks } from '../data/mockData';

export function Dashboard() {
  const totalPipeline = mockLeads.reduce((sum, lead) => sum + lead.estimatedValue, 0);
  const activeClients = mockClients.filter((c) => c.status === 'Active').length;
  const pendingTasks = mockTasks.filter((t) => !t.completed).length;
  const closedDeals = mockLeads.filter((l) => l.stage === 'Closed').length;

  const recentActivity = [
    { id: 1, action: 'New lead added', detail: 'Sarah Johnson - TechStart Inc', time: '2 hours ago' },
    { id: 2, action: 'Task completed', detail: 'Sent proposal to GrowthLabs', time: '4 hours ago' },
    { id: 3, action: 'Client updated', detail: 'Velocity Ventures - Contract renewed', time: '1 day ago' },
    { id: 4, action: 'Meeting scheduled', detail: 'Kickoff with Wellness Plus', time: '1 day ago' },
  ];

  return (
    <div className="p-8 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Overview of your agency performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#3F51B5]/10 rounded-lg flex items-center justify-center">
              <DollarSign className="text-[#3F51B5]" size={24} />
            </div>
          </div>
          <div className="text-3xl font-semibold text-gray-900 mb-1">
            ${(totalPipeline / 1000).toFixed(0)}K
          </div>
          <div className="text-sm text-gray-600">Total Pipeline Value</div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#3F51B5]/10 rounded-lg flex items-center justify-center">
              <Users className="text-[#3F51B5]" size={24} />
            </div>
          </div>
          <div className="text-3xl font-semibold text-gray-900 mb-1">
            {activeClients}
          </div>
          <div className="text-sm text-gray-600">Active Clients</div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#3F51B5]/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-[#3F51B5]" size={24} />
            </div>
          </div>
          <div className="text-3xl font-semibold text-gray-900 mb-1">
            {mockLeads.length}
          </div>
          <div className="text-sm text-gray-600">Open Leads</div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#3F51B5]/10 rounded-lg flex items-center justify-center">
              <CheckCircle className="text-[#3F51B5]" size={24} />
            </div>
          </div>
          <div className="text-3xl font-semibold text-gray-900 mb-1">
            {pendingTasks}
          </div>
          <div className="text-sm text-gray-600">Pending Tasks</div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pipeline by Stage */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Pipeline by Stage
          </h2>
          <div className="space-y-4">
            {['New Lead', 'Qualified', 'Negotiation', 'Closed'].map((stage) => {
              const stageLeads = mockLeads.filter((l) => l.stage === stage);
              const stageValue = stageLeads.reduce((sum, l) => sum + l.estimatedValue, 0);
              const percentage = (stageValue / totalPipeline) * 100;

              return (
                <div key={stage}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {stage}
                    </span>
                    <span className="text-sm text-gray-600">
                      {stageLeads.length} leads • ${(stageValue / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div
                      className="bg-[#3F51B5] h-3 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="border-l-2 border-[#3F51B5] pl-4">
                <p className="text-sm font-medium text-gray-900">
                  {activity.action}
                </p>
                <p className="text-sm text-gray-600">{activity.detail}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
