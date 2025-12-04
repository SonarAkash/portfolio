import { Analytics } from "@vercel/analytics/react";
import { useState } from 'react';
import Typewriter from './components/Typewriter';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen p-4 sm:p-8 max-w-5xl mx-auto flex flex-col font-mono text-sm sm:text-base selection:bg-bash-yellow selection:text-black">

      {/* --- TOP NAVBAR --- */}
      <nav className="flex justify-between items-center mb-12 select-none">
        <div className="flex gap-6 sm:gap-10">
          <button
            onClick={() => setActiveTab('home')}
            className={`transition-colors font-bold ${activeTab === 'home' ? 'text-bash-yellow' : 'text-bash-text hover:text-bash-green'}`}
          >
            home
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`transition-colors font-bold ${activeTab === 'projects' ? 'text-bash-yellow' : 'text-bash-text hover:text-bash-green'}`}
          >
            projects
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`transition-colors font-bold ${activeTab === 'contact' ? 'text-bash-yellow' : 'text-bash-text hover:text-bash-green'}`}
          >
            contact
          </button>
        </div>
      </nav>


      {/* --- MAIN CONTENT --- */}
      <main className="flex-1">

        {/* === HOME TAB === */}
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fadeIn">

            {/* Header Command */}
            <div className="text-xl sm:text-2xl font-bold text-bash-green">
              <span className="text-bash-text mr-2">&gt;</span>
              <Typewriter text="akash.sh" delay={70} />
            </div>

            {/* INTRO TEXT - UPDATED: Honest Software Developer Persona */}
            <div className="max-w-2xl text-bash-text leading-relaxed">
              <p className="mb-4">
                <span className="text-bash-green font-bold">
                  &gt; <Typewriter text="whoami" delay={50} startDelay={1000} />
                </span>
              </p>
              <p>
                I am a <span className="text-bash-text border-b border-bash-yellow">Software Developer</span> focused on building efficient applications. 
                I develop robust backends using <strong>Java & Spring Boot</strong> and flexible solutions with <strong>Node.js & Express</strong>, while managing the frontend with HTML & CSS.
              </p>
            </div>

            {/* "CURL" Output Box */}
            <div className="mt-12">
              <div className="text-bash-text mb-2 text-xs sm:text-sm opacity-70">
                {/* Updated Command */}
                $ <span className="text-bash-green">curl</span> akash.sh/skills
              </div>

              <div className="border border-bash-green p-6 sm:p-10 relative bg-[#0c0f0c]">
                {/* Decor: Corner squares */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-bash-green"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-bash-green"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-bash-green"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-bash-green"></div>

                {/* BIG HEADER - KEPT "BUILT TO SCALE" */}
                <div className="mb-8 font-black text-4xl sm:text-6xl text-bash-yellow tracking-tighter leading-none">
                  <Typewriter text="BUILT TO" delay={70} startDelay={100} showCursor={false} />
                  <br />
                  <span className="text-bash-green">
                    <Typewriter text="SCALE" delay={70} startDelay={800} />
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Tech Stack Column - UPDATED TO MATCH RESUME EXACTLY */}
                  <div>
                    <h3 className="text-bash-yellow border-b border-bash-text/20 pb-1 mb-3 inline-block font-bold">--tech_stack--</h3>
                    <ul className="text-bash-text text-sm space-y-2 font-mono">
                      <li>
                        <span className="text-bash-green font-bold">&gt; Languages:</span> Java, JavaScript
                      </li>
                      <li>
                        <span className="text-bash-green font-bold">&gt; Frontend:</span> HTML, CSS
                      </li>
                      <li>
                        <span className="text-bash-green font-bold">&gt; Backend:</span> Spring Boot, Node.js, Express
                      </li>
                      <li>
                        <span className="text-bash-green font-bold">&gt; Database:</span> PostgreSQL, MySQL, MongoDB
                      </li>
                      <li>
                        <span className="text-bash-green font-bold">&gt; Tools:</span> Docker, Git, GitHub
                      </li>
                    </ul>
                  </div>

                  {/* Connect Column */}
                  <div>
                    <h3 className="text-bash-yellow border-b border-bash-text/20 pb-1 mb-3 inline-block font-bold">--connect--</h3>
                    <div className="flex flex-col gap-2 text-sm">
                      <a href="https://github.com/SonarAkash" target="_blank" className="text-bash-cyan hover:underline">
                        Github
                      </a>
                      <a href="https://linkedin.com/in/sonar-akash" target="_blank" className="text-bash-cyan hover:underline">
                        LinkedIn
                      </a>
                      <a href="https://leetcode.com/Akash_Sonar/" target="_blank" className="text-bash-cyan hover:underline">
                        LeetCode (1600 Rating)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="mt-12 pt-4 border-t border-dashed border-bash-text/20 text-xs text-bash-text font-mono">
                  <button
                    onClick={() => setActiveTab('projects')}
                    className="group block w-full text-left hover:bg-bash-green/5 py-1 transition-colors"
                  >
                    <span className="text-bash-green">$</span> curl akash.sh/projects
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="opacity-50 group-hover:text-bash-cyan transition-colors"># View source code</span>
                  </button>

                  <a
                    href="/resume.pdf"
                    download
                    className="group block w-full text-left hover:bg-bash-green/5 py-1 transition-colors"
                  >
                    <span className="text-bash-green">$</span> curl akash.sh/resume
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="opacity-50 group-hover:text-bash-cyan transition-colors"># Download Resume.pdf</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* === PROJECTS TAB === */}
        {activeTab === 'projects' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-xl sm:text-2xl font-bold text-bash-green">
              <span className="text-bash-text mr-2">&gt;</span>
              projects
            </div>

            <div className="text-bash-text mb-2 text-xs sm:text-sm opacity-70">
              $ <span className="text-bash-green">curl</span> akash.sh/projects --json | jq .
            </div>

            <div className="border border-bash-border overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 border-b border-bash-border bg-[#111] text-bash-yellow font-bold text-xs sm:text-sm uppercase tracking-wider">
                <div className="col-span-1 p-3 text-center border-r border-bash-border hidden sm:block">ID</div>
                <div className="col-span-12 sm:col-span-4 p-3 border-r border-bash-border">Project</div>
                <div className="col-span-12 sm:col-span-5 p-3 border-r border-bash-border">Description</div>
                <div className="col-span-12 sm:col-span-2 p-3 text-center">Links</div>
              </div>

              {/* Project 1 */}
              <div className="grid grid-cols-12 border-b border-bash-text/10 hover:bg-bash-green/5 transition-colors text-xs sm:text-sm group">
                <div className="col-span-1 p-3 text-center border-r border-bash-text/10 text-bash-text/50 hidden sm:block group-hover:text-white">01</div>
                <div className="col-span-12 sm:col-span-4 p-3 border-r border-bash-text/10 font-bold text-bash-green">
                  Log Management System
                  <div className="mt-1 text-xs text-bash-orange font-normal opacity-80">[Java, Spring Boot, Docker]</div>
                </div>
                <div className="col-span-12 sm:col-span-5 p-3 border-r border-bash-text/10 text-bash-text group-hover:text-white">
                  Real-time log ingestion & analysis platform. Uses PostgreSQL Full-Text Search for high-speed querying.
                </div>
                <div className="col-span-12 sm:col-span-2 p-3 flex items-center justify-center gap-2">
                  <a href="https://github.com/SonarAkash/Log-Management-and-Analysis-System" target="_blank" className="text-bash-cyan hover:underline decoration-2">repo</a>
                  <span className="text-bash-text/30">|</span>
                  <a href="https://logflux.tech" target="_blank" className="text-bash-cyan hover:underline decoration-2">live</a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="grid grid-cols-12 border-b border-bash-text/10 hover:bg-bash-green/5 transition-colors text-xs sm:text-sm group">
                <div className="col-span-1 p-3 text-center border-r border-bash-text/10 text-bash-text/50 hidden sm:block group-hover:text-white">02</div>
                <div className="col-span-12 sm:col-span-4 p-3 border-r border-bash-text/10 font-bold text-bash-green">
                  Scalable Blog Platform
                  <div className="mt-1 text-xs text-bash-orange font-normal opacity-80">[Spring Boot, Redis, RBAC]</div>
                </div>
                <div className="col-span-12 sm:col-span-5 p-3 border-r border-bash-text/10 text-bash-text group-hover:text-white">
                  Secure blog backend with JWT auth, Role-Based Access Control, and Redis caching for performance.
                </div>
                <div className="col-span-12 sm:col-span-2 p-3 flex items-center justify-center gap-2">
                  <a href="https://github.com/SonarAkash/blog-platform" target="_blank" className="text-bash-cyan hover:underline decoration-2">repo</a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="grid grid-cols-12 border-b border-bash-text/10 hover:bg-bash-green/5 transition-colors text-xs sm:text-sm group">
                <div className="col-span-1 p-3 text-center border-r border-bash-text/10 text-bash-text/50 hidden sm:block group-hover:text-white">03</div>
                <div className="col-span-12 sm:col-span-4 p-3 border-r border-bash-text/10 font-medium text-bash-green/90">
                  FreeFlow P2P Chat
                  <div className="mt-1 text-xs text-bash-orange font-normal opacity-60">[WebRTC, WebSockets]</div>
                </div>
                <div className="col-span-12 sm:col-span-5 p-3 border-r border-bash-text/10 text-bash-text/80 group-hover:text-white">
                  Video & chat application. Built the Signaling Server to manage peer handshakes.
                </div>
                <div className="col-span-12 sm:col-span-2 p-3 flex items-center justify-center gap-2">
                  <a href="https://github.com/SonarAkash/FreeFlow" target="_blank" className="text-bash-cyan hover:underline decoration-2">repo</a>
                  <span className="text-bash-text/30">|</span>
                  <a href="https://freeflow-saas.vercel.app/" target="_blank" className="text-bash-cyan hover:underline decoration-2">live</a>
                </div>
              </div>

              {/* Project 4 */}
              <div className="grid grid-cols-12 hover:bg-bash-green/5 transition-colors text-xs sm:text-sm group">
                <div className="col-span-1 p-3 text-center border-r border-bash-text/10 text-bash-text/50 hidden sm:block group-hover:text-white">04</div>
                <div className="col-span-12 sm:col-span-4 p-3 border-r border-bash-text/10 font-medium text-bash-green/90">
                  Gmail AI Companion
                  <div className="mt-1 text-xs text-bash-orange font-normal opacity-60">[Apps Script, Gemini API]</div>
                </div>
                <div className="col-span-12 sm:col-span-5 p-3 border-r border-bash-text/10 text-bash-text/80 group-hover:text-white">
                  Browser add-on that auto-summarizes emails using Google's Gemini AI model.
                </div>
                <div className="col-span-12 sm:col-span-2 p-3 flex items-center justify-center gap-2">
                  <a href="https://github.com/SonarAkash/gmail-summarizer-addon" target="_blank" className="text-bash-cyan hover:underline decoration-2">repo</a>
                </div>
              </div>

            </div>
          </div>
        )}


        {/* === CONTACT TAB === */}
        {activeTab === 'contact' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-xl sm:text-2xl font-bold text-bash-green">
              <span className="text-bash-text mr-2">&gt;</span>
              contact_info
            </div>

            <div className="text-bash-text">
              <p>
                I am currently open to <span className="text-bash-yellow">Internship</span> and <span className="text-bash-yellow">Full-time</span> opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* Direct Channels */}
              <div>
                <h3 className="text-xl text-bash-yellow mb-4 font-bold border-b border-bash-text/20 pb-2 inline-block">Direct Channels</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-bash-text/50 mb-1">EMAIL</div>
                    <a href="mailto:akashsonar.9113@gmail.com" className="text-bash-cyan text-lg hover:underline">akashsonar.9113@gmail.com</a>
                  </div>
                  <div>
                    <div className="text-xs text-bash-text/50 mb-1">LINKEDIN</div>
                    <a href="https://linkedin.com/in/sonar-akash" target="_blank" className="text-bash-cyan text-lg hover:underline">in/sonar-akash</a>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div>
                <h3 className="text-xl text-bash-yellow mb-4 font-bold border-b border-bash-text/20 pb-2 inline-block">Coding Profiles</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-bash-green">&gt;</span>
                    <a href="https://leetcode.com/Akash_Sonar/" target="_blank" className="text-bash-text hover:text-bash-cyan transition-colors">
                      LeetCode <span className="text-bash-orange ml-2">[Rating: 1600]</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-bash-green">&gt;</span>
                    <a href="https://github.com/SonarAkash" target="_blank" className="text-bash-text hover:text-bash-cyan transition-colors">
                      GitHub <span className="text-bash-orange ml-2">[Active]</span>
                    </a>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-bash-text/10">
                  <a
                    href="/resume.pdf"
                    download="Akash_Sonar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-bash-green text-bash-green px-6 py-3 hover:bg-bash-green hover:text-black transition-colors font-bold"
                  >
                    <span>$</span> download_resume.sh
                  </a>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="mt-20 text-center text-xs text-bash-text pb-8 opacity-50">
        <p>Built with React + Tailwind v4</p>
        <p>&copy; Akash Sonar 2025</p>
      </footer>

      {/* VERCEL ANALYTICS */}
      <Analytics />

    </div>
  );
}

export default App;