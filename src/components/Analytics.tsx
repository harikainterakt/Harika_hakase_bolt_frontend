import React from 'react';
import { BarChart3, TrendingUp, Clock, DollarSign, Users, AlertTriangle } from 'lucide-react';

const Analytics: React.FC = () => {
  const kpiMetrics = [
    { label: 'Enrollment Progress', value: '67%', target: '90%', status: 'warning' },
    { label: 'Budget Utilization', value: '45%', target: '50%', status: 'good' },
    { label: 'Timeline Adherence', value: '82%', target: '95%', status: 'warning' },
    { label: 'Data Quality Score', value: '94%', target: '90%', status: 'excellent' }
  ];

  const enrollmentPrediction = {
    current: 173,
    projected: 258,
    target: 270,
    timeline: 14.2,
    confidence: 78
  };

  const riskAssessment = [
    {
      category: 'Enrollment',
      risk: 'Medium',
      description: 'Current rate 15% below target',
      impact: 'Timeline delay of 2-3 months',
      mitigation: 'Activate backup sites, increase recruitment budget',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      category: 'Site Performance',
      risk: 'Low',
      description: 'Sites performing within expected range',
      impact: 'Minimal impact on study objectives',
      mitigation: 'Continue monitoring, provide additional support',
      color: 'bg-green-100 text-green-800'
    },
    {
      category: 'Data Quality',
      risk: 'Low',
      description: 'Query rate within acceptable limits',
      impact: 'No impact on data integrity',
      mitigation: 'Maintain current monitoring procedures',
      color: 'bg-green-100 text-green-800'
    },
    {
      category: 'Budget',
      risk: 'High',
      description: 'Projected 15% over budget due to delays',
      impact: 'Significant cost overrun',
      mitigation: 'Review site payments, optimize vendor contracts',
      color: 'bg-red-100 text-red-800'
    }
  ];

  const costOptimization = [
    {
      area: 'Site Monitoring',
      current: '$2.1M',
      optimized: '$1.6M',
      savings: '$500K',
      method: 'Risk-based monitoring'
    },
    {
      area: 'Data Management',
      current: '$850K',
      optimized: '$680K',
      savings: '$170K',
      method: 'Automated validation'
    },
    {
      area: 'Patient Recruitment',
      current: '$1.2M',
      optimized: '$920K',
      savings: '$280K',
      method: 'Digital channels'
    },
    {
      area: 'Site Overhead',
      current: '$3.2M',
      optimized: '$2.8M',
      savings: '$400K',
      method: 'Site consolidation'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Analytics & Insights Dashboard
        </h1>
        <p className="text-xl text-slate-600">
          Real-time trial monitoring with predictive analytics
        </p>
      </div>

      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-slate-600">{metric.label}</h3>
              <div className={`w-3 h-3 rounded-full ${
                metric.status === 'excellent' ? 'bg-blue-500' :
                metric.status === 'good' ? 'bg-green-500' :
                metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
              }`}></div>
            </div>
            <p className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</p>
            <p className="text-sm text-slate-500">Target: {metric.target}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enrollment Prediction */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex items-center mb-6">
            <Users className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-slate-900">
              Enrollment Prediction
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Current Enrollment</span>
              <span className="text-2xl font-bold text-slate-900">{enrollmentPrediction.current}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Projected Final</span>
              <span className="text-2xl font-bold text-blue-600">{enrollmentPrediction.projected}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Target Enrollment</span>
              <span className="text-2xl font-bold text-green-600">{enrollmentPrediction.target}</span>
            </div>
            
            <div className="w-full bg-slate-200 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full"
                style={{ width: `${(enrollmentPrediction.current / enrollmentPrediction.target) * 100}%` }}
              ></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-blue-600">{enrollmentPrediction.timeline}</p>
                <p className="text-sm text-blue-700">months to completion</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-green-600">{enrollmentPrediction.confidence}%</p>
                <p className="text-sm text-green-700">prediction confidence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Analytics */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex items-center mb-6">
            <Clock className="h-6 w-6 text-purple-600 mr-3" />
            <h2 className="text-xl font-semibold text-slate-900">
              Timeline Analytics
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-semibold text-slate-900">First Patient First Visit</p>
                <p className="text-sm text-slate-600">Completed</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">On Time</p>
                <p className="text-sm text-slate-500">Mar 15, 2024</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-semibold text-slate-900">50% Enrollment</p>
                <p className="text-sm text-slate-600">In Progress</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-yellow-600">2 weeks delay</p>
                <p className="text-sm text-slate-500">Est. Jun 20, 2024</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-semibold text-slate-900">Last Patient Last Visit</p>
                <p className="text-sm text-slate-600">Projected</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-blue-600">On Track</p>
                <p className="text-sm text-slate-500">Est. Feb 10, 2025</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-semibold text-slate-900">Database Lock</p>
                <p className="text-sm text-slate-600">Projected</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">Ahead</p>
                <p className="text-sm text-slate-500">Est. Mar 15, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Assessment */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="flex items-center mb-6">
          <AlertTriangle className="h-6 w-6 text-orange-600 mr-3" />
          <h2 className="text-xl font-semibold text-slate-900">
            Risk Assessment Matrix
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {riskAssessment.map((risk, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-slate-900">{risk.category}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${risk.color}`}>
                  {risk.risk} Risk
                </span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Description</p>
                  <p className="text-sm text-slate-900">{risk.description}</p>
                </div>
                
                <div>
                  <p className="text-sm text-slate-600 mb-1">Potential Impact</p>
                  <p className="text-sm text-slate-900">{risk.impact}</p>
                </div>
                
                <div>
                  <p className="text-sm text-slate-600 mb-1">Mitigation Strategy</p>
                  <p className="text-sm text-slate-900">{risk.mitigation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cost Optimization Opportunities */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="flex items-center mb-6">
          <DollarSign className="h-6 w-6 text-green-600 mr-3" />
          <h2 className="text-xl font-semibold text-slate-900">
            Cost Optimization Opportunities
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 font-semibold text-slate-700">Area</th>
                <th className="text-right py-3 font-semibold text-slate-700">Current Cost</th>
                <th className="text-right py-3 font-semibold text-slate-700">Optimized Cost</th>
                <th className="text-right py-3 font-semibold text-slate-700">Potential Savings</th>
                <th className="text-left py-3 font-semibold text-slate-700">Method</th>
              </tr>
            </thead>
            <tbody>
              {costOptimization.map((item, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-4 font-medium text-slate-900">{item.area}</td>
                  <td className="py-4 text-right text-slate-900">{item.current}</td>
                  <td className="py-4 text-right text-blue-600 font-semibold">{item.optimized}</td>
                  <td className="py-4 text-right text-green-600 font-bold">{item.savings}</td>
                  <td className="py-4 text-slate-600">{item.method}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-slate-300">
                <td className="py-4 font-bold text-slate-900">Total Potential Savings</td>
                <td colSpan={3} className="py-4 text-right font-bold text-green-600 text-lg">
                  $1.35M (18.7% reduction)
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">
          Recommended Actions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="flex items-center justify-center px-4 py-3 bg-white border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
            <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
            <span className="font-medium text-red-600">Address Budget Risk</span>
          </button>
          
          <button className="flex items-center justify-center px-4 py-3 bg-white border border-yellow-200 rounded-lg hover:bg-yellow-50 transition-colors">
            <TrendingUp className="h-5 w-5 text-yellow-600 mr-2" />
            <span className="font-medium text-yellow-600">Accelerate Enrollment</span>
          </button>
          
          <button className="flex items-center justify-center px-4 py-3 bg-white border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
            <DollarSign className="h-5 w-5 text-green-600 mr-2" />
            <span className="font-medium text-green-600">Implement Cost Savings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;