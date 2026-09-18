import Image from "next/image";

interface ExperienceCard {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  points: string[];
  tags: string[];
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    role: "Full Stack Developer Intern (MERN)",
    company: "Damsole Technologies",
    duration: "March 2026 – May 2026",
    location: "Pune",
    type: "Onsite",
    description:
      "Built and contributed to real-world client projects, developing scalable and responsive web applications using the MERN stack.",
    points: [
      "Developed and integrated RESTful APIs with MongoDB for efficient data handling and seamless frontend-backend communication.",
      "Optimized application performance and responsiveness, ensuring fast load times and smooth user interactions.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "Innovation Hub",
    duration: "June 2024 – July 2024",
    location: "Nashik",
    type: "Onsite",
    description:
      "Developed and maintained responsive web pages using HTML, CSS, and JavaScript, ensuring cross-browser compatibility.",
    points: [
      "Assisted in designing and improving user interface components, focusing on clean layout and better user experience.",
      "Strengthened core web development skills by working on live projects and practical assignments.",
    ],
    tags: ["JavaScript", "HTML5", "CSS3", "UI/UX Components", "Responsive Design"],
    icon: "/cards/card-2.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-purple-400 uppercase mb-2">
            Career Journey
          </p>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-white/70 text-xs sm:text-base max-w-2xl mx-auto mt-2 sm:mt-3">
            Practical industry experience delivering scalable MERN stack solutions, robust APIs, and user-centric interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-br from-slate-950/90 via-purple-950/40 to-slate-950/90 backdrop-blur-md rounded-2xl p-5 sm:p-7 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-950/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon and Role Info */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center p-2 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Image
                      src={card.icon}
                      alt={card.company}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <span className="text-[11px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {card.type} • {card.location}
                      </span>
                      <span className="text-[11px] sm:text-xs text-white/50">{card.duration}</span>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors break-words">
                      {card.role}
                    </h3>
                    <p className="text-purple-400 text-xs sm:text-sm font-medium">
                      {card.company}
                    </p>
                  </div>
                </div>

                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4">
                  {card.description}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2 mb-6">
                  {card.points.map((pt, i) => (
                    <li key={i} className="text-xs sm:text-sm text-white/70 flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-purple-500/10">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white/5 text-purple-300 border border-purple-500/10 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
