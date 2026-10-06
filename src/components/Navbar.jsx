import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Terminal } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', index: '01' },
    { name: 'Skills', href: '#skills', index: '02' },
    { name: 'Projects', href: '#projects', index: '03' },
    { name: 'Certs & Edu', href: '#certifications', index: '04' },
    { name: 'Contact', href: '#contact', index: '05' },
  ];

  const toggleSound = () => {
    const state = soundFx.toggleSound();
    setSoundEnabled(state);
    if (state) soundFx.playClick();
  };

  const handleLinkClick = () => {
    soundFx.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05060b]/85 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,240,255,0.08)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#hero"
          onClick={() => soundFx.playClick()}
          className="group flex items-center gap-3 text-white font-mono text-lg font-bold tracking-wider"
        >
          <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-transparent border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            <span className="text-cyan-400 group-hover:text-cyan-300 font-extrabold text-base">AY</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-slate-100 group-hover:text-cyan-300 transition-colors">
              ANAND K. YADAV
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              AVAILABLE FOR HIRE
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
              className="group px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/30 transition-all flex items-center gap-1.5 border border-transparent hover:border-cyan-500/30"
            >
              <span className="text-cyan-500/60 group-hover:text-cyan-400 text-[10px]">{link.index}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Right CTA / Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sound Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => soundFx.playHover()}
            title={soundEnabled ? 'Mute Cyber Audio FX' : 'Enable Cyber Audio FX'}
            className="p-2 rounded-lg border border-slate-700/60 bg-slate-900/60 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all backdrop-blur-md"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Quick Connect Link / Action */}
          <a
            href="#contact"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Terminal className="w-3.5 h-3.5 text-slate-950" />
            <span>LET'S CONNECT</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg border border-slate-800 bg-slate-900/80 text-cyan-400"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg border border-cyan-500/30 bg-slate-900/80 text-cyan-400 hover:bg-cyan-950/40"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-cyan-500/30 px-6 py-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="text-[11px] font-mono text-cyan-400/70 border-b border-slate-800 pb-2">
            // NAVIGATION PROTOCOL
          </div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between py-2 text-sm font-mono text-slate-300 hover:text-cyan-300 border-b border-slate-900"
              >
                <span>{link.name}</span>
                <span className="text-cyan-500 text-xs">{link.index}</span>
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-mono font-bold bg-cyan-400 text-slate-950"
            >
              <Terminal className="w-4 h-4" />
              <span>INITIALIZE CONTACT</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
