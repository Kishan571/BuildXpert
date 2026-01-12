import { useState, useEffect } from "react";
import {
  Mail,
  Zap,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { MobilePreview } from "@/components/ui/mobile-preview";

const services = [
  {
    name: "Engineers & Architects",
    description: "Professional design and planning expertise",
    icon: "🏗️",
  },
  {
    name: "Plumbing Technicians",
    description: "Expert water and sanitation solutions",
    icon: "🚰",
  },
  {
    name: "Painters & Wall Panels",
    description: "Quality finishing and decoration",
    icon: "🎨",
  },
  {
    name: "Contractors",
    description: "Complete construction project management",
    icon: "👷",
  },
  {
    name: "Labourers",
    description: "Skilled workforce for all projects",
    icon: "💪",
  },
  {
    name: "Mason & Masons",
    description: "Masonry and structural work",
    icon: "🧱",
  },
  {
    name: "Interior Designers",
    description: "Creative space transformation",
    icon: "🪴",
  },
  {
    name: "Electrical & Fitters",
    description: "Installation and maintenance",
    icon: "⚡",
  },
];

const features = [
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Connect with verified professionals in minutes",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: MapPin,
    title: "Location Based",
    description: "Find services available in your exact area",
    gradient: "from-cyan-600 to-teal-600",
  },
  {
    icon: Users,
    title: "Verified Professionals",
    description: "Trusted and rated service providers",
    gradient: "from-teal-600 to-emerald-600",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose dates and times that work for you",
    gradient: "from-emerald-600 to-blue-600",
  },
];

const stats = [
  { number: "500+", label: "Verified Professionals" },
  { number: "24/7", label: "Available Services" },
  { number: "100%", label: "Satisfaction Rate" },
];

