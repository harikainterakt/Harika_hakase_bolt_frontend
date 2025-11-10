import React from 'react';
import { FileCheck, Shield, Download, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const RegulatoryCompliance: React.FC = () => {
  const complianceStatus = [
    { item: '21 CFR Part 11 Compliance', status: 'Complete', progress: 100, color: 'text-green-600' },
    { item: 'ICH GCP Guidelines', status: 'Complete', progress: 100, color: 'text-green-600' },
    { item: 'GDPR Compliance', status: 'Complete', progress: 100, color: 'text-green-600' },
    { item: 'FDA IND Safety Updates', status: 'In Progress', progress: 85, color: 'text-yellow-600' },
    { item: 'EMA CTR Compliance', status: 'Complete', progress: 100, color: 'text-green-600' },
    { item: 'Local IRB/EC Approvals', status: 'In Progress', progress: 78, color: 'text-yellow-600' }
  ];

  const submissionDocuments = [
    {
      document: 'Define.xml',
      version: 'v2.1',
      status: 'Generated',
      lastUpdated: '2 hours ago',
      size: '2.4 MB',
      type: 'XML'
    },
    {
      document: 'Annotated CRF (ACRF)',
      version: 'v1.3',
      status: 'Generated',
      lastUpdated: '4 hours ago',
      size: '8.7 MB',
      type: 'PDF'
    },
    {
      document: 'Analysis Data Reviewer\'s Guide (ADRG)',
      version: 'v1.1',
      status: 'Generated',
      lastUpdated: '6 hours ago',
      size: '3.2 MB',
      type: 'PDF'
    },
    {
      document: 'Study Data Tabulation Model (SDTM)',
      version: 'v3.2',
      status: 'Generated',
      lastUpdated: '1 day ago',
      size: '45.3 MB',
      type: 'XPT'
    },
    {
      document: 'Analysis Data Model (ADaM)',
      version: 'v2.8',
      status: 'In Progress',
      lastUpdated: '2 days ago',
      size: '28.9 MB',
      type: 'XPT'
    }
  ];

  const auditTrail = [
    {
      action: 'Document Generated',
      document: 'Define.xml v2.1',
      user: 'System (AI Generator)',
      timestamp: '2024-03-15 14:23:45',
      changes: 'Auto-generated from SDTM datasets'
    },
    {
      action: 'Review Completed',
      document: 'ACRF v1.3',
      user: 'Dr. Sarah Johnson',
      timestamp: '2024-03-15 11:15:22',
      changes: 'Approved annotations for adverse events'
    },
    {
      action: 'Validation Passed',
      document: 'SDTM Datasets',
      user: 'System Validator',
      timestamp: '2024-03-14 16:45:12',
      changes: 'All domains passed validation checks'
    },
    {
      action: 'Document Updated',
      document: 'ADRG v1.1',
      user: 'Dr. Michael Chen',
      timestamp: '2024-03-14 09:30:18',
      changes: 'Updated population definitions'
    }
  ];

  const regulatoryIntelligence = [
    {
      region: 'FDA (United States)',
      updates: 3,
      priority: 'High',
      summary: 'New guidance on AI/ML in clinical trials affecting data integrity requirements'
    },
    {
      region: 'EMA (Europe)',
      updates: 1,
      priority: 'Medium',
      summary: 'Updated ICH E6(R3) implementation timeline extended to Q2 2025'
    },
    {
      region: 'PMDA (Japan)',
      updates: 2,
      priority: 'Low',
      summary: 'Routine updates to pharmacovigilance reporting procedures'
    },
    {
      region: 'Health Canada',
      updates: 1,
      priority: 'Medium',
      summary: 'New requirements for patient consent in digital health technologies'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Regulatory Compliance Dashboard
        </h1>
        <p className="text-xl text-slate-600">
          Automated compliance monitoring and submission-ready document generation
        </p>
      </div>

      {/* Compliance Overview */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="flex items-center mb-6">
          <Shield className="h-6 w-6 text-green-600 mr-3" />
          <h2 className="text-xl font-semibold text-slate-900">
            Compliance Status Overview
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceStatus.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-slate-900 text-sm">{item.item}</h3>
                {item.status === 'Complete' ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <Clock className="h-5 w-5 text-yellow-600" />
                )}
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">Progress</span>
                  <span className={`font-medium ${item.color}`}>{item.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      item.status === 'Complete' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                item.status === 'Complete' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Submission Documents */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <FileCheck className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-slate-900">
              Submission-Ready Documents
            </h2>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Generate All Documents
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 font-semibold text-slate-700">Document</th>
                <th className="text-left py-3 font-semibold text-slate-700">Version</th>
                <th className="text-left py-3 font-semibold text-slate-700">Status</th>
                <th className="text-left py-3 font-semibold text-slate-700">Last Updated</th>
                <th className="text-left py-3 font-semibold text-slate-700">Size</th>
                <th className="text-right py-3 font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissionDocuments.map((doc, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-4">
                    <div>
                      <p className="font-medium text-slate-900">{doc.document}</p>
                      <p className="text-sm text-slate-600">{doc.type} format</p>
                    </div>
                  </td>
                  <td className="py-4 text-slate-900">{doc.version}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      doc.status === 'Generated' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="py-4 text-slate-600">{doc.lastUpdated}</td>
                  <td className="py-4 text-slate-600">{doc.size}</td>
                  <td className="py-4 text-right">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Audit Trail */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex items-center mb-6">
            <FileCheck className="h-6 w-6 text-purple-600 mr-3" />
            <h2 className="text-xl font-semibold text-slate-900">
              Audit Trail Management
            </h2>
          </div>
          
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {auditTrail.map((entry, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-slate-900 text-sm">{entry.action}</h3>
                  <span className="text-xs text-slate-500">{entry.timestamp}</span>
                </div>
                <p className="text-sm text-blue-600 mb-1">{entry.document}</p>
                <p className="text-sm text-slate-600 mb-2">{entry.changes}</p>
                <p className="text-xs text-slate-500">by {entry.user}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-600">Showing latest 4 of 127 entries</p>
            <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm">
              View Full Trail
            </button>
          </div>
        </div>

        {/* Regulatory Intelligence */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex items-center mb-6">
            <AlertCircle className="h-6 w-6 text-orange-600 mr-3" />
            <h2 className="text-xl font-semibold text-slate-900">
              Regulatory Intelligence
            </h2>
          </div>
          
          <div className="space-y-4">
            {regulatoryIntelligence.map((intel, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-slate-900">{intel.region}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      intel.priority === 'High' ? 'bg-red-100 text-red-800' :
                      intel.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {intel.priority}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {intel.updates} updates
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600">{intel.summary}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">AI-Powered Monitoring</h3>
            <p className="text-blue-800 text-sm">
              Our system continuously monitors regulatory updates across 15+ global agencies, 
              automatically flagging relevant changes that may impact your trial.
            </p>
          </div>
        </div>
      </div>

      {/* 21 CFR Part 11 Compliance Details */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="flex items-center mb-6">
          <Shield className="h-6 w-6 text-green-600 mr-3" />
          <h2 className="text-xl font-semibold text-slate-900">
            21 CFR Part 11 Compliance Framework
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="font-semibold text-green-900 mb-4">Electronic Signatures</h3>
            <ul className="space-y-2 text-sm text-green-800">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Unique user identification
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Digital signature verification
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Non-repudiation controls
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-4">System Validation</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Data integrity controls
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                System access controls
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Operational system checks
              </li>
            </ul>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="font-semibold text-purple-900 mb-4">Record Management</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Complete audit trails
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Record retention policies
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Data migration procedures
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulatoryCompliance;