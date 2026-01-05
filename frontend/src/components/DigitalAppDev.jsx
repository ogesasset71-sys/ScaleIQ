import React from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { CTASection } from './CTASection';
import { GoToTop } from './GoToTop';

export const DigitalAppDev = () => {
  const useCases = [
    'Automating manual operational or reporting workflows',
    'Enhancing existing applications without architectural change',
    'UI and usability improvements for operators and analysts',
    'Digitizing and automating approval-heavy workflows',
    'Eliminating manual reconciliation in planning and scheduling',
    'Automating compliance and audit'
  ];

  const approaches = [
    {
      title: 'Domain-Aware Application Design',
      description: 'We design and enhance applications with a deep understanding of the workflows they support – ensuring functionality, performance, and usability reflect real operational needs.'
    },
    {
      title: 'Lifecycle Ownership',
      description: 'From development and enhancement to maintenance and optimization, we retain accountability across the application lifecycle, reducing fragmentation between build and run teams.'
    },
    {
      title: 'Integration-First',
      description: 'Applications are designed to coexist with existing systems, data platforms, and interfaces—minimizing disruption while improving interoperability.'
    },
    {
      title: 'Operational Stability',
      description: 'We manage applications in live environments, enabling upgrades, enhancements, and fixes without impacting critical operations.'
    }
  ];

  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-sm text-gray-500 mb-4">Digital Engineering &gt; Application Development & Management</div>
          <h1 className="text-5xl font-bold text-scaleiq-black mb-8">
            When Digital Needs to Perform in Real-World Conditions
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Energy companies operate in complex, live environments where applications are central to daily operations and cannot afford disruption. We focus on developing, modernizing, and managing applications that must integrate with legacy systems, support domain-specific workflows, and evolve over time without compromising stability.
          </p>
        </section>

        <section className="bg-gray-50 py-16 mb-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-scaleiq-black mb-8">Clients engage ScaleIQ when they face challenges such as:</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
                <span className="text-gray-700">Business-critical applications constrained by legacy architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
                <span className="text-gray-700">Custom applications supporting complex domain workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
                <span className="text-gray-700">Growing maintenance overhead limiting innovation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
                <span className="text-gray-700">Difficulty balancing modernization with operational continuity</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-scaleiq-black mb-8">Process Automation & Operational Enhancement</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We support targeted automation and enhancements to existing applications that reduce manual effort and operational friction. This includes workflow automation, reporting enhancements, interface improvements, and incremental feature additions to business-critical systems.
          </p>
          <h3 className="text-2xl font-bold text-scaleiq-black mb-6">Typical Use Cases</h3>
          <ul className="space-y-3">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
                <span className="text-gray-700">{useCase}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-scaleiq-black py-16 mb-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-scaleiq-gold mb-8">How We Approach Energy ADM</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approaches.map((approach, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-scaleiq-white mb-3">{approach.title}</h3>
                  <p className="text-gray-300">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="p-8 border-2 border-scaleiq-gold rounded-lg">
            <h3 className="text-2xl font-bold text-scaleiq-black mb-4">Case Study: MOC Modernization</h3>
            <p className="text-gray-700 leading-relaxed">
              MOC processes were handled through a mix of email, spreadsheets, and legacy applications, slowing approvals and increasing operational risk. Lack of workflow automation and system integration made it difficult to ensure traceability, accountability, and timely execution.
            </p>
          </div>
        </section>
      </div>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};