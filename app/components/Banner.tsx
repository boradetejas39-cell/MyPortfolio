"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "React & Node.js Developer",
    "RESTful API Engineer"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(40);
        }, 2200);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTypingSpeed(90);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background glow circle */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-8">
          {/* Left/Center graphic */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto order-1 lg:order-1">
            <div className="relative top-2 sm:top-4 lg:top-8">
              {/* Mobile: Hello text */}
              <div className="lg:hidden text-center mb-4 sm:mb-6">
                <div className="relative inline-block bg-purple-950/60 border border-purple-500/30 rounded-full px-4 py-1.5 backdrop-blur-md">
                  <p className="text-white text-sm sm:text-base">
                    Hello! I Am{" "}
                    <span className="text-purple-400 font-semibold">Tejas Borade</span>
                  </p>
                </div>
              </div>

              {/* Profile Graphic */}
              <div className="relative w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] mx-auto flex items-center justify-center">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-violet-500 to-indigo-500 opacity-60 blur-xl animate-pulse" />
                {/* Gradient border ring */}
                <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr from-purple-400 via-violet-500 to-indigo-400">
                  <div className="w-full h-full rounded-full bg-[#0d0118]" />
                </div>
                {/* Photo */}
                <div className="relative z-10 w-[91%] h-[91%] rounded-full overflow-hidden border-2 border-purple-500/30">
                  <Image
                    src="/assets/me.png"
                    alt="Tejas Borade - Full Stack MERN Developer"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-2 w-full">
            {/* Desktop: Hello text */}
            <div className="hidden lg:inline-block relative">
              <div className="bg-purple-950/60 border border-purple-500/30 rounded-full px-5 py-1.5 backdrop-blur-md mb-2">
                <p className="text-white text-sm">
                  Hello! I Am{" "}
                  <span className="text-purple-400 font-semibold">Tejas Borade</span>
                </p>
              </div>
            </div>

            <div>
              <p className="text-lg sm:text-2xl text-purple-300/90 font-medium">A Developer who</p>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mt-1 break-words">
                Builds scalable
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                  web apps
                </span>
                ...
              </h1>
              <p className="text-sm sm:text-base text-white/70 mt-2 sm:mt-3 max-w-xl mx-auto lg:mx-0">
                Engineering robust full-stack architectures with modern MERN solutions, clean APIs, and engaging user experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                href="#projects"
                className="w-full xs:w-auto text-center px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-lg shadow-purple-900/40 transition-all hover:scale-105"
              >
                View Featured Projects
              </Link>
              <Link
                href="#contact"
                className="w-full xs:w-auto text-center px-6 py-3 rounded-full text-sm font-semibold border border-purple-500/40 hover:border-purple-400 text-white hover:bg-purple-950/40 transition-all"
              >
                Get In Touch
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto text-center px-6 py-3 rounded-full text-sm font-semibold border border-purple-500/40 hover:border-purple-400 text-purple-300 hover:text-white hover:bg-purple-950/40 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Lower Banner Intro */}
        <div className="space-y-4 pt-12 sm:pt-16 text-center lg:text-left border-t border-purple-500/10 mt-8 sm:mt-12">
          <p className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
            I&apos;m a <span className="text-purple-400">{displayedText}</span>
            <span className="animate-pulse text-purple-400">|</span>
          </p>

          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl pt-1 sm:pt-2 mx-auto lg:mx-0 leading-relaxed">
            Full Stack Developer skilled in the MERN stack with experience working closely with clients to understand requirements and deliver visually appealing, responsive web applications tailored to their needs.
          </p>

          {/* Quick contact pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-3 sm:pt-4">
            <a
              href="mailto:boradetejas39@gmail.com"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm text-purple-300 hover:text-white transition-all max-w-full truncate"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="truncate">boradetejas39@gmail.com</span>
            </a>
            <a
              href="tel:+917841978964"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm text-purple-300 hover:text-white transition-all"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 7841978964</span>
            </a>
            <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white/70">
              <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Pune / Nashik, India</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
