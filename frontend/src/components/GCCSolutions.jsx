import React from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { CTASection } from './CTASection';
import { GoToTop } from './GoToTop';

export const GCCSolutions = () => {
  const whyChooseUs = [
    {
      title: 'Trusted GCC Partnerships',
      description: 'Working alongside leading GCC consultants and global delivery partners to help energy companies establish and scale India GCCs that are integrated, accountable, and aligned to global operating models.'
    },
    {
      title: 'Deep Energy Domain Expertise',
      description: 'Bringing hands-on experience across oil & gas, power, renewables, and energy infrastructure – ensuring digital, data, and AI initiatives are grounded in real operational and domain realities.'
    },
    {
      title: 'Strong Technology & Engineering Talent Pool',
      description: 'Providing access to a deep and diverse pool of technologists across digital engineering, data platforms, analytics, AI, and enterprise systems – ready to deliver at scale from day one.'
    },
    {
      title: 'Focused Staff Augmentation',
      description: 'Offering highly targeted staff augmentation that prioritizes domain fit, delivery readiness, and continuity – enabling GCCs to scale teams quickly without compromising quality or ownership.'
    }
  ];

  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-sm text-gray-500 mb-4">What We Do &gt; GCC Solutions</div>
          <h1 className="text-5xl font-bold text-scaleiq-black mb-8">
            Enabling Global Energy Capability Centers in India
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            ScaleIQ partners with global energy companies to design, launch, and operationalize Global Capability Centers (GCCs) in India. Our focus goes beyond establishment. We help GCCs become high-impact extensions of global energy operations, delivering engineering, digital, data, and AI capabilities at scale.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            We work with organizations that want their India presence become a center for execution, innovation, and long-term value creation.
          </p>
        </section>

        <section className="bg-gray-50 py-16 mb-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-scaleiq-black mb-8">ScaleIQ enables GCCs to:</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
                <span className="text-gray-700">Establish a strong operational and delivery foundation in India</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
                <span className="text-gray-700">Build domain-led digital and engineering capabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
                <span className="text-gray-700">Scale teams while maintaining quality and continuity</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
                <span className="text-gray-700">Integrate seamlessly with global energy organizations</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-scaleiq-black mb-8">GCC Setup & Operating Model Design</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Energy GCCs start with strong intent, but benefit from clearer definition around purpose, ownership, and integration with global teams. ScaleIQ helps energy companies architect GCC operating models that are structurally embedded into global delivery, ownership, and governance.
          </p>
          <h3 className="text-2xl font-bold text-scaleiq-black mb-6">Where We Help</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
              <span className="text-gray-700">GCC charter and capability definition</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
              <span className="text-gray-700">Delivery and engagement models</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
              <span className="text-gray-700">Governance, KPIs, and global integration</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-scaleiq-gold rounded-full mt-2"></div>
              <span className="text-gray-700">Phased scale-up strategies</span>
            </li>
          </ul>
        </section>

        <section className="bg-scaleiq-black py-16 mb-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-scaleiq-gold mb-12 text-center">
              Why Energy Companies Choose ScaleIQ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-scaleiq-white mb-3">{reason.title}</h3>
                  <p className="text-gray-300">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="p-8 border-2 border-scaleiq-gold rounded-lg">
            <h3 className="text-2xl font-bold text-scaleiq-black mb-4">Case Study: Digital First GCC Setup</h3>
            <p className="text-gray-700 leading-relaxed">
              A global energy company established an India GCC to support digital and engineering programs across its operations. ScaleIQ helped the GCC avoid common scale-up challenges, aligned domain-ready staffing and enabled integration with global teams from day one.
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