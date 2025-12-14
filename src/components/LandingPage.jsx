import React, { useState } from 'react';
import { Menu, X, Droplet, Users, BarChart3, Calendar, Shield, TrendingUp, CheckCircle, Leaf, CloudRain, FileText } from 'lucide-react';
import { Link } from "react-router-dom";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">AgriConnect</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition">Home</a>
            <a href="#features" className="text-gray-700 hover:text-green-600 transition">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition">How It Works</a>
            <a href="#benefits" className="text-gray-700 hover:text-green-600 transition">Benefits</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition">Contact</a>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
<div
  className={`
    md:hidden overflow-hidden transform transition-all duration-300 ease-in-out
    ${isOpen
      ? 'max-h-96 opacity-100 translate-y-0'
      : 'max-h-0 opacity-0 -translate-y-2'}
  `}
>
  <div className="flex flex-col space-y-3 py-4">
    <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-green-600 transition">
      Home
    </a>
    <a href="#features" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-green-600 transition">
      Features
    </a>
    <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-green-600 transition">
      How It Works
    </a>
    <a href="#benefits" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-green-600 transition">
      Benefits
    </a>
    <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-green-600 transition">
      Contact
    </a>
    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition w-full">
      Get Started
    </button>
  </div>
</div>

      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 


        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Agriculture with <span className="text-green-600">Digital Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Fair irrigation scheduling, transparent water distribution, and data-driven farming for a prosperous agricultural future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg">
                View Demo
              </button>
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition border-2 border-green-600">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Calendar className="h-12 w-12 text-blue-600 mb-3" />
                <Link to="/turn-scheduling" className="font-semibold text-gray-800">
                Turn Scheduling</Link>
               </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Users className="h-12 w-12 text-green-600 mb-3" />
                <Link to="/find-scheme" className="font-semibold text-gray-800">Find Scheme</Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <BarChart3 className="h-12 w-12 text-purple-600 mb-3" />
                <Link  to="/analytical-dashboard" className="font-semibold text-gray-800">Analytical Dashboard </Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <CloudRain className="h-12 w-12 text-orange-600 mb-3" />
                <Link to="/climate-prediction" className="font-semibold text-gray-800">Climate Prediction </Link>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Problem Statement Section
const ProblemStatement = () => {
  const problems = [
    {
      icon: <FileText className="h-8 w-8 text-red-600" />,
      title: "Manual Parchi System",
      description: "Time-consuming manual allocation of irrigation turns leading to inefficiency and errors."
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Farmer Data Fragmentation",
      description: "Scattered farmer records make it difficult to track land holdings, crop patterns, and needs."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Irrigation Disputes",
      description: "Lack of transparency in water distribution causes conflicts between farmers."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-red-600" />,
      title: "Limited Government Insights",
      description: "Absence of real-time data prevents targeted agricultural schemes and interventions."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Challenges in Traditional Agriculture
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Current agricultural practices face multiple obstacles that hinder productivity and farmer welfare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="bg-red-50 p-6 rounded-xl border border-red-100">
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Solution Overview Section
const SolutionOverview = () => {
  const solutions = [
    {
      icon: <Calendar className="h-10 w-10 text-green-600" />,
      title: "Digital Parchi/Bari Allocation",
      description: "Automated irrigation turn scheduling based on land size, crop type, and water availability."
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Farmer Registry Analytics",
      description: "Comprehensive Kisan Registry with real-time insights into farmer profiles and agricultural patterns."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-purple-600" />,
      title: "Government Dashboard",
      description: "Decision-support system enabling targeted schemes and evidence-based policy interventions."
    },
    {
      icon: <Droplet className="h-10 w-10 text-cyan-600" />,
      title: "Smart Irrigation Scheduling",
      description: "Weather-integrated planning that optimizes water usage and reduces agricultural disputes."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Digital Solution
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive ecosystem that addresses every challenge with technology-driven solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-600 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Farmer Registration",
      description: "Farmers register on the platform with their personal details and land information."
    },
    {
      number: "2",
      title: "Land & Crop Data Entry",
      description: "Complete profile creation including land holdings, crop types, and water requirements."
    },
    {
      number: "3",
      title: "Automated Turn Allocation",
      description: "System automatically generates fair irrigation schedules based on registered data."
    },
    {
      number: "4",
      title: "Notifications & Monitoring",
      description: "Real-time alerts for irrigation turns and crop management recommendations."
    },
    {
      number: "5",
      title: "Government Analysis",
      description: "Officials access analytics for targeted schemes and agricultural interventions."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple, transparent process from registration to impact.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-green-200" style={{width: '80%', margin: '0 10%'}}></div>
          
          <div className="grid md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-lg relative z-10">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Key Features Section
const Features = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "Fair Irrigation Turns",
      description: "Equitable water distribution based on scientific allocation principles."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Dispute-Free Scheduling",
      description: "Transparent system eliminates conflicts and builds trust among farmers."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Data-Driven Insights",
      description: "Actionable analytics for both farmers and government officials."
    },
    {
      icon: <CloudRain className="h-8 w-8 text-cyan-600" />,
      title: "Weather-Based Planning",
      description: "Integration with weather forecasts for optimal irrigation timing."
    },
    {
      icon: <FileText className="h-8 w-8 text-orange-600" />,
      title: "Transparent Records",
      description: "Complete audit trail of all irrigation turns and allocations."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Performance Tracking",
      description: "Monitor crop yields and water usage efficiency over time."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Powerful capabilities designed to transform agricultural practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Section
const Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: "Reduced Farmer Disputes",
      stat: "85%",
      description: "Significant reduction in irrigation-related conflicts"
    },
    {
      icon: <Droplet className="h-12 w-12 text-blue-600" />,
      title: "Efficient Water Usage",
      stat: "40%",
      description: "Improvement in water conservation and utilization"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-purple-600" />,
      title: "Improved Crop Productivity",
      stat: "30%",
      description: "Increase in agricultural yield and quality"
    },
    {
      icon: <Users className="h-12 w-12 text-orange-600" />,
      title: "Targeted Government Schemes",
      stat: "100%",
      description: "Data-driven policy decisions and interventions"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-cyan-600" />,
      title: "Increased Transparency",
      stat: "95%",
      description: "Farmer satisfaction with allocation process"
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Measurable Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real impact on farmers, communities, and agricultural productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <div className="text-4xl font-bold text-green-600 mb-2">{benefit.stat}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Call to Action Section
const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join the Digital Agriculture Revolution
        </h2>
        <p className="text-xl text-green-50 mb-8">
          Be part of the transformation towards sustainable, efficient, and fair agricultural practices.
        </p>
        <button className="bg-white text-green-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
          Get Started Today
        </button>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold">AgriConnect</span>
            </div>
            <p className="text-gray-400">
              Digital Agriculture & Farmer Support Ecosystem
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition">Benefits</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: something@gmail.com</li>
              <li>Phone: +91 XXX-XXXX</li>
              <li>Address: XXXXXXXXXX</li>
              <li>Jaipur, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AgriConnect - Digital Agriculture & Farmer Support Ecosystem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <HowItWorks />
      <Features />
      <Benefits />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;