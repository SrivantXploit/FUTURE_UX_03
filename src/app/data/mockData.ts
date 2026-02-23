export type LeadStage = 'New Lead' | 'Qualified' | 'Negotiation' | 'Closed';
export type ClientStatus = 'Active' | 'On-Hold' | 'Completed';
export type TaskPriority = 'High' | 'Medium' | 'Low';
export type ActivityType = 'email' | 'call' | 'meeting' | 'note';

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  estimatedValue: number;
  stage: LeadStage;
  urgency?: 'Follow-up Needed' | 'Hot Lead' | 'Cold';
  assignedTo: string;
  createdAt: string;
}

export interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: ClientStatus;
  projectManager: string;
  lastEngagement: string;
  contractValue: number;
  startDate: string;
  industry: string;
  address: string;
  notes: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  dueDate: string;
  assignedTo: string;
  relatedTo: string;
  relatedType: 'lead' | 'client';
  completed: boolean;
}

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  date: string;
  performedBy: string;
}

// Mock Leads Data
export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'TechStart Inc',
    email: 'sarah@techstart.com',
    phone: '555-0101',
    estimatedValue: 45000,
    stage: 'New Lead',
    urgency: 'Follow-up Needed',
    assignedTo: 'John Doe',
    createdAt: '2026-02-18',
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'GrowthLabs',
    email: 'michael@growthlabs.com',
    phone: '555-0102',
    estimatedValue: 32000,
    stage: 'New Lead',
    urgency: 'Hot Lead',
    assignedTo: 'Jane Smith',
    createdAt: '2026-02-17',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    company: 'BlueSky Marketing',
    email: 'emily@bluesky.com',
    phone: '555-0103',
    estimatedValue: 58000,
    stage: 'Qualified',
    urgency: 'Follow-up Needed',
    assignedTo: 'John Doe',
    createdAt: '2026-02-15',
  },
  {
    id: '4',
    name: 'David Park',
    company: 'InnovateCo',
    email: 'david@innovateco.com',
    phone: '555-0104',
    estimatedValue: 75000,
    stage: 'Qualified',
    urgency: 'Hot Lead',
    assignedTo: 'Alex Brown',
    createdAt: '2026-02-14',
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    company: 'Digital Dynamics',
    email: 'lisa@digitaldynamics.com',
    phone: '555-0105',
    estimatedValue: 92000,
    stage: 'Negotiation',
    urgency: 'Follow-up Needed',
    assignedTo: 'Jane Smith',
    createdAt: '2026-02-10',
  },
  {
    id: '6',
    name: 'Robert Wilson',
    company: 'FutureTech Solutions',
    email: 'robert@futuretech.com',
    phone: '555-0106',
    estimatedValue: 68000,
    stage: 'Negotiation',
    urgency: 'Hot Lead',
    assignedTo: 'John Doe',
    createdAt: '2026-02-08',
  },
  {
    id: '7',
    name: 'Amanda Lee',
    company: 'NextGen Media',
    email: 'amanda@nextgen.com',
    phone: '555-0107',
    estimatedValue: 55000,
    stage: 'Closed',
    assignedTo: 'Alex Brown',
    createdAt: '2026-02-01',
  },
  {
    id: '8',
    name: 'James Martinez',
    company: 'Apex Brands',
    email: 'james@apexbrands.com',
    phone: '555-0108',
    estimatedValue: 41000,
    stage: 'Closed',
    assignedTo: 'Jane Smith',
    createdAt: '2026-01-28',
  },
];

