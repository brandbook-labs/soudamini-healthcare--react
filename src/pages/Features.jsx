import React from 'react';

export default function Features() {
  const features = [
    {
      title: "Instant Appointment Booking",
      desc: "View live schedules of our doctors and secure your slot with a single tap. No more waiting on hold.",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
      title: "Digital Health Records",
      desc: "Access your lab results, prescriptions, and medical history securely, anytime, anywhere.",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      title: "Teleconsultation Ready",
      desc: "Connect with Soudamini Healthcare specialists via high-quality secure video calls directly in the app.",
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Everything you need for your health.
        </h1>
        <p className="text-lg text-slate-600">
          We designed the Soudamini Healthcare app to make managing your medical needs effortless, secure, and fully accessible.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}