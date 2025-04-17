import React, { useState } from "react";
import { FaChartLine, FaShieldAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import DemoRequestForm from "./components/DemoRequestForm";

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

export default function AuditricLandingPage() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const openDemoForm = () => setIsDemoFormOpen(true);
  const closeDemoForm = () => setIsDemoFormOpen(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50 px-6 py-4 flex justify-between items-center"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-blue-700"
        >
          Auditric
        </motion.div>
        <ul className="hidden md:flex gap-6 text-sm text-gray-700">
          {["Features", "How It Works", "Industries", "Request Demo"].map((item) => (
            <motion.li key={item} whileHover={{ y: -2 }}>
              <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-blue-600 transition">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
        <AnimatedButton 
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md"
          onClick={openDemoForm}
        >
          Request Demo
        </AnimatedButton>
      </motion.nav>

      <div className="h-20"></div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }} 
        className="relative px-6 py-32 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden"
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
              Automate Your Compliance with Confidence
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Streamline audits, manage risks, and maintain continuous compliance — all in one place.
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
                Request Demo
              </AnimatedButton>
              <AnimatedButton className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100">
                Start Free Trial
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

      {/* Statistics Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }} 
        className="px-6 py-16 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Trusted by Industry Leaders</h2>
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

      {/* Features Section */}
      <motion.section 
        id="features" 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }} 
        className="px-6 py-20 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-900">Why Auditric?</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          A comprehensive compliance platform designed to streamline your audit processes and ensure continuous compliance across your organization.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Centralized Admin Control", 
              description: "Easily manage users, licenses, and module access from a powerful admin dashboard — streamline setup and control without IT support.",
              icon: "👥"
            },
            { 
              title: "End-to-End Risk & Audit Management", 
              description: "From proactive risk identification to audit scheduling and findings resolution, Auditric ensures you're always audit-ready with no last-minute chaos.",
              icon: "🛡️"
            },
            { 
              title: "Real-Time Incident Reporting", 
              description: "Enable field teams to report incidents instantly with photos, voice notes, and GPS – online or offline. Keep compliance continuous and accurate.",
              icon: "📱"
            },
            { 
              title: "Policy Governance Made Simple", 
              description: "Distribute, track, and version your policies with built-in acknowledgement logs, reminders, and expiry workflows.",
              icon: "📄"
            },
            { 
              title: "Action-Oriented Task Manager", 
              description: "Assign, prioritize, and track tasks across teams. Link them to audits, risks, or incidents for full traceability.",
              icon: "✅"
            },
            { 
              title: "Smart Checklists for Every Sector", 
              description: "Automated checklists tailored for Food Ops, Healthcare & more – with mobile offline access and sync. Built for scale, designed for everyday use.",
              icon: "📋"
            },
            { 
              title: "Continuous Compliance Monitoring", 
              description: "Monitor control gaps across frameworks like ISO, SOC2, HIPAA and trigger auto-alerts, scorecards, and insights — powered by Auditric's future-ready engine.",
              icon: "📊"
            },
            { 
              title: "Smart AI Copilot", 
              description: "Stay ahead of audits with real-time AI suggestions and risk detection.",
              icon: "🤖"
            },
            { 
              title: "Multi-language Support", 
              description: "Built-in support for global teams with English, French, Spanish, and more.",
              icon: "🌐"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <FloatingCard className="h-full">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </FloatingCard>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <AnimatedButton className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Explore All Features
          </AnimatedButton>
        </motion.div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        id="how" 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }} 
        className="px-6 py-20 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { step: "1", title: "Setup", description: "Configure modules, roles, and compliance frameworks in minutes." },
            { step: "2", title: "Automate", description: "Turn on live monitoring, task routing, and smart alerts." },
            { step: "3", title: "Audit", description: "Run audits with ready-to-export reports and real-time updates." }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <FloatingCard>
                <div className="text-blue-600 text-4xl font-bold mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </FloatingCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section 
        id="industries" 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7 }} 
        className="px-6 py-20 bg-gray-50 text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-800">Built for Every Industry</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10">
          Auditric is trusted by teams across Food Services, Healthcare, Finance, and Tech sectors to stay compliant and audit-ready.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "🍽️ Food Services", color: "bg-orange-100" },
            { name: "🏥 Healthcare", color: "bg-green-100" },
            { name: "💼 Finance", color: "bg-blue-100" },
            { name: "🖥️ Tech", color: "bg-purple-100" }
          ].map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className={`${industry.color} p-4 rounded-xl shadow w-40 text-center text-blue-800 font-medium`}
            >
              {industry.name}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        id="demo" 
        initial={{ opacity: 0, scale: 0.95 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7 }} 
        className="px-6 py-20 bg-blue-600 text-white text-center relative overflow-hidden"
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
        <div className="relative">
          <h2 className="text-4xl font-semibold mb-4">Ready to Make Compliance Simple?</h2>
          <p className="mb-6 text-lg">Join teams who trust Auditric to stay ahead of regulations and streamline workflows.</p>
          <AnimatedButton 
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
            onClick={openDemoForm}
          >
            Request a Demo
          </AnimatedButton>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-6 py-10 bg-gray-900 text-gray-300 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Auditric. All rights reserved.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <button className="hover:underline text-sm">Privacy Policy</button>
          <button className="hover:underline text-sm">Terms of Service</button>
          <select className="bg-gray-800 text-white text-sm p-1 rounded">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
            <option>German</option>
            <option>Portuguese</option>
          </select>
        </div>
      </footer>

      {/* Demo Request Form */}
      <DemoRequestForm isOpen={isDemoFormOpen} onClose={closeDemoForm} />
    </div>
  );
}
