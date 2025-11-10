import React from 'react';
import { Database, CheckCircle, AlertTriangle, TrendingUp, FileText, Settings } from 'lucide-react';

const DataManagement: React.FC = () => {
  const dataQualityMetrics = [
    { metric: 'Data Completeness', value: '94.2%', trend: 'up', color: 'text-green-600' },
    { metric: 'Query Resolution Rate', value: '87.5%', trend: 'up', color: 'text-blue-600' },
    { metric: 'SDTM Compliance', value: '98.1%', trend: 'stable', color: 'text-green-600' },
    { metric: 'Real-time Monitoring', value: '92.8%', trend: 'up', color: 'text-purple-600' }
  ];

  const edcIntegration = [
    {
      system: 'Medidata Rave',
      status: 'Connected',
      lastSync: '2 minutes ago',
      records: 2847,
      quality: 96
    },
    {
      system: 'Oracle InForm',
      status: 'Connected',
      lastSync: '5 minutes ago',
      records: 1523,
      quality: 94
    },
    {
      system: 'REDCap',
      status: 'Connected',
      lastSync: '1 minute ago',
      records: 892,
      quality: 98
    }
  ];

  const queryStatus = [
    {
      type: 'Critical',
      count: 23,
      color: 'bg-red-100 text-red-800',
      bgColor: 'bg-red-500'
    },
    {
      type: 'Major',
      count: 45,
      color: 'bg-orange-100 text-orange-800',
      bgColor: 'bg-orange-500'
    },
    {
      type: 'Minor',
      count: 78,
      color: 'bg-yellow-100 text-yellow-800',
      bgColor: 'bg-yellow-500'
    },
    {
      type: 'Resolved',
      count: 234,
      color: 'bg-green-100 text-green-800',
      bgColor: 'bg-green-500'
    }
  ];

  const sdtmMapping = [
    { domain: 'Demographics (DM)', status: 'Complete', progress: 100, records: 90 },
    { domain: 'Adverse Events (AE)', status: 'In Progress', progress: 78, records: 156 },
    { domain: 'Concomitant Medications (CM)', status: 'Complete', progress: 100, records: 234 },
    { domain: 'Laboratory Data (LB)', status: 'In Progress', progress: 65, records: 1247 },
    { domain: 'Vital Signs (VS)', status: 'Complete', progress: 100, records: 678 }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Data Management & Quality Control
        </h1>
        <p className="text-xl text-slate-600">
          Automated data capture, validation, and real-time quality monitoring
        </p>
      </div>

      {/* Data Quality Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataQualityMetrics.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-600">{item.metric}</h3>
              <TrendingUp className={`h-4 w-4 ${item.color}`} />
            </div>
            <p className={`text-2xl font-bold ${item.color} mb-1`}>{item.value}</p>
            <p className="text-xs text-slate-500">
              {item.trend === 'up' ? '↗ Improving' : '→ Stable'}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* EDC Integration Status */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex items-center mb-6">
            <Database className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-slate-900">
              EDC Integration Status
            </h2>
          </div>
          
          <div className="space-y-4">
            {edcIntegration.map((system, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-slate-900">{system.system}</p>
                    <p className="text-sm text-slate-600">Last sync: {system.lastSync}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">{system.records.toLocaleString()}</p>
                  <p className="text-sm text-slate-600">records</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">{system.quality}%</p>
                  <p className="text-sm text-slate-600">quality</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Sync All Systems
            </button>
            <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
              <Settings className="h-4 w-4 mr-2 inline" />
              Configure
            </button>
          </div>
        </div>

        {/* Query Management */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="h-6 w-6 text-orange-600 mr-3" />
            <h2 className="text-xl font-semibold text-slate-900">
              Query Management
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {queryStatus.map((query, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${query.color}`}>
                    {query.type}
                  </span>
                  <span className="text-2xl font-bold text-slate-900">{query.count}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${query.bgColor}`}
                    style={{ width: `${(query.count / 380) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Automated Query Resolution</h3>
            <p className="text-blue-800 text-sm mb-3">
              AI-powered system has automatically resolved 78% of routine queries, 
              reducing manual review time by 6.2 hours per day.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              View Query Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* SDTM Mapping Progress */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="flex items-center mb-6">
          <FileText className="h-6 w-6 text-green-600 mr-3" />
          <h2 className="text-xl font-semibold text-slate-900">
            SDTM Mapping Progress
          </h2>
        </div>
        
        <div className="space-y-6">
          {sdtmMapping.map((domain, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center flex-1">
                <div className="w-4 h-4 rounded-full mr-4">
                  <CheckCircle className={`h-4 w-4 ${
                    domain.status === 'Complete' ? 'text-green-500' : 'text-yellow-500'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-slate-900">{domain.domain}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-slate-600">{domain.records} records</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        domain.status === 'Complete' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {domain.status}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        domain.status === 'Complete' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: `${domain.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-600">3</p>
            <p className="text-sm text-green-700">Domains Complete</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">2</p>
            <p className="text-sm text-yellow-700">In Progress</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">89.6%</p>
            <p className="text-sm text-blue-700">Overall Progress</p>
          </div>
        </div>
      </div>

      {/* Real-time Monitoring Dashboard */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">
          Real-time Quality Monitoring
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Data Entry Rate</h3>
            <p className="text-2xl font-bold text-blue-700">247</p>
            <p className="text-blue-600 text-sm">entries/hour</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
            <h3 className="font-semibold text-green-900 mb-2">Validation Errors</h3>
            <p className="text-2xl font-bold text-green-700">0.8%</p>
            <p className="text-green-600 text-sm">error rate</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
            <h3 className="font-semibold text-purple-900 mb-2">Missing Data</h3>
            <p className="text-2xl font-bold text-purple-700">2.3%</p>
            <p className="text-purple-600 text-sm">of expected</p>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6">
            <h3 className="font-semibold text-orange-900 mb-2">Outlier Detection</h3>
            <p className="text-2xl font-bold text-orange-700">12</p>
            <p className="text-orange-600 text-sm">flagged values</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataManagement;