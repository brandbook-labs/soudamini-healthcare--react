import React from 'react';
import { Link } from 'react-router-dom';

// Rewritten to remove unverified claims: the previous version stated a
// "NABL-accredited" lab, specific patient/test volume statistics, and a
// "Board of Directors" with named doctors and medical credentials that
// could not be confirmed. Google Play's Health Content policy treats
// misleading claims and unverifiable credentials in a health app as a
// policy violation, and inaccurate claims are a real regulatory and legal
// risk in their own right, independent of app store review. This version
// only states what the app and service are actually built to do. If you
// have real, verifiable facts, figures, accreditations, or team bios,
// add them back in with the supporting documentation you'd show a
// regulator, since that's a claim you may be asked to substantiate.
export default function About() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 antialiased">

      <section className="bg-slate-950 pt-32 pb-24 border-b-8 border-emerald-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none border border-slate-700 bg-slate-900 text-slate-300 font-mono text-xs uppercase tracking-[0.2em] mb-10">
            About Soudamini Healthcare
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-8 leading-[1.1]">
            Bringing your clinic into your pocket.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Soudamini Healthcare connects patients with doctor consultations, lab
            tests, medicine ordering, and their own medical records, all from one
            app, so managing care takes fewer steps.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-12 text-center">
            What the app does today
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Doctor Consultations</h3>
              <p className="text-slate-600 leading-relaxed">Browse specialists, view their profiles, and book appointment slots directly in the app.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Lab Tests</h3>
              <p className="text-slate-600 leading-relaxed">Schedule diagnostic tests, with home sample collection where available.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Medicine Ordering</h3>
              <p className="text-slate-600 leading-relaxed">Order prescribed medicines through the app's pharmacy integration.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Your Records, In One Place</h3>
              <p className="text-slate-600 leading-relaxed">Appointment history, prescriptions, and past consultation notes stay organized and accessible.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
            Not a substitute for professional medical care
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Soudamini Healthcare is a technology platform that connects you with
            independent, registered medical practitioners. It does not itself
            diagnose, treat, cure, or prevent any medical condition, and it is not
            designed for medical emergencies. If you are experiencing an emergency,
            contact your local emergency services immediately.
          </p>
          <p className="text-slate-600 leading-relaxed">
            For the full terms and how we handle your data, see our{' '}
            <Link to="/terms" className="underline font-semibold text-slate-900">Terms of Service</Link>{' '}
            and{' '}
            <Link to="/privacy" className="underline font-semibold text-slate-900">Privacy Policy</Link>.
          </p>
        </div>
      </section>

    </div>
  );
}
