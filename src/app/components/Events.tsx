import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Clock, Sparkles, X, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

type EventItem = {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  registrationLink: string;
  description: string;
  instructions: string[];
};

export const Events = () => {
  // Set this to true and fill in event details when events are confirmed
  const eventsConfirmed = true; // Change to false to show "Coming Soon" state
  ///viewform?embedded=true(to embed google form in iframe, add ?embedded=true at the end of form URL)
  const events: EventItem[] = [
    {
      title: "Startup Arena",
      date: "10-04-2026",
      time: "09:30 AM",
      location: "CBIT Campus",
      image: "https://www.betterup.com/hubfs/A-young-happy-male-pitching-an-idea-in-front-of-a-teamhow-to-pitch-ideas.jpg",
      category: "Technical",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSexAFlBfP2SN5_OyQuWrtN2qGNa2VvN2CJ5BrntKXmpmCFIqw/viewform?embedded=true",
      description: "Learn to build and pitch startup ideas under pressure.",
      instructions: [
        "Register as a team of 2 members and be ready to compete on 10th April.",
        "Round 1 - Innovation Matrix: Create a startup idea using given technology, domain, and constraints within 1 hour 30 minutes.",
        "Round 2 - Final Pitch Arena: Present and defend your solution in front of judges within 2 hours to compete for prizes and certificates.",
      ]
    },
    {
      title: "Agent Forge",
      date: "10-04-2026",
      time: "09:30 AM",
      location: "CBIT Campus",
      image: "https://cdn.dribbble.com/userupload/2901475/file/still-cafc73d4c49ee5205bb91192d413188d.png",
      category: "Technical",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSexAFlBfP2SN5_OyQuWrtN2qGNa2VvN2CJ5BrntKXmpmCFIqw/viewform?embedded=true",
      description: "A thrilling 4-hour hackathon where teams will build AI agents to solve a surprise challenge revealed at the start of the event.",
      instructions: [
        "Team Composition: Form a team of 2 members, solo participation is not allowed.",
        "The 'Mystery' Challenge: The specific problem statement remains sealed until 9:30 AM on the day of the event , ensuring every team starts from zero with no prior hints or leaks.",
        "Platform & AI Freedom: You can build your agent for WhatsApp, Telegram, Web, or Mobile , and you are free to use any free-tier AI API like Gemini, Groq, or OpenAI.",
        "Development Rules: All core logic must be written on the day of the event ,while you can use AI coding tools like ChatGPT or Copilot, you must be able to explain every part of your code to the judges.",
        "Submission & Live Demo: You must submit your GitHub repository and a 60-second demo video (optional) by the 2:00 PM hard deadline , followed by a 5-minute live demonstration where judges will interact with your agent in real-time.",
      ]
    },
    {
      title: "Techno Enigma",
      date: "10-04-2026",
      time: "09:30 AM",
      location: "CBIT Campus",
      image: "https://png.pngtree.com/png-clipart/20230928/original/pngtree-cooperative-puzzle-solving-with-man-woman-teamwork-development-team-thinking-vector-png-image_12902626.png",
      category: "Technical",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSexAFlBfP2SN5_OyQuWrtN2qGNa2VvN2CJ5BrntKXmpmCFIqw/viewform?embedded=true",
      description: "Learn to enhance technical knowledge, problem-solving, and communication skills through competitive rounds.",
      instructions: [
        "Participate in teams of 2 members and compete across multiple technical rounds designed to test knowledge, logic, and communication skills.",
        "Round 1 - Tech Quiz: Answer 25 technical & aptitude questions in 30 minutes.",
        "Round 2 - Tech Brain Hack: Solve puzzles, riddles & logo guessing challenges (60 minutes).",
        "Round 3 - Tech Talk: Pick a topic and present individually based on technical knowledge & communication (60 minutes).",
        "Showcase your skills, compete with top teams, and stand a chance to win exciting prizes and certificates.",
      ]
    },
    {
      title: "Code and Conquer",
      date: "10-04-2026",
      time: "09:30 AM",
      location: "CBIT Campus",
      image: "https://images.squarespace-cdn.com/content/v1/63d40fe2cbd65e16cb8098b6/1709746054971-Q69G4U309Q0DH3EH1QMK/1200px-Junction_2015.jpg",
      category: "Technical",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSexAFlBfP2SN5_OyQuWrtN2qGNa2VvN2CJ5BrntKXmpmCFIqw/viewform?embedded=true",
      description: "Learn to strategically bid, think fast, and solve technical problems under time pressure.",
      instructions: [
        "Participate in teams of 2 members and receive 100 virtual coins at the start.",
        "Use your coins to bid for technical questions—the highest bidder gets the chance to answer within 2-3 minutes.",
        "Earn or Lose Coins : Correct answer: Earn or double your coins, Wrong answer: Coins are deducted",
        "No use of internet, mobile phones, or AI tools all answers must be based on your knowledge.",
        "The team with the highest coins at the end wins exciting cash prizes.",
      ]
    },
    {
      title: "Webtopia",
      date: "10-04-2026",
      time: "09:30 AM",
      location: "CBIT Campus",
      image: "data:image/jpeg;base64,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",
      category: "Technical",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSexAFlBfP2SN5_OyQuWrtN2qGNa2VvN2CJ5BrntKXmpmCFIqw/viewform?embedded=true",
      description: "Learn to design and develop creative websites under time constraints while adapting to real-time requirements.",
      instructions: [
        "Participate in teams of 2 members and get ready for a web design challenge.",
        "The website theme will be announced during the event, and you must design accordingly.",
        "Develop your solution within 3 hours showcasing creativity and technical skills.",
        "Your project will be evaluated by judges, and all decisions will be final.",
      ]
    },
    {
      title: "BGMI Battle Arena",
      date: "10-04-2026",
      time: "09:30 AM",
      location: "CBIT Campus",
      image: "https://wallpaperbat.com/img/619573-pubg-bgmi-spark-flame-4k-wallpaper.jpg",
      category: "Non-Technical",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSexAFlBfP2SN5_OyQuWrtN2qGNa2VvN2CJ5BrntKXmpmCFIqw/viewform?embedded=true",
      description: "Learn to enhance strategic thinking, coordination, and competitive gaming skills under pressure.",
      instructions: [
        "Register as a 2-player team and play on the BGMI India server.",
        "Only mobile devices allowed, with strict fair play and no cheats policy.",
        "Compete against other teams to survive longer and perform better.",
        "Winners are selected based on performance and awarded exciting prizes.",
      ]
    },
    {
      title: "Free Fire Elite Clash",
      date: "10-04-2026",
      time: "09:30 AM",
      location: "CBIT Campus",
      image: "https://wallpaperaccess.com/full/1077356.jpg",
      category: "Non-Technical",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSexAFlBfP2SN5_OyQuWrtN2qGNa2VvN2CJ5BrntKXmpmCFIqw/viewform?embedded=true",
      description: "Learn to improve teamwork, strategy, and quick decision-making in competitive gaming environments.",
      instructions: [
        "Participate in 2-player teams (duo) using mobile devices only.",
        "Follow fair play rules: no emulators, cheats, or mods allowed.",
        "Compete against other teams to survive longer and perform better.",
        "Winners are selected based on performance and awarded exciting prizes.",
      ]
    },
    {
      title: "College Photography & Videography",
      date: "10-04-2026",
      time: "09:30 AM",
      location: "CBIT Campus",
      image: "https://www.adobe.com/uk/creativecloud/photography/discover/media_110f004e90fccf902d3d5462acae760c5e40e7a47.png?width=750&format=png&optimize=medium",
      category: "Non-Technical",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSexAFlBfP2SN5_OyQuWrtN2qGNa2VvN2CJ5BrntKXmpmCFIqw/viewform?embedded=true",
      description: "Learn to improve teamwork, strategy, and quick decision-making in competitive gaming environments.",
      instructions: [
        "Participate in teams of 2 members.",
        "The photography/videography theme will be given during the event.",
        "Capture and submit 1 photograph and a 2-3 minute edited video within 2 hours.",
        "Only original content is allowed—no AI or downloaded content.",
      ]
    }
  ];

  const [formModal, setFormModal] = useState<{ open: boolean; url: string; title: string }>({
    open: false,
    url: "",
    title: "",
  });
  const [infoModal, setInfoModal] = useState<{ open: boolean; event: EventItem | null }>({
    open: false,
    event: null,
  });

  const openFormModal = (url: string, title: string) => {
    // Ensure the URL has ?embedded=true for Google Forms iframe
    const embedUrl = url.includes("embedded=true") ? url : url.replace(/\?.*$/, "") + "?embedded=true";
    setFormModal({ open: true, url: embedUrl, title });
  };

  const closeFormModal = () => setFormModal({ open: false, url: "", title: "" });
  const closeInfoModal = () => setInfoModal({ open: false, event: null });

  // Close on Escape key
  useEffect(() => {
    if (!formModal.open && !infoModal.open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeFormModal();
        closeInfoModal();
      }
    };
    document.body.style.overflow = "hidden"; // prevent background scroll
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [formModal.open, infoModal.open]);

  const handleRegister = (event: EventItem) => {
    if (event.registrationLink) {
      setInfoModal({ open: true, event });
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const continueToForm = () => {
    if (!infoModal.event?.registrationLink) return;
    openFormModal(infoModal.event.registrationLink, infoModal.event.title);
    closeInfoModal();
  };

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">I-Sphere 1.0</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A Technical and Non-Technical competition to bring out the competitive spirit and creativity. Event scheduled on <strong>10-04-2026 (Friday) at 09:30 AM</strong>. Register before <strong>06-04-2026</strong>.
          </p>
        </div>

        {!eventsConfirmed && (
          <div className="text-center mb-12 py-8 px-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-2xl border border-blue-100">
            <Sparkles className="w-10 h-10 text-yellow-500 mx-auto mb-3 animate-pulse" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Exciting Events Coming Soon!</h3>
            <p className="text-gray-600 max-w-lg mx-auto">
              We're planning some amazing events for this semester. Stay tuned for announcements dates and details will be updated here!
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-56">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase">
                  {event.category}
                </div>
                {!eventsConfirmed && (
                  <div className="absolute top-4 right-4 bg-yellow-400/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase">
                    Coming Soon
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <Clock className="w-4 h-4 text-blue-500" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    {event.location}
                  </div>
                </div>
                <button
                  onClick={() => handleRegister(event)}
                  className={`mt-6 w-full py-3 font-semibold rounded-xl transition-all duration-200 ${
                    event.registrationLink && eventsConfirmed
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : eventsConfirmed
                        ? "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        : "bg-gray-100 text-gray-500 cursor-default"
                  }`}
                  disabled={!eventsConfirmed}
                >
                  {!eventsConfirmed
                    ? "Registration Opens Soon"
                    : event.registrationLink
                      ? "Register Now"
                      : "Coming Soon"}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-blue-600 font-bold hover:underline"
          >
            Get Notified About Events →
          </button>
        </div>
      </div>

      {/* Event Info Modal (before registration) */}
      {infoModal.open && infoModal.event && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={closeInfoModal}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 truncate pr-2">
                {infoModal.event.title} — Event Information
              </h3>
              <button
                onClick={closeInfoModal}
                className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-6 overflow-auto">
              <p className="text-gray-700 mb-4">{infoModal.event.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-gray-500">Date</p>
                  <p className="font-semibold text-gray-900">{infoModal.event.date}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-gray-500">Time</p>
                  <p className="font-semibold text-gray-900">{infoModal.event.time}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-gray-500">Venue</p>
                  <p className="font-semibold text-gray-900">{infoModal.event.location}</p>
                </div>
              </div>

              <h4 className="text-base font-bold text-gray-900 mb-2">Before You Register</h4>
              <ul className="space-y-2 mb-6">
                {infoModal.event.instructions.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
                <button
                  onClick={closeInfoModal}
                  className="px-4 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={continueToForm}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Continue to Registration
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Google Form Modal */}
      {formModal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={closeFormModal}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 truncate pr-2">{formModal.title} — Registration</h3>
              <button
                onClick={closeFormModal}
                className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Google Form iframe */}
            <div className="flex-1 overflow-auto">
              <iframe
                src={formModal.url}
                title="Registration Form"
                className="w-full border-0"
                style={{ height: "75vh" }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
