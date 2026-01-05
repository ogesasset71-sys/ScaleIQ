import React from 'react';
import { Link } from 'react-router-dom';

export const NewFooter = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about/overview' },
        { name: 'News', path: '/news' },
        { name: 'Join Us', path: '/join' },
        { name: 'Contact', path: '/contact' },
      ]
    },
    {
      title: 'Partners & Growth',
      links: [
        { name: 'Portfolio Companies', path: '/about/partners' },
        { name: 'Strategic Partnerships', path: '/about/partners' },
        { name: 'Governance & ESG', path: '/about/partners' },
        { name: 'Investor Relations', path: '/about/investors' },
      ]
    },
    {
      title: 'How We Work',
      links: [
        { name: 'The ScaleIQ Model', path: '/about/model' },
        { name: 'Delivery Organizations', path: '/about/model' },
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'OgesOne', path: '/products/ogesone' },
        { name: 'Product 2', path: '/products/product2' },
        { name: 'Product 3', path: '/products/product3' },
      ]
    },
    {
      title: 'Digital Engineering',
      links: [
        { name: 'Application Development & Management', path: '/digital/app-dev' },
        { name: 'Product Engineering', path: '/digital/product' },
        { name: 'Professional Services', path: '/digital/professional' },
        { name: 'Technical Consulting', path: '/digital/consulting' },
        { name: 'Staff Augmentation', path: '/digital/staff' },
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