export default function Index() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    } catch (error) {
      console.error("Error subscribing:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
              <span className="text-white font-bold text-lg">bX</span>
            </div>
            <span className="font-bold text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
              buildXpert
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-12">
            <a
              href="#features"
              className="text-slate-300 hover:text-cyan-400 transition group relative"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#services"
              className="text-slate-300 hover:text-cyan-400 transition group relative"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#preview"
              className="text-slate-300 hover:text-cyan-400 transition group relative"
            >
              Preview
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm group hover:border-blue-500/60 transition-all cursor-pointer">
                  <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 uppercase tracking-widest">
                    Coming Soon
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse"></span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                  Construction at
                  <span className="relative inline-block ml-3">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      Light Speed
                    </span>
                  </span>
                </h1>

                <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                  buildXpert brings Urban Company's reliability to construction.
                  Connect with verified engineers, plumbers, painters,
                  contractors, and skilled labourers in seconds.
                </p>
              </div>

              {/* CTA Form */}
              <form onSubmit={handleSubscribe} className="space-y-4 max-w-sm">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative flex items-center bg-slate-900 rounded-lg border border-blue-500/20 overflow-hidden">
                    <Mail className="w-5 h-5 ml-4 text-blue-400" />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 bg-transparent px-4 py-3 text-white placeholder-slate-500 focus:outline-none"
                    />
                  </div>
                  {subscribed && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-600/90 to-cyan-600/90 rounded-lg backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-white font-semibold">
                        <CheckCircle2 className="w-5 h-5" />
                        Thanks for joining!
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading || subscribed}
                  className="w-full group relative px-6 py-3 rounded-lg font-semibold text-white overflow-hidden disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    {loading
                      ? "Joining..."
                      : subscribed
                        ? "✓ Joined!"
                        : "Get Early Access"}
                    {!loading && !subscribed && (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </button>
              </form>

              <p className="text-sm text-slate-400">
                No spam, no credit card required. Get instant access when we
                launch.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-500/20">
                {stats.map((stat, i) => (
                  <div key={i} className="group">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative h-full min-h-96 hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Floating cards */}
                <div
                  className="absolute -top-20 -right-10 w-72 h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-xl border border-blue-500/30 p-6 shadow-2xl transform hover:scale-105 transition-transform duration-500 group"
                  style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                    <span className="text-sm font-semibold text-slate-300">
                      Verified Professional
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Complete your project with confidence
                  </p>
                </div>

                <div
                  className="absolute top-32 -left-20 w-72 h-48 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl backdrop-blur-xl border border-cyan-500/30 p-6 shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  style={{ transform: `translateY(${scrollY * 0.4}px)` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400"></div>
                    <span className="text-sm font-semibold text-slate-300">
                      Instant Booking
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Book in minutes, not days or weeks
                  </p>
                </div>

                <div
                  className="absolute -bottom-10 right-10 w-72 h-48 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-xl border border-teal-500/30 p-6 shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"></div>
                    <span className="text-sm font-semibold text-slate-300">
                      Real-time Tracking
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Monitor your project every step of the way
                  </p>
                </div>

                {/* Central glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative py-32 px-4 sm:px-6 lg:px-8 border-y border-blue-500/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-white">
              Why Choose
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                buildXpert?
              </span>
            </h2>
            <p className="text-lg text-slate-300">
              Experience the future of construction services with our innovative
              platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative h-full bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-8 hover:border-blue-500/50 transition group-hover:bg-slate-900 overflow-hidden">
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    {/* Content */}
                    <div className="relative space-y-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 group-hover:text-slate-300 transition">
                        {feature.description}
                      </p>
                      <div className="pt-4 flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1">
                        <span className="text-sm font-semibold">
                          Learn more
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-white">
              Construction Services
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Available Today
              </span>
            </h2>
            <p className="text-lg text-slate-300">
              From planning to completion, we have the expertise you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-xl border border-blue-500/20 p-6 hover:border-blue-500/50 transition overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>

                  <div className="relative space-y-3">
                    <div className="text-4xl">{service.icon}</div>
                    <h3 className="font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition">
                      {service.name}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section
        id="preview"
        className="relative py-32 px-4 sm:px-6 lg:px-8 border-y border-blue-500/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-white">
              Mobile App
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Live Preview
              </span>
            </h2>
            <p className="text-lg text-slate-300">
              Experience the seamless interface with interactive live preview
            </p>
          </div>

          <MobilePreview />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Ready to Transform
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Construction?
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join thousands of professionals already waiting for buildXpert.
              Get early access today.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <div className="relative flex-1 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative flex items-center bg-slate-900 rounded-lg border border-blue-500/20">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent px-4 py-3 text-white placeholder-slate-500 focus:outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading || subscribed}
              className="group relative px-8 py-3 rounded-lg font-semibold text-white overflow-hidden whitespace-nowrap disabled:opacity-50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                {loading ? "Joining..." : subscribed ? "✓ Done!" : "Get Access"}
                {!loading && !subscribed && (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </div>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-blue-500/10 bg-slate-950/50 backdrop-blur-xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">bX</span>
                </div>
                <span className="font-bold text-white">buildXpert</span>
              </div>
              <p className="text-sm text-slate-400">
                Professional construction services at your fingertips
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Product</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Features", href: "#features" },
                  { label: "Services", href: "#services" },
                  { label: "Mobile App", href: "#preview" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-slate-400 hover:text-cyan-400 transition group relative"
                    >
                      {item.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "About Us", href: "#" },
                  { label: "Contact", href: "#" },
                  { label: "Blog", href: "#" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-slate-400 hover:text-cyan-400 transition group relative"
                    >
                      {item.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-slate-400 hover:text-cyan-400 transition group relative"
                    >
                      {item.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-500/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>&copy; 2026 buildXpert. All rights reserved.</p>
              <div className="flex gap-6">
                {["Twitter", "LinkedIn", "Instagram"].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="hover:text-cyan-400 transition group relative"
                  >
                    {item}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
