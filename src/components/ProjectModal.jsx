import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { soundFx } from '../utils/audio';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        soundFx.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => {
          soundFx.playClick();
          onClose();
        }}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-cyan-500/30 bg-[#080a14] overflow-hidden shadow-[0_0_60px_rgba(0,240,255,0.2)] z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
            <Cpu className="w-4 h-4" />
            <span>PROJECT_DEEP_DIVE // ID: {project.id}</span>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="p-1.5 rounded-lg border border-slate-700/60 text-slate-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-950/40 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto text-left">
          
          {/* Badge & Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-500">// {project.role}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Engineering Challenges & Solutions */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Technical Highlights & Outcomes
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links / Action Bar */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-200 border border-slate-700 bg-slate-900/80 hover:border-cyan-400 hover:text-cyan-300 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-white shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo / Simulation</span>
                </a>
              )}
            </div>
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
            >
              [ Press ESC or Click to Close ]
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

