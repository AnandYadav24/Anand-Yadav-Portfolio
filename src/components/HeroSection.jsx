import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import Hero3DCore from './Hero3DCore';
import { soundFx } from '../utils/audio';

const ROLES = [
  'Software Engineer',
  'Frontend Developer',
  'AI & ML Practitioner',
  'Data Analytics Specialist'
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & Bio Column (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Holographic Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-slate-900/60 backdrop-blur-md text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-slate-400">// CORE STATUS:</span>
              <span className="font-semibold text-cyan-300">ONLINE & READY TO DEPLOY</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm font-mono tracking-widest text-slate-400 uppercase flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                INITIATING SYSTEM PROTOCOL
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Hi, I'm{' '}
                <span className="gradient-text-cyber block mt-1 drop-shadow-lg">
                  Anand Kumar Yadav
                </span>
              </h1>
            </div>

            {/* Dynamic Role Subheading with Typing Glitch */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-mono text-slate-300 min-h-[44px]">
              <span className="text-cyan-400">&gt;</span>
              <span className="text-white font-medium">{displayText}</span>
              <span className="w-2.5 h-6 bg-cyan-400 animate-pulse inline-block" />
            </div>

            {/* Bio Narrative */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl font-light leading-relaxed">
              Aspiring Software Engineer & Creative Frontend Developer studying{' '}
              <span className="text-cyan-300 font-medium">BCA at Invertis University</span>. 
              Bridging high-performance Web Interfaces with{' '}
              <span className="text-purple-300 font-medium">React.js</span>,{' '}
              <span className="text-cyan-300 font-medium">Python</span>, and{' '}
              <span className="text-emerald-300 font-medium">Machine Learning</span> models to craft next-generation digital experiences.
            </p>

            {/* Tech Badges Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              {['React.js', 'Python', 'JavaScript (ES6+)', 'SQL', 'Machine Learning', 'Pandas', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all transform hover:-translate-y-0.5"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-slate-200 glass-panel border border-slate-700/80 hover:border-cyan-400 hover:text-cyan-300 transition-all transform hover:-translate-y-0.5"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>CONTACT ME</span>
              </a>

              {/* Social Quick Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/AnandYadav24"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => soundFx.playClick()}
                  className="p-3 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                  title="GitHub Profile (AnandYadav24)"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/anand-kumar-yadav-486539333"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => soundFx.playClick()}
                  className="p-3 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:ay3861234@gmail.com"
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => soundFx.playClick()}
                  className="p-3 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                  title="Send Email (ay3861234@gmail.com)"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Terminal Telemetry Ribbon */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800/80 font-mono text-xs">
              <div className="glass-panel p-2.5 rounded-lg border border-slate-800/80">
                <div className="text-slate-500 text-[10px] uppercase">Education</div>
                <div className="text-cyan-300 font-semibold truncate">BCA @ Invertis Univ</div>
              </div>
              <div className="glass-panel p-2.5 rounded-lg border border-slate-800/80">
                <div className="text-slate-500 text-[10px] uppercase">Specialization</div>
                <div className="text-purple-300 font-semibold truncate">React.js & AI / ML</div>
              </div>
              <div className="glass-panel p-2.5 rounded-lg border border-slate-800/80 col-span-2 sm:col-span-1">
                <div className="text-slate-500 text-[10px] uppercase">Availability</div>
                <div className="text-emerald-300 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                  Immediate Joiner
                </div>
              </div>
            </div>

          </div>

          {/* Right 3D Interactive Model Canvas (5 cols on desktop) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Cyber Ring Frame / Decorative Holographic Backdrop */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent blur-2xl pointer-events-none" />
            <div className="relative w-full glass-panel rounded-3xl border border-cyan-500/20 overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.12)]">
              
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800 bg-slate-950/70 font-mono text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-cyan-400 font-medium">threejs_quantum_orb.exe</span>
                </div>
                <span className="text-slate-500">LIVE RENDER</span>
              </div>

              {/* The Interactive 3D Canvas */}
              <Hero3DCore />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
