import React from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { CTASection } from './CTASection';
import { GoToTop } from './GoToTop';

export const JoinUsPage = () => {
  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <h1 className="text-5xl font-bold text-scaleiq-black mb-8">
            Join Us
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            ScaleIQ is building the future of energy technology. We're looking for talented individuals who are passionate about solving complex problems in the energy sector.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            If you're interested in joining our team, please reach out through our contact page.
          </p>
        </section>
      </div>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};