import { useState } from 'react';
import { DollarSign, Mail, Phone, AlertCircle, Flame } from 'lucide-react';
import { mockLeads, Lead, LeadStage } from '../data/mockData';

const stages: LeadStage[] = ['New Lead', 'Qualified', 'Negotiation', 'Closed'];

export function Leads() {
  const [leads, setLeads] = useState(mockLeads);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const getLeadsByStage = (stage: LeadStage) =>
    leads.filter((lead) => lead.stage === stage);

  const getUrgencyColor = (urgency?: string) => {
    switch (urgency) {
      case 'Hot Lead':
        return 'bg-red-100 text-red-700';
      case 'Follow-up Needed':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStageColor = (stage: LeadStage) => {
    switch (stage) {
      case 'New Lead':
        return 'border-blue-300 bg-blue-50';
      case 'Qualified':
        return 'border-purple-300 bg-purple-50';
      case 'Negotiation':
        return 'border-orange-300 bg-orange-50';
      case 'Closed':
        return 'border-green-300 bg-green-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  return (
    <div className="p-8 max-w-[1440px] mx-auto h-full">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Lead Pipeline
          </h1>
          <p className="text-gray-600">
            Manage your sales pipeline from initial contact to closed deal
          </p>
        </div>
        <button className="px-4 py-2 bg-[#3F51B5] text-white rounded-lg hover:bg-[#3F51B5]/90 transition-colors font-medium">
          + Add Lead
        </button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[calc(100vh-250px)]">
        {stages.map((stage) => {
          const stageLeads = getLeadsByStage(stage);
          const stageValue = stageLeads.reduce(
            (sum, lead) => sum + lead.estimatedValue,
            0
          );

          return (
            <div
              key={stage}
              className={`rounded-lg border-2 p-4 flex flex-col ${getStageColor(
                stage
              )}`}
            >
              {/* Column Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-semibold text-gray-900">{stage}</h2>
                  <span className="text-sm font-medium text-gray-600">
                    {stageLeads.length}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  ${(stageValue / 1000).toFixed(0)}K total value
                </div>
              </div>

              {/* Lead Cards */}
              <div className="flex-1 overflow-y-auto space-y-3">
                {stageLeads.map((lead) => (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer hover:shadow-md transition-shadow"
                  >
                    {/* Lead Name & Company */}
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {lead.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{lead.company}</p>

                    {/* Deal Value */}
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign size={16} className="text-[#3F51B5]" />
                      <span className="text-sm font-medium text-gray-900">
                        ${lead.estimatedValue.toLocaleString()}
                      </span>
                    </div>

                    {/* Urgency Tag */}
                    {lead.urgency && (
                      <div className="flex items-center gap-2 mb-3">
                        {lead.urgency === 'Hot Lead' ? (
                          <Flame size={14} />
                        ) : (
                          <AlertCircle size={14} />
                        )}
                        <span
                          className={`text-xs px-2 py-1 rounded font-medium ${getUrgencyColor(
                            lead.urgency
                          )}`}
                        >
                          {lead.urgency}
                        </span>
                      </div>
                    )}

                    {/* Assigned To */}
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        Assigned to: {lead.assignedTo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedLead(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                  {selectedLead.name}
                </h2>
                <p className="text-gray-600">{selectedLead.company}</p>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">
                    Email
                  </label>
                  <div className="flex items-center gap-2 text-gray-900">
                    <Mail size={16} />
                    <span>{selectedLead.email}</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">
                    Phone
                  </label>
                  <div className="flex items-center gap-2 text-gray-900">
                    <Phone size={16} />
                    <span>{selectedLead.phone}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">
                    Estimated Value
                  </label>
                  <p className="text-lg font-semibold text-[#3F51B5]">
                    ${selectedLead.estimatedValue.toLocaleString()}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">
                    Stage
                  </label>
                  <p className="text-gray-900">{selectedLead.stage}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">
                    Assigned To
                  </label>
                  <p className="text-gray-900">{selectedLead.assignedTo}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">
                    Created Date
                  </label>
                  <p className="text-gray-900">
                    {new Date(selectedLead.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {selectedLead.urgency && (
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">
                    Priority
                  </label>
                  <span
                    className={`inline-block text-sm px-3 py-1 rounded font-medium ${getUrgencyColor(
                      selectedLead.urgency
                    )}`}
                  >
                    {selectedLead.urgency}
                  </span>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
              <button className="flex-1 px-4 py-2 bg-[#3F51B5] text-white rounded-lg hover:bg-[#3F51B5]/90 transition-colors font-medium">
                Send Email
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
