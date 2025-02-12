
import React from "react";
import {
  LayoutDashboard,
  Send,
  Users,
  Wallet,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/" },
  { icon: Send, label: "Submissions", path: "/submissions" },
  { icon: Users, label: "Contributors", path: "/contributors" },
  { icon: Wallet, label: "Payments", path: "/payments" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div
      className={cn(
        "h-screen bg-card-background backdrop-blur-lg border-r border-gray-200",
        collapsed ? "w-20" : "w-64",
        "transition-all duration-300 ease-in-out"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-6">
          <h1 className={cn(
            "font-bold text-xl transition-all duration-300",
            collapsed ? "opacity-0" : "opacity-100"
          )}>
            Speak To Earn
          </h1>
        </div>
        
        <nav className="flex-1 px-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors mb-1"
            >
              <item.icon className="w-5 h-5" />
              <span className={cn(
                "transition-all duration-300",
                collapsed ? "opacity-0 w-0" : "opacity-100"
              )}>
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-4 hover:bg-gray-100 transition-colors"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            {collapsed ? "→" : "←"}
          </div>
        </button>
      </div>
    </div>
  );
};
