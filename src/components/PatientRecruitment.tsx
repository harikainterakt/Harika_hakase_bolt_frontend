import React from 'react';
import { Users, Target, TrendingUp, MapPin, Calendar, Award } from 'lucide-react';

const PatientRecruitment: React.FC = () => {
  const recruitmentMetrics = [
    { label: 'Enrollment Acceleration', value: '42%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Screening Success Rate', value: '78%', icon: Target, color: 'text-blue-600' },
    { label: 'Patient Retention', value: '94%', icon: Award, color: 'text-purple-600' },
    { label: 'Digital Reach', value: '125K', icon: Users, color: 'text-orange-600' }
  ];

  const eligibilityScreening = {
    totalScreened: 456,
    eligible: 312,
    enrolled: 243,
    screenFailures: [
      { reason: 'Inclusion criteria not met', count: 89, percentage: 62 },
      { reason: 'Exclusion criteria present', count: 34, percentage: 24 },
      { reason: 'Informed consent declined', count: 21, percentage: 14 }
    ]
  };

  const digitalChannels = [
    {
      channel: 'Social Media Advertising',
      reach: 45000,
      clicks: 2850,
      conversions: 127,
      cost_per_enrollment: 285,
      roi: 340
    },
    {
      channel: 'Google Ads',
      reach: 32000,
      clicks: 1980,
      conversions: 89,
      cost_per_enrollment: 315,
      roi: 290
    },
    {
      channel: 'Patient Registries',
      reach: 28000,
      clicks: 1450,
      conversions: 156,
      cost_per_enrollment: 195,
      roi: 485
    },
    {
      channel: 'Physician Referrals',
      reach: 15000,
      clicks: 890,
      conversions: 98,
      cost_per_enrollment: 125,
      roi: 620
    }
  ];

  const retentionStrategies = [
    {
      strategy: 'Digital Reminders',
      description: 'Automated SMS and email reminders for visits and medication',
      implementation: 'Active',
      impact: '+15% retention',
      cost: 'Low'
    },
    {
      strategy: 'Transportation Support',
      description: 'Ride vouchers and parking reimbursement for study visits',
      implementation: 'Active',
      impact: '+22% retention',
      cost: 'Medium'
    },
    {
      strategy: 'Telemedicine Visits',
      description: 'Virtual follow-up visits for routine assessments',
      implementation: 'Pilot',
      impact: '+18% retention',
      cost: 'Low'
    },
    {
      strategy: 'Patient Navigator Program',
      description: 'Dedicated support staff for patient questions and concerns',
      implementation: 'Planned',
      impact: '+25% retention',
      cost: 'High'
    }
  ];

  const patientDemographics = [
    { age_group: '18-30', percentage: 15, enrolled: 37 },
    { age_group: '31-45', percentage: 28, enrolled: 68 },
    { age_group: '46-60', percentage: 32, enrolled: 78 },
    { age_group: '61-75', percentage: 25, enrolled: 60 }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Patient Recruitment & Engagement
        </h1>
        <p className="text-xl text-slate-600">
          AI-powered patient matching and recruitment strategies
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recruitmentMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <div className="flex items-center">
                <Icon className={`h-8 w-8 ${metric.color} mr-4`} />
                <div>
                  <p className="text-sm font-medium text-slate-600">{metric.label}</p>
                  <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Eligibility Screening Funnel */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex items-center mb-6">
            <Target className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-slate-900">
              Eligibility Screening Funnel
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-blue-900">Total Screened</span>
                <span className="text-2xl font-bold text-blue-700">{eligibilityScreening.totalScreened}</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-green-900">Eligible Patients</span>
                <span className="text-2xl font-bold text-green-700">{eligibilityScreening.eligible}</span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-3">
                <div 
                  className="bg-green-600 h-3 rounded-full" 
                  style={{ width: `${(eligibilityScreening.eligible / eligibilityScreening.totalScreened) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-purple-900">Successfully Enrolled</span>
                <span className="text-2xl font-bold text-purple-700">{eligibilityScreening.enrolled}</span>
              </div>
              <div className="w-full bg-purple-200 rounded-full h-3">
                <div 
                  className="bg-purple-600 h-3 rounded-full" 
                  style={{ width: `${(eligibilityScreening.enrolled / eligibilityScreening.totalScreened) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold text-slate-900 mb-4">Screen Failure Analysis</h3>
            <div className="space-y-3">
              {eligibilityScreening.screenFailures.map((failure, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">{failure.reason}</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-slate-900 mr-2">{failure.count}</span>
                    <div className="w-16 bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-red-500 h-2 rounded-full" 
                        style={{ width: `${failure.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Digital Recruitment Performance */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-slate-900">
              Digital Channel Performance
            </h2>
          </div>
          
          <div className="space-y-4">
            {digitalChannels.map((channel, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-slate-900">{channel.channel}</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {channel.roi}% ROI
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600">Reach</p>
                    <p className="font-semibold text-slate-900">{channel.reach.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Clicks</p>
                    <p className="font-semibold text-slate-900">{channel.clicks.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Conversions</p>
                    <p className="font-semibold text-blue-600">{channel.conversions}</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Cost/Enrollment</p>
                    <p className="font-semibold text-slate-900">${channel.cost_per_enrollment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Retention Optimization */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="flex items-center mb-6">
          <Award className="h-6 w-6 text-purple-600 mr-3" />
          <h2 className="text-xl font-semibold text-slate-900">
            Retention Optimization Strategies
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {retentionStrategies.map((strategy, index) => (
            <div key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-slate-900">{strategy.strategy}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  strategy.implementation === 'Active' ? 'bg-green-100 text-green-800' :
                  strategy.implementation === 'Pilot' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {strategy.implementation}
                </span>
              </div>
              
              <p className="text-slate-600 mb-4 text-sm">{strategy.description}</p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-green-600">{strategy.impact}</p>
                  <p className="text-xs text-slate-500">Expected Impact</p>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    strategy.cost === 'Low' ? 'text-green-600' :
                    strategy.cost === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {strategy.cost} Cost
                  </p>
                  <p className="text-xs text-slate-500">Implementation</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Patient Demographics */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="flex items-center mb-6">
          <Users className="h-6 w-6 text-orange-600 mr-3" />
          <h2 className="text-xl font-semibold text-slate-900">
            Patient Demographics & Distribution
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Age Distribution</h3>
            <div className="space-y-4">
              {patientDemographics.map((demo, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-slate-600">{demo.age_group} years</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-slate-200 rounded-full h-3 mr-3">
                      <div 
                        className="bg-orange-500 h-3 rounded-full" 
                        style={{ width: `${demo.percentage * 3}px` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-slate-900 w-8">{demo.enrolled}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Geographic Distribution</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-700">Northeast Region</span>
                <span className="font-semibold text-slate-900">67 patients (28%)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-700">Southeast Region</span>
                <span className="font-semibold text-slate-900">59 patients (24%)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-700">West Region</span>
                <span className="font-semibold text-slate-900">73 patients (30%)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-700">Midwest Region</span>
                <span className="font-semibold text-slate-900">44 patients (18%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Matching Insights */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">
          AI Patient Matching Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">89%</p>
            <p className="text-sm text-slate-600">Matching Accuracy</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-green-600 mb-2">2.3x</p>
            <p className="text-sm text-slate-600">Faster Patient Identification</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-purple-600 mb-2">156</p>
            <p className="text-sm text-slate-600">AI-Matched Enrollments</p>
          </div>
        </div>
        
        <div className="mt-6 bg-white rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-3">Machine Learning Insights</h3>
          <ul className="text-slate-700 space-y-2">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
              <span>Patients aged 45-60 with comorbidity X show 23% higher enrollment likelihood</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
              <span>Geographic proximity to academic medical centers increases retention by 18%</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
              <span>Digital-first engagement approach shows 42% better conversion rates</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PatientRecruitment;