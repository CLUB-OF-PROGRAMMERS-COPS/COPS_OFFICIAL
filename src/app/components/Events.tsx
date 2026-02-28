import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Clock, Sparkles, X } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export const Events = () => {
  // Set this to true and fill in event details when events are confirmed
  const eventsConfirmed = false;
  ///viewform?embedded=true(to embed google form in iframe, add ?embedded=true at the end of form URL)
  const events = [
    {
      title: "AI & Machine Learning Workshop",
      date: "TBA",
      time: "TBA",
      location: "CBIT Campus",
      image: "https://images.unsplash.com/photo-1722573783625-eceb04251036",
      category: "Workshop",
      registrationLink: ""
    },
    {
      title: "Techno Fest 2026",
      date: "TBA",
      time: "TBA",
      location: "CBIT Campus",
      image: "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a",
      category: "Hackathon",
      registrationLink: ""
    },
    {
      title: "Guest Speaker Session",
      date: "TBA",
      time: "TBA",
      location: "CBIT Campus",
      image: "https://images.unsplash.com/photo-1762176263996-a0713a49ee4d",
      category: "Seminar",
      registrationLink: ""
    }
  ];

  const [formModal, setFormModal] = useState<{ open: boolean; url: string; title: string }>({
    open: false,
    url: "",
    title: "",
  });

  const openFormModal = (url: string, title: string) => {
    // Ensure the URL has ?embedded=true for Google Forms iframe
    const embedUrl = url.includes("embedded=true") ? url : url.replace(/\?.*$/, "") + "?embedded=true";
    setFormModal({ open: true, url: embedUrl, title });
  };

  const closeFormModal = () => setFormModal({ open: false, url: "", title: "" });

  // Close on Escape key
  useEffect(() => {
    if (!formModal.open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFormModal();
    };
    document.body.style.overflow = "hidden"; // prevent background scroll
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [formModal.open]);

  const handleRegister = (registrationLink: string, title: string) => {
    if (registrationLink) {
      openFormModal(registrationLink, title);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for our upcoming workshops, seminars, and networking events. No prior experience needed!
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
                  onClick={() => handleRegister(event.registrationLink, event.title)}
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
