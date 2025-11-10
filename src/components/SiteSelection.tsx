import React from 'react';
import { MapPin, TrendingUp, Users, Clock, Star, Award } from 'lucide-react';

const SiteSelection: React.FC = () => {
  const topSites = [
    {
      id: 1,
      name: 'Johns Hopkins Medical Center',
      location: 'Baltimore, MD',
      score: 94,
      enrollment_rate: 85,
      pi_rating: 4.8,
      experience: '15+ Phase II/III trials',
      specialty: 'Oncology',
      projected_enrollment: 45,
      timeline: '3-4 months'
    },
    {
      id: 2,
      name: 'Mayo Clinic Research',
      location: 'Rochester, MN',
      score: 91,
      enrollment_rate: 88,
      pi_rating: 4.9,
      experience: '20+ Phase II/III trials',
      specialty: 'Cardiology',
      projected_enrollment: 42,
      timeline: '2-3 months'
    },
    {
      id: 3,
      name: 'UCSF Clinical Research',
      location: 'San Francisco, CA',
      score: 89,
      enrollment_rate: 82,
      pi_rating: 4.7,
      experience: '12+ Phase II/III trials',
      specialty: 'Neurology',
      projected_enrollment: 38,
      timeline: '4-5 months'
    },
    {
      id: 4,
      name: 'MD Anderson Cancer Center',
      location: 'Houston, TX',
      score: 93,
      enrollment_rate: 90,
      pi_rating: 4.8,
      experience: '25+ Phase II/III trials',
      specialty: 'Oncology',
      projected_enrollment: 48,
      timeline: '2-3 months'
    }
  ];

  const metrics = [
    { label: 'Predicted Accuracy', value: '92%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Average Enrollment Rate', value: '86%', icon: Users, color: 'text-blue-600' },
    { label: 'Avg. Time to First Patient', value: '3.2 months', icon: Clock, color: 'text-purple-600' },
    { label: 'Sites Evaluated', value: '247', icon: MapPin, color: 'text-orange-600' }
  ];

  const geographicData = [
    { region: 'Northeast', sites: 8, enrollment: 85, color: 'bg-blue-500' },
    { region: 'Southeast', sites: 12, enrollment: 78, color: 'bg-green-500' },
    { region: 'Midwest', sites: 6, enrollment: 82, color: 'bg-purple-500' },
    { region: 'West Coast', sites: 10, enrollment: 88, color: 'bg-orange-500' }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Site Selection & Performance Analytics
        </h1>
        <p className="text-xl text-slate-600">
          AI-powered site recommendations with 92% accuracy prediction
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <div className="flex items-center">
                <Icon className={`h-8 w-8 ${metric.color} mr-4`} />
                <div>
                  <p className="text-sm font-medium text-slate-600">{metric.label}</p>
                  <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Top Recommended Sites */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="flex items-center mb-6">
          <Star className="h-6 w-6 text-yellow-500 mr-3" />
          <h2 className="text-xl font-semibold text-slate-900">
            Top Recommended Sites
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {topSites.map((site) => (
            <div key={site.id} className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{site.name}</h3>
                  <p className="text-slate-600 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {site.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center mb-1">
                    <Award className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-xl font-bold text-green-600">{site.score}</span>
                  </div>
                  <p className="text-sm text-slate-500">Site Score</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-slate-600">Enrollment Rate</p>
                  <p className="text-lg font-semibold text-slate-900">{site.enrollment_rate}%</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">PI Rating</p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-lg font-semibold text-slate-900">{site.pi_rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-slate-600">Specialty: <span className="font-medium text-slate-900">{site.specialty}</span></p>
                <p className="text-sm text-slate-600">Experience: <span className="font-medium text-slate-900">{site.experience}</span></p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div>
                  <p className="text-sm text-slate-600">Projected Enrollment</p>
                  <p className="font-semibold text-blue-600">{site.projected_enrollment} patients</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600">Timeline</p>
                  <p className="font-semibold text-slate-900">{site.timeline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Geographic Distribution */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            Geographic Optimization
          </h2>
          
          <div className="space-y-4">
            {geographicData.map((region, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full ${region.color} mr-3`}></div>
                  <div>
                    <p className="font-semibold text-slate-900">{region.region}</p>
                    <p className="text-sm text-slate-600">{region.sites} recommended sites</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">{region.enrollment}%</p>
                  <p className="text-sm text-slate-600">Avg. Enrollment</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Optimization Insight</h3>
            <p className="text-blue-800 text-sm">
              Focus on West Coast and Northeast regions for optimal enrollment rates. 
              Consider adding 2-3 backup sites in the Southeast region.
            </p>
          </div>
        </div>

        {/* PI Performance Analytics */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            PI Performance Analytics
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Average PI Experience</span>
              <span className="font-semibold text-slate-900">16.5 years</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Previous Trial Completion Rate</span>
              <span className="font-semibold text-green-600">94%</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-slate-600">On-Time Enrollment Rate</span>
              <span className="font-semibold text-blue-600">87%</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Data Quality Score</span>
              <span className="font-semibold text-purple-600">91/100</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Key Strengths</h3>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• High-quality investigator network</li>
              <li>• Strong historical performance data</li>
              <li>• Diverse therapeutic area expertise</li>
              <li>• Excellent patient retention rates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Enrollment Forecasting */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">
          Enrollment Forecasting
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Conservative Scenario</h3>
            <p className="text-2xl font-bold text-blue-700 mb-1">14 months</p>
            <p className="text-blue-600 text-sm">Full enrollment timeline</p>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-blue-600 mb-1">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
            <h3 className="font-semibold text-green-900 mb-2">Realistic Scenario</h3>
            <p className="text-2xl font-bold text-green-700 mb-1">11 months</p>
            <p className="text-green-600 text-sm">Expected timeline</p>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-green-600 mb-1">
                <span>Confidence</span>
                <span>87%</span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
            <h3 className="font-semibold text-purple-900 mb-2">Optimistic Scenario</h3>
            <p className="text-2xl font-bold text-purple-700 mb-1">8 months</p>
            <p className="text-purple-600 text-sm">Best case timeline</p>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-purple-600 mb-1">
                <span>Probability</span>
                <span>35%</span>
              </div>
              <div className="w-full bg-purple-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteSelection;