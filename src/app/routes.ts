import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Leads } from "./pages/Leads";
import { Clients } from "./pages/Clients";
import { ClientProfile } from "./pages/ClientProfile";
import { Tasks } from "./pages/Tasks";
import { Settings } from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "leads", Component: Leads },
      { path: "clients", Component: Clients },
      { path: "clients/:id", Component: ClientProfile },
      { path: "tasks", Component: Tasks },
      { path: "settings", Component: Settings },
    ],
  },
]);
