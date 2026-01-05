import React from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { CTASection } from './CTASection';
import { GoToTop } from './GoToTop';

export const AboutPartners = () => {
  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-sm text-gray-500 mb-4">About &gt; Partners & Growth</div>
          <h1 className="text-5xl font-bold text-scaleiq-black mb-8">
            Partners & Growth
          </h1>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-scaleiq-black mb-4">Portfolio Companies</h2>
              <p className="text-gray-700">Content coming soon.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-scaleiq-black mb-4">Strategic Partnerships</h2>
              <p className="text-gray-700">Content coming soon.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-scaleiq-black mb-4">Governance & ESG</h2>
              <p className="text-gray-700">Content coming soon.</p>
            </div>
          </div>
        </section>
      </div>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};