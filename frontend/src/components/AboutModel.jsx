import React from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { CTASection } from './CTASection';
import { GoToTop } from './GoToTop';

export const AboutModel = () => {
  const modelPrinciples = [
    {
      title: 'Expertise Driven',
      description: 'ScaleIQ engages deeply with oil and gas domain realities before proposing solutions. We work consultatively with engineering, operations, and business teams to understand constraints, decision logic, and risk – ensuring digital and AI initiatives are shaped true operational and human realities, not by abstract best practices.'
    },
    {
      title: 'Pragmatic AI',
      description: 'In oil and gas, this means prioritizing AI use cases that are tightly linked to operational and commercial workflows. By aligning AI investments to specific performance levers, we help organizations move beyond experimentation toward improvements that can be measured, tracked, and sustained over time.'
    },
    {
      title: 'One Cohesive System',
      description: 'We bring an extensive set of technology capabilities and domain expertise together under a unified offering, ensuring data flows consistently, intelligence is applied in context and architecture can be defined organization-wide, not just at project level. This cohesion reduces complexity, improves reliability, and enables organizations to scale digital capabilities with confidence.'
    },
    {
      title: 'Eliminate Data Fragmentation',
      description: 'We address data fragmentation by connecting siloed systems across upstream, midstream, and downstream environments. Our approach establishes coherent data flows, governance, and integration patterns that enable consistent access to trusted data across teams, systems, and use cases.'
    },
    {
      title: 'Solutions Oriented',
      description: 'ScaleIQ is driven by outcomes, not offerings. We design and deliver solutions that cut across tools, platforms, and vendors—focusing on what needs to work end to end rather than optimizing individual components in isolation.'
    }
  ];

  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-sm text-gray-500 mb-4">About &gt; The ScaleIQ Model</div>
          <h1 className="text-5xl font-bold text-scaleiq-black mb-8">
            The ScaleIQ Model
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Technology investments often exist, talent is in place, and data is available - yet operational impact remains uneven because change is introduced in pieces rather than as a coherent system. The ScaleIQ Model addresses this by providing a unifying structure that connects digital initiatives to how transformation happens on the ground.
          </p>
        </section>

        {/* Visual Banner */}
        <section className="bg-scaleiq-black py-12 mb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-scaleiq-gold">
              Digital Supply Networks Transforming Operations for Oil and Gas
            </h2>
          </div>
        </section>

        {/* Model Principles */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {modelPrinciples.map((principle, index) => (
              <div key={index} className="border-l-4 border-scaleiq-gold pl-8 py-4">
                <h3 className="text-2xl font-bold text-scaleiq-black mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {principle.description}
                </p>
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