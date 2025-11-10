import React from 'react';
import { 
  Upload, 
  FileText, 
  DollarSign, 
  MapPin, 
  Database, 
  BarChart3, 
  Users, 
  FileCheck,
  LogOut,
  Brain,
  ChevronRight
} from 'lucide-react';
import { DashboardView } from './Dashboard';
import HakaseLogo from "../assets/Hakase Logo Color_1750088056790.png";

interface SidebarProps {
  currentView: DashboardView;
  onViewChange: (view: DashboardView) => void;
  onLogout: () => void;
  protocolUploaded: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, onLogout, protocolUploaded }) => {
  const menuItems = [
    { id: 'upload', label: 'Protocol Upload', icon: Upload, enabled: true },
    { id: 'insights', label: 'Protocol Insights', icon: FileText, enabled: protocolUploaded },
    { id: 'cost-analysis', label: 'Cost Analysis', icon: DollarSign, enabled: protocolUploaded },
    { id: 'site-selection', label: 'Site Selection', icon: MapPin, enabled: protocolUploaded },
    { id: 'data-management', label: 'Data Management', icon: Database, enabled: protocolUploaded },
    { id: 'analytics', label: 'Analytics & Insights', icon: BarChart3, enabled: protocolUploaded },
    { id: 'patient-recruitment', label: 'Patient Recruitment', icon: Users, enabled: protocolUploaded },
    { id: 'regulatory', label: 'Regulatory Compliance', icon: FileCheck, enabled: protocolUploaded }
  ];

  return (
    <div className="w-64 bg-white border-r border-slate-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-2">
          {/* <Brain className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hakase AI
          </span> */}
          <img
            src={HakaseLogo}
            alt="Hakase AI Logo"
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            const isEnabled = item.enabled;

            return (
              <button
                key={item.id}
                onClick={() => isEnabled && onViewChange(item.id as DashboardView)}
                disabled={!isEnabled}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200'
                    : isEnabled
                    ? 'hover:bg-slate-50 text-slate-700 hover:text-slate-900'
                    : 'text-slate-400 cursor-not-allowed opacity-50'
                }`}
              >
                <div className="flex items-center">
                  <Icon className={`h-5 w-5 mr-3 ${isActive ? 'text-blue-600' : ''}`} />
                  <span className="font-medium">{item.label}</span>
                </div>
                {isActive && <ChevronRight className="h-4 w-4 text-blue-600" />}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200">
        <button
          onClick={onLogout}
          className="w-full flex items-center px-4 py-3 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
        >
          <LogOut className="h-5 w-5 mr-3" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;