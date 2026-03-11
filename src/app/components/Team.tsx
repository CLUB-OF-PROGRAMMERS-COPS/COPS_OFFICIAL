import React, { useState } from "react";
import { Github, Linkedin, Mail, Users } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export const Team = () => {
  // State to toggle between Group Photo and Team List
  const [showTeam, setShowTeam] = useState(false);

  const teamData = {
    clubLead: [
      {
        name: "Dr Vasudeva R",
        role: "Club Lead",
        image: "https://cbitkolar.edu.in/wp-content/uploads/2024/08/VASUDEVA-R-300x300-2.png",
        bio: "HOD & Assoc. Professor, Dept. of CS&E.",
        linkedin: "https://linkedin.com/in/dr-vasudeva-r",
        email: "vasudeva@gmail.com"
      }
    ],
    staffCoordinators: [
      {
        name: "Prof. Sarah Name",
        role: "Staff Coordinator",
        image: "/api/placeholder/300/300",
        bio: "Guiding the technical growth of students.",
        linkedin: "#",
        email: "staff@cbit.edu"
      }
    ],
    studentCoordinators: [
      {
        name: "Bhanu Kiran R",
        role: "Operations Lead",
        image: "COPS/PIC.jpg",
        bio: "AI engineer specializing in machine learning and LLM-driven systems.",
        linkedin: "https://linkedin.com/in/bhanu-kiran-r",
        email: "bhanukiran90216@gmail.com"
      },
      {
        name: "Deepak P S",
        role: "Tech Lead",
        image: "COPS/image.png",
        bio: "Cybersecurity engineer focused on building resilient digital defense systems.",
        linkedin: "https://linkedin.com/in/deepak-p-s",
        email: "deepakkrishnark@gmail.com"
      }
    ],
    members: [
      {
        name: "Member Name",
        role: "Core Member",
        image: "/api/placeholder/300/300",
        bio: "Web Developer and Open Source enthusiast.",
        linkedin: "#",
        email: "member@gmail.com"
      }
    ]
  };

  // Helper component for the Member Card to keep code clean
  const MemberCard = ({ member }) => (
    <div className="text-center group animate-in fade-in zoom-in duration-500">
      <div className="relative mb-6 inline-block">
        <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
          <ImageWithFallback
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white z-20 shadow-lg group-hover:rotate-12 transition-transform">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-blue-600 font-semibold text-sm mb-4">{member.role}</p>
      <p className="text-gray-600 text-sm max-w-xs mx-auto mb-6 italic">"{member.bio}"</p>
      <div className="flex justify-center gap-4 text-gray-400">
        <a href={`mailto:${member.email}`} className="hover:text-gray-900 transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  );

  return (
    <section id="team" className="py-24 bg-slate-50 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!showTeam ? (
          /* --- INITIAL VIEW: GROUP PHOTO & BUTTON --- */
          <div className="text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">Our Community</h2>
            <div className="relative group max-w-4xl rounded-2xl overflow-hidden shadow-2xl mb-10">
              <img 
                src="/path-to-your-group-photo.jpg" // Add your group photo path here
                alt="COPS Team Group" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
            
            <button 
              onClick={() => setShowTeam(true)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-200 transition-all transform hover:-translate-y-1"
            >
              <Users className="w-6 h-6" />
              Meet the Team
            </button>
          </div>
        ) : (
          /* --- DETAILED VIEW: CATEGORIZED MEMBERS --- */
          <div className="space-y-20 animate-in slide-in-from-bottom-10 duration-700">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Meet the Leadership</h2>
              <button 
                onClick={() => setShowTeam(false)}
                className="text-blue-600 font-medium hover:underline mb-8"
              >
                ← Back to overview
              </button>
            </div>

            {/* Club Lead & Staff Section */}
            <div>
              <h3 className="text-center text-2xl font-bold text-gray-800 mb-10 underline decoration-blue-500 underline-offset-8">Mentors & Leads</h3>
              <div className="flex flex-wrap justify-center gap-12">
                {[...teamData.clubLead, ...teamData.staffCoordinators].map((m, i) => (
                  <MemberCard key={i} member={m} />
                ))}
              </div>
            </div>

            {/* Student Coordinators Section */}
            <div>
              <h3 className="text-center text-2xl font-bold text-gray-800 mb-10 underline decoration-blue-500 underline-offset-8">Student Coordinators</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {teamData.studentCoordinators.map((m, i) => (
                  <MemberCard key={i} member={m} />
                ))}
              </div>
            </div>

            {/* Members Section */}
            <div>
              <h3 className="text-center text-2xl font-bold text-gray-800 mb-10 underline decoration-blue-500 underline-offset-8">Core Members</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                {teamData.members.map((m, i) => (
                  <MemberCard key={i} member={m} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
                >
                  <Mail className="w-5 h-5 cursor-pointer" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
