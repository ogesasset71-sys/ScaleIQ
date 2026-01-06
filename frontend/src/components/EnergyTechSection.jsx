import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const EnergyTechSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const caseStudies = [
    {
      title: 'Subsurface Prospecting',
      description: 'Subsurface data is scattered across seismic, logs, drilling, cores, and simulations, making full-field interpretation slow and inconsistent. Complex geology and limited data integration lead to uncertainty in reservoir mapping and higher exploration risk.'
    },
    {
      title: 'MOC Modernization',
      description: 'MOC processes were handled through a mix of email, spreadsheets, and legacy applications, slowing approvals and increasing operational risk. Lack of workflow automation and system integration made it difficult to ensure traceability, accountability, and timely execution.'
    },
    {
      title: 'Data Integration Across Asset Operations',
      description: 'Operational and engineering data was spread across historians, enterprise systems, and bespoke applications. Limited integration and inconsistent data quality made cross-asset visibility difficult and slowed analytics and AI adoption.'
    },
    {
      title: 'Domain-Driven AI in Operations',
      description: 'AI initiatives struggled to move beyond pilots due to limited domain context and poor integration with operational workflows. Models operated in isolation, reducing trust and limiting their impact on day-to-day decision-making.'
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section 
      className="py-24 border-t-4 relative" 
      data-testid="energy-tech-section"
      style={{
        background: 'linear-gradient(180deg, #0a1929 0%, #000000 100%)',
        borderTopColor: '#FFD700'
      }}
    >
      {/* Atmospheric particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-scaleiq-gold rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl lg:text-6xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(255, 215, 0, 0.3)'
            }}
          >
            Energy tech that works.
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            The next phase of energy transformation demands a different approach. To stay ahead in an increasingly complex, asset-heavy environment, companies must move beyond tools and traditional service models.
          </p>
        </div>

        {/* Case Studies Carousel */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>
              Case Studies
            </h3>
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-lg border-2 transition-all"
                style={{ 
                  borderColor: '#FFD700',
                  color: '#FFD700',
                  background: 'rgba(255, 215, 0, 0.1)'
                }}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-lg border-2 transition-all"
                style={{ 
                  borderColor: '#FFD700',
                  color: '#FFD700',
                  background: 'rgba(255, 215, 0, 0.1)'
                }}
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={index} className="min-w-full px-2">
                  <div 
                    className="p-8 border-l-4 rounded-lg shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, rgba(26, 58, 82, 0.8) 0%, rgba(10, 25, 41, 0.8) 100%)',
                      borderLeftColor: '#FFD700',
                      boxShadow: '0 0 30px rgba(255, 215, 0, 0.2)'
                    }}
                  >
                    <div className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4" style={{ background: 'rgba(255, 215, 0, 0.2)', color: '#FFD700' }}>
                      Case Study
                    </div>
                    <h4 className="text-2xl font-bold mb-4" style={{ color: '#FFD700' }}>{study.title}</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">{study.description}</p>
                    <button 
                      className="px-6 py-3 font-medium rounded-lg transition-all"
                      style={{
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                        color: '#000',
                        boxShadow: '0 4px 20px rgba(255, 215, 0, 0.4)'
                      }}
                    >
                      Read Case Study
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className="h-2 rounded-full transition-all"
                style={{
                  width: activeSlide === index ? '32px' : '8px',
                  background: activeSlide === index ? '#FFD700' : 'rgba(255, 215, 0, 0.3)'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* See More CTA */}
          <div className="text-center mt-12">
            <button 
              onClick={() => window.location.href = '/case-studies'}
              className="px-8 py-4 border-2 font-medium rounded-lg transition-all"
              style={{
                borderColor: '#FFD700',
                color: '#FFD700',
                background: 'rgba(255, 215, 0, 0.1)'
              }}
            >
              See More Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};