"use client";
import React, { useState } from 'react';
import { 
  Monitor, 
  Menu, 
  X, 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Shield, 
  Zap, 
  Globe, 
  Bell, 
  TrendingUp, 
  Smartphone,
  Clock,
  Users,
  BarChart3,
  Star,
  Twitter,
  Github,
  Linkedin
} from 'lucide-react';
import { useRouter } from 'next/navigation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const features = [
    {
      icon: Shield,
      title: "Advanced Monitoring",
      description: "Monitor HTTP, HTTPS, TCP, UDP, DNS, and more with advanced configuration options."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "15+ monitoring locations worldwide ensure accurate uptime measurement from every region."
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Get notified via email, SMS, Slack, Discord, or webhook within 30 seconds of downtime."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-30 second detection times with intelligent false positive prevention algorithms."
    },
    {
      icon: TrendingUp,
      title: "Performance Insights",
      description: "Track response times, SSL certificate expiration, and performance trends over time."
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Native iOS and Android apps to monitor your websites on the go with push notifications."
    },
    {
      icon: Clock,
      title: "Status Pages",
      description: "Beautiful, customizable status pages to keep your users informed during incidents."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Invite team members, set up on-call schedules, and manage incidents together."
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Comprehensive reports and analytics to understand your website's performance patterns."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "0",
      period: "forever",
      description: "Perfect for personal projects and small websites",
      features: [
        "5 monitors",
        "5-minute checks",
        "Email alerts",
        "30-day history",
        "Status pages"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "29",
      period: "month",
      description: "Ideal for growing businesses and teams",
      features: [
        "50 monitors",
        "1-minute checks",
        "SMS + Email alerts",
        "1-year history",
        "Custom status pages",
        "Team collaboration",
        "API access"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "99",
      period: "month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited monitors",
        "30-second checks",
        "All alert channels",
        "Unlimited history",
        "White-label status pages",
        "SSO integration",
        "Priority support",
        "Custom integrations"
      ],
      highlighted: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      content: "BetterUptime has been incredible for our team. The instant alerts saved us from a major outage last month.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Marcus Rodriguez",
      role: "DevOps Engineer at CloudScale",
      content: "The global monitoring network gives us confidence that our services are truly available worldwide.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Watson",
      role: "Founder of StartupHub",
      content: "Setup took 5 minutes and we've had 99.9% uptime ever since. The status pages are beautiful too!",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">BetterUptime</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
              <button onClick={() => {
                router.push("/signin")
              }}
              className="text-gray-300 hover:text-white transition-colors">Sign In</button>
              <button onClick={() => {
                router.push("/signup")
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Start Free Trial
              </button>
            </nav>

            <button 
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
                <button className="text-gray-300 hover:text-white transition-colors text-left">Sign In</button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-left">
                  Start Free Trial
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <CheckCircle className="w-4 h-4 mr-2" />
              99.9% uptime guarantee
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Monitor your website
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                like a pro
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get instant alerts when your website goes down. Monitor performance, uptime, and user experience 
              from multiple locations worldwide with our advanced monitoring platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center">
                Start monitoring for free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white">50,000+</div>
                <div className="text-gray-400">Websites monitored</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-gray-400">Uptime achieved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">30s</div>
                <div className="text-gray-400">Detection time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-gray-400">Global locations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything you need for perfect uptime
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive monitoring tools designed to keep your websites running smoothly 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-700/50 p-8 rounded-xl border border-gray-600/50 hover:border-blue-500/50 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-xl p-8 border transition-all duration-200 hover:-translate-y-1 ${
                  plan.highlighted 
                    ? 'bg-blue-600/10 border-blue-500 relative' 
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {plan.price === "0" ? "Get Started Free" : "Start Free Trial"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by thousands of developers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about their experience with BetterUptime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-700/50 p-8 rounded-xl border border-gray-600/50 hover:border-blue-500/50 transition-all duration-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to ensure your website never goes down?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of developers and businesses who trust BetterUptime to monitor their critical infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105">
              Start Free Trial - No Credit Card Required
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Monitor className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold text-white">BetterUptime</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The most reliable website monitoring service. Get instant alerts when your website goes down and detailed performance insights.
              </p>
              <div className="flex space-x-4">
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Github className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status Pages</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 BetterUptime. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;