import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CTASection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-gray-50" data-testid="cta-section">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-scaleiq-black mb-6">
          Rethink Your Digital Roadmap
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          For energy and infrastructure companies considering how to shape their digital transformation roadmap, we invite a thoughtful and confidential discussion.
        </p>
        <button 
          onClick={() => navigate('/contact')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-scaleiq-black text-scaleiq-white hover:bg-scaleiq-gold hover:text-scaleiq-black font-medium rounded-lg transition-all"
          data-testid="cta-button"
        >
          Start a Conversation
        </button>
      </div>
    </section>
  );
};