import React from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { CTASection } from './CTASection';
import { GoToTop } from './GoToTop';

export const ServeOilGas = () => {
  const valueChain = [
    {
      title: 'Upstream: Exploration, Drilling & Production',
      description: 'Upstream operations combine subsurface uncertainty, complex engineering workflows, and safety-critical execution. Digital and AI initiatives must operate alongside domain expertise, live field operations, and evolving asset conditions.'
    },
    {
      title: 'Midstream',
      description: 'Transportation, storage, and logistics operations that connect production to markets.'
    },
    {
      title: 'Downstream',
      description: 'Refining, processing, and manufacturing operations that transform crude oil into finished products.'
    },
    {
      title: 'Distribution & Retail',
      description: 'Final distribution networks and retail operations serving end customers.'
    }
  ];

  const whereWeHelp = [
    'Subsurface data integration and interpretation workflows',
    'Drilling and production optimization',
    'AI-enabled decision support with human-in-the-loop controls',
    'Integration across subsurface, operations, and engineering systems'
  ];

  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-sm text-gray-500 mb-4">Whom We Serve &gt; Oil & Gas Companies</div>
          <h1 className="text-5xl font-bold text-scaleiq-black mb-8">
            Specialized Solutions for the Full Oil & Gas Value Chain
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            ScaleIQ partners with oil & gas companies operating across upstream, midstream, downstream, and retail environments. Our work spans the entire value chain, addressing digital and AI challenges that cut across assets, systems, and organizational boundaries – where fragmented approaches typically fail.
          </p>
        </section>

        {/* When Clients Work With Us */}
        <section className="bg-gray-50 py-16 mb-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-scaleiq-black mb-8">Clients work with us when they need:</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
                <span className="text-gray-700">A partner who understands oil & gas domain complexity</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
                <span className="text-gray-700">Accountability across the full lifecycle, not handoffs between teams</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
                <span className="text-gray-700">Solutions that integrate across upstream, midstream, and downstream</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
                <span className="text-gray-700">Digital and AI initiatives that deliver measurable, sustained impact</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Value Chain */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-scaleiq-black mb-8 text-center">
            How We Support Oil & Gas Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueChain.map((item, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-scaleiq-gold transition-all">
                <h3 className="text-xl font-bold text-scaleiq-black mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Upstream Detail */}
        <section className="bg-scaleiq-black py-16 mb-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-scaleiq-gold mb-6">Where We Help</h2>
            <ul className="space-y-3">
              {whereWeHelp.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
                  <span className="text-scaleiq-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Case Study */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="p-8 border-2 border-scaleiq-gold rounded-lg">
            <h3 className="text-2xl font-bold text-scaleiq-black mb-4">Case Study: Subsurface Prospecting</h3>
            <p className="text-gray-700 leading-relaxed">
              Subsurface data is scattered across seismic, logs, drilling, cores, and simulations, making full-field interpretation slow and inconsistent. Complex geology and limited data integration lead to uncertainty in reservoir mapping and higher exploration risk.
            </p>
          </div>
        </section>

        {/* Support Areas */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-scaleiq-black mb-3">System-Level Digital Engineering</h3>
                <p className="text-gray-700">Designing digital and AI capabilities that operate as part of the core operational ecosystem, not as standalone solutions.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-scaleiq-black mb-3">Data Integration & Governance</h3>
                <p className="text-gray-700">Connecting siloed legacy and modern systems, improving data quality, and aligning governance with industry standards such as OSDU.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-scaleiq-black mb-3">Domain-Driven AI Workflows</h3>
                <p className="text-gray-700">Embedding AI into complex workflows across exploration, production, transportation, refining, supply, and retail—with human judgment and safety constraints built in.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-scaleiq-black mb-3">Pragmatic Execution</h3>
                <p className="text-gray-700">Implementing solutions in phases that respect operational continuity, regulatory oversight, and long asset lifecycles.</p>
              </div>
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