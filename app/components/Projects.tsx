interface Project {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    tag: "AI & Full Stack Engineering",
    title: "AI-Powered Smart Recruitment Assistant",
    subtitle: "ReactJs • NodeJs • ExpressJs • MongoDB",
    description:
      "An automated candidate shortlisting and intelligent resume screening system built with the MERN stack. Empowers hiring teams to define custom evaluation criteria, automatically parse candidate profiles, and rank applicants with high precision.",
    bullets: [
      "Built an AI-based system to automate candidate shortlisting based on predefined criteria using the MERN Stack.",
      "Reduced manual effort by implementing intelligent filtering for automated resume screening.",
      "Demonstrated the application of AI concepts in real-world recruitment workflows with responsive analytics.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Screening", "RESTful APIs", "JWT"],
    githubUrl: "https://github.com/boradetejas39-cell",
    liveUrl: "https://ai-recruiter-frontend-s7h6.vercel.app/",
  },
  {
    id: 2,
    tag: "E-Commerce & Full Stack Platform",
    title: "SparePe – Automobile Spare Parts Platform",
    subtitle: "ReactJs • NodeJs • ExpressJs • MongoDB",
    description:
      "A comprehensive, full-stack automotive e-commerce platform enabling vehicle owners and workshops to search, browse, and buy verified automobile spare parts with real-time stock and dynamic filtering.",
    bullets: [
      "Developed a full-stack web application enabling users to browse and purchase automotive spare parts.",
      "Implemented dynamic product listings, real-time search functionality, and a seamless responsive UI.",
      "Designed robust backend REST APIs for product catalog, inventory tracking, and user data management using Node.js and MongoDB.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Dynamic Search", "JWT"],
    githubUrl: "https://github.com/boradetejas39-cell",
  },
  {
    id: 3,
    tag: "Frontend Web Development",
    title: "KisanRent – Farming Equipment Rental",
    subtitle: "HTML5 • CSS3",
    description:
      "A complete static frontend prototype for a farming equipment rental platform. Enables users to browse listings, view detailed equipment specs, and list their own machinery for rent.",
    bullets: [
      "Designed a responsive, multi-page frontend interface using HTML5 and CSS3 without reliance on external UI frameworks.",
      "Built dedicated pages for exploring equipment, viewing details, listing items, and user profile management.",
      "Focused on intuitive navigation and clean layout to enhance user experience for farming communities.",
    ],
    techStack: ["HTML5", "CSS3", "Frontend Design", "Responsive UI"],
    liveUrl: "https://kisanrent.vercel.app/",
  },
  {
    id: 4,
    tag: "Full-Stack Web Development",
    title: "Spirita Technologies (I) Pvt Limited",
    subtitle: "React • Node.js • Express • MongoDB",
    description:
      "A modern full-stack enterprise web platform built for Spirita Technologies (I) Pvt Limited. Established to help IT professionals convert potential into high performance through cost-effective training, team building, and organizational enrichment.",
    bullets: [
      "Engineered to advance Spirita's mission of delivering cost-effective training that bridges technical knowledge gaps and accelerates organizational productivity.",
      "Developed a high-performance RESTful API using Express.js and MongoDB, featuring JWT authentication, role-based access, and robust security middlewares (Helmet, Rate Limiting).",
      "Built an intuitive, responsive frontend using React 19 and Vite, utilizing Framer Motion animations, dynamic HTML rendering, and Multer/AWS S3 for training resource management.",
      "Rooted in Spirita's core values: Team Work, Integrity, Respect for an Individual, and Building Trust with all stakeholders.",
    ],
    techStack: ["React 19", "Node.js", "Express.js", "MongoDB", "Framer Motion", "AWS S3"],
    liveUrl: "https://spireeta.com/",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div id="lab" className="absolute -top-20" />
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-purple-400 uppercase mb-2">
            Portfolio Showcase
          </p>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-white/70 text-xs sm:text-base max-w-2xl mx-auto mt-2 sm:mt-3">
            Real-world web applications built with modern MERN architecture, responsive styling, and scalable backend logic.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div key={project.id} className="relative">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Text Content */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? "lg:col-start-6 lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                      <p className="text-purple-400 text-xs sm:text-sm font-medium tracking-wide uppercase">
                        {project.tag}
                      </p>
                    </div>

                    <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 break-words">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-300/80 font-mono mb-4 sm:mb-6">
                      {project.subtitle}
                    </p>

                    {/* Description Card */}
                    <div className="relative z-10 mb-5 sm:mb-6 bg-gradient-to-br from-white/10 via-purple-950/30 to-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-7 border border-purple-500/20 shadow-xl shadow-purple-950/30">
                      <p className="text-white/90 text-xs sm:text-base leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <ul className="space-y-2 border-t border-white/10 pt-4">
                        {project.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="text-xs sm:text-sm text-white/70 flex items-start gap-2"
                          >
                            <span className="text-purple-400 mt-0.5 flex-shrink-0">▹</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-md bg-purple-950/60 text-purple-200 border border-purple-500/30 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/50 text-white text-xs sm:text-sm transition-colors group"
                        >
                          <svg className="w-4 h-4 text-purple-300 group-hover:scale-110 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visual Preview Frame */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:col-start-1 lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {project.id === 1 ? (
                      /* AI Recruitment Assistant UI Preview */
                      <div className="relative rounded-2xl p-1 bg-gradient-to-br from-purple-500/40 via-violet-600/20 to-indigo-700/40 shadow-2xl">
                        <div className="rounded-xl bg-slate-950 p-4 sm:p-5 border border-purple-500/20 overflow-hidden">
                          {/* Mock window bar */}
                          <div className="flex flex-wrap items-center justify-between gap-1.5 pb-3 mb-4 border-b border-white/10">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="text-[10px] sm:text-[11px] font-mono text-purple-300 truncate max-w-[150px] sm:max-w-none">
                              ai-recruitment-assistant.app
                            </span>
                            <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">
                              MERN Stack
                            </span>
                          </div>

                          {/* App Header Bar */}
                          <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 mb-4 bg-white/5 p-3 rounded-lg border border-white/5">
                            <div>
                              <p className="text-[10px] sm:text-xs text-white/60">Automated Pipeline</p>
                              <p className="text-xs sm:text-sm font-semibold text-white">Resume Matching Engine</p>
                            </div>
                            <div>
                              <span className="text-[10px] sm:text-xs font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                98.4% Match Rate
                              </span>
                            </div>
                          </div>

                          {/* Candidate Cards */}
                          <div className="space-y-2.5">
                            <div className="p-2.5 sm:p-3 rounded-lg bg-purple-950/40 border border-purple-500/30 flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-600/40 flex items-center justify-center font-bold text-xs text-purple-200 flex-shrink-0">
                                  TB
                                </div>
                                <div className="min-w-0">
                                  <p className="text-xs font-semibold text-white truncate">Full Stack Candidate</p>
                                  <p className="text-[10px] sm:text-[11px] text-white/60 truncate">React • Node • Express • MongoDB</p>
                                </div>
                              </div>
                              <span className="text-xs font-mono font-bold text-emerald-400 flex-shrink-0">96% Fit</span>
                            </div>

                            <div className="p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-violet-600/30 flex items-center justify-center font-bold text-xs text-violet-200 flex-shrink-0">
                                  FE
                                </div>
                                <div className="min-w-0">
                                  <p className="text-xs font-semibold text-white truncate">Frontend Specialist</p>
                                  <p className="text-[10px] sm:text-[11px] text-white/60 truncate">React • TypeScript • Tailwind</p>
                                </div>
                              </div>
                              <span className="text-xs font-mono font-bold text-purple-300 flex-shrink-0">91% Fit</span>
                            </div>

                            <div className="p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600/30 flex items-center justify-center font-bold text-xs text-blue-200 flex-shrink-0">
                                  BE
                                </div>
                                <div className="min-w-0">
                                  <p className="text-xs font-semibold text-white truncate">Backend Engineer</p>
                                  <p className="text-[10px] sm:text-[11px] text-white/60 truncate">Node.js • REST APIs • MongoDB</p>
                                </div>
                              </div>
                              <span className="text-xs font-mono font-bold text-blue-300 flex-shrink-0">89% Fit</span>
                            </div>
                          </div>

                          {/* Screening Metrics */}
                          <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
                            <div className="bg-white/5 p-1.5 sm:p-2 rounded">
                              <p className="text-[9px] sm:text-[10px] text-white/50">Shortlisted</p>
                              <p className="text-[11px] sm:text-xs font-bold text-purple-300">124 Profiles</p>
                            </div>
                            <div className="bg-white/5 p-1.5 sm:p-2 rounded">
                              <p className="text-[9px] sm:text-[10px] text-white/50">Time Saved</p>
                              <p className="text-[11px] sm:text-xs font-bold text-emerald-400">75% Manual</p>
                            </div>
                            <div className="bg-white/5 p-1.5 sm:p-2 rounded">
                              <p className="text-[9px] sm:text-[10px] text-white/50">Accuracy</p>
                              <p className="text-[11px] sm:text-xs font-bold text-violet-300">High Score</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : project.id === 2 ? (
                      /* SparePe E-Commerce UI Preview */
                      <div className="relative rounded-2xl p-1 bg-gradient-to-br from-violet-500/40 via-purple-600/20 to-blue-700/40 shadow-2xl">
                        <div className="rounded-xl bg-slate-950 p-4 sm:p-5 border border-purple-500/20 overflow-hidden">
                          {/* Mock window bar */}
                          <div className="flex flex-wrap items-center justify-between gap-1.5 pb-3 mb-4 border-b border-white/10">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="text-[10px] sm:text-[11px] font-mono text-purple-300 truncate max-w-[150px] sm:max-w-none">
                              sparepe-automobile.store
                            </span>
                            <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
                              E-Commerce
                            </span>
                          </div>

                          {/* Search bar mockup */}
                          <div className="mb-4 bg-white/5 rounded-lg p-2 sm:p-2.5 flex items-center gap-2 border border-white/10">
                            <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span className="text-[11px] sm:text-xs text-white/50 truncate">Search OEM Brake Pads, Oil Filters...</span>
                          </div>

                          {/* Category chips */}
                          <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                            <span className="text-[10px] px-2.5 py-1 rounded-full bg-purple-600 text-white font-medium whitespace-nowrap">
                              All Parts
                            </span>
                            <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/10 whitespace-nowrap">
                              Braking System
                            </span>
                            <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/10 whitespace-nowrap">
                              Engine & Turbo
                            </span>
                            <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/10 whitespace-nowrap">
                              Suspension
                            </span>
                          </div>

                          {/* Product Grid Mockup */}
                          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3">
                            <div className="bg-white/5 border border-white/5 p-3 rounded-lg flex flex-col justify-between">
                              <div>
                                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">
                                  OEM Spec
                                </span>
                                <p className="text-xs font-semibold text-white mt-1">Ceramic Brake Pads</p>
                                <p className="text-[10px] text-white/50">High-Durability Formula</p>
                              </div>
                              <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                                <span className="text-xs font-bold text-emerald-400">₹2,499</span>
                                <span className="text-[10px] px-2 py-0.5 rounded bg-purple-600/30 text-purple-300">Add</span>
                              </div>
                            </div>

                            <div className="bg-white/5 border border-white/5 p-3 rounded-lg flex flex-col justify-between">
                              <div>
                                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
                                  Performance
                                </span>
                                <p className="text-xs font-semibold text-white mt-1">Synthetic Oil Filter</p>
                                <p className="text-[10px] text-white/50">99% Particle Capture</p>
                              </div>
                              <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                                <span className="text-xs font-bold text-emerald-400">₹649</span>
                                <span className="text-[10px] px-2 py-0.5 rounded bg-purple-600/30 text-purple-300">Add</span>
                              </div>
                            </div>
                          </div>

                          {/* Backend Features Bar */}
                          <div className="mt-4 pt-3 border-t border-white/10 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 text-[10px] sm:text-[11px] text-white/60">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              RESTful Inventory Sync
                            </span>
                            <span className="text-purple-300 font-mono">Node.js + MongoDB</span>
                          </div>
                        </div>
                      </div>
                    ) : project.id === 3 ? (
                      /* KisanRent UI Preview */
                      <div className="relative rounded-2xl p-1 bg-gradient-to-br from-green-500/40 via-emerald-600/20 to-teal-700/40 shadow-2xl">
                        <div className="rounded-xl bg-slate-950 p-4 sm:p-5 border border-green-500/20 overflow-hidden">
                          {/* Mock window bar */}
                          <div className="flex flex-wrap items-center justify-between gap-1.5 pb-3 mb-4 border-b border-white/10">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="text-[10px] sm:text-[11px] font-mono text-emerald-300 truncate max-w-[150px] sm:max-w-none">
                              kisanrent.com
                            </span>
                            <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-green-500/20 text-green-300 font-mono">
                              HTML/CSS
                            </span>
                          </div>

                          {/* Hero Section Mockup */}
                          <div className="mb-4 text-center py-3 sm:py-4 bg-gradient-to-b from-green-900/40 to-transparent rounded-lg border border-green-500/10">
                            <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Rent Farm Equipment Easily</h4>
                            <p className="text-[9px] sm:text-[10px] text-white/60">Tractors, Harvesters, Implements & more</p>
                          </div>

                          {/* Equipment Grid Mockup */}
                          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3">
                            <div className="bg-white/5 border border-white/5 rounded-lg overflow-hidden flex flex-col">
                              <div className="h-14 sm:h-16 bg-green-900/30 flex items-center justify-center">
                                <span className="text-[10px] text-green-400">🚜 Tractor</span>
                              </div>
                              <div className="p-2">
                                <p className="text-[11px] font-semibold text-white">Mahindra 575 DI</p>
                                <p className="text-[9px] text-white/50 mb-2">Pune District</p>
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] font-bold text-emerald-400">₹800/hr</span>
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-600/30 text-green-300">Rent</span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white/5 border border-white/5 rounded-lg overflow-hidden flex flex-col">
                              <div className="h-14 sm:h-16 bg-green-900/30 flex items-center justify-center">
                                <span className="text-[10px] text-green-400">⚙️ Harvester</span>
                              </div>
                              <div className="p-2">
                                <p className="text-[11px] font-semibold text-white">Combine Harvester</p>
                                <p className="text-[9px] text-white/50 mb-2">Nashik District</p>
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] font-bold text-emerald-400">₹2000/hr</span>
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-600/30 text-green-300">Rent</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Nav Bar Mockup */}
                          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-around text-[9px] sm:text-[10px] text-white/60">
                            <span className="text-emerald-400 font-semibold">Home</span>
                            <span>Explore</span>
                            <span>List Item</span>
                            <span>Profile</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Spireeta Full-Stack UI Preview */
                      <div className="relative rounded-2xl p-1 bg-gradient-to-br from-fuchsia-500/40 via-purple-600/20 to-pink-700/40 shadow-2xl">
                        <div className="rounded-xl bg-slate-950 p-4 sm:p-5 border border-fuchsia-500/20 overflow-hidden">
                          {/* Mock window bar */}
                          <div className="flex flex-wrap items-center justify-between gap-1.5 pb-3 mb-4 border-b border-white/10">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="text-[10px] sm:text-[11px] font-mono text-fuchsia-300 truncate max-w-[150px] sm:max-w-none">
                              spireeta.com
                            </span>
                            <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 font-mono">
                              MERN
                            </span>
                          </div>

                          {/* Dashboard Header */}
                          <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 mb-4 bg-white/5 p-3 rounded-lg border border-white/5">
                            <div>
                              <p className="text-[9px] sm:text-[10px] text-white/60 uppercase tracking-wider">Performance & Training Hub</p>
                              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 sm:mt-1">Spirita Technologies</p>
                            </div>
                            <div>
                              <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] text-emerald-400">Portal: Active</span>
                            </div>
                          </div>

                          {/* Training & Resource Hub Mockup */}
                          <div className="mb-4 bg-white/5 rounded-lg p-3 sm:p-4 border border-dashed border-white/20 text-center">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <p className="text-[10px] sm:text-[11px] text-white/70">Training Modules & Course Content</p>
                            <p className="text-[9px] text-white/40 mt-1">AWS S3 Cloud Storage • Dynamic Delivery</p>
                          </div>

                          {/* Data Table Mockup */}
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-[9px] sm:text-[10px] bg-white/5 p-2 rounded">
                              <span className="text-white/70">Potential-to-Performance Tracking</span>
                              <span className="text-emerald-400">Active</span>
                            </div>
                            <div className="flex justify-between items-center text-[9px] sm:text-[10px] bg-white/5 p-2 rounded">
                              <span className="text-white/70">Role-Based Auth & Security</span>
                              <span className="text-emerald-400">Protected</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