// Mock Clients Data
export const mockClients: Client[] = [
  {
    id: '1',
    name: 'Jennifer Adams',
    company: 'Velocity Ventures',
    email: 'jennifer@velocity.com',
    phone: '555-1001',
    status: 'Active',
    projectManager: 'John Doe',
    lastEngagement: '2026-02-18',
    contractValue: 120000,
    startDate: '2025-11-15',
    industry: 'Technology',
    address: '123 Tech Boulevard, San Francisco, CA 94105',
    notes: 'Premium client with quarterly retainer. Focus on SEO and content marketing.',
  },
  {
    id: '2',
    name: 'Marcus Washington',
    company: 'Urban Retail Group',
    email: 'marcus@urbanretail.com',
    phone: '555-1002',
    status: 'Active',
    projectManager: 'Jane Smith',
    lastEngagement: '2026-02-17',
    contractValue: 85000,
    startDate: '2025-12-01',
    industry: 'Retail',
    address: '456 Commerce Street, New York, NY 10013',
    notes: 'E-commerce optimization and social media campaigns.',
  },
  {
    id: '3',
    name: 'Patricia Moore',
    company: 'GreenLeaf Consulting',
    email: 'patricia@greenleaf.com',
    phone: '555-1003',
    status: 'Active',
    projectManager: 'Alex Brown',
    lastEngagement: '2026-02-16',
    contractValue: 95000,
    startDate: '2026-01-10',
    industry: 'Consulting',
    address: '789 Business Park Drive, Austin, TX 78701',
    notes: 'Brand refresh and digital transformation project.',
  },
  {
    id: '4',
    name: 'Christopher Taylor',
    company: 'Summit Financial',
    email: 'chris@summitfinancial.com',
    phone: '555-1004',
    status: 'On-Hold',
    projectManager: 'John Doe',
    lastEngagement: '2026-01-30',
    contractValue: 150000,
    startDate: '2025-09-01',
    industry: 'Finance',
    address: '321 Financial Center, Boston, MA 02108',
    notes: 'Project paused pending budget approval for Q2.',
  },
  {
    id: '5',
    name: 'Rachel Kim',
    company: 'Wellness Plus',
    email: 'rachel@wellnessplus.com',
    phone: '555-1005',
    status: 'Active',
    projectManager: 'Jane Smith',
    lastEngagement: '2026-02-19',
    contractValue: 72000,
    startDate: '2026-01-15',
    industry: 'Healthcare',
    address: '654 Health Avenue, Seattle, WA 98101',
    notes: 'Health and wellness content strategy, monthly campaigns.',
  },
  {
    id: '6',
    name: 'Daniel Brown',
    company: 'Artisan Eats',
    email: 'daniel@artisaneats.com',
    phone: '555-1006',
    status: 'Active',
    projectManager: 'Alex Brown',
    lastEngagement: '2026-02-18',
    contractValue: 48000,
    startDate: '2025-10-20',
    industry: 'Food & Beverage',
    address: '987 Culinary Lane, Portland, OR 97201',
    notes: 'Restaurant chain social media management and influencer partnerships.',
  },
  {
    id: '7',
    name: 'Michelle Carter',
    company: 'EduTech Academy',
    email: 'michelle@edutech.com',
    phone: '555-1007',
    status: 'Completed',
    projectManager: 'John Doe',
    lastEngagement: '2026-01-15',
    contractValue: 65000,
    startDate: '2025-08-01',
    industry: 'Education',
    address: '147 Learning Street, Denver, CO 80202',
    notes: 'Campaign completed successfully. Open to renewal discussions.',
  },
  {
    id: '8',
    name: 'Kevin O\'Brien',
    company: 'BuildRight Construction',
    email: 'kevin@buildright.com',
    phone: '555-1008',
    status: 'Active',
    projectManager: 'Jane Smith',
    lastEngagement: '2026-02-15',
    contractValue: 58000,
    startDate: '2025-11-01',
    industry: 'Construction',
    address: '258 Industrial Parkway, Chicago, IL 60601',
    notes: 'Website redesign and lead generation campaigns.',
  },
];

