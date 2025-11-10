import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProtocolUpload from './ProtocolUpload';
import ProtocolInsights from './ProtocolInsights';
import CostAnalysis from './CostAnalysis';
import SiteSelection from './SiteSelection';
import DataManagement from './DataManagement';
import Analytics from './Analytics';
import PatientRecruitment from './PatientRecruitment';
import RegulatoryCompliance from './RegulatoryCompliance';

export type DashboardView = 
  | 'upload'
  | 'insights' 
  | 'cost-analysis'
  | 'site-selection'
  | 'data-management'
  | 'analytics'
  | 'patient-recruitment'
  | 'regulatory';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [currentView, setCurrentView] = useState<DashboardView>('upload');
  const [protocolUploaded, setProtocolUploaded] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case 'upload':
        return <ProtocolUpload onUploadComplete={() => setProtocolUploaded(true)} />;
      case 'insights':
        return <ProtocolInsights />;
      case 'cost-analysis':
        return <CostAnalysis />;
      case 'site-selection':
        return <SiteSelection />;
      case 'data-management':
        return <DataManagement />;
      case 'analytics':
        return <Analytics />;
      case 'patient-recruitment':
        return <PatientRecruitment />;
      case 'regulatory':
        return <RegulatoryCompliance />;
      default:
        return <ProtocolUpload onUploadComplete={() => setProtocolUploaded(true)} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar 
        currentView={currentView}
        onViewChange={setCurrentView}
        onLogout={onLogout}
        protocolUploaded={protocolUploaded}
      />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;