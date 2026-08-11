import React, { useState, useEffect } from 'react';

export default function Privacy() {
  const [activeSection, setActiveSection] = useState('intro');
  const [currentDate, setCurrentDate] = useState('');

  // Set today's date dynamically on component mount
  useEffect(() => {
    const today = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date());
    setCurrentDate(today);
  }, []);

  // Highlight the active section in the sidebar as the user scrolls
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const toc = [
    { id: 'intro', title: '1. Introduction & Scope' },
    { id: 'data-collected', title: '2. Classification of Data' },
    { id: 'use-cases', title: '3. Specific Use Cases' },
    { id: 'data-sharing', title: '4. Zero-Tolerance Data Sharing' },
    { id: 'retention', title: '5. Retention & Right to be Forgotten' },
    { id: 'security', title: '6. Military-Grade Security' },
    { id: 'children', title: '7. Children\'s Privacy' },
    { id: 'breach', title: '8. Breach Notification' },
    { id: 'modifications', title: '9. Policy Modifications' },
    { id: 'contact', title: '10. Grievance & Contact' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* Hero Header with Massive Padding */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm mb-8 border border-blue-100 uppercase tracking-wider">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            Legal & Compliance
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Comprehensive Privacy Policy
          </h1>
          <p className="text-xl text-slate-500 font-medium">
            Effective Date: <span className="text-blue-700 font-bold">{currentDate}</span>
          </p>
        </div>
      </div>

      {/* Main Layout Container - Using Flex for bulletproof responsiveness */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 xl:gap-32">
          
          {/* Left Column: Table of Contents */}
          <aside className="w-full lg:w-1/3 xl:w-1/4 flex-shrink-0">
            <div className="lg:sticky lg:top-32 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">
                Table of Contents
              </h3>
              <nav className="flex flex-col space-y-2" aria-label="Table of contents">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                      activeSection === item.id 
                        ? 'bg-blue-700 text-white shadow-md' 
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Column: Main Content Area */}
          <main className="w-full lg:w-2/3 xl:w-3/4 bg-white p-6 sm:p-10 lg:p-16 rounded-3xl border border-slate-200 shadow-sm">
            
            {/* SECTION 1 */}
            <section id="intro" className="scroll-mt-40 pb-16 mb-16 border-b-2 border-slate-100">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">1. Introduction & Scope</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Soudamini Healthcare ("we", "our", "us", or the "Company") is firmly committed to protecting the privacy, security, and confidentiality of your personal and protected health information. This Comprehensive Privacy Policy ("Policy") governs your access to and use of the Soudamini Healthcare mobile applications (available on Apple App Store and Google Play Store), our web portals, teleconsultation platforms, electronic health records (EHR) systems, and related digital services (collectively, the "Platform").
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
                This Policy is designed to comply with applicable data protection laws, including but not limited to the Digital Personal Data Protection Act (DPDPA) of India, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the stringent developer guidelines enforced by Apple Inc. and Google LLC for health and medical applications.
              </p>
              <div className="bg-slate-900 p-8 md:p-10 rounded-2xl shadow-lg border-l-8 border-blue-600">
                <p className="text-lg text-white font-semibold leading-relaxed">
                  BY CREATING AN ACCOUNT, DOWNLOADING THE APP, OR UTILIZING OUR SERVICES, YOU EXPLICITLY CONSENT TO THE COLLECTION, STORAGE, PROCESSING, AND DISCLOSURE OF YOUR INFORMATION AS DESCRIBED IN THIS POLICY. IF YOU DO NOT AGREE WITH ANY PART OF THIS POLICY, YOU MUST NOT USE THE PLATFORM.
                </p>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="data-collected" className="scroll-mt-40 pb-16 mb-16 border-b-2 border-slate-100">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">2. Exhaustive Classification of Data Collected</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
                To provide comprehensive healthcare services, we collect various categories of data. We adhere to the principle of data minimization, collecting only what is strictly necessary.
              </p>
              
              <div className="space-y-16">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg shadow-sm">A</span>
                    Personal Identification Information (PII)
                  </h3>
                  <ul className="list-disc pl-8 space-y-4 text-lg md:text-xl text-slate-600 leading-relaxed marker:text-blue-600">
                    <li><strong className="text-slate-900">Identity Data:</strong> Full legal name, date of birth, age, gender, marital status, and government-issued identification numbers strictly when required for medical billing or insurance claims.</li>
                    <li><strong className="text-slate-900">Contact Data:</strong> Primary and secondary email addresses, mobile phone numbers, residential address, billing address, and emergency contact details.</li>
                    <li><strong className="text-slate-900">Account Data:</strong> Encrypted passwords, PINs, biometric authentication tokens (handled securely via device OS), and security questions.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg shadow-sm">B</span>
                    Protected Health Information (PHI) & Medical Data
                  </h3>
                  <ul className="list-disc pl-8 space-y-4 text-lg md:text-xl text-slate-600 leading-relaxed marker:text-blue-600">
                    <li><strong className="text-slate-900">Clinical Records:</strong> Past medical history, surgical history, family medical history, known allergies, chronic conditions, and blood group.</li>
                    <li><strong className="text-slate-900">Consultation Data:</strong> Audio/video recordings of teleconsultations (subject to explicit in-app consent), physician observation notes, digital prescriptions, and recommended treatment plans.</li>
                    <li><strong className="text-slate-900">Diagnostic Data:</strong> Laboratory test results, pathology reports, radiology images, and biometric readings.</li>
                    <li><strong className="text-slate-900">Device-Synced Health Data:</strong> With your explicit, revocable permission, we may read/write data to Apple HealthKit or Google Fit strictly to enhance your clinical assessment.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg shadow-sm">C</span>
                    Technical, Device, & Telemetry Data
                  </h3>
                  <ul className="list-disc pl-8 space-y-4 text-lg md:text-xl text-slate-600 leading-relaxed marker:text-blue-600">
                    <li><strong className="text-slate-900">Device Information:</strong> Hardware model, operating system version, unique device identifiers, and mobile network information.</li>
                    <li><strong className="text-slate-900">Log Data:</strong> IP addresses, API call logs, crash reports, app launch times, and feature engagement metrics to debug fatal errors.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="use-cases" className="scroll-mt-40 pb-16 mb-16 border-b-2 border-slate-100">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">3. Specific Use Cases of Your Information</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">We process your data for the following meticulously defined purposes:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Core Medical Service Delivery</h4>
                  <p className="text-lg text-slate-600 leading-relaxed">To schedule appointments, facilitate secure HD video teleconsultations, route your medical history, and generate electronic prescriptions.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Legal & Regulatory Compliance</h4>
                  <p className="text-lg text-slate-600 leading-relaxed">To fulfill obligations under national health directives, respond to valid subpoenas, and maintain auditable medical records.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">HealthKit & Google Fit</h4>
                  <p className="text-lg text-slate-600 leading-relaxed">We use this data solely to display a unified health dashboard for your physician. We strictly prohibit its use for marketing.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Operational Communications</h4>
                  <p className="text-lg text-slate-600 leading-relaxed">To send transactional SMS, push notifications, and emails regarding appointment confirmations and prescription refills.</p>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="data-sharing" className="scroll-mt-40 pb-16 mb-16 border-b-2 border-slate-100">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">4. Zero-Tolerance Policy on Data Selling & Third-Party Sharing</h2>
              <p className="text-xl text-slate-900 font-bold leading-relaxed mb-8">
                Soudamini Healthcare has a strict zero-tolerance policy regarding the sale, rental, or brokering of your personal or medical data to advertisers, data brokers, or third-party marketers. Your health data is not a commodity.
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">We only disclose your information to the following authorized entities under strict confidentiality agreements:</p>
              
              <ul className="list-disc pl-8 space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed marker:text-slate-400">
                <li><strong className="text-slate-900">Healthcare Professionals:</strong> Doctors, consulting specialists, nurses, and lab technicians actively involved in your care continuum.</li>
                <li><strong className="text-slate-900">Infrastructure Partners:</strong> Cloud hosting providers (e.g., AWS Asia Pacific), secure video infrastructure providers, and SMS gateways who act purely as data processors.</li>
                <li><strong className="text-slate-900">Third-Party Pharmacies & Labs:</strong> Only when you explicitly place an order for medicine delivery or home lab sample collection.</li>
              </ul>
            </section>

            {/* SECTION 5 */}
            <section id="retention" className="scroll-mt-40 pb-16 mb-16 border-b-2 border-slate-100">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">5. Data Retention and Account Deletion (Right to be Forgotten)</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">We comply fully with Apple App Store and Google Play Store mandates regarding user-initiated data deletion.</p>
              
              <div className="bg-blue-50 border-l-8 border-blue-600 p-8 md:p-10 rounded-r-3xl space-y-6 shadow-sm">
                <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
                  <strong>In-App Deletion Protocol:</strong> You can request complete account deletion directly within the mobile app by navigating to <span className="bg-white px-3 py-1.5 rounded-lg shadow-sm font-mono text-base border border-blue-200 mx-2">Settings &gt; Privacy &gt; Delete My Account</span>.
                </p>
                <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
                  <strong>Execution Timeline:</strong> Upon initiating deletion, your account access will be revoked immediately. Non-medical PII, device identifiers, and marketing profiles will be permanently erased within 30 days.
                </p>
                <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
                  <strong>Medical Record Exception:</strong> Under prevailing medical council regulations, we are legally mandated to retain core clinical records (prescriptions, discharge summaries, lab results) for a statutory minimum period. These records will be archived in a deeply encrypted, inaccessible state until the statutory period expires.
                </p>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="security" className="scroll-mt-40 pb-16 mb-16 border-b-2 border-slate-100">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">6. Military-Grade Data Security Framework</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">We employ defense-in-depth security architecture to protect your data from unauthorized access, alteration, disclosure, or destruction:</p>
              
              <ul className="list-disc pl-8 space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed marker:text-slate-400">
                <li><strong className="text-slate-900">Encryption in Transit:</strong> All data transmitted between your device and our servers is secured using TLS 1.3 encryption protocols.</li>
                <li><strong className="text-slate-900">Encryption at Rest:</strong> All PHI and PII stored in our databases are encrypted using AES-256 bit encryption. Cryptographic keys are rotated automatically.</li>
                <li><strong className="text-slate-900">Access Control:</strong> We enforce strict Role-Based Access Control (RBAC). A doctor can only access the records of a patient currently under their care.</li>
              </ul>
            </section>

            {/* SECTION 7 */}
            <section id="children" className="scroll-mt-40 pb-16 mb-16 border-b-2 border-slate-100">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">7. Children's Privacy (Pediatric Care)</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                The Platform is not intended to be used independently by minors (individuals under the age of 18). However, parents or legal guardians may add pediatric profiles under their primary account to manage their children's healthcare. By doing so, the guardian provides explicit, verifiable consent for the collection and processing of the minor's PHI. If we discover that a minor has independently created an account without parental consent, we will immediately terminate the account and purge the associated data.
              </p>
            </section>

            {/* SECTION 8 */}
            <section id="breach" className="scroll-mt-40 pb-16 mb-16 border-b-2 border-slate-100">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">8. Incident Response and Breach Notification</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                In the highly unlikely event of a data breach compromising unencrypted personal or health information, Soudamini Healthcare will execute its Incident Response Plan. We will notify the Computer Emergency Response Team (CERT-In) within the mandated 6-hour window and inform affected users via email and in-app push notifications within 72 hours, detailing the nature of the breach, the data exposed, and the immediate remedial actions being taken to secure the infrastructure.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="modifications" className="scroll-mt-40 pb-16 mb-16 border-b-2 border-slate-100">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">9. Modifications to this Privacy Policy</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                We reserve the right to amend, update, or overhaul this Privacy Policy at any time to reflect changes in our technological infrastructure, legal requirements, or app store guidelines. Material changes will be communicated via a prominent in-app banner and an email broadcast at least 15 days prior to the effective date. Continued use of the app post-amendment constitutes full acceptance of the revised policy.
              </p>
            </section>

            {/* SECTION 10 */}
            <section id="contact" className="scroll-mt-40">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">10. Grievance Redressal and Contact Information</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">In accordance with the Information Technology Act and DPDP Act, we have appointed a dedicated Grievance Officer and Data Protection Officer (DPO) to address your concerns regarding data privacy.</p>
              
              <div className="bg-slate-900 text-white p-10 md:p-12 rounded-3xl shadow-2xl border border-slate-800">
                <h4 className="text-2xl font-bold mb-8 text-blue-400">Office of the Data Protection Officer</h4>
                <div className="space-y-6 text-lg md:text-xl text-slate-300">
                  <p><strong className="text-white">Entity:</strong> Soudamini Healthcare Private Limited</p>
                  <p><strong className="text-white">Email:</strong> legal@soudaminihealthcare.com</p>
                  <p><strong className="text-white">Escalations:</strong> dpo@soudaminihealthcare.com</p>
                  <p><strong className="text-white">Phone:</strong> +91 (800) 123-4567 (Mon-Fri, 9:00 AM - 6:00 PM IST)</p>
                </div>
                <div className="mt-10 pt-8 border-t border-slate-700 text-base md:text-lg text-slate-400 italic">
                  All privacy-related inquiries are ticketed and legally mandated to be resolved within 30 days of receipt.
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}