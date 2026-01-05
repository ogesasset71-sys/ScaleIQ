import React from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { CTASection } from './CTASection';
import { GoToTop } from './GoToTop';

export const AboutLeadership = () => {
  const leadership = [
    { name: 'Rajeev Sonthalia', title: 'Founder and CEO' },
    { name: 'Saurabh Srivastav', title: 'Founder and COO' },
    { name: 'Prashant Mathur', title: 'Chief Client Officer' },
    { name: 'Anita Kanodia', title: 'Chief Legal Officer' },
  ];

  const advisoryBoard = [
    { name: 'Ananya Iyer', title: 'Former EVP Subsurface & Production Excellence', company: 'Upstream Energy' },
    { name: 'Rajiv Malhotra', title: 'Former Director Integrated Operations & Digital Transformation', company: 'Indian Oil' },
    { name: 'Suresh Nandakumar', title: 'Former COO Refining, Supply Chain & Retail Operations', company: 'Cairn Energy Group' },
    { name: 'Michael Harrington', title: 'Former SVP Enterprise Data & Digital Platforms', company: 'British Petroleum' },
    { name: 'Thomas Reilly', title: 'Former CIO & Transformation Lead Downstream and Retail Operations', company: 'Global Oil Company' },
    { name: 'Khalid Al-Rashid', title: 'Former CEO Midstream Infrastructure & Pipelines', company: 'National Energy Company' },
  ];

  const boardOfDirectors = [
    { name: 'Rajeev Sonthalia', title: 'Founder and CEO, Managing Director' },
    { name: 'Rajiv Malhotra', title: 'Former Director Integrated Operations & Digital Transformation', company: 'Indian Oil' },
    { name: 'Suresh Nandakumar', title: 'Former COO Refining, Supply Chain & Retail Operations', company: 'Cairn Energy Group' },
    { name: 'Michael Harrington', title: 'Former SVP Enterprise Data & Digital Platforms', company: 'British Petroleum' },
    { name: 'Thomas Reilly', title: 'Former CIO & Transformation Lead Downstream and Retail Operations', company: 'Global Oil Company' },
    { name: 'Khalid Al-Rashid', title: 'Former CEO Midstream Infrastructure & Pipelines', company: 'National Energy Company' },
  ];

  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <div className="text-sm text-gray-500 mb-4">About &gt; Leadership</div>
          <h1 className="text-5xl font-bold text-scaleiq-black mb-8">
            Leadership
          </h1>
        </section>

        {/* Leadership Team */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-scaleiq-black mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-scaleiq-black mb-1">{leader.name}</h3>
                <p className="text-sm text-gray-600">{leader.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory Board */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-scaleiq-black mb-8">Advisory Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-scaleiq-black mb-2">{advisor.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{advisor.title}</p>
                <p className="text-sm text-scaleiq-gold">{advisor.company}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Board of Directors */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-scaleiq-black mb-8">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardOfDirectors.map((director, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-scaleiq-black mb-2">{director.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{director.title}</p>
                {director.company && <p className="text-sm text-scaleiq-gold">{director.company}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Featured Bio */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="border-l-4 border-scaleiq-gold pl-8">
              <h3 className="text-2xl font-bold text-scaleiq-black mb-4">Rajiv Malhotra</h3>
              <p className="text-sm text-gray-600 mb-4">
                Former Director, Integrated Operations & Digital Transformation, Indian Oil
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Rajiv Malhotra has over three decades of experience leading large-scale digital transformation initiatives in asset-intensive energy environments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Indian Oil, he was responsible for driving enterprise-wide digital programs across integrated operations, focusing on modernizing legacy systems, deploying data and analytics platforms, and embedding digital capabilities into core operational workflows. His leadership helped bridge technology and operations, ensuring digital initiatives delivered measurable impact at scale while maintaining safety, reliability, and regulatory integrity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                He holds a Bachelor’s degree in Mechanical Engineering from IIT Roorkee and has completed executive education at the Wharton School, University of Pennsylvania.
              </p>
            </div>
          </div>
        </section>
      </div>

      <CTASection />
      <NewFooter />
      <GoToTop />
    </div>
  );
};