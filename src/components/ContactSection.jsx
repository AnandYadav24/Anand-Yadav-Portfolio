import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Terminal, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailAddress = 'ay3861234@gmail.com';
  const linkedinUrl = 'https://linkedin.com/in/anand-kumar-yadav-486539333';
  const githubUrl = 'https://github.com/AnandYadav24';

  const handleCopyEmail = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#a855f7', '#10b981']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFx.playClick();
    setIsSubmitting(true);

    // Simulate cyber handshake & launch mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundFx.playSuccess();

      // Fire festive celebration confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#8b5cf6', '#10b981', '#f59e0b']
      });

      // Construct mailto link
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry for Anand Kumar Yadav'
      )}&body=${encodeURIComponent(
        `Hi Anand,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.open(mailtoLink, '_blank');
    }, 700);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-slate-900 bg-gradient-to-b from-transparent via-[#070914]/80 to-[#05060b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
            <Terminal className="w-3.5 h-3.5" />
            <span>// SECTION 05: TRANSMISSION PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build the <span className="gradient-text-cyber">Next Big Thing</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-base font-light">
            Whether you have a full-time engineering opportunity, freelance collaboration, or want to discuss AI/ML architectures, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
          
          {/* Left Column: Direct Channels & Telemetry (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card */}
            <div className="glass-panel p-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 to-slate-900/60 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400">// PRIMARY DIRECT MAIL</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  FAST RESPONSE
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-slate-200 truncate select-all">
                    {emailAddress}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => soundFx.playHover()}
                  className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social & Professional Networks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-blue-950/20 transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 truncate max-w-[130px]">
                    anand-kumar-yadav
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-purple-500/50 hover:bg-purple-950/20 transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    GitHub
                  </div>
                  <div className="text-[11px] font-mono text-slate-500">
                    @AnandYadav24
                  </div>
                </div>
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Location: India (Open to Remote & Onsite)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Preferred Roles: Software Engineer / Frontend / AI Developer</span>
              </div>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-800">
                TIMEZONE: IST (UTC+5:30) // TYPICAL RESPONSE: &lt; 12 HOURS
              </div>
            </div>

          </div>

          {/* Right Column: Floating Cyber Contact Terminal (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl border border-cyan-500/30 bg-[#080a14] overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.12)]">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-800 bg-slate-950/80 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-cyan-400 font-medium">dispatch_message.sh</span>
                </div>
                <span className="text-slate-500 text-[11px]">ENCRYPTED TRANSMISSION</span>
              </div>

              {/* Form Body */}
              <div className="p-6 sm:p-8">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-bounce">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Transmission Prepared!</h3>
                    <p className="text-sm text-slate-400 max-w-md mx-auto font-light">
                      Your default email client has been initiated. If it didn't open automatically, you can write directly to <strong className="text-cyan-300 font-mono">{emailAddress}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-5 py-2 rounded-xl text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono text-slate-400">
                          // YOUR_NAME <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-mono transition-all"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono text-slate-400">
                          // YOUR_EMAIL <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-mono transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-400">
                        // SUBJECT
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Full-Stack / Software Engineer Role at TechCorp"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-mono transition-all"
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-400">
                        // MESSAGE_PAYLOAD <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share your vision, project requirements, or opportunity details..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-mono transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      onMouseEnter={() => soundFx.playHover()}
                      className="w-full py-4 rounded-xl font-mono text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 hover:from-cyan-300 hover:to-white shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>ROUTING TRANSMISSION...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>DISPATCH INQUIRY</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

