import React from 'react';
import { 
  FlaskConical, 
  MapPin, 
  Database, 
  FileCheck, 
  BarChart3, 
  Users, 
  ChevronRight,
  Zap,
  Shield,
  TrendingUp,
  Brain
} from 'lucide-react';

import HakaseLogo from "../assets/Hakase Logo Color_1750088056790.png";


interface LandingPageProps {
  onShowAuth: (mode: 'login' | 'signup') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onShowAuth }) => {
  const features = [
    {
      icon: FlaskConical,
      title: 'Protocol Optimization',
      description: 'AI-generated protocols using ChemBERTa and MolT5 models trained on molecular structures and clinical outcomes.',
      items: ['CDISC-compliant design', 'Risk-based monitoring', 'Adaptive trial capabilities']
    },
    {
      icon: MapPin,
      title: 'Site Selection & Performance',
      description: 'Predict site performance with 92% accuracy using historical enrollment data and investigator profiles.',
      items: ['PI performance analytics', 'Geographic optimization', 'Enrollment forecasting']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Automated data capture, cleaning, and validation with real-time quality monitoring.',
      items: ['EDC integration', 'SDTM mapping', 'Query automation']
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliance',
      description: 'Generate submission-ready documents including Define.xml, ADRG, and regulatory briefings.',
      items: ['21 CFR Part 11 compliance', 'Audit trail management', 'Regulatory intelligence']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Real-time trial monitoring with predictive analytics for timeline and budget optimization.',
      items: ['Enrollment prediction', 'Risk assessment', 'Cost optimization']
    },
    {
      icon: Users,
      title: 'Patient Recruitment',
      description: 'AI-powered patient matching and recruitment strategies to accelerate enrollment by 42%.',
      items: ['Eligibility screening', 'Digital recruitment', 'Retention optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
               <img
                src={HakaseLogo}
                alt="Hakase AI Logo"
                className="h-10 w-auto"
              />
              {/* <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hakase AI
              </span> */}
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onShowAuth('login')}
                className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                Sign In
              </button>
              {/* <button
                onClick={() => onShowAuth('signup')}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </button> */}
              <button
                onClick={() => onShowAuth('signup')}
                className="px-6 py-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-lg font-medium
                          hover:from-sky-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105
                          shadow-md hover:shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            {/* <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Revolutionize Clinical Trials with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1> */}
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Revolutionize Clinical Trials with{' '}<br/>
              <span className="bg-gradient-to-r from-sky-400 to-sky-500 bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Transform your clinical research with advanced AI models, predictive analytics, and automated compliance. 
              Accelerate trials by 42% while ensuring regulatory excellence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* <button
              onClick={() => onShowAuth('signup')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </button> */}
            <button
              onClick={() => onShowAuth('signup')}
              className="px-8 py-4 bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-xl font-semibold text-lg 
                        hover:from-sky-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 
                        shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">42%</div>
              <div className="text-slate-600">Faster Enrollment</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">92%</div>
              <div className="text-slate-600">Site Performance Accuracy</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-slate-600">Regulatory Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive AI-Powered Platform
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From protocol design to regulatory submission, Hakase AI covers every aspect of your clinical trial journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group"
                >
                  <div className="flex items-center mb-6">
                    {/* <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div> */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-sky-100 to-sky-200 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="h-6 w-6 text-sky-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-slate-700">
                        <ChevronRight className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-400 to-blue-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Clinical Trials?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join leading pharmaceutical companies using Hakase AI to accelerate research and improve patient outcomes.
          </p>
          <button
            onClick={() => onShowAuth('signup')}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Free Trial Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <img
                src={HakaseLogo}
                alt="Hakase AI Logo"
                className="h-10 w-auto"
              />
          </div>
          <div className="text-center text-slate-400">
            <p>&copy; 2025 Hakase AI. All rights reserved. Revolutionizing clinical research with AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;