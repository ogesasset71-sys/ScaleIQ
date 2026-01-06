import React from 'react';
import { MobiusAnimation } from './MobiusAnimation';
import { useNavigate } from 'react-router-dom';

export const NewHeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-scaleiq-black overflow-hidden pt-20" data-testid="hero-section">
      <MobiusAnimation />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-5 py-2 bg-scaleiq-gold/10 border border-scaleiq-gold text-scaleiq-gold text-sm font-medium rounded-full">
              Digital Engineering Partner For Energy
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-scaleiq-white mb-8 leading-tight" data-testid="hero-title">
            Energy tech that works.
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
            The next phase of energy transformation demands a different approach. To stay ahead in an increasingly complex, asset-heavy environment, companies must move beyond tools and traditional service models.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/about/overview')}
              className="px-8 py-4 bg-scaleiq-gold text-scaleiq-black hover:bg-scaleiq-white font-medium rounded-lg transition-all transform hover:scale-105" 
              data-testid="hero-explore-button"
            >
              Explore
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-transparent border-2 border-scaleiq-white text-scaleiq-white hover:bg-scaleiq-white hover:text-scaleiq-black font-medium rounded-lg transition-all" 
              data-testid="hero-contact-button"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};