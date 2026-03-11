import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export const Team = () => {
  const members = [
    {
      name: "Dr Vasudeva R",
      role: "Club Lead",
      image: "https://cbitkolar.edu.in/wp-content/uploads/2024/08/VASUDEVA-R-300x300-2.png",
      bio: "HOD & Assoc. Professor, Dept. of CS&E.",
      linkedin: "https://linkedin.com/in/dr-vasudeva-r",
      email: "vasudeva@gmail.com"
    },
    {
      name: "Bhanu Kiran R",
      role: "Operations Lead",
      image: "COPS/PIC.jpg",
      bio: "AI engineer specializing in machine learning, deep learning, and large language model–driven systems",
      linkedin: "https://linkedin.com/in/bhanu-kiran-r",
      email: "bhanukiran90216@gmail.com"
    },
    {
      name: "Deepak P S",
      role: "Tech Lead",
      image: "COPS/image.png",
      bio: "Cybersecurity engineer focused on building intelligent and resilient digital defense systems",
      linkedin: "https://linkedin.com/in/deepak-p-s",
      email: "deepakkrishnark@gmail.com"
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Meet the Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our core team works together to guide, support, and grow the COPS community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {members.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 inline-block">
                <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white z-20 shadow-lg group-hover:rotate-12 transition-transform">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full h-full flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-semibold text-sm mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto mb-6 italic">
                "{member.bio}"
              </p>
              <div className="flex justify-center gap-4 text-gray-400">
                <a 
                  href={`mailto:${member.email}`}
                  className="hover:text-gray-900 transition-colors"
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
};      <p className="text-blue-600 font-semibold text-sm mb-4">{member.role}</p>
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
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export const Team = () => {
  const members = [
    {
      name: "Dr Vasudeva R",
      role: "Club Lead",
      image: "https://cbitkolar.edu.in/wp-content/uploads/2024/08/VASUDEVA-R-300x300-2.png",
      bio: "HOD & Assoc. Professor, Dept. of CS&E.",
      linkedin: "https://linkedin.com/in/dr-vasudeva-r",
      email: "vasudeva@gmail.com"
    },
    {
      name: "Bhanu Kiran R",
      role: "Operations Lead",
      image: "COPS/PIC.jpg",
      bio: "AI engineer specializing in machine learning, deep learning, and large language model–driven systems",
      linkedin: "https://linkedin.com/in/bhanu-kiran-r",
      email: "bhanukiran90216@gmail.com"
    },
    {
      name: "Deepak P S",
      role: "Tech Lead",
      image: "COPS/image.png",
      bio: "Cybersecurity engineer focused on building intelligent and resilient digital defense systems",
      linkedin: "https://linkedin.com/in/deepak-p-s",
      email: "deepakkrishnark@gmail.com"
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Meet the Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our core team works together to guide, support, and grow the COPS community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {members.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 inline-block">
                <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white z-20 shadow-lg group-hover:rotate-12 transition-transform">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full h-full flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-semibold text-sm mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto mb-6 italic">
                "{member.bio}"
              </p>
              <div className="flex justify-center gap-4 text-gray-400">
                <a 
                  href={`mailto:${member.email}`}
                  className="hover:text-gray-900 transition-colors"
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
