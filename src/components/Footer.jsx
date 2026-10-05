import React from 'react';
import { ArrowUp, Mail, Heart, Terminal, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { soundFx } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-900 bg-[#040509] py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-900 pb-8">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold">
              AY
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-sm">ANAND KUMAR YADAV</div>
              <div className="text-[10px] text-slate-500">Aspiring Software Engineer & Frontend Developer</div>
            </div>
          </div>

          {/* Telemetry Status Strip */}
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEM: ONLINE (100%)</span>
            </div>
            <span>//</span>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>R3F / WEBGL 2.0</span>
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            title="Return to top"
          >
            <span>TOP_OF_PAGE</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-[11px] text-slate-500">
            Designed & Engineered by <span className="text-slate-300">Anand Kumar Yadav</span>. Built with React.js, Three.js, and Tailwind CSS.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com/AnandYadav24"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/anand-kumar-yadav-486539333"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:ay3861234@gmail.com"
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

