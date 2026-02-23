/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  HardHat, 
  Ruler, 
  ShieldCheck, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight, 
  Globe, 
  Award, 
  Users, 
  Zap,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3 md:py-4' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center ${isScrolled ? 'bg-brand-charcoal' : 'bg-white'}`}>
            <Building2 className={isScrolled ? 'text-white' : 'text-brand-charcoal'} size={18} />
          </div>
          <span className={`text-lg md:text-xl font-bold tracking-tighter uppercase ${isScrolled ? 'text-brand-charcoal' : 'text-white'}`}>
            ApexBuild
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['Projects', 'Services', 'About', 'Insights'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-gold ${isScrolled ? 'text-brand-charcoal' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <button className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${isScrolled ? 'bg-brand-charcoal text-white hover:bg-brand-steel' : 'bg-brand-gold text-white hover:bg-white hover:text-brand-charcoal'}`}>
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu className={isScrolled ? 'text-brand-charcoal' : 'text-white'} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-brand-charcoal z-[60] p-10 flex flex-col"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-white text-2xl font-bold tracking-tighter uppercase">ApexBuild</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {['Projects', 'Services', 'About', 'Insights', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-white text-4xl font-serif italic hover:text-brand-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/construction-hero/1920/1080" 
          alt="Modern Infrastructure" 
          className="w-full h-full object-cover brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-block text-brand-gold font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
            Engineering the Future
          </span>
          <h1 className="text-white text-fluid-h1 font-serif leading-[1.1] mb-8">
            Building Tomorrow’s <br className="hidden md:block" />
            <span className="italic text-brand-gold">Infrastructure</span> Today.
          </h1>
          <p className="text-white/70 text-base md:text-xl max-w-xl mb-12 font-light leading-relaxed">
            ApexBuild delivers world-class engineering solutions for complex infrastructure projects across the globe. Precision, safety, and scale defined.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button className="group flex items-center justify-center gap-3 bg-brand-gold text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-brand-charcoal transition-all duration-300 w-full sm:w-auto">
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 text-sm font-bold uppercase tracking-widest text-white border border-white/30 hover:bg-white/10 transition-all w-full sm:w-auto">
              Request Consultation
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-white/20 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold" />
        </div>
        <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-mono">Scroll</span>
      </motion.div>
    </section>
  );
};

const TrustBar = () => {
  const metrics = [
    { label: 'Years Experience', value: '25+' },
    { label: 'Projects Completed', value: '180+' },
    { label: 'Sq Ft Delivered', value: '1.2M' },
    { label: 'Global Offices', value: '12' },
  ];

  return (
    <section className="bg-brand-concrete py-12 md:py-20 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-2">{m.value}</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-brand-steel font-bold">{m.label}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-24 opacity-30 grayscale">
          {/* Mock Logos */}
          <div className="flex items-center gap-2 font-bold text-sm md:text-xl"><Globe size={20} /> GLOBAL GOV</div>
          <div className="flex items-center gap-2 font-bold text-sm md:text-xl"><Award size={20} /> ISO 9001</div>
          <div className="flex items-center gap-2 font-bold text-sm md:text-xl"><ShieldCheck size={20} /> SAFEBUILD</div>
          <div className="flex items-center gap-2 font-bold text-sm md:text-xl"><Zap size={20} /> ENERGY CORP</div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] bg-brand-concrete overflow-hidden">
              <img 
                src="https://picsum.photos/seed/engineer-site/800/1000" 
                alt="Engineering Precision" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-48 h-48 md:w-64 md:h-64 bg-brand-gold p-6 md:p-8 hidden sm:block">
              <p className="text-white text-sm md:text-lg font-serif italic leading-tight">
                "We don't just build structures; we engineer legacies that stand the test of time."
              </p>
              <div className="mt-4 md:mt-6 text-white/60 text-[10px] md:text-xs uppercase tracking-widest font-bold">
                Arthur Sterling, CEO
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-brand-gold font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Our Legacy</span>
            <h2 className="text-3xl md:text-fluid-h2 font-serif mb-6 md:mb-8 leading-tight">
              A Quarter Century of <br className="hidden md:block" /> Engineering Excellence.
            </h2>
            <div className="space-y-4 md:space-y-6 text-brand-steel text-sm md:text-base leading-relaxed">
              <p>
                Founded in 1999, ApexBuild has grown from a specialized structural firm into a global leader in infrastructure and commercial construction. Our approach combines traditional craftsmanship with cutting-edge smart technology.
              </p>
              <p>
                We specialize in high-complexity projects where precision is non-negotiable. From deep-sea foundations to skyscraper structural integrity, our team of 500+ engineers ensures every millimeter meets the highest international standards.
              </p>
            </div>
            
            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-brand-concrete flex items-center justify-center">
                  <ShieldCheck className="text-brand-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs md:text-sm uppercase tracking-wider mb-1">Safety First</h4>
                  <p className="text-[11px] md:text-xs text-brand-steel">Zero-incident track record across all major sites.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-brand-concrete flex items-center justify-center">
                  <Zap className="text-brand-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs md:text-sm uppercase tracking-wider mb-1">Smart Tech</h4>
                  <p className="text-[11px] md:text-xs text-brand-steel">BIM-led construction for maximum efficiency.</p>
                </div>
              </div>
            </div>

            <button className="mt-8 md:mt-12 group flex items-center gap-2 text-brand-charcoal font-bold text-xs md:text-sm uppercase tracking-widest">
              Learn more about our history <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Infrastructure Development',
      desc: 'Large-scale civil engineering including bridges, tunnels, and transport hubs.',
      icon: <Globe size={32} />,
      img: 'https://picsum.photos/seed/infra/600/400'
    },
    {
      title: 'Commercial Construction',
      desc: 'High-rise corporate headquarters and premium retail developments.',
      icon: <Building2 size={32} />,
      img: 'https://picsum.photos/seed/comm/600/400'
    },
    {
      title: 'Structural Engineering',
      desc: 'Advanced structural analysis and seismic retrofitting for critical assets.',
      icon: <Ruler size={32} />,
      img: 'https://picsum.photos/seed/eng/600/400'
    },
    {
      title: 'Project Management',
      desc: 'End-to-end oversight ensuring on-time and on-budget delivery.',
      icon: <Users size={32} />,
      img: 'https://picsum.photos/seed/pm/600/400'
    },
    {
      title: 'Renovation & Restoration',
      desc: 'Preserving architectural heritage with modern structural reinforcement.',
      icon: <HardHat size={32} />,
      img: 'https://picsum.photos/seed/reno/600/400'
    },
    {
      title: 'Smart Building Solutions',
      desc: 'Integrating IoT and sustainable energy systems into modern builds.',
      icon: <Zap size={32} />,
      img: 'https://picsum.photos/seed/smart/600/400'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-fluid-h2 font-serif leading-tight">
              Comprehensive <br className="hidden md:block" /> Engineering Solutions.
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm leading-relaxed">
            From initial feasibility studies to final delivery, we provide a full spectrum of construction services tailored for global developers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-brand-charcoal p-8 md:p-12 hover:bg-brand-steel transition-colors duration-500 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-brand-gold mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(s.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-lg md:text-xl font-serif mb-4">{s.title}</h3>
                <p className="text-white/40 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 group-hover:text-white/70 transition-colors">
                  {s.desc}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-gold group-hover:text-white transition-colors">
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
              
              {/* Subtle background image on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'The Obsidian Tower',
      location: 'Dubai, UAE',
      category: 'Commercial',
      year: '2024',
      img: 'https://picsum.photos/seed/proj1/800/1000'
    },
    {
      title: 'Grand Meridian Bridge',
      location: 'London, UK',
      category: 'Infrastructure',
      year: '2023',
      img: 'https://picsum.photos/seed/proj2/800/1000'
    },
    {
      title: 'Solaris Tech Campus',
      location: 'California, USA',
      category: 'Industrial',
      year: '2025',
      img: 'https://picsum.photos/seed/proj3/800/1000'
    },
    {
      title: 'Harbor Point Residences',
      location: 'Singapore',
      category: 'Residential',
      year: '2024',
      img: 'https://picsum.photos/seed/proj4/800/1000'
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-20">
          <span className="text-brand-gold font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
          <h2 className="text-3xl md:text-fluid-h2 font-serif">Featured Projects.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="project-card-hover group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden bg-brand-concrete relative">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="overlay absolute inset-0 bg-brand-charcoal/60 opacity-0 transition-opacity duration-500 flex items-center justify-center">
                  <button className="bg-white text-brand-charcoal px-6 md:px-8 py-2 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    View Case Study
                  </button>
                </div>
              </div>
              <div className="mt-4 md:mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif mb-1">{p.title}</h3>
                  <p className="text-brand-steel text-xs md:text-sm">{p.location} — {p.category}</p>
                </div>
                <div className="text-brand-gold font-mono text-xs md:text-sm">{p.year}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 text-center">
          <button className="w-full sm:w-auto px-12 py-5 border border-brand-charcoal/10 hover:bg-brand-charcoal hover:text-white transition-all text-xs md:text-sm font-bold uppercase tracking-widest">
            Explore All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'Understanding project scope, feasibility, and strategic objectives.' },
    { num: '02', title: 'Design & BIM', desc: 'Advanced 3D modeling and structural architectural planning.' },
    { num: '03', title: 'Engineering', desc: 'Rigorous technical analysis and material procurement strategy.' },
    { num: '04', title: 'Construction', desc: 'Precision execution with real-time project tracking systems.' },
    { num: '05', title: 'Delivery', desc: 'Final inspection, certification, and seamless asset handover.' }
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-concrete relative overflow-hidden">
      <div className="industrial-grid absolute inset-0 z-0" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-brand-gold font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Our Methodology</span>
          <h2 className="text-3xl md:text-fluid-h2 font-serif">The Apex Standard.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="text-5xl md:text-6xl font-serif text-brand-charcoal/5 mb-4 md:mb-6">{s.num}</div>
              <div className="absolute top-8 left-0 w-full h-px bg-brand-charcoal/10 hidden lg:block" />
              <div className="relative z-10">
                <h4 className="text-base md:text-lg font-serif mb-3 md:mb-4">{s.title}</h4>
                <p className="text-brand-steel text-xs md:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-gold font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Client Trust</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">What Industry Leaders Say.</h2>
            <p className="text-brand-steel leading-relaxed max-w-md">
              We partner with the world's most ambitious developers and government agencies to deliver landmark infrastructure.
            </p>
          </div>
          <div className="bg-brand-charcoal p-12 md:p-20 text-white relative">
            <div className="text-6xl font-serif text-brand-gold/20 absolute top-10 left-10">“</div>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-serif italic mb-10 leading-relaxed">
                "ApexBuild's commitment to engineering precision and safety is unparalleled. They handled our $200M infrastructure project with absolute professionalism and delivered ahead of schedule."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-steel overflow-hidden">
                  <img src="https://picsum.photos/seed/person1/100/100" alt="Client" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="font-bold text-sm uppercase tracking-wider">Jameson Vane</div>
                  <div className="text-xs text-white/40">Director of Infrastructure, UrbanDev Global</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://picsum.photos/seed/cta-bg/1920/1080" 
          alt="Construction Site" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-fluid-h1 font-serif text-white mb-8 md:mb-10">
            Let’s Build Your <span className="italic text-brand-gold">Vision</span>.
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 md:mb-12">
            Partner with a global leader in construction and engineering. Our team is ready to discuss your next landmark project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <button className="bg-brand-gold text-white px-12 py-5 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-brand-charcoal transition-all w-full sm:w-auto">
              Start a Conversation
            </button>
            <button className="text-white border border-white/20 px-12 py-5 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all w-full sm:w-auto">
              Download Capability Statement
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-brand-gold flex items-center justify-center">
                <Building2 className="text-white" size={18} />
              </div>
              <span className="text-lg font-bold tracking-tighter uppercase">ApexBuild</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Global leaders in high-complexity infrastructure and commercial construction. Engineering excellence since 1999.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-brand-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-white/40 hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/40 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-brand-gold">Services</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Infrastructure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Project Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Buildings</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-brand-gold">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-brand-gold">Contact</h4>
            <ul className="space-y-6 text-sm text-white/40">
              <li className="flex gap-4">
                <MapPin size={18} className="shrink-0 text-brand-gold" />
                <span>1200 Sterling Plaza, <br /> New York, NY 10019</span>
              </li>
              <li className="flex gap-4">
                <Phone size={18} className="shrink-0 text-brand-gold" />
                <span>+1 (212) 555-0198</span>
              </li>
              <li className="flex gap-4">
                <Mail size={18} className="shrink-0 text-brand-gold" />
                <span>contact@apexbuild.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/20">
          <p>© 2026 ApexBuild Constructions. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
