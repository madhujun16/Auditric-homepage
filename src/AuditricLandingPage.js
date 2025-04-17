import React, { useState } from "react";
import { FaChartLine, FaShieldAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import DemoRequestForm from "./components/DemoRequestForm";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import PricingSection from './components/PricingSection';

// Advanced UI Components
const FloatingCard = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`bg-white rounded-xl shadow-lg p-6 ${className}`}
  >
    {children}
  </motion.div>
);

const AnimatedButton = ({ children, className = "", onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`relative overflow-hidden ${className}`}
    onClick={onClick}
  >
    <motion.div
      className="absolute inset-0 bg-white/20"
      initial={{ x: "-100%" }}
      whileHover={{ x: "100%" }}
      transition={{ duration: 0.5 }}
    />
    {children}
  </motion.button>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md"
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
        <Icon className="text-blue-600 text-xl" />
      </div>
      <div>
        <div className="text-2xl font-bold text-blue-600">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  </motion.div>
);

const industries = [
  {
    name: 'Finance',
    icon: '/assets/icons/industries/finance.svg',
    description: 'Comprehensive audit solutions for financial institutions, ensuring regulatory compliance and risk management.',
    features: ['Regulatory Compliance', 'Risk Assessment', 'Transaction Monitoring', 'Fraud Detection']
  },
  {
    name: 'Healthcare',
    icon: '/assets/icons/industries/healthcare.svg',
    description: 'Specialized auditing tools for healthcare providers, focusing on patient data security and regulatory requirements.',
    features: ['HIPAA Compliance', 'Patient Data Protection', 'Clinical Audit Trails', 'Quality Assurance']
  },
  {
    name: 'Retail',
    icon: '/assets/icons/industries/retail.svg',
    description: 'Retail-specific audit solutions for inventory management, sales tracking, and customer data protection.',
    features: ['Inventory Control', 'Sales Analytics', 'Customer Data Protection', 'Supply Chain Auditing']
  },
  {
    name: 'Manufacturing',
    icon: '/assets/icons/industries/manufacturing.svg',
    description: 'Manufacturing audit tools for quality control, process optimization, and compliance management.',
    features: ['Quality Control', 'Process Optimization', 'Safety Compliance', 'Equipment Maintenance']
  }
];

