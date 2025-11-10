import React, { useState } from 'react';
import { DollarSign, MapPin, Users, TrendingDown, AlertCircle, Settings } from 'lucide-react';

const CostAnalysis: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('USA');
  
  const regions = [
    { code: 'USA', name: 'United States', flag: '🇺🇸' },
    { code: 'EUR', name: 'Europe', flag: '🇪🇺' },
    { code: 'APAC', name: 'Asia Pacific', flag: '🌏' },
    { code: 'LATAM', name: 'Latin America', flag: '🌎' }
  ];

  const costData = {
    USA: {
      totalCost: 57196669.50,
      perParticipant: 635518.55,
      breakdown: [
        { feature: 'num_interventions_total', description: 'Total number of interventions per subject', value: 84, unitCost: 76.15, totalCost: 6396.60 },
        { feature: 'phase', description: 'Phase', value: 2, unitCost: 314984.65, totalCost: 629969.30 },
        { feature: 'sample_size', description: 'Number of subjects (sample size)', value: 90, unitCost: 0, totalCost: 0.00 },
        { feature: 'constant', description: 'Constant', value: 1, unitCost: -847.35, totalCost: -847.35 },
        { feature: 'site_management', description: 'Site management and monitoring', value: 12, unitCost: 125000, totalCost: 1500000.00 },
        { feature: 'regulatory_costs', description: 'Regulatory submission costs', value: 1, unitCost: 850000, totalCost: 850000.00 },
        { feature: 'data_management', description: 'Data management and analysis', value: 90, unitCost: 15000, totalCost: 1350000.00 }
      ]
    }
  };

  const optimizations = [
    {
      title: 'Site Selection Optimization',
      description: 'Use AI-powered site selection to reduce per-patient costs',
      potential_savings: 8500000,
      impact: 'High',
      timeline: '2-3 months'
    },
    {
      title: 'Risk-Based Monitoring',
      description: 'Implement adaptive monitoring to reduce site visit costs',
      potential_savings: 4200000,
      impact: 'Medium',
      timeline: '1-2 months'
    },
    {
      title: 'Digital Patient Recruitment',
      description: 'Leverage digital channels to reduce recruitment timeline',
      potential_savings: 2800000,
      impact: 'Medium',
      timeline: '3-6 months'
    },
    {
      title: 'ePRO Implementation',
      description: 'Electronic patient-reported outcomes to reduce data collection costs',
      potential_savings: 1500000,
      impact: 'Low',
      timeline: '1-2 months'
    }
  ];

  const currentData = costData[selectedRegion as keyof typeof costData];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Clinical Trial Cost Analysis
          </h1>
          <p className="text-xl text-slate-600">
            AI-powered cost estimation and optimization recommendations
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {regions.map((region) => (
              <option key={region.code} value={region.code}>
                {region.flag} {region.name}
              </option>
            ))}
          </select>
          
          <button className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
            <Settings className="h-4 w-4 mr-2" />
            Weight Profile
          </button>
        </div>
      </div>

      {/* Cost Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8">
          <div className="flex items-center mb-4">
            <DollarSign className="h-8 w-8 mr-3" />
            <h3 className="text-xl font-semibold">Total Trial Cost</h3>
          </div>
          <p className="text-3xl font-bold mb-2">
            ${currentData.totalCost.toLocaleString()}
          </p>
          <p className="text-blue-100">Based on current protocol design</p>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 mr-3" />
            <h3 className="text-xl font-semibold">Cost per Participant</h3>
          </div>
          <p className="text-3xl font-bold mb-2">
            ${currentData.perParticipant.toLocaleString()}
          </p>
          <p className="text-purple-100">Including all study activities</p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8">
          <div className="flex items-center mb-4">
            <TrendingDown className="h-8 w-8 mr-3" />
            <h3 className="text-xl font-semibold">Potential Savings</h3>
          </div>
          <p className="text-3xl font-bold mb-2">
            ${(optimizations.reduce((sum, opt) => sum + opt.potential_savings, 0)).toLocaleString()}
          </p>
          <p className="text-green-100">Through AI optimization</p>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">
          Cost Breakdown by Component
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 font-semibold text-slate-700">Feature</th>
                <th className="text-left py-3 font-semibold text-slate-700">Description</th>
                <th className="text-right py-3 font-semibold text-slate-700">Value</th>
                <th className="text-right py-3 font-semibold text-slate-700">Unit Cost (USD)</th>
                <th className="text-right py-3 font-semibold text-slate-700">Total Cost (USD)</th>
              </tr>
            </thead>
            <tbody>
              {currentData.breakdown.map((item, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-4 font-medium text-slate-900">{item.feature}</td>
                  <td className="py-4 text-slate-600">{item.description}</td>
                  <td className="py-4 text-right text-slate-900">{item.value}</td>
                  <td className="py-4 text-right text-slate-900">{item.unitCost.toLocaleString()}</td>
                  <td className={`py-4 text-right font-semibold ${
                    item.totalCost >= 0 ? 'text-slate-900' : 'text-green-600'
                  }`}>
                    {item.totalCost >= 0 ? '$' : '-$'}{Math.abs(item.totalCost).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-slate-300">
                <td colSpan={4} className="py-4 font-bold text-slate-900">Total Cost</td>
                <td className="py-4 text-right font-bold text-slate-900 text-lg">
                  ${currentData.totalCost.toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Optimization Recommendations */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="flex items-center mb-6">
          <TrendingDown className="h-6 w-6 text-green-600 mr-3" />
          <h2 className="text-xl font-semibold text-slate-900">
            Cost Optimization Recommendations
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {optimizations.map((optimization, index) => (
            <div key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-slate-900">{optimization.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  optimization.impact === 'High' ? 'bg-red-100 text-red-800' :
                  optimization.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {optimization.impact} Impact
                </span>
              </div>
              
              <p className="text-slate-600 mb-4">{optimization.description}</p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-green-600">
                    ${optimization.potential_savings.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-500">Potential Savings</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-slate-700">{optimization.timeline}</p>
                  <p className="text-sm text-slate-500">Implementation</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Configuration Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-amber-600 mr-3 mt-0.5" />
          <div>
            <h3 className="font-semibold text-amber-900 mb-2">Weight Profile Configuration</h3>
            <p className="text-amber-800 mb-4">
              The cost is calculated using weights which you can configure in your Weight Profile under User settings. 
              You will need to configure a weight profile for your preferred location and disease area. 
              The default weight profile is an example and may not give a correct cost for your trial.
            </p>
            <button className="px-4 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors font-medium">
              Configure Weight Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostAnalysis;