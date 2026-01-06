import React from "react";
import { ServePageTemplate } from "./ServePageTemplate";
import { Droplets, Workflow, Factory, Truck } from "lucide-react";

export const ServeOilGas = () => {
  const highlights = [
    {
      title: "Upstream Operations",
      text: "Optimizing exploration, drilling, and production with subsurface data integration and AI-enabled decision support.",
      icon: <Droplets className="w-8 h-8" />,
    },
    {
      title: "Midstream Logistics",
      text: "Enhancing transportation, storage, and logistics operations that connect production to global markets.",
      icon: <Workflow className="w-8 h-8" />,
    },
    {
      title: "Downstream Refining",
      text: "Modernizing refining and processing operations to transform crude oil into high-value finished products.",
      icon: <Factory className="w-8 h-8" />,
    },
  ];

  const helpPoints = [
    "Subsurface data integration and interpretation workflows",
    "Drilling and production optimization",
    "AI-enabled decision support with human-in-the-loop controls",
    "Integration across subsurface, operations, and engineering systems",
    "Predictive maintenance for critical assets",
    "Environmental and regulatory compliance tracking",
  ];

  const caseStudy = {
    title: "Subsurface Prospecting Optimization",
    text: "By integrating seismic, logs, and drilling data into a unified AI framework, we helped a major producer reduce exploration risk and accelerate reservoir mapping by 40%.",
  };

  return (
    <ServePageTemplate
      subtitle="Who We Serve > Oil & Gas"
      title={
        <>
          Specialized Solutions for the Full{" "}
          <span className="text-scaleiq-gold">Oil & Gas</span> Value Chain
        </>
      }
      description="ScaleIQ partners with industry leaders to address digital challenges across the entire energy value chain—where fragmented approaches typically fail."
      highlights={highlights}
      helpPoints={helpPoints}
      caseStudy={caseStudy}
    />
  );
};
