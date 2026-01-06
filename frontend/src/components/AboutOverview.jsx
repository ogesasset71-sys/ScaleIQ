import React from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { GoToTop } from './GoToTop';
import { useNavigate } from 'react-router-dom';

export const AboutOverview = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-8">
          <div className="text-sm text-gray-500">About &gt; Overview</div>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-scaleiq-black mb-8">
            Transformation Oriented, <span className="text-scaleiq-gold">Grounded in Expertise</span>
          </h1>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              We work across the entire digital spectrum – from legacy systems and brownfield infrastructure to modern data platforms and AI-driven applications – ensuring technology integrates seamlessly into live, regulated, and safety-critical operations
            </p>
            
            <p>
              Our approach is informed by deep domain knowledge across upstream, midstream, and downstream environments, enabling solutions that account for operational continuity, regulatory compliance, asset lifecycles, and scale.
            </p>
            
            <p>
              The result is digital engineering that delivers resilient, system-level outcomes that perform in real-world oil and gas conditions.
            </p>
          </div>
        </section>

        {/* Mission & Vision - Two Column */}
        <section className="bg-scaleiq-black py-20 mb-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border-l-4 border-scaleiq-gold pl-8">
                <h2 className="text-3xl font-bold text-scaleiq-gold mb-6">Our Vision</h2>
                <p className="text-scaleiq-white leading-relaxed text-lg">
                  To become the trusted digital engineering partner to the world's leading energy companies in their transformation journey.
                </p>
              </div>
              
              <div className="border-l-4 border-scaleiq-gold pl-8">
                <h2 className="text-3xl font-bold text-scaleiq-gold mb-6">Our Mission</h2>
                <p className="text-scaleiq-white leading-relaxed text-lg">
                  To solve the real barriers to technology adoption and transformation in the energy sector – through an end-to-end approach to solving complex workflow challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-20">
          <div className="bg-scaleiq-black rounded-2xl overflow-hidden border-4 border-scaleiq-gold/20">
            <div className="aspect-video flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-scaleiq-black to-gray-900"></div>
              <div className="relative z-10 text-center">
                <div className="text-scaleiq-gold text-lg font-medium mb-4">
                  Digital Supply Networks Transforming Operations for Oil and Gas
                </div>
                <div className="text-scaleiq-white text-4xl font-bold">1:59</div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-20">
          <div className="border-l-4 border-scaleiq-gold pl-8 mb-12">
            <h2 className="text-3xl font-bold text-scaleiq-black mb-6">
              Solutions Designed Precisely for the Oil & Gas Industry
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Oil and gas operations span a uniquely broad and interconnected landscape. Each segment operates under distinct technical, operational, and regulatory constraints, yet remains tightly coupled through shared assets, data flows, and commercial dependencies. Digital and AI solutions must therefore function across heterogeneous environments that include field operations, control systems, engineering workflows, enterprise platforms, and customer-facing systems.
            </p>
            
            <p className="font-medium text-scaleiq-black">
              ScaleIQ solves the industry's biggest bottleneck by bridging fragmented tools, fragmented data and highly complex use cases.
            </p>
            
            <p>
              Traditional IT service providers and product companies tend to fragment responsibility across tools, vendors, and handoffs – leaving gaps between domain intent, system behavior, and operational outcomes. ScaleIQ is focused on addressing this gap through an end-to-end, consultative approach grounded in deep oil and gas domain expertise. We work across problem definition, digital architecture, AI workflow design, and system integration – ensuring solutions are shaped by how users align and adopt.
            </p>
            
            <p className="font-medium text-scaleiq-black">
              Our strength lies in treating digital and AI as integral components of the operational ecosystem of oil and gas companies.
            </p>
          </div>
        </section>

        {/* Core Workflows Section */}
        <section className="bg-gray-50 py-20 mb-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Core workflows such as subsurface interpretation, drilling and production optimization, pipeline integrity management and refinery operations strongly depend on domain judgment, safety constraints, regulatory compliance and complex datasets. Digital and AI solutions need to account for operational context, edge cases, and the human-in-the-loop processes that govern real outcomes.
              </p>
              
              <p>
                By treating digital and AI as integral components of interconnected operating systems – across upstream, midstream, distribution and retail – ScaleIQ helps organizations move beyond fragmented initiatives toward intelligent operations that are resilient, trusted and capable of delivering sustained value at scale.
              </p>
            </div>
          </div>
        </section>

        {/* Data Integration Section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-20">
          <div className="border-l-4 border-scaleiq-gold pl-8 mb-12">
            <h2 className="text-3xl font-bold text-scaleiq-black mb-6">
              Our data integration capabilities and platform offerings address the fragmented and self-managed data landscapes common in oil and gas.
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Despite years of digital investment, data integration remains largely self-managed by operators, creating hidden complexity, operational risk, and inconsistent data availability across the value chain.
            </p>
            
            <p>
              Our approach combines deep domain understanding with system-level architecture, enabling scalable integration, improved data quality, and governance aligned with industry standards such as OSDU. The result is a trusted, interoperable data environment that reduces integration burden, improves data usability, and enables reliable decision-making across the oil and gas value chain.
            </p>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-scaleiq-black py-20 mb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="mb-8">
              <svg className="w-12 h-12 text-scaleiq-gold mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            <p className="text-xl text-scaleiq-white leading-relaxed mb-8 italic">
              ScaleIQ brought a level of domain understanding we don't usually see in digital partners. They didn't start with tools or platforms - they started with how our operations actually work and designed from there.
            </p>
            
            <div className="text-scaleiq-gold font-medium">
              VP, Digital Transformation, Integrated Energy Company
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-scaleiq-black mb-6">
            Rethink Your <span className="text-scaleiq-gold">Digital Roadmap</span>
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            For energy and infrastructure companies considering how to shape their digital transformation roadmap, we invite a thoughtful and confidential discussion.
          </p>
          
          <button 
            onClick={() => navigate('/contact')}
            className="px-8 py-4 border-2 border-scaleiq-gold text-scaleiq-gold hover:bg-scaleiq-gold hover:text-scaleiq-black font-medium rounded-lg transition-all"
          >
            Start a Conversation
          </button>
        </section>
      </div>

      <NewFooter />
      <GoToTop />
    </div>
  );
};
