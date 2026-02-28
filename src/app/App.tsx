import React from "react";
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { Events } from "@/app/components/Events";
import { Team } from "@/app/components/Team";
import { Gallery } from "@/app/components/Gallery";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-24 bg-white overflow-hidden relative">
          {/* COPS Logo Background Watermark */}
          <div
            className="absolute inset-0 bg-no-repeat opacity-[0.2] pointer-events-none"
            style={{ backgroundImage: "url('/copslogo.png')", backgroundSize: "500px 500px", backgroundPosition: "20% center" }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">A Community of Builders, Thinkers, and Dreamers.</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                   Club of Programmers (COPS) is a student-led programming community at C Byregowda Institute of Technology, focused on helping freshers and coding enthusiasts build strong programming foundations.
                  </p>
                  <p>
                    We believe programmers grow through practice, consistency, and collaboration. COPS bridges the gap between academic learning and real-world application through coding challenges, hackathons, hands-on workshops, and peer learning.
                  </p>
                  <p>
                    Whether you are just starting out or looking to sharpen your problem-solving skills, COPS provides a supportive environment to learn, practice, compete, and grow together.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {[
                      "Peer-to-peer Mentorship",
                      "Beginner-friendly coding challenges",
                      "Hackathons & competitive programming",
                      "Hands-on programming workshops",
                      "Collaborative learning environment",
                      "Continuous skill development"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse delay-1000"></div>
                <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="/Journey/seen22009.jpeg" 
                    alt="Students collaborating" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Events />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
