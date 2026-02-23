# Agency CRM Dashboard

A professional, job-ready Customer Relationship Management (CRM) system designed for digital marketing agencies managing multiple clients and leads. Built with React, TypeScript, and Tailwind CSS.

![Agency CRM](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop)

## 🚀 Features

### 📊 **Dashboard Overview**
- Real-time metrics for pipeline value, active clients, leads, and tasks
- Visual pipeline breakdown by stage with progress bars
- Recent activity feed
- Quick access to key performance indicators

### 🎯 **Lead Pipeline Management**
- Kanban-style board with 4 stages: New Lead, Qualified, Negotiation, Closed
- Drag-and-drop functionality (ready for implementation)
- Deal value tracking per lead and stage
- Urgency tags (Hot Lead, Follow-up Needed)
- Detailed lead profiles with contact information
- Visual stage indicators with color coding

### 👥 **Client Management**
- Comprehensive client data table
- Advanced filtering by status (Active, On-Hold, Completed)
- Search functionality across names and companies
- Contract value tracking
- Last engagement date monitoring
- Project manager assignments
- Industry categorization

### 📋 **Individual Client Profiles**
- Activity timeline with email, call, meeting, and note tracking
- Contact details sidebar with quick actions
- Contract document management
- Client notes and engagement history
- Visual activity indicators

### ✅ **Task Tracker**
- Color-coded priority levels (High, Medium, Low)
- Due date tracking with overdue warnings
- Task completion toggles
- Assignment tracking
- Related lead/client associations
- Due today and overdue alerts
- Progress statistics

### ⚙️ **Settings & Configuration**
- Account management
- Notification preferences
- Team member directory
- Security settings
- Quick actions for data management

## 🎨 Design System

### Visual Style
- **Color Scheme**: Professional B2B SaaS aesthetic
  - Primary: Deep Indigo (#3F51B5)
  - Background: Clean White (#FFFFFF)
  - Accent colors for status indicators
- **Typography**: Inter font family for high readability
- **Layout**: 1440px desktop-optimized with responsive design
- **Grid**: 8px grid alignment system
- **Borders**: Clean, high-contrast borders for data-rich environment

## 🛠️ Technology Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Date Handling**: date-fns

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── Layout.tsx           # Main layout with sidebar
│   ├── data/
│   │   └── mockData.ts          # Mock data and type definitions
│   ├── pages/
│   │   ├── Dashboard.tsx        # Overview dashboard
│   │   ├── Leads.tsx            # Kanban lead pipeline
│   │   ├── Clients.tsx          # Client management table
│   │   ├── ClientProfile.tsx    # Individual client details
│   │   ├── Tasks.tsx            # Task management
│   │   └── Settings.tsx         # Settings page
│   ├── App.tsx                  # Main app component
│   └── routes.ts                # Routing configuration
├── styles/
│   ├── fonts.css                # Inter font import
│   ├── theme.css                # Design tokens
│   └── index.css                # Global styles
└── main.tsx                     # Application entry point
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/agency-crm.git
cd agency-crm
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📊 Mock Data

The application includes comprehensive mock data for demonstration:
- **8 Leads** across all pipeline stages
- **8 Clients** with various statuses
- **8 Tasks** with different priorities
- **Activity timelines** for client profiles
- **5 Team members**

## 🎯 Use Cases

Perfect for:
- **Digital Marketing Agencies** managing 30+ clients
- **Small Sales Teams** (5-10 members)
- **Service-Based Businesses** tracking client relationships
- **Consulting Firms** managing project pipelines
- **Freelance Teams** coordinating client work

## 🔮 Future Enhancements

### Backend Integration
- Supabase or Firebase for data persistence
- Real-time collaboration features
- User authentication and authorization
- File upload for contract documents
- Email integration (Gmail, Outlook)

### Advanced Features
- Drag-and-drop for Kanban board
- Calendar integration for meetings
- Automated email reminders
- Advanced reporting and analytics
- Custom fields and workflows
- Mobile responsive design
- Dark mode support
- Export to CSV/PDF

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Built with [Figma Make](https://www.figma.com)
- Icons by [Lucide](https://lucide.dev)
- Design inspiration from modern B2B SaaS platforms

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.

---

**Built with ❤️ for professional agency workflow management**
