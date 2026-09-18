import React from "react";
import {
  SiReact,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPython,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
  SiAnthropic,
  SiReplit,
} from "react-icons/si";
import {
  TbDevices,
  TbLayout,
  TbApi,
  TbLayersIntersect,
  TbPlugConnected,
  TbTable,
  TbChartDots3,
  TbSql,
  TbBrandVscode,
  TbBrandCss3,
} from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { RxCursorArrow } from "react-icons/rx";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function About(): React.JSX.Element {
  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend Development",
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <TbBrandCss3 className="text-[#1572B6]" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "Responsive Design", icon: <TbDevices className="text-purple-300" /> },
        { name: "UI/UX Layouts", icon: <TbLayout className="text-pink-400" /> },
      ],
    },
    {
      category: "Backend & APIs",
      icon: (
        <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#5FA04E]" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
        { name: "RESTful APIs", icon: <TbApi className="text-sky-400" /> },
        { name: "JWT Authentication", icon: <SiJsonwebtokens className="text-[#D63AFF]" /> },
        { name: "Middleware", icon: <TbLayersIntersect className="text-purple-300" /> },
        { name: "API Integration", icon: <TbPlugConnected className="text-emerald-400" /> },
      ],
    },
    {
      category: "Databases",
      icon: (
        <svg className="w-5 h-5 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Mongoose ODM", icon: <SiMongoose className="text-[#E74C3C]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "Relational Schema", icon: <TbTable className="text-amber-400" /> },
        { name: "Data Aggregation", icon: <TbChartDots3 className="text-fuchsia-400" /> },
      ],
    },
    {
      category: "Programming Languages",
      icon: (
        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "Java", icon: <FaJava className="text-[#EA2D2E]" /> },
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "SQL", icon: <TbSql className="text-cyan-400" /> },
      ],
    },
    {
      category: "Tools & Version Control",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC]" /> },
        { name: "Cursor", icon: <RxCursorArrow className="text-violet-400" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "npm", icon: <SiNpm className="text-[#CB3837]" /> },
        { name: "Claude", icon: <SiAnthropic className="text-[#D97706]" /> },
        { name: "Replit", icon: <SiReplit className="text-[#F26207]" /> },
      ],
    },
  ];

  const education = [
    {
      institution: "Sandip University, Nashik",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "2023 – 2026",
      scoreBadge: "CGPA: 8.02 / 10",
      description:
        "Specialized in core computer science, software engineering methodologies, data structures, algorithms, and full-stack web application development.",
    },
    {
      institution: "Government Polytechnic, Jintur",
      degree: "Diploma in Computer Science and Engineering",
      period: "2020 – 2023",
      scoreBadge: "Percentage: 74.17%",
      description:
        "Built foundational engineering principles in software programming, system logic, database fundamentals, and computer hardware architectures.",
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div id="about" className="absolute -top-20" />
      <div className="container mx-auto max-w-6xl">
        {/* Section Intro */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-purple-400 uppercase mb-2">
            Expertise & Background
          </p>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Technical Skills & Education
          </h2>
          <p className="text-white/70 text-xs sm:text-base max-w-2xl mx-auto mt-2 sm:mt-3">
            A solid academic foundation paired with hands-on modern full-stack development capabilities.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-14 sm:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400 flex-shrink-0" />
            <span>Technical Skills Matrix</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-purple-500/20 hover:border-purple-500/40 rounded-xl p-4 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/40"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-500/30 flex-shrink-0">
                    {cat.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-white">
                    {cat.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="group/skill inline-flex items-center gap-1.5 text-[11px] sm:text-xs px-2.5 py-1 rounded-lg bg-purple-950/40 text-purple-200 border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-900/30 hover:text-white transition-all font-mono"
                    >
                      <span className="text-xs sm:text-sm flex-shrink-0 transition-transform duration-200 group-hover/skill:scale-115">
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-400 flex-shrink-0" />
            <span>Education</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-slate-950/90 via-purple-950/30 to-slate-950/90 border border-purple-500/20 rounded-2xl p-5 sm:p-7 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      {edu.period}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      {edu.scoreBadge}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-xl font-bold text-white mb-1 break-words">
                    {edu.degree}
                  </h4>
                  <p className="text-purple-400 font-medium text-xs sm:text-sm mb-3 sm:mb-4">
                    {edu.institution}
                  </p>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
