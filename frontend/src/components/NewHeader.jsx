import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const NewHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const navigate = useNavigate();

  const navigation = [
    {
      name: "About",
      items: [
        { name: "Overview", path: "/about/overview" },
        { name: "The ScaleIQ Model", path: "/about/model" },
        { name: "Leadership", path: "/about/leadership" },
        { name: "Investors", path: "/about/investors" },
        { name: "Partners & Growth", path: "/about/partners" },
      ],
    },
    { name: "How We Work", path: "/how-we-work" },
    {
      name: "What We Do",
      items: [
        { name: "Digital Engineering", path: "/digital/app-dev" },
        { name: "Products", path: "/products/ogesone" },
        { name: "GCC Solutions", path: "/gcc-solutions" },
      ],
    },
    {
      name: "Whom We Serve",
      items: [
        { name: "Oil & Gas Companies", path: "/serve/oil-gas" },
        { name: "Energy Companies", path: "/serve/energy" },
        { name: "Renewables & Utilities", path: "/serve/renewables" },
        { name: "Energy ISVs", path: "/serve/isvs" },
        { name: "Oil Service Companies", path: "/serve/oil-service" },
      ],
    },
    {
      name: "Digital Engineering",
      items: [
        {
          name: "Application Development & Management",
          path: "/digital/app-dev",
        },
        { name: "AI Enablement", path: "/digital/ai" },
        { name: "Product Engineering", path: "/digital/product" },
        { name: "Professional Services", path: "/digital/professional" },
        { name: "Technical Consulting", path: "/digital/consulting" },
        { name: "Staff Augmentation", path: "/digital/staff" },
      ],
    },
    {
      name: "Products",
      items: [
        { name: "OgesOne", path: "/products/ogesone" },
        { name: "Product 2", path: "/products/product2" },
        { name: "Product 3", path: "/products/product3" },
      ],
    },
    { name: "GCC Solutions", path: "/gcc-solutions" },
    {
      name: "News & Insights",
      items: [
        { name: "News", path: "/news" },
        { name: "ScaleIQ Insight", path: "/insights" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Events", path: "/events" },
      ],
    },
    { name: "Join Us", path: "/join" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setOpenDropdown(null);
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileGroup = (name) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10"
      data-testid="main-header"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 z-50"
            data-testid="logo-link"
          >
            <div className="text-2xl font-bold text-white">
              Scale<span className="text-scaleiq-gold">IQ</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.items && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.items ? (
                  <>
                    <button className="px-4 py-2 text-sm font-medium text-white hover:text-scaleiq-gold transition-colors flex items-center gap-1">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-0 w-64 bg-black/95 backdrop-blur-md shadow-lg border border-white/10 rounded-md py-2">
                        {item.items.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavClick(subItem)}
                            className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-scaleiq-gold transition-colors"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="px-4 py-2 text-sm font-medium text-white hover:text-scaleiq-gold transition-colors"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-4 pb-20">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-white/10 pb-2">
                  {item.items ? (
                    <div>
                      <button
                        onClick={() => toggleMobileGroup(item.name)}
                        className="flex items-center justify-between w-full text-xl font-bold text-white py-2"
                      >
                        {item.name}
                        <ChevronRight
                          className={`w-5 h-5 text-scaleiq-gold transition-transform ${
                            mobileExpanded[item.name] ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded[item.name] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 flex flex-col space-y-3">
                              {item.items.map((subItem) => (
                                <button
                                  key={subItem.name}
                                  onClick={() => handleNavClick(subItem)}
                                  className="text-left text-gray-400 hover:text-scaleiq-gold text-base"
                                >
                                  {subItem.name}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className="block w-full text-left text-xl font-bold text-white py-2 hover:text-scaleiq-gold"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
