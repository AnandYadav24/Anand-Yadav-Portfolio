import React, { useState } from 'react';
import { User, GraduationCap, BrainCircuit, Rocket, Award, Code2, Terminal, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('story'); // 'story' | 'philosophy' | 'code'

  const tabs = [
    { id: 'story', label: '01 // Origin & Education', icon: GraduationCap },
    { id: 'philosophy', label: '02 // AI & Web Dev Passion', icon: BrainCircuit },
    { id: 'code', label: '03 // anand_dossier.py', icon: Code2 },
  ];

  const metrics = [
    { label: 'Projects & Prototypes', value: '12+', detail: 'Full-Stack, ML & Web Apps', color: 'text-cyan-400' },
    { label: 'Academic Standing', value: 'BCA', detail: 'Invertis University', color: 'text-purple-400' },
    { label: 'Industry Simulations', value: '4+', detail: 'BA, Google AI & Skills Fest', color: 'text-emerald-400' },
    { label: 'Problem Solving', value: '150+', detail: 'Python, SQL & Algorithmic Tasks', color: 'text-amber-400' },
  ];

  return (
    <section id="about" className="relative py-24 border-t border-slate-900 bg-gradient-to-b from-transparent via-[#060813]/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
            <User className="w-3.5 h-3.5" />
            <span>// SECTION 01: IDENTITY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Code with <span className="gradient-text-cyber">Curiosity & Rigor</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base font-light">
            A look into my academic journey at Invertis University, technical philosophy, and my mission to build responsive web applications backed by intelligent machine learning models.
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all transform hover:-translate-y-1 group"
              onMouseEnter={() => soundFx.playHover()}
            >
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>{m.label}</span>
                <Sparkles className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity" />
              </div>
              <div className={`text-3xl sm:text-4xl font-extrabold font-mono ${m.color} mb-1 drop-shadow-md`}>
                {m.value}
              </div>
              <div className="text-xs text-slate-400 font-light">
                {m.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Tabbed Dossier */}
        <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          {/* Tabs bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-4 py-2 gap-2">
            <div className="flex items-center gap-2 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      soundFx.playClick();
                      setActiveTab(tab.id);
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="text-[11px] font-mono text-slate-500 hidden sm:block">
              SECURITY_LEVEL: PUBLIC // READ_ONLY
            </div>
          </div>

          {/* Tab 1: Story & Education */}
          {activeTab === 'story' && (
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <GraduationCap className="w-4 h-4" />
                  <span>ACADEMIC FOUNDATION // INVERTIS UNIVERSITY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  From Foundational Computer Science to Scalable Full-Stack & AI Systems
                </h3>
                <p className="text-slate-300 font-light leading-relaxed text-base">
                  Currently pursuing my <strong className="text-cyan-300 font-semibold">Bachelor of Computer Applications (BCA) at Invertis University</strong>, 
                  I fell in love with turning complex computational logic into tangible, interactive experiences.
                </p>
                <p className="text-slate-300 font-light leading-relaxed text-base">
                  My coursework instilled strong principles in data structures, algorithms, relational database architecture (SQL), and object-oriented design. 
                  Concurrently, I dove deep into modern frontend ecosystems like <strong className="text-purple-300 font-semibold">React.js</strong> and Python data analysis, completing hands-on industry simulations including the British Airways Data Science simulation on Forage and Google AI Essentials.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Algorithms & Data Structures</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Relational DB & SQL Queries</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Modern JavaScript & React</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Predictive Modeling & EDA</span>
                  </div>
                </div>
              </div>

              {/* Visual Card / Highlights */}
              <div className="lg:col-span-5 space-y-4">
                <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-slate-950/60 to-purple-950/20 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-cyan-400">// INSTITUTION REPORT</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">ENROLLED</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Invertis University</h4>
                    <p className="text-xs font-mono text-purple-300">Bachelor of Computer Applications (BCA)</p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Focused on modern computing, systems design, software engineering methodologies, web development, and applied artificial intelligence.
                  </p>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 text-xs font-mono">
                    <div className="text-slate-400">Core Passion:</div>
                    <div className="text-cyan-300">Intelligent Web Applications & Data Pipelines</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: AI & Web Dev Passion */}
          {activeTab === 'philosophy' && (
            <div className="p-6 sm:p-10 space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Passion 1: Modern Web Dev */}
                <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-slate-900/40 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Creative & Resilient Frontend</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    I believe great software isn't just about functionality—it's about how it feels. Using React.js, Tailwind CSS, Three.js, and smooth physics-driven motion, I build interfaces that feel instantaneous, tactile, and rewarding to use.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Component Reusability & State Architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Responsive 60+ FPS Glassmorphism & WebGL
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Accessible & Clean Semantic Markup
                    </li>
                  </ul>
                </div>

                {/* Passion 2: Machine Learning & Data */}
                <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 bg-slate-900/40 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">AI, ML & Data-Driven Insights</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    Data without insight is just noise. With Python, Pandas, and Scikit-learn, I enjoy transforming raw telemetry, tabular records, and customer metrics into predictive models that solve tangible business problems.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      Predictive Modeling (Classification, Regression, Random Forest)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      Exploratory Data Analysis (EDA) & Data Cleaning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      Customer Sentiment Analysis & Metric Extraction
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          )}

          {/* Tab 3: Interactive Python File */}
          {activeTab === 'code' && (
            <div className="p-4 sm:p-8 text-left font-mono text-xs overflow-x-auto bg-[#070913]">
              <div className="text-slate-500 pb-2 border-b border-slate-800 mb-4 flex items-center justify-between">
                <span># File: src/engineers/anand_yadav.py</span>
                <span className="text-emerald-400">// COMPILATION: SUCCESS</span>
              </div>
              <pre className="text-slate-300 leading-relaxed font-mono">
                <span className="text-purple-400">from</span> dataclasses <span className="text-purple-400">import</span> dataclass<br/>
                <span className="text-purple-400">from</span> typing <span className="text-purple-400">import</span> List, Dict<br/><br/>
                <span className="text-yellow-400">@dataclass</span><br/>
                <span className="text-cyan-400">class</span> <span className="text-emerald-300">SoftwareEngineer</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-cyan-400">str</span> = <span className="text-amber-300">"Anand Kumar Yadav"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;role: <span className="text-cyan-400">str</span> = <span className="text-amber-300">"Aspiring Software Engineer & Frontend Developer"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;education: <span className="text-cyan-400">str</span> = <span className="text-amber-300">"BCA @ Invertis University"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;skills: <span className="text-cyan-400">List</span>[<span className="text-cyan-400">str</span>] = (<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"React.js"</span>, <span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"JavaScript"</span>, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"SQL"</span>, <span className="text-amber-300">"Machine Learning"</span>, <span className="text-amber-300">"Pandas"</span>, <span className="text-amber-300">"Tailwind CSS"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;certifications: <span className="text-cyan-400">List</span>[<span className="text-cyan-400">str</span>] = (<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"Google AI Essentials"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"British Airways Data Science Simulation"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"AI+ Skills Fest 2026"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;)<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">def</span> <span className="text-emerald-300">deploy_solution</span>(self, user_problem: <span className="text-cyan-400">str</span>) -&gt; <span className="text-cyan-400">Dict</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">"""Architect modern frontend with robust backend and predictive intelligence."""</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"status"</span>: <span className="text-amber-300">"success"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"ui"</span>: <span className="text-amber-300">"Responsive, Accessible & 3D Interactive"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"intelligence"</span>: <span className="text-amber-300">"Predictive ML Model + Clean SQL Storage"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"impact"</span>: <span className="text-amber-300">"Exceptional user delight and measurable results"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
              </pre>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

