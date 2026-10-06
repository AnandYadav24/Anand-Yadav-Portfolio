import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';
import { soundFx } from '../utils/audio';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'ba-flight-predictor',
      title: 'British Airways Customer Sentiment & Booking Predictor',
      role: 'Lead ML Developer & Data Analyst',
      category: 'AI & Data Science',
      filterType: 'ai-ml',
      description: 'End-to-end data pipeline scraping thousands of customer reviews, extracting sentiment metrics, and training predictive models to forecast airline bookings.',
      fullDescription: 'Developed as part of the British Airways Data Science simulation on Forage. The system scrapes airline reviews using BeautifulSoup, cleans and tokenizes raw feedback with Pandas and NLTK, extracts topic vectors, and trains Random Forest classifiers with Scikit-learn to forecast customer purchase intent.',
      highlights: [
        'Scraped and cleansed 2,000+ unstructured customer feedback reviews.',
        'Engineered 15+ novel behavioral features including route type, extra baggage, and flight duration.',
        'Achieved strong cross-validated ROC-AUC using Random Forest and hyperparameter tuning.',
        'Delivered interactive executive presentation dashboards visualizing key satisfaction bottlenecks.'
      ],
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'Data Analysis', 'NLP'],
      githubUrl: 'https://github.com/AnandYadav24',
      liveUrl: 'https://github.com/AnandYadav24',
      featured: true,
      accentColor: 'from-blue-500/20 to-cyan-500/10',
      borderColor: 'border-cyan-500/40',
      badgeColor: 'text-cyan-400 bg-cyan-950/50'
    },
    {
      id: 'nexus-ai-studio',
      title: 'Nexus AI - Intelligent Web Application & Prompt Studio',
      role: 'Full-Stack & UI Architect',
      category: 'Full-Stack & AI',
      filterType: 'fullstack',
      description: 'Interactive AI workspace with real-time prompt generation, contextual memory streams, and dynamic data visualization with a futuristic cyber aesthetic.',
      fullDescription: 'A cutting-edge generative AI web platform powered by React.js and Python FastAPI backend. Features real-time streaming LLM responses, custom token telemetry, markdown rendering, prompt template library, and dark-mode glassmorphic styling.',
      highlights: [
        'Engineered responsive React.js UI with fluid glassmorphism and sub-100ms render responsiveness.',
        'Implemented streaming response parsing using WebSockets and Fetch ReadableStreams.',
        'Modular system prompt manager with history persistence in indexedDB and local storage.',
        'Accessible keyboard shortcuts and integrated audio feedback cues.'
      ],
      tags: ['React.js', 'Python', 'FastAPI', 'Tailwind CSS', 'Generative AI', 'REST API'],
      githubUrl: 'https://github.com/AnandYadav24',
      liveUrl: 'https://github.com/AnandYadav24',
      featured: true,
      accentColor: 'from-purple-500/20 to-pink-500/10',
      borderColor: 'border-purple-500/40',
      badgeColor: 'text-purple-400 bg-purple-950/50'
    },
    {
      id: 'cyberstream-telemetry',
      title: 'CyberStream - High-Throughput Realtime Systems HUD',
      role: 'Frontend Engineer',
      category: 'Frontend & WebGL',
      filterType: 'frontend',
      description: 'Ultra-fast developer telemetry dashboard featuring live hardware metric charts, interactive WebGL node visualizers, and customizable cyber widgets.',
      fullDescription: 'A modern mission-control dashboard engineered for engineers monitoring high-throughput microservices. Built with React.js, Tailwind CSS, Lucide icons, and Three.js canvas shaders that animate server health and latency spikes in real-time.',
      highlights: [
        'Maintains rock-solid 60 FPS under continuous 1,000+ data point streaming updates.',
        'Interactive customizable widget grid with drag-and-drop layout support.',
        'Integrated WebGL radar animation indicating packet ping and socket states.',
        'Zero layout shifts (CLS < 0.01) with clean component memoization.'
      ],
      tags: ['React.js', 'Three.js', 'Tailwind CSS', 'Vite', 'Canvas API', 'State Architecture'],
      githubUrl: 'https://github.com/AnandYadav24',
      liveUrl: 'https://github.com/AnandYadav24',
      featured: true,
      accentColor: 'from-emerald-500/20 to-teal-500/10',
      borderColor: 'border-emerald-500/40',
      badgeColor: 'text-emerald-400 bg-emerald-950/50'
    },
    {
      id: 'datacore-sql-warehouse',
      title: 'DataCore - Enterprise SQL Analytics & Cohort Suite',
      role: 'Data Architect & Backend Developer',
      category: 'Database & Analytics',
      filterType: 'ai-ml',
      description: 'Comprehensive relational database schema and analytics suite executing complex multi-table joins, window functions, and business cohort modeling.',
      fullDescription: 'An enterprise relational analytics engine designed to handle customer transaction registries. Features optimized SQL views, stored procedures, indexing benchmarks, and an interactive Streamlit/Python reporting dashboard.',
      highlights: [
        'Crafted 3NF relational schemas handling customer transactions, catalogs, and logs.',
        'Wrote advanced SQL queries utilizing Common Table Expressions (CTEs) and Window functions.',
        'Optimized query runtimes by 40% through index tuning and query plan execution analysis.',
        'Built automated Python scripts exporting weekly performance reports.'
      ],
      tags: ['SQL', 'PostgreSQL', 'Python', 'Pandas', 'Database Design', 'ETL Pipelines'],
      githubUrl: 'https://github.com/AnandYadav24',
      liveUrl: 'https://github.com/AnandYadav24',
      featured: false,
      accentColor: 'from-amber-500/20 to-orange-500/10',
      borderColor: 'border-amber-500/40',
      badgeColor: 'text-amber-400 bg-amber-950/50'
    },
    {
      id: 'aura-3d-portfolio',
      title: 'Aura - Award-Winning 3D Creative Web Experience',
      role: 'Creative Web Developer',
      category: 'WebGL & Creative Web',
      filterType: 'frontend',
      description: 'World-class 3D portfolio featuring Three.js geodesic shaders, orbital particle kinematics, Web Audio API synthesis, and Awwwards-worthy UI design.',
      fullDescription: 'The very architecture powering this portfolio site! Combines Three.js WebGL rendering, custom mathematical particle loops, Tailwind CSS modern layouts, and reactive sound synthesis in an ultra-optimized bundle.',
      highlights: [
        'Fully procedural Three.js quantum core with real-time mouse parallax and speed multipliers.',
        'Built-in Web Audio API synthesizer for zero-latency audio cues without external assets.',
        'Achieved 100/100 Lighthouse performance metrics with lazy-evaluated canvas rendering.',
        'Dark-mode cyber aesthetic with accessible WCAG AA contrast ratios.'
      ],
      tags: ['Three.js', 'React.js', 'WebGL', 'Web Audio API', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/AnandYadav24',
      liveUrl: '#hero',
      featured: false,
      accentColor: 'from-cyan-500/20 to-violet-500/10',
      borderColor: 'border-cyan-500/40',
      badgeColor: 'text-cyan-400 bg-cyan-950/50'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.filterType === filter);

  // Mouse tilt calculation
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <section id="projects" className="relative py-24 border-t border-slate-900 bg-gradient-to-b from-transparent via-[#080a14]/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>// SECTION 03: DEPLOYED ARTIFACTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="gradient-text-cyber">Projects Showcase</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-base font-light">
              Interactive applications bridging full-stack software development, predictive machine learning, and 3D web experiences.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-950/70 p-1.5 rounded-2xl border border-slate-800">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai-ml', label: 'AI / ML & Data' },
              { id: 'fullstack', label: 'Full-Stack' },
              { id: 'frontend', label: 'Frontend & 3D' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  soundFx.playClick();
                  setFilter(f.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  filter === f.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => soundFx.playHover()}
              className={`relative glass-panel rounded-2xl p-6 border ${project.borderColor} bg-gradient-to-br ${project.accentColor} flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_15px_35px_rgba(0,240,255,0.18)] cursor-pointer`}
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s'
              }}
            >
              {/* Top Meta */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border border-slate-800 ${project.badgeColor}`}>
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          soundFx.playClick();
                        }}
                        className="p-1.5 rounded-lg border border-slate-800 bg-slate-900/70 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                        title="GitHub Code"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          soundFx.playClick();
                        }}
                        className="p-1.5 rounded-lg border border-slate-800 bg-slate-900/70 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                        title="Direct Link"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Bottom Tags & Deep Dive Button */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-slate-500">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Open Details Action */}
                <button
                  onClick={() => {
                    soundFx.playWarp();
                    setSelectedProject(project);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-mono font-medium text-slate-300 bg-slate-900/70 hover:bg-cyan-500/20 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>VIEW ARCHITECTURE & DEMO</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
