import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 antialiased selection:bg-emerald-500/30 selection:text-emerald-900 overflow-x-hidden">
      
      {/* =========================================
          SECTION 1: ARCHITECTURAL HERO
          ========================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 pt-32 pb-24 border-b-8 border-emerald-600 overflow-hidden">
        {/* Precision Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] z-0" 
             style={{ backgroundImage: 'linear-gradient(slate 1px, transparent 1px), linear-gradient(90deg, slate 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        {/* Subtle Surgical Lighting Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none border border-slate-700 bg-slate-900 text-slate-300 font-mono text-xs uppercase tracking-[0.2em] mb-10 shadow-2xl">
            <span className="w-2 h-2 bg-emerald-500 animate-pulse"></span>
            Advanced Clinical Ecosystem
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter mb-8 max-w-5xl text-balance leading-[1.05]">
            Uncompromising precision. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              Unrivaled scale.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium max-w-3xl mx-auto mb-12">
            Soudamini Healthcare is not just a clinic. We are a high-throughput medical infrastructure encompassing advanced diagnostics, automated pathology, a 24/7 hyper-stocked pharmacy, and world-class surgical care.
          </p>

          {/* Scale Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-12 border-t border-slate-800 w-full max-w-4xl">
            {[
              { label: 'Annual Patients', value: '120k+' },
              { label: 'Lab Tests / Day', value: '5,000+' },
              { label: 'Pharmacy SKUs', value: '15,000+' },
              { label: 'Clinical Staff', value: '250+' }
            ].map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">{metric.value}</div>
                <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: THE THREE PILLARS (CLINIC, LAB, PHARMA)
          ========================================= */}
      <section className="py-32 bg-slate-900 text-white relative z-20 -mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">The Infrastructure</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              We operate an integrated triad of healthcare services. By housing the clinic, the pathology lab, and the pharmacy in one unified digital and physical ecosystem, we eliminate diagnostic delays and accelerate healing.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Pillar 1: Clinic */}
            <div className="bg-slate-950 border border-slate-800 p-10 group hover:border-emerald-500/50 transition-colors duration-500 flex flex-col justify-between h-[450px]">
              <div>
                <div className="w-14 h-14 bg-slate-900 border border-slate-700 flex items-center justify-center mb-8 text-white group-hover:bg-emerald-900/30 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">The PolyClinic & ER</h3>
                <p className="text-slate-400 leading-relaxed">
                  A high-capacity trauma center and multi-specialty OPD. Equipped with Level-1 triage protocols, advanced imaging, and seamless digital EHR integration so our doctors have your history the second you arrive.
                </p>
              </div>
              <div className="text-sm font-mono text-slate-500 uppercase tracking-widest border-t border-slate-800 pt-6">01 // Medical Care</div>
            </div>

            {/* Pillar 2: Lab */}
            <div className="bg-slate-950 border border-slate-800 p-10 group hover:border-emerald-500/50 transition-colors duration-500 flex flex-col justify-between h-[450px]">
              <div>
                <div className="w-14 h-14 bg-slate-900 border border-slate-700 flex items-center justify-center mb-8 text-white group-hover:bg-emerald-900/30 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Automated Pathology</h3>
                <p className="text-slate-400 leading-relaxed">
                  Our NABL-accredited, robotic-assisted laboratory processes over 5,000 samples daily. Test results bypass human data-entry, flowing directly from the auto-analyzers to your mobile app vault with zero latency.
                </p>
              </div>
              <div className="text-sm font-mono text-slate-500 uppercase tracking-widest border-t border-slate-800 pt-6">02 // Diagnostics</div>
            </div>

            {/* Pillar 3: Pharmacy */}
            <div className="bg-slate-950 border border-slate-800 p-10 group hover:border-emerald-500/50 transition-colors duration-500 flex flex-col justify-between h-[450px]">
              <div>
                <div className="w-14 h-14 bg-slate-900 border border-slate-700 flex items-center justify-center mb-8 text-white group-hover:bg-emerald-900/30 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">24/7 Mega-Pharmacy</h3>
                <p className="text-slate-400 leading-relaxed">
                  Stocking over 15,000 specialized SKUs including rare oncology and cold-chain biologicals. Prescriptions from our clinic are pre-packed by the time you reach the counter, or delivered to your door via the app.
                </p>
              </div>
              <div className="text-sm font-mono text-slate-500 uppercase tracking-widest border-t border-slate-800 pt-6">03 // Dispensary</div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: THE BOARD OF DIRECTORS
          ========================================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-slate-200 pb-8">
            <div className="max-w-2xl">
              <span className="text-emerald-600 font-mono text-xs uppercase tracking-widest mb-4 block">Leadership</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">The Governing Board</h2>
            </div>
            <p className="text-lg text-slate-500 max-w-md md:text-right mt-6 md:mt-0 font-medium">
              A coalition of elite medical scientists, pathologists, and technologists steering the future of integrated healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-y-16 gap-x-12">
            
            {/* Founder 1 */}
            <div className="group">
              <div className="aspect-[4/5] bg-slate-200 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-800 mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono text-xs uppercase tracking-widest bg-slate-100">Portrait Asset</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Dr. Siddhartha Mahapatra</h3>
              <p className="text-emerald-600 font-bold text-sm uppercase tracking-wider mb-4">Chief Medical Director</p>
              <p className="text-slate-600 leading-relaxed text-sm">
                MS, MCh (Cardiothoracic). With over 10,000 successful complex surgeries, Dr. Mahapatra enforces the rigorous clinical guidelines and uncompromising surgical standards that define our polyclinic operations.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="group">
              <div className="aspect-[4/5] bg-slate-200 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-800 mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono text-xs uppercase tracking-widest bg-slate-100">Portrait Asset</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Dr. Anjali Ranganathan</h3>
              <p className="text-emerald-600 font-bold text-sm uppercase tracking-wider mb-4">Head of Diagnostics & Pathology</p>
              <p className="text-slate-600 leading-relaxed text-sm">
                MD (Pathology), PhD. A pioneer in automated diagnostic systems, Dr. Ranganathan designed our robotic lab infrastructure, reducing human error to 0.001% and achieving NABL accreditation in record time.
              </p>
            </div>

            {/* Founder 3 */}
            <div className="group">
              <div className="aspect-[4/5] bg-slate-200 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-800 mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono text-xs uppercase tracking-widest bg-slate-100">Portrait Asset</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Jagannath Sahoo</h3>
              <p className="text-emerald-600 font-bold text-sm uppercase tracking-wider mb-4">Head of Digital Experience & UX</p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Senior UX Strategist. Jagannath architects the bridge between the physical hospital and the patient. He leads the design of our proprietary EHR systems and the mobile application, ensuring complex medical data is instantly accessible.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: HEADS OF DEPARTMENT (LIST)
          ========================================= */}
      <section className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Clinical Heads of Department</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { name: "Dr. Vikramaditya Sen", role: "Head of Internal Medicine & ICU", creds: "MD (Internal Med), FICP" },
              { name: "Dr. Nandita Krishnan", role: "Lead Pharmacologist", creds: "Pharm.D, PhD (Clinical Pharmacology)" },
              { name: "Dr. Rajeshwar Rao", role: "Chief of Orthopedics & Trauma", creds: "MS (Ortho), MRCS (UK)" },
              { name: "Dr. Meenakshi Iyer", role: "Director of Pediatrics & Neonatology", creds: "MD (Pediatrics), DM (Neonatology)" },
              { name: "Dr. Tariq Abdullah", role: "Head of Radiology & Imaging", creds: "MD (Radiodiagnosis)" },
              { name: "Dr. Smriti Agarwal", role: "Chief Gynecologist & Obstetrician", creds: "MS (OBG), FICOG" },
            ].map((doc, idx) => (
              <div key={idx} className="flex justify-between items-center p-6 bg-white border border-slate-200 hover:border-emerald-500 transition-colors duration-300">
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{doc.name}</h4>
                  <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mt-1">{doc.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono text-slate-500">{doc.creds}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 5: THE DIGITAL PROMISE (APP FOCUS)
          ========================================= */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzQxNTUiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">The Ecosystem, Pocket-Sized.</h2>
          <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed">
            The power of our entire clinic, pathology lab, and pharmacy network is synthesized into the Soudamini Healthcare mobile application. Total medical control, uncompromising data security.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-emerald-600 text-white px-10 py-5 font-bold text-lg hover:bg-emerald-500 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.3)] border border-emerald-500">
              Enter The Clinic
            </Link>
            <a href="#download" className="bg-slate-900 text-white border border-slate-700 px-10 py-5 font-bold text-lg hover:bg-slate-800 transition-colors">
              Download Architecture
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}