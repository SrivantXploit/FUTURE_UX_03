import { useParams, Link } from 'react-router';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  User,
  FileText,
  MessageSquare,
  PhoneCall,
  Video,
  StickyNote,
} from 'lucide-react';
import { mockClients, mockActivities, ActivityType } from '../data/mockData';

const activityIcons: Record<ActivityType, any> = {
  email: Mail,
  call: PhoneCall,
  meeting: Video,
  note: StickyNote,
};

const activityColors: Record<ActivityType, string> = {
  email: 'bg-blue-100 text-blue-700',
  call: 'bg-green-100 text-green-700',
  meeting: 'bg-purple-100 text-purple-700',
  note: 'bg-yellow-100 text-yellow-700',
};

export function ClientProfile() {
  const { id } = useParams();
  const client = mockClients.find((c) => c.id === id);
  const activities = mockActivities[id || ''] || [];

  if (!client) {
    return (
      <div className="p-8 max-w-[1440px] mx-auto">
        <p className="text-gray-600">Client not found</p>
        <Link to="/clients" className="text-[#3F51B5] hover:underline">
          Back to Clients
        </Link>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'On-Hold':
        return 'bg-yellow-100 text-yellow-700';
      case 'Completed':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="p-8 max-w-[1440px] mx-auto">
      {/* Back Button */}
      <Link
        to="/clients"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Clients
      </Link>

      {/* Header Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              {client.name}
            </h1>
            <p className="text-xl text-gray-600">{client.company}</p>
          </div>
          <span
            className={`px-3 py-1 rounded text-sm font-medium ${getStatusColor(
              client.status
            )}`}
          >
            {client.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <DollarSign className="text-[#3F51B5]" size={20} />
            <div>
              <p className="text-sm text-gray-600">Contract Value</p>
              <p className="font-semibold text-gray-900">
                ${client.contractValue.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <User className="text-[#3F51B5]" size={20} />
            <div>
              <p className="text-sm text-gray-600">Project Manager</p>
              <p className="font-semibold text-gray-900">
                {client.projectManager}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="text-[#3F51B5]" size={20} />
            <div>
              <p className="text-sm text-gray-600">Last Engagement</p>
              <p className="font-semibold text-gray-900">
                {new Date(client.lastEngagement).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Activity Timeline */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Activity Timeline
              </h2>
              <button className="px-4 py-2 bg-[#3F51B5] text-white rounded-lg hover:bg-[#3F51B5]/90 transition-colors font-medium text-sm">
                + Add Activity
              </button>
            </div>

            {activities.length > 0 ? (
              <div className="space-y-6">
                {activities.map((activity, index) => {
                  const Icon = activityIcons[activity.type];
                  const isLast = index === activities.length - 1;

                  return (
                    <div key={activity.id} className="relative">
                      {/* Timeline Line */}
                      {!isLast && (
                        <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gray-200" />
                      )}

                      <div className="flex gap-4">
                        {/* Icon */}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                            activityColors[activity.type]
                          }`}
                        >
                          <Icon size={20} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {activity.title}
                            </h3>
                            <span className="text-sm text-gray-500">
                              {new Date(activity.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {activity.description}
                          </p>
                          <p className="text-xs text-gray-500">
                            By {activity.performedBy}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No activities recorded yet
              </div>
            )}
          </div>
        </div>

        {/* Sidebar - Contact Details & Documents */}
        <div className="space-y-6">
          {/* Contact Details */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Details
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="text-[#3F51B5] mt-0.5" size={18} />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <a
                    href={`mailto:${client.email}`}
                    className="text-sm text-gray-900 hover:text-[#3F51B5]"
                  >
                    {client.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-[#3F51B5] mt-0.5" size={18} />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <a
                    href={`tel:${client.phone}`}
                    className="text-sm text-gray-900 hover:text-[#3F51B5]"
                  >
                    {client.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-[#3F51B5] mt-0.5" size={18} />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Address</p>
                  <p className="text-sm text-gray-900">{client.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="text-[#3F51B5] mt-0.5" size={18} />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Start Date</p>
                  <p className="text-sm text-gray-900">
                    {new Date(client.startDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full px-4 py-2 bg-[#3F51B5] text-white rounded-lg hover:bg-[#3F51B5]/90 transition-colors font-medium">
                Send Email
              </button>
              <button className="w-full px-4 py-2 mt-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Schedule Call
              </button>
            </div>
          </div>

          {/* Contract Documents */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Contract Documents
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <FileText className="text-[#3F51B5]" size={20} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Service Agreement
                  </p>
                  <p className="text-xs text-gray-500">PDF • 245 KB</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <FileText className="text-[#3F51B5]" size={20} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Scope of Work
                  </p>
                  <p className="text-xs text-gray-500">PDF • 182 KB</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <FileText className="text-[#3F51B5]" size={20} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    NDA Agreement
                  </p>
                  <p className="text-xs text-gray-500">PDF • 128 KB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Notes</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              {client.notes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
