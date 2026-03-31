import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <ImageWithFallback
                src="/copslogo.png"
                alt="COPS Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white tracking-tight">CLUB OF PROGRAMMERS (COPS)</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              A student-led programming community, guided by the Department of Computer Science & Engineering at C. Byregowda Institute of Technology, focused on learning, building, and growing together.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/club-of-programmers-cops" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://github.com/CLUB-OF-PROGRAMMERS-COPS" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/clubofprogrammers.cops" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-blue-400 transition-colors">Upcoming Events</a></li>
              <li><a href="#team" className="hover:text-blue-400 transition-colors">Our Team</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Photo Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Project Showcase</a></li>
              <li><a href="https://drive.google.com/drive/folders/1cLnuEy2pfK6d7BBFzQs20TgGbySagmaJ?usp=sharing" className="hover:text-blue-400 transition-colors">Knowledge Center</a></li>
              <li><a href="https://drive.google.com/file/d/1vDcHOIKF1KAh7tNsg4kgXh7sJMiWgoyp/view?usp=sharing" className="hover:text-blue-400 transition-colors">Club Charter</a></li>
              <li><a href="https://drive.google.com/file/d/1yUkSNy0I6zMu0XcCBcpksOYwKrpnoOe-/view?usp=sharing" className="hover:text-blue-400 transition-colors">Members Directory</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-bold mb-4 md:mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with our latest news and events.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="absolute right-2 top-1.5 bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-bold hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 CLUB OF PROGRAMMERS (COPS) | C BYREGOWDA INSTITUTE OF TECHNOLOGY. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.freeprivacypolicy.com/live/b1996bc3-bfde-474c-8dc4-96d4247c7289" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://drive.google.com/file/d/1S3VkbrlodKSHcxeZthErbNiJWcxmsZmd/view?usp=sharing" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
