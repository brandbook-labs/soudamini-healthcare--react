// src/pages/DeleteAccount.jsx
import React, { useState } from 'react';

// Dedicated, standalone account/data deletion page.
//
// Google Play requires two things for apps that support account creation:
// 1. An in-app path to delete the account and its data (see the app's
//    Settings > Delete Account screen).
// 2. A separate, public web link where a user can request the same
//    deletion without reinstalling the app.
//
// This page is (2). It intentionally does not just repeat the Privacy
// Policy paragraph on retention; it gives the user something they can
// actually act on from a browser. Once this page is live, register its URL
// (soudaminihealthcare.com/delete-account) in Play Console under
// App content > Data safety > Account deletion.
export default function DeleteAccount() {
  const [form, setForm] = useState({ name: '', identifier: '', reason: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // No backend deletion-request endpoint exists yet, so this opens the
    // user's mail client with a prefilled, ticket-ready message to the
    // privacy inbox. Swap this for a real POST to a support/ticketing API
    // once one exists, keeping the same required fields so the request can
    // still be matched to an account.
    const subject = encodeURIComponent('Account Deletion Request');
    const body = encodeURIComponent(
      `Name: ${form.name}\nRegistered phone number or email: ${form.identifier}\nReason (optional): ${form.reason}\n\nI am requesting permanent deletion of my Soudamini Healthcare account and associated data.`
    );
    window.location.href = `mailto:mishrasuvendukumar60@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Delete Your Account & Data
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            You can request permanent deletion of your Soudamini Healthcare account and
            associated personal data in one of two ways. Both are available whether or
            not you still have the app installed.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-2">Option 1: In the app</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Open the app and go to{' '}
                <span className="font-mono text-xs bg-white border border-slate-200 rounded px-2 py-1">
                  Settings &gt; Delete Account
                </span>
                . Confirm your date of birth and your account will be deleted immediately.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-2">Option 2: From this page</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                No app, no problem. Fill out the form below and our Data Protection
                Officer will process your deletion request within 30 days.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-700 outline-none transition-all text-slate-800 font-medium"
              />
            </div>
            <div>
              <label htmlFor="identifier" className="block text-sm font-bold text-slate-700 mb-2">
                Registered phone number or email
              </label>
              <input
                type="text"
                id="identifier"
                name="identifier"
                value={form.identifier}
                onChange={handleChange}
                required
                placeholder="Used to find and verify your account"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-700 outline-none transition-all text-slate-800 font-medium"
              />
            </div>
            <div>
              <label htmlFor="reason" className="block text-sm font-bold text-slate-700 mb-2">
                Reason (optional)
              </label>
              <textarea
                id="reason"
                name="reason"
                rows="3"
                value={form.reason}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-700 outline-none transition-all text-slate-800 font-medium resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors focus:ring-4 focus:ring-red-200 focus:outline-none shadow-md"
            >
              Request Account Deletion
            </button>
          </form>

          <div className="border-t border-slate-200 pt-8 space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              <strong className="text-slate-900">What gets deleted:</strong> your profile,
              contact details, appointment history, saved addresses, and account
              credentials are permanently erased within 30 days of a verified request.
            </p>
            <p>
              <strong className="text-slate-900">What is retained, and why:</strong> core
              clinical records such as prescriptions and lab results may be retained in
              an encrypted, access-restricted archive for the statutory period required
              by applicable medical record-keeping regulations, after which they are
              also deleted. See our{' '}
              <a href="/privacy#retention" className="underline font-semibold text-slate-900">
                Privacy Policy
              </a>{' '}
              for full detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
