import React, { useState } from 'react';
import { Cpu, Code, Database, Sparkles, Filter, Layers, BrainCircuit, Terminal, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'languages', label: 'Languages' },
    { id: 'ai-data', label: 'AI / ML & Data' },
    { id: 'database-tools', label: 'Databases & Tools' }
  ];

  const skills = [
    {
      name: 'React.js',
      category: 'frontend',
      level: 90,
      icon: '⚛️',
      color: 'from-cyan-500/20 to-blue-500/10',
      border: 'border-cyan-500/40',
      textColor: 'text-cyan-400',
      description: 'Hooks, SPA architecture, Context/State Management, Virtual DOM optimization, and component lifecycles.'
    },
    {
      name: 'Python',
      category: 'languages',
      level: 92,
      icon: '🐍',
      color: 'from-amber-500/20 to-yellow-500/10',
      border: 'border-amber-500/40',
      textColor: 'text-amber-400',
      description: 'Object-oriented programming, data structures, scripting, algorithm design, and ML pipeline development.'
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'languages',
      level: 88,
      icon: '⚡',
      color: 'from-yellow-500/20 to-amber-500/10',
      border: 'border-yellow-500/40',
      textColor: 'text-yellow-400',
      description: 'Async/Await, Promises, Closures, DOM manipulation, ESNext syntax, and modern event architectures.'
    },
    {
      name: 'Machine Learning',
      category: 'ai-data',
      level: 84,
      icon: '🧠',
      color: 'from-purple-500/20 to-pink-500/10',
      border: 'border-purple-500/40',
      textColor: 'text-purple-400',
      description: 'Supervised learning, Random Forest, Logistic Regression, Scikit-learn, metric evaluation (F1/ROC).'
    },
    {
      name: 'SQL & Databases',
      category: 'database-tools',
      level: 86,
      icon: '🗄️',
      color: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-500/40',
      textColor: 'text-emerald-400',
      description: 'Relational database schema modeling, complex joins, indexing, aggregation, subqueries, and data normalization.'
    },
    {
      name: 'Pandas & NumPy',
      category: 'ai-data',
      level: 89,
      icon: '🐼',
      color: 'from-indigo-500/20 to-blue-500/10',
      border: 'border-indigo-500/40',
      textColor: 'text-indigo-400',
      description: 'Exploratory Data Analysis (EDA), DataFrame manipulation, vectorized computation, missing data handling.'
    },
    {
      name: 'HTML5 & CSS3',
      category: 'frontend',
      level: 95,
      icon: '🎨',
      color: 'from-rose-500/20 to-red-500/10',
      border: 'border-rose-500/40',
      textColor: 'text-rose-400',
      description: 'Semantic HTML, responsive Flexbox/Grid, CSS custom variables, keyframe animations, and modern web standards.'
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      level: 92,
      icon: '🌊',
      color: 'from-sky-500/20 to-cyan-500/10',
      border: 'border-sky-500/40',
      textColor: 'text-sky-400',
      description: 'Utility-first styling, glassmorphism, responsive breakpoints, dark-mode styling, and clean UI components.'
    },
    {
      name: 'Data Analysis & Viz',
      category: 'ai-data',
      level: 86,
      icon: '📊',
      color: 'from-teal-500/20 to-emerald-500/10',
      border: 'border-teal-500/40',
      textColor: 'text-teal-400',
      description: 'Matplotlib, Seaborn, sentiment analysis, exploratory plots, customer insights, and trend forecasting.'
    },
    {
      name: 'Git & Version Control',
      category: 'database-tools',
      level: 88,
      icon: '🐙',
      color: 'from-orange-500/20 to-amber-500/10',
      border: 'border-orange-500/40',
      textColor: 'text-orange-400',
      description: 'Branching strategies, GitHub collaboration, commit workflows, and version management.'
    },
    {
      name: 'Three.js & WebGL Basics',
      category: 'frontend',
      level: 78,
      icon: '🪐',
      color: 'from-violet-500/20 to-purple-500/10',
      border: 'border-violet-500/40',
      textColor: 'text-violet-400',
      description: '3D meshes, orbital cameras, lighting, materials, particle systems, and interactive canvas rendering.'
    },
    {
      name: 'REST APIs & Integration',
      category: 'database-tools',
      level: 85,
      icon: '🔌',
      color: 'from-blue-500/20 to-indigo-500/10',
      border: 'border-blue-500/40',
      textColor: 'text-blue-400',
      description: 'Fetch/Axios HTTP calls, JSON parsing, API authentication, error handling, and asynchronous data flows.'
    }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  // Mouse tilt calculation handler
  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="skills" className="relative py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
              <Cpu className="w-3.5 h-3.5" />
              <span>// SECTION 02: ARSENAL & PROFICIENCY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Interactive <span className="gradient-text-cyber">Skills Matrix</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-base font-light">
              High-performance technologies across frontend architecture, algorithms, relational data pipelines, and machine learning models.
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-950/70 p-1.5 rounded-2xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory(cat.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Interactive Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-left">
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.name}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => {
                soundFx.playHover();
                setHoveredSkill(skill.name);
              }}
              className={`relative glass-panel rounded-2xl p-5 border transition-all duration-200 cursor-pointer overflow-hidden group ${skill.border} hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)]`}
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.15s ease-out, border-color 0.3s'
              }}
            >
              {/* Dynamic mouse glare highlight */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.08), transparent 70%)'
                }}
              />

              {/* Card Header with Icon & Proficiency Badge */}
              <div className="flex items-center justify-between mb-3 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="text-2xl w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className={`text-base font-bold text-white group-hover:${skill.textColor} transition-colors`}>
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      {skill.category}
                    </span>
                  </div>
                </div>
                <div className={`text-xs font-mono font-bold ${skill.textColor} bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800`}>
                  {skill.level}%
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 font-light leading-relaxed mb-4 relative z-10 min-h-[36px]">
                {skill.description}
              </p>

              {/* Animated Progress Bar */}
              <div className="relative z-10 space-y-1">
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800/80">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-400 group-hover:animate-pulse transition-all duration-500`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-0.5">
                  <span>MASTERY</span>
                  <span className="text-slate-400">OPTIMAL</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Matrix Summary Footer Banner */}
        <div className="mt-12 glass-panel p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/20 via-slate-950/60 to-purple-950/20 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Full-Spectrum Engineering Capability</div>
              <div className="text-xs text-slate-400 font-light">Able to independently take projects from UI/UX design and React state orchestration to Python ML models and SQL data backends.</div>
            </div>
          </div>
          <a
            href="#projects"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="shrink-0 px-4 py-2 rounded-xl text-xs font-mono font-bold text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/10 transition-colors"
          >
            SEE SKILLS IN ACTION &gt;
          </a>
        </div>

      </div>
    </section>
  );
}

