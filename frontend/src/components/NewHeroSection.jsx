import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MobiusStrip3D } from './MobiusStrip3D';

export const NewHeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden pt-20" 
      data-testid="hero-section"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0a1929 40%, #1a3a52 70%, #8B6914 100%)'
      }}
    >
      {/* Atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40"></div>
      
      {/* Animated particles/sparkles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-scaleiq-gold rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Content */}
          <div className="order-2 lg:order-1">
            <h1 
              className="text-6xl lg:text-7xl font-bold mb-8 leading-tight" 
              data-testid="hero-title"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(255, 215, 0, 0.3)'
              }}
            >
              Digital Engineering<br />
              Partner for Energy
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              Co-innovating with our customers to solve the real barriers – to technology adoption and transformation in the energy sector.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/about/overview')}
                className="px-8 py-4 font-medium rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  color: '#000',
                  boxShadow: '0 4px 20px rgba(255, 215, 0, 0.4)'
                }}
                data-testid="hero-explore-button"
              >
                Explore
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-4 border-2 font-medium rounded-lg transition-all hover:bg-scaleiq-gold/10"
                style={{
                  borderColor: '#FFD700',
                  color: '#FFD700',
                  boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
                }}
                data-testid="hero-contact-button"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT: 3D Mobius Strip or Energy Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative" style={{ 
              background: 'linear-gradient(135deg, #0a1929 0%, #1a3a52 50%, #000 100%)',
              boxShadow: '0 0 60px rgba(255, 215, 0, 0.3), inset 0 0 60px rgba(0,0,0,0.5)'
            }}>
              <MobiusStrip3D />
              
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-radial from-scaleiq-gold/20 via-transparent to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fire/glow effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, rgba(255,140,0,0.3) 0%, transparent 100%)'
        }}
      />
    </section>
  );
};