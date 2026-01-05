import React from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { CTASection } from './CTASection';
import { GoToTop } from './GoToTop';

export const ProductsPage = () => {
  const products = [
    {
      name: 'OgesOne',
      description: 'Suite of industry-leading products that support critical oil & gas sector workflows, analytics, and operational decision-making.'
    },
    {
      name: 'Product 2',
      description: 'Innovative solutions for energy operations and digital transformation.'
    },
    {
      name: 'Product 3',
      description: 'Advanced platforms for data integration and AI-driven insights.'
    }
  ];

  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-sm text-gray-500 mb-4">Products</div>
          <h1 className="text-5xl font-bold text-scaleiq-black mb-8">
            Products & Platforms
          </h1>
          <p className="text-xl text-gray-700">
            Suite of industry-leading products that support critical oil & gas sector workflows, analytics, and operational decision-making.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="p-8 border border-gray-200 rounded-lg hover:border-scaleiq-gold transition-all cursor-pointer group">
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Product Visual</div>
                </div>
                <h3 className="text-2xl font-bold text-scaleiq-black mb-4 group-hover:text-scaleiq-gold transition-colors">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <button className="text-scaleiq-black group-hover:text-scaleiq-gold font-medium transition-colors">Learn More</button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};