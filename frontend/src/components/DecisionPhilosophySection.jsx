import React from 'react';

export const DecisionPhilosophySection = () => {
  const principles = [
    { title: 'Domain Before Technology', icon: '1' },
    { title: 'Pragmatic Leverage of AI', icon: '2' },
    { title: 'Solutions Focused Approach', icon: '3' },
    { title: 'Data Integrity', icon: '4' }
  ];

  return (
    <section className="py-24 bg-scaleiq-white border-t-4 border-scaleiq-gold" data-testid="decision-philosophy-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Text Content */}
          <div>
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-scaleiq-gold/10 text-scaleiq-gold text-sm font-medium rounded-full mb-6 border-2 border-scaleiq-gold/30">
                How We Think
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-scaleiq-black mb-6">
                Decision <span className="text-scaleiq-gold">Philosophy</span>
              </h2>
              <div className="h-1 w-24 bg-scaleiq-gold mb-6"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                In the energy sector, technology decisions are rarely isolated – they directly impact safety, uptime, and asset performance over decades.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Making the right choices requires a combination of factors, not just technical capability.
              </p>
              
              <div className="h-px bg-scaleiq-gold my-8"></div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                ScaleIQ's approach combines deep domain understanding with pragmatic technology execution, ensuring solutions are shaped by operational realities and deliver measurable impact.
              </p>
            </div>
          </div>

          {/* RIGHT: Four Principle Tiles */}
          <div className="grid grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="relative p-8 bg-scaleiq-black border-4 border-scaleiq-gold/30 rounded-xl hover:border-scaleiq-gold hover:shadow-xl hover:shadow-scaleiq-gold/20 transition-all group cursor-default"
                data-testid={`principle-tile-${index}`}
              >
                <div className="absolute top-4 right-4 w-12 h-12 bg-scaleiq-gold rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-scaleiq-black">{principle.icon}</span>
                </div>
                
                <h3 className="text-lg font-bold text-scaleiq-white pt-6 leading-tight">
                  {principle.title}
                </h3>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-scaleiq-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};