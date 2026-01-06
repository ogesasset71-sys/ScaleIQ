import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const WhatWeDoTabbedSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('digital');

  const tabs = [
    {
      id: 'digital',
      label: 'Digital Engineering',
      subtitle: 'Services',
      description: 'Delivering digital transformation that works in complex, asset-heavy energy environments - designed for reliability, scale, and real-world operations.',
      path: '/digital/app-dev'
    },
    {
      id: 'products',
      label: 'Products &',
      subtitle: 'Platforms',
      description: 'Suite of industry-leading products that support critical oil & gas sector workflows, analytics, and operational decision-making.',
      path: '/products/ogesone'
    },
    {
      id: 'gcc',
      label: 'GCC Setup &',
      subtitle: 'Operations',
      description: 'Designing and fulfilling GCC centers in India for oil & gas companies to strengthen technology staffing and delivery – not just reduce costs.',
      path: '/gcc-solutions'
    }
  ];

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-24 bg-scaleiq-white" data-testid="what-we-do-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl lg:text-6xl font-bold text-scaleiq-black text-center mb-16">
          What We Do
        </h2>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 font-medium text-lg transition-all relative ${
                activeTab === tab.id
                  ? 'text-scaleiq-black border-b-4 border-scaleiq-gold'
                  : 'text-gray-500 hover:text-scaleiq-black border-b-4 border-transparent'
              }`}
              data-testid={`tab-${tab.id}`}
            >
              <div className="text-center">
                <div>{tab.label}</div>
                <div className="text-sm">{tab.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <div className="p-12 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-scaleiq-gold transition-all">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-scaleiq-gold/10 text-scaleiq-gold text-sm font-medium rounded-full mb-4">
                {activeContent.label} {activeContent.subtitle}
              </span>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {activeContent.description}
            </p>
            
            <button
              onClick={() => navigate(activeContent.path)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-scaleiq-black text-scaleiq-white hover:bg-scaleiq-gold hover:text-scaleiq-black font-medium rounded-lg transition-all"
              data-testid="learn-more-button"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};