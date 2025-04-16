import React from "react";

export default function AuditricLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-700">Auditric</div>
        <ul className="hidden md:flex gap-6 text-sm text-gray-700">
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#how" className="hover:text-blue-600">How It Works</a></li>
          <li><a href="#industries" className="hover:text-blue-600">Industries</a></li>
          <li><a href="#demo" className="hover:text-blue-600">Request Demo</a></li>
        </ul>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">Start Free Trial</button>
      </nav>

      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative px-6 py-32 text-left bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight mb-6 text-blue-800">Automate Your Compliance with Confidence</h1>
            <p className="text-xl text-gray-700 mb-8">Streamline audits, manage risks, and maintain continuous compliance — all in one place.</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">Get a Demo</button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition">Start Free Trial</button>
            </div>
          </div>
          <div className="hidden md:block">
  <img src="/assets/compliance-hero.svg" alt="Compliance Hero" className="w-full max-w-md mx-auto rounded-xl shadow-lg" onError={(e) => (e.currentTarget.style.display = 'none')} />
</div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Why Auditric?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard title="AI Copilot" desc="Smart compliance insights, suggestions, and alerts to stay ahead of risks." />
          <FeatureCard title="Audit Planning" desc="Schedule and track audit cycles with collaboration tools." />
          <FeatureCard title="Risk Register" desc="Score and mitigate risks with frameworks and heatmaps." />
          <FeatureCard title="Incident Tracking" desc="Capture incidents with attachments, voice, and location tags." />
          <FeatureCard title="Policy Manager" desc="Distribute and track policy acknowledgments with full version control." />
          <FeatureCard title="Checklist Automation" desc="Run checklists offline, sync results, and analyze insights." />
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="px-6 py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">Built for Every Industry</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">Auditric is trusted by teams across Food Services, Healthcare, Finance, and Tech sectors to stay compliant and audit-ready.</p>
      </section>

      {/* How It Works */}
      <section id="how" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <StepCard step="1" title="Setup" desc="Configure modules, roles, and compliance frameworks in minutes." />
          <StepCard step="2" title="Automate" desc="Turn on live monitoring, task routing, and smart alerts." />
          <StepCard step="3" title="Audit" desc="Run audits with ready-to-export reports and real-time updates." />
        </div>
      </section>

      {/* Call to Action */}
      <section id="demo" className="px-6 py-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-semibold mb-4">Ready to Make Compliance Simple?</h2>
        <p className="mb-6 text-lg">Join teams who trust Auditric to stay ahead of regulations and streamline workflows.</p>
        <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100">Request a Demo</button>
      </section>

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

function FeatureCard({ title, desc }) {
  const iconMap = {
    "AI Copilot": "/assets/icons/ai.svg",
    "Audit Planning": "/assets/icons/calendar.svg",
    "Risk Register": "/assets/icons/risk.svg",
    "Incident Tracking": "/assets/icons/incident.svg",
    "Policy Manager": "/assets/icons/policy.svg",
    "Checklist Automation": "/assets/icons/checklist.svg",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
      <img src={iconMap[title]} alt={title} className="w-12 h-12 mb-4" onError={(e) => (e.currentTarget.style.display = 'none')} />
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function StepCard({ step, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="text-blue-600 text-4xl font-bold mb-3">{step}</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-800">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
