import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white font-sans text-slate-900 antialiased selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      
      {/* =========================================
          SECTION 1: THE IMMERSIVE HERO
          ========================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 pt-20 pb-32">
        {/* Ethereal Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]"></div>
          <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-100/40 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Typography */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm mb-8">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide text-slate-700 uppercase">
                  A New Era of Healthcare
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-8 text-balance leading-[1.05]">
                Healing hands. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Digital precision.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
                Soudamini Healthcare merges decades of clinical excellence with next-generation digital convenience. Expert doctors in the clinic, full control in your pocket.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <Link 
                  to="/contact"
                  className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-800 hover:scale-[1.02] transition-all duration-300 focus-visible:ring-4 focus-visible:ring-slate-300 shadow-[0_10px_40px_rgba(15,23,42,0.2)]"
                >
                  Book Clinic Visit
                </Link>
                <a 
                  href="#app-experience"
                  className="w-full sm:w-auto bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] transition-all duration-300 focus-visible:ring-4 focus-visible:ring-slate-100 shadow-sm flex items-center justify-center gap-2"
                >
                  Explore the App
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </a>
              </div>
            </div>

            {/* Right Column: Abstract Architectural/Medical Composition */}
            <div className="lg:col-span-5 relative hidden md:block mt-12 lg:mt-0">
              {/* Main Image Placeholder */}
              <div className="relative aspect-[4/5] w-full rounded-[2.5rem] bg-slate-200 overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 ease-out z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/40 to-transparent mix-blend-multiply z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 z-0">
                  <span className="text-sm font-bold uppercase tracking-widest">Clinic Architecture Image</span>
                </div>
              </div>
              
              {/* Glassmorphism Floating Card 1 */}
              <div className="absolute -left-12 bottom-12 z-20 bg-white/70 backdrop-blur-xl border border-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform -rotate-3 hover:rotate-0 transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-slate-900">25k+</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lives Touched</p>
                  </div>
                </div>
              </div>

              {/* Glassmorphism Floating Card 2 */}
              <div className="absolute -right-8 top-12 z-20 bg-white/70 backdrop-blur-xl border border-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform rotate-6 hover:rotate-0 transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-400">Dr.</div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-slate-900">50+ Specialists</p>
                    <p className="text-xs font-semibold text-blue-600">On-Call 24/7</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: EDITORIAL PHILOSOPHY
          ========================================= */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <svg className="w-12 h-12 text-blue-600 mx-auto mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.714 4.108-7.986 9.983-8.118v3.663c-3.13 0-4.664 1.341-4.99 4.384h4.99v7.462h-9.983zm-14.017 0v-7.391c0-5.714 4.108-7.986 9.983-8.118v3.663c-3.13 0-4.664 1.341-4.99 4.384h4.99v7.462h-9.983z"/></svg>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-8 text-balance">
            "Technology should never replace the human touch. It should remove the friction, so our doctors can focus entirely on you."
          </h2>
          <p className="text-lg text-slate-500 font-semibold tracking-wide uppercase">
            — The Soudamini Care Philosophy
          </p>
        </div>
      </section>

      {/* =========================================
          SECTION 3: THE BENTO BOX CLINIC
          ========================================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Facilities</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">World-Class Departments</h2>
            </div>
            <Link to="/features" className="hidden md:inline-flex items-center gap-2 text-slate-600 font-semibold hover:text-blue-600 transition-colors">
              View all services <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Bento Grid Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
            
            {/* Bento Item 1 (Large) */}
            <div className="md:col-span-2 lg:col-span-2 row-span-1 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between overflow-hidden relative">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out z-0"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">General Medicine</h3>
                <p className="text-slate-600 font-medium">Comprehensive, holistic diagnosis and preventative care for adult diseases.</p>
              </div>
            </div>

            {/* Bento Item 2 */}
            <div className="md:col-span-1 lg:col-span-1 row-span-1 bg-slate-900 text-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
              <div className="w-12 h-12 bg-slate-800 text-blue-400 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 ER</h3>
                <p className="text-slate-400 text-sm font-medium">Round-the-clock emergency trauma response.</p>
              </div>
            </div>

            {/* Bento Item 3 */}
            <div className="md:col-span-1 lg:col-span-1 row-span-1 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Orthopedics</h3>
                <p className="text-slate-600 text-sm font-medium">Advanced bone, joint, and spine treatments.</p>
              </div>
            </div>

            {/* Bento Item 4 (Wide) */}
            <div className="md:col-span-2 lg:col-span-2 row-span-1 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
              <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <h3 className="text-2xl font-bold mb-2">Advanced Pathology Lab</h3>
                <p className="text-blue-100 font-medium max-w-sm">In-house, high-precision diagnostics ensuring your doctors have accurate data in minutes, not days.</p>
                <Link to="/features" className="inline-flex items-center gap-2 text-white font-bold mt-4 hover:gap-3 transition-all">
                  Learn more <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Bento Item 5 */}
            <div className="md:col-span-1 lg:col-span-2 row-span-1 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
              <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Pediatrics</h3>
                <p className="text-slate-600 text-sm font-medium">Expert, gentle care for your little ones.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: THE DARK MODE TECH BRIDGE
          ========================================= */}
      <section id="app-experience" className="py-32 bg-slate-950 text-white overflow-hidden relative">
        {/* Deep ambient glows */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] transform -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[150px] transform -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
            
            {/* Left: Glass Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center mb-20 lg:mb-0 relative perspective-[1000px]">
              
              {/* Premium Device Frame */}
              <div className="w-[320px] h-[650px] bg-slate-900 rounded-[3.5rem] p-4 shadow-[0_0_80px_rgba(37,99,235,0.2)] border border-slate-800 relative z-10 transform lg:rotate-y-12 lg:rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-20"></div>
                
                {/* Screen Area */}
                <div className="bg-slate-50 w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col relative text-slate-900">
                  
                  <div className="bg-gradient-to-br from-blue-700 to-indigo-800 px-6 pt-14 pb-8 text-white rounded-b-[2rem] shadow-md relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                    <h3 className="text-xl font-bold mb-1 relative z-10">Hi, Jagannath</h3>
                    <p className="text-blue-100 text-sm font-medium relative z-10">Your health dashboard</p>
                  </div>
                  
                  <div className="p-5 -mt-4 flex-1 flex flex-col gap-4 relative z-20">
                    
                    <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 backdrop-blur-xl">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Next Appointment</span>
                        <div className="animate-pulse w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-xs font-bold text-slate-500">Dr</div>
                        <div>
                          <div className="font-bold text-slate-900">Dr. Sharma</div>
                          <div className="text-xs text-slate-500 font-medium">Cardiology • Room 302</div>
                        </div>
                      </div>
                      <div className="mt-4 bg-blue-50 text-blue-700 text-xs font-bold py-2 px-3 rounded-lg text-center w-full">
                        Today, 10:30 AM
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-2xl shadow-lg flex flex-col justify-between h-28">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                        <span className="text-sm font-bold text-white">Lab Reports</span>
                      </div>
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-28">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        <span className="text-sm font-bold text-slate-900">Video Consult</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Right: Copy & CTAs */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-balance">
                Your clinic. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Now in your pocket.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 font-medium max-w-2xl">
                We built the Soudamini Healthcare App to eliminate friction. Don't wait on hold. Book visits, access high-res lab reports, and launch secure video follow-ups instantly.
              </p>
              
              <div className="space-y-8 mb-12">
                {[
                  { title: 'Zero-Wait Booking', desc: 'See live doctor schedules and lock in your slot immediately.' },
                  { title: 'Encrypted Health Vault', desc: 'Your prescriptions and scans, protected by military-grade AES-256 encryption.' },
                  { title: 'Seamless Telemedicine', desc: 'Follow-up from your couch. High-definition, private, and deeply integrated with your physical records.' }
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-slate-400 font-medium">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-3 bg-white text-slate-900 px-6 py-4 rounded-2xl hover:bg-slate-100 hover:scale-105 transition-all duration-300">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M16.365 21.46c-1.377.96-2.618.995-4.015.02-1.348-.925-2.228-.96-3.766-.02-1.63.996-3.036.85-4.22-.397-4.14-4.32-3.13-11.233 1.4-12.72 1.49-.49 2.766.16 3.73.59 1.115.49 1.77.49 2.805-.01 1.25-.615 2.65-.89 4.01-.39 1.57.57 2.72 1.63 3.32 2.92-2.73 1.58-2.21 5.37.7 6.64-1.02 2.51-2.43 4.45-3.965 3.36zM15.175 6.09c-.83 1.04-2.19 1.66-3.4 1.51-.25-1.37.45-2.67 1.24-3.57.86-.98 2.29-1.66 3.44-1.48.24 1.42-.4 2.58-1.28 3.54z"/></svg>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Download on</div>
                    <div className="text-base font-extrabold leading-none">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-slate-800 text-white border border-slate-700 px-6 py-4 rounded-2xl hover:bg-slate-700 hover:scale-105 transition-all duration-300">
                  <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186c-.165-.138-.276-.35-.276-.612V2.426c0-.262.111-.474.275-.612zM14.773 11.02l4.896-2.775c1.033-.585 1.033-1.536 0-2.122l-1.92-1.088-3.957 3.957 1.981 1.981zM4.42 1.196l9.37 5.312-2.028 2.028L4.42 1.196zm0 21.608l7.342-7.342 2.028 2.028-9.37 5.314z"/></svg>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Get it on</div>
                    <div className="text-base font-extrabold leading-none">Google Play</div>
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: ELEGANT TESTIMONIALS
          ========================================= */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">The ultimate validation.</h2>
            <p className="text-xl text-slate-600 font-medium">Hear from patients experiencing the new standard of care.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The physical care was phenomenal, and being able to do my minor follow-up consultations via the app saved me so much travel time.",
                author: "Rahul S.",
                role: "Post-op Orthopedics"
              },
              {
                text: "Booking pediatric appointments used to be a hassle. Now, I tap the app, walk into the clinic at my slot, and the doctor already has my child's history. Brilliant.",
                author: "Priya K.",
                role: "Mother of two"
              },
              {
                text: "The doctors here are exceptional. What blew me away was how I could walk out of the clinic and immediately see my prescription and follow-up plan on my phone.",
                author: "Ananya M.",
                role: "Patient since 2024"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between relative">
                <svg className="w-10 h-10 text-blue-100 absolute top-8 left-8 -z-0" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/></svg>
                <div className="relative z-10">
                  <p className="text-lg text-slate-700 leading-relaxed mb-8 font-medium">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{review.author}</p>
                    <p className="text-sm font-semibold text-slate-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: FINAL IMMERSIVE CTA
          ========================================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight text-balance">
            Prioritize your health. <br/> Start today.
          </h2>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto font-medium">
            Join thousands of patients experiencing the perfect blend of compassionate clinical care and digital convenience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/contact" className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-xl">
              Schedule a Clinic Visit
            </Link>
            <a href="#app-experience" className="bg-slate-800 text-white border border-slate-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-xl">
              Download the App
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}