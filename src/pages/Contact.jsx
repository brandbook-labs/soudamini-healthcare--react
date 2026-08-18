import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    issueType: 'Login / Account Issue',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // This form previously called e.preventDefault() and did nothing else,
    // so submitted messages went nowhere. Until a real support/ticketing
    // backend exists, open the user's mail client with a prefilled message
    // so the "Send Message" button actually does something. Swap this for a
    // fetch() call to your support API once one exists.
    const subject = encodeURIComponent(`[App Support] ${form.issueType}`);
    const body = encodeURIComponent(
      `Reply-to email: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:support@soudaminihealthcare.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-center">App Support & Contact</h1>
      <p className="text-lg text-slate-600 text-center mb-12">Having trouble with the mobile app or need to reach the hospital directly? We're here to help.</p>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8 text-sm text-slate-600 leading-relaxed">
        {/*
          ⚠️ FILL IN BEFORE PUBLISHING: same as the Privacy Policy, a
          registered postal address belongs here. A support page with only a
          form and no verifiable address or phone number looks incomplete to
          reviewers checking the legitimacy of a health app's developer.
        */}
        <p><strong className="text-slate-900">Soudamini Healthcare Private Limited</strong></p>
        <p>[Add your registered business address here]</p>
        <p>support@soudaminihealthcare.com &middot; +91 (800) 123-4567</p>
      </div>

      <form className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="issueType" className="block text-sm font-bold text-slate-700 mb-2">What do you need help with?</label>
          <select
            id="issueType"
            name="issueType"
            value={form.issueType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-700 outline-none transition-all bg-white font-medium text-slate-800"
          >
            <option>Login / Account Issue</option>
            <option>App Bug Report</option>
            <option>General Hospital Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-700 outline-none transition-all text-slate-800 font-medium"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Describe the issue</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Please provide details..."
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-700 outline-none transition-all text-slate-800 font-medium resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors focus:ring-4 focus:ring-blue-300 focus:outline-none shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}