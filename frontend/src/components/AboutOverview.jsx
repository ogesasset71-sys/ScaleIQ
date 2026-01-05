import React from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { CTASection } from './CTASection';
import { GoToTop } from './GoToTop';

export const AboutOverview = () => {
  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-sm text-gray-500 mb-4">About &gt; Overview</div>
          <h1 className="text-5xl font-bold text-scaleiq-black mb-8">
            Transformation Oriented, Grounded in Expertise
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            We work across the entire digital spectrum – from legacy systems and brownfield infrastructure to modern data platforms and AI-driven applications – ensuring technology integrates seamlessly into live, regulated, and safety-critical operations
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Our approach is informed by deep domain knowledge across upstream, midstream, and downstream environments, enabling solutions that account for operational continuity, regulatory compliance, asset lifecycles, and scale.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mt-6">
            The result is digital engineering that delivers resilient, system-level outcomes that perform in real-world oil and gas conditions.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="bg-scaleiq-black py-20 mb-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-scaleiq-gold mb-6">Our Mission</h2>
                <p className="text-scaleiq-white leading-relaxed">
                  To solve the real barriers to technology adoption and transformation in the energy sector – through an end-to-end approach to solving complex workflow challenges.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-scaleiq-gold mb-6">Our Vision</h2>
                <p className="text-scaleiq-white leading-relaxed">
                  To become the trusted digital engineering partner to the world’s leading energy companies in their transformation journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-scaleiq-black mb-6">
              Solutions Designed Precisely for the Oil & Gas Industry
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Oil and gas operations span a uniquely broad and interconnected landscape. Each segment operates under distinct technical, operational, and regulatory constraints, yet remains tightly coupled through shared assets, data flows, and commercial dependencies. Digital and AI solutions must therefore function across heterogeneous environments that include field operations, control systems, engineering workflows, enterprise platforms, and customer-facing systems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              ScaleIQ solves the industry’s biggest bottleneck by bridging fragmented tools, fragmented data and highly complex use cases.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-scaleiq-black mb-6">
              Digital Supply Networks Transforming Operations for Oil and Gas
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Traditional IT service providers and product companies tend to fragment responsibility across tools, vendors, and handoffs - leaving gaps between domain intent, system behavior, and operational outcomes. ScaleIQ is focused on addressing this gap through an end-to-end, consultative approach grounded in deep oil and gas domain expertise. We work across problem definition, digital architecture, AI workflow design, and system integration - ensuring solutions are shaped by how users align and adopt.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our strength lies in treating digital and AI as integral components of the operational ecosystem of oil and gas companies.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-scaleiq-black mb-6">
              Core Workflows and Domain Expertise
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Core workflows such as subsurface interpretation, drilling and production optimization, pipeline integrity management and refinery operations strongly depend on domain judgment, safety constraints, regulatory compliance and complex datasets. Digital and AI solutions need to account for operational context, edge cases, and the human-in-the-loop processes that govern real outcomes.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By treating digital and AI as integral components of interconnected operating systems – across upstream, midstream, distribution and retail – ScaleIQ helps organizations move beyond fragmented initiatives toward intelligent operations that are resilient, trusted and capable of delivering sustained value at scale.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-scaleiq-black mb-6">
              Data Integration and Platform Capabilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Despite years of digital investment, data integration remains largely self-managed by operators, creating hidden complexity, operational risk, and inconsistent data availability across the value chain.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our approach combines deep domain understanding with system-level architecture, enabling scalable integration, improved data quality, and governance aligned with industry standards such as OSDU. The result is a trusted, interoperable data environment that reduces integration burden, improves data usability, and enables reliable decision-making across the oil and gas value chain.
            </p>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-gray-50 mt-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-xl text-gray-700 italic leading-relaxed mb-6">
              “ScaleIQ brought a level of domain understanding we don’t usually see in digital partners. They didn’t start with tools or platforms – they started with how our operations actually work and designed from there.”
            </p>
            <p className="text-sm text-gray-600">
              VP, Digital Transformation, Integrated Energy Company
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