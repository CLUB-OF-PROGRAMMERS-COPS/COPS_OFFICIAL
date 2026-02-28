import React, { useState } from "react";
import { Mail, MessageSquare, Send, Linkedin } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    usn: '',
    year: '1 Year',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Check if using placeholder URL
      const formId = import.meta.env.VITE_FORMSPREE_FORM_ID || 'YOUR_FORM_ID';
      
      // Extract form ID if full URL was provided
      const cleanFormId = formId.includes('formspree.io/f/') 
        ? formId.split('formspree.io/f/')[1] 
        : formId;
        
      const formUrl = `https://formspree.io/f/${cleanFormId}`;
      
      if (cleanFormId === 'YOUR_FORM_ID') {
        // Show demo success message for development
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          usn: '',
          year: '1 Year',
          reason: ''
        });
        return;
      }

      // Using Formspree - replace with your actual endpoint
      // 1. Go to https://formspree.io/
      // 2. Create a free account
      // 3. Create a new form and copy the endpoint URL
      // 4. Replace 'YOUR_FORM_ID' with your actual form ID
      const response = await fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          usn: formData.usn,
          year: formData.year,
          reason: formData.reason,
          _subject: 'New COPS Membership Application',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          usn: '',
          year: '1 Year',
          reason: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to start your journey?</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join the most active tech community on campus. Whether you're a beginner or an expert, there's a place for you here.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email us</h4>
                  <p className="text-blue-100">clubofprogrammerscops@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Follow us on Linkedin</h4>
                  <p className="text-blue-100">linkedin.com/company/club-of-programmers-cops</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply to Join COPS</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Jane" 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe" 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Enter Your USN</label>
                <input 
                  type="text" 
                  name="usn"
                  value={formData.usn}
                  onChange={handleInputChange}
                  placeholder="1CK00CS000" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Year of Study</label>
                <select 
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                >
                  <option>1 Year</option>
                  <option>2 Year</option>
                  <option>3 Year</option>
                  <option>4 Year</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Why do you want to join?</label>
                <textarea 
                  rows={3} 
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="Tell us about your interests..." 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Application...
                  </>
                ) : (
                  <>
                    Send Application
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-800 font-medium">✅ Application submitted successfully!</p>
                  <p className="text-green-600 text-sm mt-1">We'll review your application and get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-800 font-medium">❌ Failed to submit application</p>
                  <p className="text-red-600 text-sm mt-1">Please try again or contact us directly at clubofprogrammerscops@gmail.com</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
