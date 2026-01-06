import React from 'react';
import { Link } from 'react-router-dom';

export const NewFooter = () => {
  const footerSections = [
    {
      title: 'About',
      links: [
        { name: 'Overview', path: '/about/overview' },
        { name: 'The ScaleIQ Model', path: '/about/model' },
        { name: 'Leadership', path: '/about/leadership' },
        { name: 'Investors', path: '/about/investors' },
        { name: 'Partners & Growth', path: '/about/partners' },
      ]
    },
    {
      title: 'How We Work',
      links: [
        { name: 'Our Approach', path: '/how-we-work' },
      ]
    },
    {
      title: 'What We Do',
      links: [
        { name: 'Digital Engineering', path: '/digital/app-dev' },
        { name: 'Products', path: '/products/ogesone' },
        { name: 'GCC Solutions', path: '/gcc-solutions' },
      ]
    },
    {
      title: 'Who We Serve',
      links: [
        { name: 'Oil & Gas Companies', path: '/serve/oil-gas' },
        { name: 'Energy Companies', path: '/serve/energy' },
        { name: 'Renewables & Utilities', path: '/serve/renewables' },
        { name: 'Energy ISVs', path: '/serve/isvs' },
        { name: 'Oilfield Service Companies', path: '/serve/oil-service' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'News', path: '/news' },
        { name: 'Join Us', path: '/join' },
        { name: 'Contact', path: '/contact' },
      ]
    },
  ];

  return (
    <footer className="bg-scaleiq-black text-scaleiq-white pt-16 pb-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold text-scaleiq-gold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-gray-400 hover:text-scaleiq-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            Copyright © 2025 ScaleIQ Private Limited. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-gray-400 hover:text-scaleiq-white transition-colors">
              Terms of Use
            </Link>
            <Link to="#" className="text-sm text-gray-400 hover:text-scaleiq-white transition-colors">
              Privacy Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};