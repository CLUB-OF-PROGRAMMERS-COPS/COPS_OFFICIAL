import React from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ArrowRight, Code, Cpu, Users } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://cbitkolar.edu.in/wp-content/uploads/2025/07/01-4.jpg"
          alt="University Campus"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Stay Tuned For Upcoming Events
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Building Confident{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Programmers
            </span>{" "}
            <br className="hidden md:block" />
            Together.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            A student-led programming community, guided by the Department of Computer Science & Engineering at C. Byregowda Institute of Technology, focused on learning, building, and growing together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 group"
            >
              Join the Club
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://github.com/CLUB-OF-PROGRAMMERS-COPS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all backdrop-blur-sm flex items-center justify-center gap-2"
            >
              Our Projects
            </a>
          </div>
        </motion.div>

        {/* Floating Stats/Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-3 sm:gap-6 mt-12 md:mt-20"
        >
          {[
            { icon: <Users className="w-5 h-5 md:w-6 md:h-6" />, title: "50+ Members", desc: "Active community of creators" },
            { icon: <Code className="w-5 h-5 md:w-6 md:h-6" />, title: "2 Projects", desc: "Built from scratch every year" },
            { icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />, title: "Events", desc: "Workshops and hackathons" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 backdrop-blur-md p-3 sm:p-6 rounded-2xl text-left hover:bg-white/10 transition-all cursor-default group">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-sm sm:text-lg mb-0.5 sm:mb-1">{item.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm hidden sm:block">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
