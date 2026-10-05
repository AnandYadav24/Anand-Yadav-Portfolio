import React from 'react';
import { Award, GraduationCap, CheckCircle2, Calendar, Building, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function CertificationsSection() {
  const credentials = [
    {
      id: 'google-ai',
      title: 'Google AI Essentials',
      issuer: 'Google',
      type: 'Certification',
      date: '2024 - 2025',
      badge: 'VERIFIED CREDENTIAL',
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/20',
      glow: 'shadow-[0_0_20px_rgba(0,240,255,0.15)]',
      icon: Award,
      description: 'Mastered foundational and applied concepts of generative AI, ethical machine learning deployment, prompt engineering frameworks, and AI-accelerated workflows.',
      skills: ['Generative AI', 'Prompt Engineering', 'Responsible AI', 'AI Productivity']
    },
    {
      id: 'british-airways',
      title: 'British Airways Data Science Simulation',
      issuer: 'British Airways & Forage',
      type: 'Industry Simulation',
      date: '2024',
      badge: 'COMPLETED WITH HONORS',
      color: 'border-blue-500/40 text-blue-400 bg-blue-950/20',
      glow: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]',
      icon: ShieldCheck,
      description: 'Conducted customer review web scraping, sentiment analytics with Python NLP, and built predictive Random Forest classification models to forecast customer flight bookings.',
      skills: ['Web Scraping (BeautifulSoup)', 'Predictive Modeling', 'Pandas & NumPy', 'Customer Analytics']
    },
    {
      id: 'ai-plus-fest',
      title: 'AI+ Skills Fest 2026',
      issuer: 'Global AI Summit / Fest',
      type: 'Specialized Program',
      date: '2026',
      badge: 'ACTIVE COHORT',
      color: 'border-purple-500/40 text-purple-400 bg-purple-950/20',
      glow: 'shadow-[0_0_20px_rgba(168,85,247,0.15)]',
      icon: Sparkles,
      description: 'Intensive immersion in 2026 state-of-the-art AI tooling, multi-modal APIs, intelligent agents, and scalable machine learning integrations in production software.',
      skills: ['Next-Gen AI Models', 'Agentic Workflows', 'API Integration', 'ML Pipelines']
    },
    {
      id: 'invertis-bca',
      title: 'Bachelor of Computer Applications (BCA)',
      issuer: 'Invertis University',
      type: 'Formal Degree',
      date: 'In Progress',
      badge: 'UNDERGRADUATE DEGREE',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)]',
      icon: GraduationCap,
      description: 'Comprehensive computer science and applications curriculum covering Data Structures, Relational Database Management Systems (SQL), Software Engineering, OOP, and Web Development.',
      skills: ['Core Computer Science', 'Data Structures & Algorithms', 'Database Architecture', 'Software Engineering']
    }
  ];

  return (
    <section id="certifications" className="relative py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
            <Award className="w-3.5 h-3.5" />
            <span>// SECTION 04: CREDENTIALS & ACADEMIA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="gradient-text-cyber">Academic Milestones</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-base font-light">
            Continuous technical upskilling with recognized global programs, industry job simulations, and computer science education at Invertis University.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Glowing Circuit Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 -translate-x-1/2 opacity-30 pointer-events-none" />

          <div className="space-y-12">
            {credentials.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card (Half Width) */}
                  <div className="w-full md:w-1/2 text-left">
                    <div
                      onMouseEnter={() => soundFx.playHover()}
                      className={`glass-panel p-6 sm:p-7 rounded-3xl border ${item.color} ${item.glow} hover:border-cyan-400/60 transition-all duration-300 transform hover:-translate-y-1`}
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-slate-700 bg-slate-950 text-slate-300">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Title & Issuer */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm font-mono text-cyan-300 mb-4">
                        <Building className="w-3.5 h-3.5" />
                        <span>{item.issuer}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Skills Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                        {item.skills.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Holographic Node */}
                  <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-950 border border-cyan-500/50 shadow-[0_0_20px_rgba(0,240,255,0.4)] text-cyan-300">
                    <Icon className="w-5 h-5" />
                    <span className="absolute -inset-1 rounded-2xl bg-cyan-400/20 animate-ping -z-10" />
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

