import React from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { CTASection } from './CTASection';
import { GoToTop } from './GoToTop';

export const AboutInvestors = () => {
  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-sm text-gray-500 mb-4">About &gt; Investors</div>
          <h1 className="text-5xl font-bold text-scaleiq-black mb-8">
            Investor Relations
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Content coming soon.
          </p>
        </section>
      </div>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};