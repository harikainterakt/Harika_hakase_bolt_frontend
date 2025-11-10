import React from 'react';
import { AlertTriangle, CheckCircle, Info, TrendingUp, Users, Clock, FileText } from 'lucide-react';

const ProtocolInsights: React.FC = () => {
  const insights = {
    issues: [
      {
        severity: 'high',
        title: 'Primary Endpoint Statistical Power',
        description: 'Current sample size may be insufficient for detecting a 15% difference in efficacy with 80% power.',
        recommendation: 'Consider increasing sample size from 120 to 156 participants per arm.'
      },
      {
        severity: 'medium',
        title: 'Inclusion Criteria Overlap',
        description: 'Age range criteria may exclude significant patient population (65-75 years).',
        recommendation: 'Review upper age limit to maximize enrollment while maintaining safety.'
      },
      {
        severity: 'medium',
        title: 'Visit Schedule Optimization',
        description: 'Current visit frequency may impact patient retention in remote locations.',
        recommendation: 'Consider hybrid visits with telemedicine components for follow-ups.'
      }
    ],
    strengths: [
      {
        title: 'CDISC CDASH Compliance',
        description: 'Protocol aligns with CDISC standards for data collection and exchange.',
        impact: 'Facilitates regulatory submission and data integration'
      },
      {
        title: 'Adaptive Design Elements',
        description: 'Well-structured interim analysis plan with pre-specified stopping rules.',
        impact: 'Enables early efficacy/futility decisions and resource optimization'
      },
      {
        title: 'Patient Stratification',
        description: 'Comprehensive biomarker stratification strategy implemented.',
        impact: 'Improves statistical power and enables precision medicine approach'
      },
      {
        title: 'Risk-Based Monitoring',
        description: 'Protocol includes detailed risk assessment and mitigation strategies.',
        impact: 'Reduces monitoring costs by 30-40% while maintaining data quality'
      }
    ],
    considerations: [
      {
        category: 'Operational',
        title: 'Site Feasibility Assessment',
        description: 'Consider conducting feasibility surveys at proposed sites to validate enrollment projections.',
        priority: 'Medium'
      },
      {
        category: 'Regulatory',
        title: 'Pediatric Investigation Plan',
        description: 'EU requires PIP submission - consider early engagement with PDCO.',
        priority: 'High'
      },
      {
        category: 'Technology',
        title: 'ePRO Implementation',
        description: 'Patient-reported outcomes could be digitized for real-time monitoring.',
        priority: 'Low'
      }
    ]
  };

  const stats = [
    { label: 'Protocol Complexity Score', value: '7.2/10', trend: 'neutral' },
    { label: 'Regulatory Risk', value: 'Medium', trend: 'good' },
    { label: 'Enrollment Feasibility', value: '85%', trend: 'good' },
    { label: 'Timeline Confidence', value: '78%', trend: 'warning' }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Protocol Analysis & Insights
        </h1>
        <p className="text-xl text-slate-600">
          AI-powered analysis of your clinical trial protocol
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
              <div className={`w-3 h-3 rounded-full ${
                stat.trend === 'good' ? 'bg-green-500' :
                stat.trend === 'warning' ? 'bg-yellow-500' :
                'bg-slate-400'
              }`}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Issues Requiring Attention */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
            <h2 className="text-xl font-semibold text-slate-900">
              Issues Requiring Attention
            </h2>
          </div>
          
          <div className="space-y-6">
            {insights.issues.map((issue, index) => (
              <div key={index} className="border-l-4 border-red-500 pl-4">
                <div className="flex items-center mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    issue.severity === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {issue.severity.toUpperCase()}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{issue.title}</h3>
                <p className="text-slate-600 mb-2 text-sm">{issue.description}</p>
                <p className="text-blue-600 text-sm font-medium">{issue.recommendation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths Identified */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex items-center mb-6">
            <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-slate-900">
              Strengths Identified
            </h2>
          </div>
          
          <div className="space-y-6">
            {insights.strengths.map((strength, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-slate-900 mb-2">{strength.title}</h3>
                <p className="text-slate-600 mb-2 text-sm">{strength.description}</p>
                <p className="text-green-600 text-sm font-medium">{strength.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Areas for Consideration */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="flex items-center mb-6">
          <Info className="h-6 w-6 text-blue-600 mr-3" />
          <h2 className="text-xl font-semibold text-slate-900">
            Areas for Consideration
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.considerations.map((consideration, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {consideration.category}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  consideration.priority === 'High' ? 'bg-red-100 text-red-800' :
                  consideration.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {consideration.priority}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{consideration.title}</h3>
              <p className="text-slate-600 text-sm">{consideration.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">
          Recommended Next Steps
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center justify-center px-4 py-3 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
            <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
            <span className="font-medium text-blue-600">Optimize Sample Size</span>
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-white border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
            <Users className="h-5 w-5 text-purple-600 mr-2" />
            <span className="font-medium text-purple-600">Site Feasibility</span>
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-white border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
            <Clock className="h-5 w-5 text-green-600 mr-2" />
            <span className="font-medium text-green-600">Timeline Review</span>
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-white border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors">
            <FileText className="h-5 w-5 text-orange-600 mr-2" />
            <span className="font-medium text-orange-600">Export Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProtocolInsights;