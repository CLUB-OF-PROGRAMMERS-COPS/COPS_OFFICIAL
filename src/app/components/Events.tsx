import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Clock, Sparkles, X, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

// ─── Types ────────────────────────────────────────────────────────────────────

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

// ─── Shared sub-components ────────────────────────────────────────────────────

/** Reusable modal header with title + close button */
const ModalHeader = ({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) => (
  <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
    <h3 className="text-sm sm:text-lg font-bold text-gray-900 truncate pr-2">
      {title}
    </h3>
    <button
      onClick={onClose}
      className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
      aria-label="Close"
    >
      <X className="w-5 h-5" />
    </button>
  </div>
);

/** Reusable info tile used inside the event-info modal */
const InfoTile = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg bg-slate-50 p-3">
    <p className="text-gray-500">{label}</p>
    <p className="font-semibold text-gray-900">{value}</p>
  </div>
);

// ─── Constants ────────────────────────────────────────────────────────────────

const REGISTRATION_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSexAFlBfP2SN5_OyQuWrtN2qGNa2VvN2CJ5BrntKXmpmCFIqw/viewform?embedded=true";

const COMMON_FIELDS = {
  date: "10-04-2026",
  time: "09:30 AM",
  location: "CBIT Campus",
  registrationLink: REGISTRATION_LINK,
};

const NON_TECH_FIELDS = {
  ...COMMON_FIELDS,
  time: "After Technical Events",
};

// ─── Event data ───────────────────────────────────────────────────────────────

const events: EventItem[] = [
  {
    ...COMMON_FIELDS,
    title: "Startup Arena",
    image: "/eventposter/startuparena.jpeg",
    category: "Technical",
    description: "Learn to build and pitch startup ideas under pressure.",
    instructions: [
      "Register as a team of 2 members and be ready to compete on 10th April.",
      "Round 1 - Innovation Matrix: Create a startup idea using given technology, domain, and constraints within 1 hour 30 minutes.",
      "Round 2 - Final Pitch Arena: Present and defend your solution in front of judges within 2 hours to compete for prizes and certificates.",
    ],
  },
  {
    ...COMMON_FIELDS,
    title: "Agent Forge",
    image: "/eventposter/Agentforge.jpeg",
    category: "Technical",
    description:
      "A thrilling 4-hour hackathon where teams will build AI agents to solve a surprise challenge revealed at the start of the event.",
    instructions: [
      "Team Composition: Form a team of 2 members, solo participation is not allowed.",
      "The 'Mystery' Challenge: The specific problem statement remains sealed until 9:30 AM on the day of the event, ensuring every team starts from zero with no prior hints or leaks.",
      "Platform & AI Freedom: You can build your agent for WhatsApp, Telegram, Web, or Mobile, and you are free to use any free-tier AI API like Gemini, Groq, or OpenAI.",
      "Development Rules: All core logic must be written on the day of the event. While you can use AI coding tools like ChatGPT or Copilot, you must be able to explain every part of your code to the judges.",
      "Submission & Live Demo: Submit your GitHub repository and a 60-second demo video (optional) by the 2:00 PM hard deadline, followed by a 5-minute live demonstration where judges will interact with your agent in real-time.",
    ],
  },
  {
    ...COMMON_FIELDS,
    title: "Techno Enigma",
    image: "/eventposter/technoenigma.png",
    category: "Technical",
    description:
      "Learn to enhance technical knowledge, problem-solving, and communication skills through competitive rounds.",
    instructions: [
      "Participate in teams of 2 members and compete across multiple technical rounds designed to test knowledge, logic, and communication skills.",
      "Round 1 - Tech Quiz: Answer 25 technical & aptitude questions in 30 minutes.",
      "Round 2 - Tech Brain Hack: Solve puzzles, riddles & logo guessing challenges (60 minutes).",
      "Round 3 - Tech Talk: Pick a topic and present individually based on technical knowledge & communication (60 minutes).",
      "Showcase your skills, compete with top teams, and stand a chance to win exciting prizes and certificates.",
    ],
  },
  {
    ...COMMON_FIELDS,
    title: "Code and Conquer",
    image: "/eventposter/codeandconquer.jpeg",
    category: "Technical",
    description:
      "Learn to strategically bid, think fast, and solve technical problems under time pressure.",
    instructions: [
      "Participate in teams of 2 members and receive 100 virtual coins at the start.",
      "Use your coins to bid for technical questions — the highest bidder gets the chance to answer within 2–3 minutes.",
      "Earn or Lose Coins: Correct answer → Earn or double your coins. Wrong answer → Coins are deducted.",
      "No use of internet, mobile phones, or AI tools — all answers must be based on your knowledge.",
      "The team with the highest coins at the end wins exciting cash prizes.",
    ],
  },
  {
    ...COMMON_FIELDS,
    title: "Webtopia",
    image: "/eventposter/webtopia.png",
    category: "Technical",
    description:
      "Learn to design and develop creative websites under time constraints while adapting to real-time requirements.",
    instructions: [
      "Participate in teams of 2 members and get ready for a web design challenge.",
      "The website theme will be announced during the event, and you must design accordingly.",
      "Develop your solution within 3 hours showcasing creativity and technical skills.",
      "Your project will be evaluated by judges, and all decisions will be final.",
    ],
  },
  {
    ...NON_TECH_FIELDS,
    title: "BGMI Battle Arena",
    image: "/eventposter/bgmi.png",
    category: "Non-Technical",
    description:
      "Learn to enhance strategic thinking, coordination, and competitive gaming skills under pressure.",
    instructions: [
      "Squad Format: The match format has been officially changed from Duo to Squad mode.",
      "Team Requirement: Participants must register as two complete squads to be eligible for the tournament.",
      "Tournament Structure: Registered squads will compete across 3 mandatory challenge matches.",
      "Rule Compliance: Following the squad-based format is compulsory for all players to ensure fair play and scoring.",
    ],
  },
  {
    ...NON_TECH_FIELDS,
    title: "Free Fire Elite Clash",
    image: "/eventposter/freefire.png",
    category: "Non-Technical",
    description:
      "Learn to improve teamwork, strategy, and quick decision-making in competitive gaming environments.",
    instructions: [
      "Mode Shift: All upcoming Free Fire matches will now be played in Squad mode instead of Duo.",
      "Full Team Registration: Every participant is required to organize and register as two full teams (Squads).",
      "Challenge Series: The event will consist of 3 total squad matches to decide the winners.",
      "Mandatory Update: This shift to Squad play is a mandatory requirement for tournament participation.",
    ],
  },
  {
    ...NON_TECH_FIELDS,
    title: "College Photography & Videography",
    image: "/eventposter/collegephotography.png",
    category: "Non-Technical",
    description:
      "Capture creativity through your lens — showcase photography and videography skills in a timed challenge.",
    instructions: [
      "Participate in teams of 2 members.",
      "The photography/videography theme will be given during the event.",
      "Capture and submit 1 photograph and a 2–3 minute edited video within 2 hours.",
      "Only original content is allowed — no AI or downloaded content.",
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export const Events = () => {
  const eventsConfirmed  = true; // Change to false to show "Coming Soon" state
  const registrationClosed = true; // Change to false to re-open registration

  // ── Modal state ──────────────────────────────────────────────────────────────

  const [formModal, setFormModal] = useState<{
    open: boolean;
    url: string;
    title: string;
  }>({ open: false, url: "", title: "" });

  const [infoModal, setInfoModal] = useState<{
    open: boolean;
    event: EventItem | null;
  }>({ open: false, event: null });

  const [posterModal, setPosterModal] = useState<{
    open: boolean;
    src: string;
    title: string;
  }>({ open: false, src: "", title: "" });

  // ── Modal helpers ────────────────────────────────────────────────────────────

  const openFormModal = (url: string, title: string) => {
    const embedUrl = url.includes("embedded=true")
      ? url
      : url.replace(/\?.*$/, "") + "?embedded=true";
    setFormModal({ open: true, url: embedUrl, title });
  };

  const closeFormModal   = () => setFormModal({ open: false, url: "", title: "" });
  const closeInfoModal   = () => setInfoModal({ open: false, event: null });
  const openPosterModal  = (src: string, title: string) => setPosterModal({ open: true, src, title });
  const closePosterModal = () => setPosterModal({ open: false, src: "", title: "" });

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

  // ── Close modals on Escape ───────────────────────────────────────────────────

  useEffect(() => {
    const anyOpen = formModal.open || infoModal.open || posterModal.open;
    if (!anyOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeFormModal();
        closeInfoModal();
        closePosterModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [formModal.open, infoModal.open, posterModal.open]);

  // ── Button helpers ───────────────────────────────────────────────────────────

  const getButtonStyle = (event: EventItem): string => {
    if (registrationClosed) return "bg-red-100 text-red-500 cursor-default";
    if (event.registrationLink && eventsConfirmed) return "bg-blue-600 text-white hover:bg-blue-700";
    if (eventsConfirmed) return "bg-gray-100 text-gray-500 hover:bg-gray-200";
    return "bg-gray-100 text-gray-500 cursor-default";
  };

  const getButtonLabel = (event: EventItem): string => {
    if (registrationClosed)     return "Registration Closed";
    if (!eventsConfirmed)       return "Registration Opens Soon";
    if (event.registrationLink) return "Register Now";
    return "Coming Soon";
  };

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            I-Sphere 1.0
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A Technical and Non-Technical competition to bring out the competitive spirit and
            creativity. Technical events begin at <strong>09:30 AM</strong>, followed by
            Non-Technical events after the technical rounds conclude. Participants can register
            for <strong>both</strong> Technical and Non-Technical events. Event scheduled on{" "}
            <strong>10-04-2026 (Friday)</strong>. Register before <strong>10-04-2026</strong>.
          </p>
        </div>

        {/* Coming-soon banner */}
        {!eventsConfirmed && (
          <div className="text-center mb-12 py-8 px-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-2xl border border-blue-100">
            <Sparkles className="w-10 h-10 text-yellow-500 mx-auto mb-3 animate-pulse" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Exciting Events Coming Soon!</h3>
            <p className="text-gray-600 max-w-lg mx-auto">
              We're planning some amazing events for this semester. Stay tuned for announcements —
              dates and details will be updated here!
            </p>
          </div>
        )}

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Poster thumbnail */}
              <div
                className="relative h-56 cursor-pointer"
                onClick={() => openPosterModal(event.image, event.title)}
              >
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                    View Poster
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase">
                  {event.category}
                </div>
                {!eventsConfirmed && (
                  <div className="absolute top-4 right-4 bg-yellow-400/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase">
                    Coming Soon
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-blue-500 shrink-0" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                    {event.location}
                  </div>
                </div>

                <button
                  onClick={() => !registrationClosed && handleRegister(event)}
                  disabled={!eventsConfirmed || registrationClosed}
                  className={`mt-6 w-full py-3 font-semibold rounded-xl transition-all duration-200 ${getButtonStyle(event)}`}
                >
                  {getButtonLabel(event)}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-blue-600 font-bold hover:underline"
          >
            Get Notified About Events →
          </button>
        </div>
      </div>

      {/* ── Event Info Modal ──────────────────────────────────────────────────── */}
      {infoModal.open && infoModal.event && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={closeInfoModal}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader
              title={`${infoModal.event.title} — Event Information`}
              onClose={closeInfoModal}
            />

            <div className="p-5 sm:p-6 overflow-auto">
              <p className="text-gray-700 mb-4">{infoModal.event.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-sm">
                <InfoTile label="Date"  value={infoModal.event.date} />
                <InfoTile label="Time"  value={infoModal.event.time} />
                <InfoTile label="Venue" value={infoModal.event.location} />
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

      {/* ── Google Form Modal ─────────────────────────────────────────────────── */}
      {formModal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={closeFormModal}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader
              title={`${formModal.title} — Registration`}
              onClose={closeFormModal}
            />
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

      {/* ── Poster Lightbox Modal ─────────────────────────────────────────────── */}
      {posterModal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
          onClick={closePosterModal}
        >
          <button
            onClick={closePosterModal}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-10"
            aria-label="Close poster"
          >
            <X className="w-7 h-7" />
          </button>
          <img
            src={posterModal.src}
            alt={posterModal.title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
