import React from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { CTASection } from './CTASection';
import { GoToTop } from './GoToTop';

export const NewsPage = () => {
  const news = [
    {
      title: 'ScaleIQ Recognized for Excellence in Energy Digital Engineering',
      date: 'March 2026',
      description: 'ScaleIQ was recognized by an industry forum for its work in delivering digital and engineering solutions across complex, asset-intensive energy environments.'
    },
    {
      title: 'ScaleIQ Partners with a Global Energy Major to Support Digital Programs',
      date: 'January 2026',
      description: 'ScaleIQ announced a new engagement with a global energy company to support long-term digital and engineering initiatives across multiple business units.'
    },
    {
      title: 'ScaleIQ Wins Strategic Mandate for Energy GCC Enablement in India',
      date: 'November 2025',
      description: 'ScaleIQ was selected to support the setup and operationalization of an India-based Global Capability Center for a multinational energy organization.'
    },
    {
      title: 'ScaleIQ Expands Partnerships with Leading Technology Providers',
      date: 'September 2026',
      description: 'ScaleIQ strengthened its partner ecosystem to support the delivery of integrated digital, data, and AI solutions for energy and infrastructure clients.'
    },
    {
      title: 'ScaleIQ Recognized as a Trusted Partner for Domain-Led Digital Transformation',
      date: 'June 2025',
      description: 'ScaleIQ received recognition from clients for its domain-driven approach to digital engineering and its focus on delivering practical, production-ready outcomes.'
    }
  ];

  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-sm text-gray-500 mb-4">News & Insights &gt; News</div>
          <h1 className="text-5xl font-bold text-scaleiq-black mb-8">
            News
          </h1>
          <p className="text-xl text-gray-700">
            Perspectives, updates, and thinking from ScaleIQ across energy, oil & gas, digital engineering, GCCs and AI.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {news.map((item, index) => (
              <div key={index} className="p-8 border border-gray-200 rounded-lg hover:border-scaleiq-gold transition-all cursor-pointer">
                <div className="text-sm text-scaleiq-gold font-medium mb-2">{item.date}</div>
                <h3 className="text-2xl font-bold text-scaleiq-black mb-4">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <button className="text-scaleiq-black hover:text-scaleiq-gold font-medium transition-colors">Read</button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};