// Mock Tasks Data
export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Follow up on proposal',
    description: 'Send follow-up email regarding Q1 marketing proposal',
    priority: 'High',
    dueDate: '2026-02-20',
    assignedTo: 'John Doe',
    relatedTo: 'Emily Rodriguez - BlueSky Marketing',
    relatedType: 'lead',
    completed: false,
  },
  {
    id: '2',
    title: 'Schedule kickoff meeting',
    description: 'Coordinate with client for project kickoff next week',
    priority: 'High',
    dueDate: '2026-02-19',
    assignedTo: 'Jane Smith',
    relatedTo: 'Rachel Kim - Wellness Plus',
    relatedType: 'client',
    completed: false,
  },
  {
    id: '3',
    title: 'Prepare monthly report',
    description: 'Compile analytics and performance metrics for client review',
    priority: 'Medium',
    dueDate: '2026-02-21',
    assignedTo: 'Alex Brown',
    relatedTo: 'Patricia Moore - GreenLeaf Consulting',
    relatedType: 'client',
    completed: false,
  },
  {
    id: '4',
    title: 'Cold call new lead',
    description: 'Initial outreach to discuss digital marketing needs',
    priority: 'Medium',
    dueDate: '2026-02-22',
    assignedTo: 'John Doe',
    relatedTo: 'Sarah Johnson - TechStart Inc',
    relatedType: 'lead',
    completed: false,
  },
  {
    id: '5',
    title: 'Review contract renewal',
    description: 'Prepare renewal proposal with updated pricing',
    priority: 'High',
    dueDate: '2026-02-23',
    assignedTo: 'Jane Smith',
    relatedTo: 'Jennifer Adams - Velocity Ventures',
    relatedType: 'client',
    completed: false,
  },
  {
    id: '6',
    title: 'Send campaign performance update',
    description: 'Weekly email with social media metrics and engagement data',
    priority: 'Low',
    dueDate: '2026-02-24',
    assignedTo: 'Alex Brown',
    relatedTo: 'Daniel Brown - Artisan Eats',
    relatedType: 'client',
    completed: false,
  },
  {
    id: '7',
    title: 'Negotiate contract terms',
    description: 'Finalize pricing and deliverables for new engagement',
    priority: 'High',
    dueDate: '2026-02-25',
    assignedTo: 'John Doe',
    relatedTo: 'Lisa Thompson - Digital Dynamics',
    relatedType: 'lead',
    completed: false,
  },
  {
    id: '8',
    title: 'Update client documentation',
    description: 'Organize project files and deliverables in shared folder',
    priority: 'Low',
    dueDate: '2026-02-26',
    assignedTo: 'Jane Smith',
    relatedTo: 'Marcus Washington - Urban Retail Group',
    relatedType: 'client',
    completed: false,
  },
];

// Mock Activities for Client Profile
export const mockActivities: Record<string, Activity[]> = {
  '1': [
    {
      id: 'a1',
      type: 'email',
      title: 'Sent Q1 Performance Report',
      description: 'Delivered comprehensive analytics report showing 45% increase in organic traffic and 32% improvement in conversion rates.',
      date: '2026-02-18T14:30:00',
      performedBy: 'John Doe',
    },
    {
      id: 'a2',
      type: 'call',
      title: 'Strategy Call',
      description: 'Discussed upcoming product launch campaign and budget allocation for paid advertising channels.',
      date: '2026-02-15T10:00:00',
      performedBy: 'John Doe',
    },
    {
      id: 'a3',
      type: 'meeting',
      title: 'Quarterly Business Review',
      description: 'Reviewed annual goals, ROI metrics, and strategic priorities for Q2. Client expressed satisfaction with results.',
      date: '2026-02-10T15:00:00',
      performedBy: 'John Doe',
    },
    {
      id: 'a4',
      type: 'email',
      title: 'Contract Renewal Proposal',
      description: 'Sent updated proposal for annual contract renewal with expanded service offerings.',
      date: '2026-02-08T09:15:00',
      performedBy: 'John Doe',
    },
    {
      id: 'a5',
      type: 'note',
      title: 'Internal Note',
      description: 'Client mentioned interest in exploring influencer marketing for upcoming campaign. Follow up next week.',
      date: '2026-02-05T16:45:00',
      performedBy: 'John Doe',
    },
  ],
  '2': [
    {
      id: 'a6',
      type: 'call',
      title: 'Weekly Check-in',
      description: 'Reviewed social media campaign performance and discussed content calendar for next month.',
      date: '2026-02-17T11:00:00',
      performedBy: 'Jane Smith',
    },
    {
      id: 'a7',
      type: 'email',
      title: 'Campaign Assets Delivered',
      description: 'Sent final creative assets for Instagram and Facebook campaigns.',
      date: '2026-02-12T13:20:00',
      performedBy: 'Jane Smith',
    },
  ],
};

export const teamMembers = ['John Doe', 'Jane Smith', 'Alex Brown', 'Sarah Wilson', 'Mike Johnson'];
