import React from "react";
import { ServePageTemplate } from "./ServePageTemplate";
import { Users, Globe, Cpu, Layout } from "lucide-react";

export const GCCSolutions = () => {
  const highlights = [
    {
      title: "Trusted Partnerships",
      text: "Working alongside leading consultants to help energy companies establish and scale India GCCs aligned to global models.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Energy Domain Expertise",
      text: "Hands-on experience across oil & gas, power, and renewables ensures digital initiatives are grounded in operational reality.",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Scalable Engineering",
      text: "Access to a diverse pool of technologists ready to deliver digital engineering and AI solutions at scale from day one.",
      icon: <Cpu className="w-8 h-8" />,
    },
  ];

  const helpPoints = [
    "GCC charter and capability definition",
    "Delivery and engagement model design",
    "Governance, KPIs, and global integration",
    "Phased scale-up and transition strategies",
    "Building domain-led digital and engineering capabilities",
    "Highly targeted staff augmentation for domain fit",
  ];

  const caseStudy = {
    title: "Digital First GCC Setup",
    text: "A global energy major established an India GCC to support its digital programs. ScaleIQ helped align domain-ready staffing and enabled seamless integration with global teams from day one.",
  };

  return (
    <ServePageTemplate
      subtitle="What We Do > GCC Solutions"
      title={
        <>
          Enabling Global Energy{" "}
          <span className="text-scaleiq-gold">Capability Centers</span> in India
        </>
      }
      description="We help global energy companies launch and operationalize GCCs that become high-impact extensions of their global operations, delivering engineering and AI at scale."
      highlights={highlights}
      helpPoints={helpPoints}
      caseStudy={caseStudy}
    />
  );
};