export default function AuditricLandingPage() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useTranslation();

  const openDemoForm = () => setIsDemoFormOpen(true);
  const closeDemoForm = () => setIsDemoFormOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Handle scroll progress
  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.pageYOffset;
      const progress = (currentProgress / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Continuous Compliance Monitoring",
      description: "Monitor control gaps across frameworks like ISO, SOC2, HIPAA and trigger auto-alerts, scorecards, and insights — powered by Auditric's future-ready engine.",
      icon: '/assets/icons/compliance-monitoring.svg',
      benefits: [
        'Multi-framework support',
        'Auto-alert system',
        'Performance scorecards',
        'Real-time insights'
      ]
    },
    {
      title: "Smart Checklists for Every Sector",
      description: "Automated checklists tailored for Food Ops, Healthcare & more – with mobile offline access and sync. Built for scale, designed for everyday use.",
      icon: '/assets/icons/checklists.svg',
      benefits: [
        'Sector-specific templates',
        'Mobile offline access',
        'Auto-sync capability',
        'Scalable design'
      ]
    },
    {
      title: "End-to-End Risk & Audit Management",
      description: "From proactive risk identification to audit scheduling and findings resolution, Auditric ensures you're always audit-ready with no last-minute chaos.",
      icon: '/assets/icons/risk-management.svg',
      benefits: [
        'Proactive risk identification',
        'Automated audit scheduling',
        'Findings resolution tracking',
        'Audit readiness monitoring'
      ]
    },
    {
      title: "Compliance Management",
      description: "Stay compliant with ever-changing regulations and standards across different industries.",
      icon: '/assets/icons/compliance.svg',
      benefits: [
        'Multi-framework support',
        'Automated compliance checks',
        'Regulatory updates',
        'Audit trail generation'
      ]
    },
    {
      title: "Policy Governance Made Simple",
      description: "Distribute, track, and version your policies with built-in acknowledgement logs, reminders, and expiry workflows.",
      icon: '/assets/icons/policy-governance.svg',
      benefits: [
        'Policy version control',
        'Acknowledgement tracking',
        'Automated reminders',
        'Expiry workflow management'
      ]
    },
    {
      title: "AI-Powered Analysis",
      description: "Leverage advanced machine learning algorithms to analyze vast amounts of data with unprecedented accuracy.",
      icon: '/assets/icons/ai-analysis.svg',
      benefits: [
        'Advanced machine learning algorithms',
        'Real-time data processing',
        'Pattern recognition',
        'Anomaly detection'
      ]
    },
    {
      title: "Real-Time Incident Reporting",
      description: "Enable field teams to report incidents instantly with photos, voice notes, and GPS – online or offline. Keep compliance continuous and accurate.",
      icon: '/assets/icons/incident-reporting.svg',
      benefits: [
        'Photo & voice note support',
        'GPS location tracking',
        'Offline capability',
        'Real-time sync'
      ]
    },
    {
      title: "Centralized Admin Control",
      description: "Easily manage users, licenses, and module access from a powerful admin dashboard — streamline setup and control without IT support.",
      icon: '/assets/icons/admin-control.svg',
      benefits: [
        'User role management',
        'License tracking',
        'Module access control',
        'No IT support needed'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-700">
                Auditric
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                {t('navbar.features')}
              </a>
              <a href="#industries" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                {t('navbar.industries')}
              </a>
              <button onClick={openDemoForm} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                {t('navbar.requestdemo')}
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <button
                className="hidden md:block px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition-colors duration-200"
                onClick={openDemoForm}
              >
                {t('navbar.getStarted')}
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">
              {t('navbar.features')}
            </a>
            <a href="#industries" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">
              {t('navbar.industries')}
            </a>
            <button onClick={openDemoForm} className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">
              {t('navbar.requestdemo')}
            </button>
            <button
              className="w-full mt-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition-colors duration-200"
              onClick={openDemoForm}
            >
              {t('navbar.getStarted')}
            </button>
          </div>
        </div>
      </nav>

      <div className="h-20"></div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }} 
        className="relative px-6 py-32 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden shadow-2xl"
      >
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center relative">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2, duration: 0.6 }} 
              className="mb-2"
            >
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium inline-flex items-center gap-1">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-green-500 rounded-full"
                />
                Trusted by 500+ Companies
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl font-extrabold leading-tight mb-6 text-blue-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4, duration: 0.6 }} 
              className="mb-8 space-y-3"
            >
              {[
                { icon: FaChartLine, text: "Reduce audit time by 60%" },
                { icon: FaShieldAlt, text: "99.9% compliance accuracy" },
                { icon: FaClock, text: "24/7 real-time monitoring" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <item.icon className="text-green-500" />
                  <span className="text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="flex flex-wrap gap-4">
              <AnimatedButton 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                onClick={openDemoForm}
              >
                {t('hero.cta')}
              </AnimatedButton>
              <AnimatedButton className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100">
                {t('hero.learnMore')}
              </AnimatedButton>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.6, duration: 0.6 }} 
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <motion.img 
                    key={i}
                    src={`https://randomuser.me/api/portraits/${i % 2 ? 'women' : 'men'}/${i}.jpg`}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    whileHover={{ y: -5, zIndex: 10 }}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">2,000+</span> compliance professionals trust Auditric
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ scale: 0.8, rotate: -5 }} 
            whileInView={{ scale: 1, rotate: 0 }} 
            transition={{ duration: 0.6 }} 
            className="hidden md:block relative"
          >
            <motion.img 
              src="/assets/compliance-hero.svg" 
              alt="Compliance Hero" 
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.8, duration: 0.6 }} 
              className="absolute -bottom-6 -left-6"
            >
              {/* Decorative elements behind the card */}
              <div className="absolute -z-10 -bottom-2 -right-2 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -z-10 -top-2 -left-2 w-16 h-16 bg-green-100 rounded-full opacity-50"></div>
              <div className="absolute -z-10 top-8 right-8 w-8 h-8 bg-yellow-100 rounded-full opacity-50"></div>
              
              {/* Animated dots pattern */}
              <div className="absolute -z-10 inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full" style={{ 
                  backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              <FloatingCard>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">Compliance Score</div>
                    <div className="flex items-baseline">
                      <div className="text-3xl font-bold text-blue-600">98</div>
                      <div className="text-xl font-bold text-blue-600">%</div>
                    </div>
                    <div className="text-xs text-green-500 font-medium">Excellent</div>
                  </div>
                </div>
              </FloatingCard>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-gradient-to-b from-white to-gray-50 shadow-2xl relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              {t('features.title')}
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('features.subtitle')}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Continuous Compliance Monitoring",
                description: "Monitor control gaps across frameworks like ISO, SOC2, HIPAA and trigger auto-alerts, scorecards, and insights — powered by Auditric's future-ready engine.",
                icon: '/assets/icons/why-auditric/accuracy.svg',
                benefits: [
                  'Multi-framework support',
                  'Auto-alert system',
                  'Performance scorecards',
                  'Real-time insights'
                ],
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                title: "Smart Checklists for Every Sector",
                description: "Automated checklists tailored for Food Ops, Healthcare & more – with mobile offline access and sync. Built for scale, designed for everyday use.",
                icon: '/assets/icons/why-auditric/automation.svg',
                benefits: [
                  'Sector-specific templates',
                  'Mobile offline access',
                  'Auto-sync capability',
                  'Scalable design'
                ],
                gradient: 'from-green-500 to-green-600'
              },
              {
                title: "End-to-End Risk & Audit Management",
                description: "From proactive risk identification to audit scheduling and findings resolution, Auditric ensures you're always audit-ready with no last-minute chaos.",
                icon: '/assets/icons/why-auditric/ai.svg',
                benefits: [
                  'Proactive risk identification',
                  'Automated audit scheduling',
                  'Findings resolution tracking',
                  'Audit readiness monitoring'
                ],
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                title: "Compliance Management",
                description: "Stay compliant with ever-changing regulations and standards across different industries.",
                icon: '/assets/icons/why-auditric/security.svg',
                benefits: [
                  'Multi-framework support',
                  'Automated compliance checks',
                  'Regulatory updates',
                  'Audit trail generation'
                ],
                gradient: 'from-red-500 to-red-600'
              },
              {
                title: "Policy Governance Made Simple",
                description: "Distribute, track, and version your policies with built-in acknowledgement logs, reminders, and expiry workflows.",
                icon: '/assets/icons/why-auditric/insights.svg',
                benefits: [
                  'Policy version control',
                  'Acknowledgement tracking',
                  'Automated reminders',
                  'Expiry workflow management'
                ],
                gradient: 'from-indigo-500 to-indigo-600'
              },
              {
                title: "AI-Powered Analysis",
                description: "Leverage advanced machine learning algorithms to analyze vast amounts of data with unprecedented accuracy.",
                icon: '/assets/icons/why-auditric/ai.svg',
                benefits: [
                  'Advanced machine learning algorithms',
                  'Real-time data processing',
                  'Pattern recognition',
                  'Anomaly detection'
                ],
                gradient: 'from-cyan-500 to-cyan-600'
              },
              {
                title: "Real-Time Incident Reporting",
                description: "Enable field teams to report incidents instantly with photos, voice notes, and GPS – online or offline. Keep compliance continuous and accurate.",
                icon: '/assets/icons/why-auditric/updates.svg',
                benefits: [
                  'Photo & voice note support',
                  'GPS location tracking',
                  'Offline capability',
                  'Real-time sync'
                ],
                gradient: 'from-teal-500 to-teal-600'
              },
              {
                title: "Centralized Admin Control",
                description: "Easily manage users, licenses, and module access from a powerful admin dashboard — streamline setup and control without IT support.",
                icon: '/assets/icons/why-auditric/support.svg',
                benefits: [
                  'User role management',
                  'License tracking',
                  'Module access control',
                  'No IT support needed'
                ],
                gradient: 'from-orange-500 to-orange-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-br ${feature.gradient} bg-opacity-10`}>
                      <img
                        className="h-10 w-10"
                        src={feature.icon}
                        alt={feature.title}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    {feature.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }} 
        className="px-6 py-16 bg-gray-50 shadow-2xl relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard 
              icon={FaChartLine} 
              value="60%" 
              label="Reduction in Audit Time" 
            />
            <StatCard 
              icon={FaShieldAlt} 
              value="99.9%" 
              label="Compliance Accuracy" 
            />
            <StatCard 
              icon={FaClock} 
              value="24/7" 
              label="Real-time Monitoring" 
            />
          </div>
        </div>
      </motion.section>

      {/* Industries Section */}
      <section className="py-12 bg-white shadow-2xl relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('industries.title')}
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('industries.subtitle')}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 mb-6">
                    <img
                      className="h-24 w-24"
                      src={industry.icon}
                      alt={industry.name}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t(`industries.${industry.name.toLowerCase()}`)}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">
                    {industry.description}
                  </p>
                  <ul className="mt-2 space-y-3 text-left w-full">
                    {industry.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        id="demo" 
        initial={{ opacity: 0, scale: 0.95 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7 }} 
        className="px-6 py-16 bg-gradient-to-b from-white to-gray-50 shadow-2xl relative z-10"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm px-4 py-2 rounded-full shadow-md">
                Start Today
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Make Compliance Simple?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join forward-thinking teams who trust Auditric to streamline their compliance and audit workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                onClick={openDemoForm}
              >
                Request a Demo
              </AnimatedButton>
              
              <div className="flex items-center gap-2 text-gray-500">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">No credit card required</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Quick setup</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Add Pricing Section before the footer */}
      <PricingSection />
      
      {/* Footer */}
      <footer className="px-6 py-10 bg-gray-900 text-gray-300 text-center shadow-2xl relative z-10">
        <p className="text-sm">{t('footer.copyright')}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <button className="hover:underline text-sm">{t('footer.privacy')}</button>
          <button className="hover:underline text-sm">{t('footer.terms')}</button>
          <LanguageSwitcher />
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 20 ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-200 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>

      {/* Demo Request Form */}
      <DemoRequestForm isOpen={isDemoFormOpen} onClose={closeDemoForm} />
    </div>
  );
}
