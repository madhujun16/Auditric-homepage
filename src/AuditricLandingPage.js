import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AuditricLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-700">Auditric</div>
        <ul className="hidden md:flex gap-6 text-sm text-gray-700">
          <li><a href="#features" className="hover:text-blue-600 transition">Features</a></li>
          <li><a href="#how" className="hover:text-blue-600 transition">How It Works</a></li>
          <li><a href="#industries" className="hover:text-blue-600 transition">Industries</a></li>
          <li><a href="#demo" className="hover:text-blue-600 transition">Request Demo</a></li>
        </ul>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition">Start Free Trial</button>
      </motion.nav>

      <div className="h-20"></div>

      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative px-6 py-32 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight mb-6 text-blue-800">Automate Your Compliance with Confidence</h1>
            <p className="text-xl text-gray-700 mb-8">Streamline audits, manage risks, and maintain continuous compliance — all in one place.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#demo" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">Get a Demo</a>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition">Start Free Trial</button>
            </div>
          </div>
          <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 0.6 }} className="hidden md:block">
            <img src="/assets/compliance-hero.svg" alt="Compliance Hero" className="w-full max-w-md mx-auto rounded-xl shadow-lg" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section id="features" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Why Auditric?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard title="Smart AI Copilot" description="Stay ahead of audits with real-time AI suggestions and risk detection." />
          <FeatureCard title="One-click Audit Reports" description="Generate exportable reports, evidence, and status with a single click." />
          <FeatureCard title="Multi-language Support" description="Built-in support for global teams with English, French, Spanish, and more." />
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section id="how" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <StepCard step="1" title="Setup" description="Configure modules, roles, and compliance frameworks in minutes." />
          <StepCard step="2" title="Automate" description="Turn on live monitoring, task routing, and smart alerts." />
          <StepCard step="3" title="Audit" description="Run audits with ready-to-export reports and real-time updates." />
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section id="industries" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="px-6 py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-800">Built for Every Industry</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10">Auditric is trusted by teams across Food Services, Healthcare, Finance, and Tech sectors to stay compliant and audit-ready.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <IndustryCard name="🍽️ Food Services" />
          <IndustryCard name="🏥 Healthcare" />
          <IndustryCard name="💼 Finance" />
          <IndustryCard name="🖥️ Tech" />
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section id="demo" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="px-6 py-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-semibold mb-4">Ready to Make Compliance Simple?</h2>
        <p className="mb-6 text-lg">Join teams who trust Auditric to stay ahead of regulations and streamline workflows.</p>
        <a href="#" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">Request a Demo</a>
      </motion.section>

      {/* Footer */}
      <footer className="px-6 py-10 bg-gray-900 text-gray-300 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Auditric. All rights reserved.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:underline text-sm">Privacy Policy</a>
          <a href="#" className="hover:underline text-sm">Terms of Service</a>
          <select className="bg-gray-800 text-white text-sm p-1 rounded">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
            <option>German</option>
            <option>Portuguese</option>
          </select>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition border border-gray-200 text-center">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ step, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="text-blue-600 text-4xl font-bold mb-2">{step}</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function IndustryCard({ name }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-40 text-center text-blue-800 font-medium">{name}</div>
  );
}
