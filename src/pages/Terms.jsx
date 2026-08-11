import React from 'react';

export default function Terms() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          
          <div className="bg-slate-900 px-8 md:px-12 py-16 text-white border-b-4 border-slate-700">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Comprehensive Terms of Service</h1>
            <p className="text-slate-300 text-lg font-medium">Last Updated and Effective Date: August 12, 2026</p>
          </div>

          <div className="p-8 md:p-12 space-y-12 text-slate-700 leading-relaxed text-sm md:text-base">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">1. Legally Binding Agreement</h2>
              <p className="mb-4">
                These Comprehensive Terms of Service ("Terms", "Agreement") constitute a legally binding contract entered into by and between you (the "User", "Patient", or "Account Holder") and Soudamini Healthcare Private Limited ("Company", "we", "us", or "our"). These Terms govern your access to, download of, and use of the Soudamini Healthcare mobile applications, websites, teleconsultation services, home sample collection services, and associated digital healthcare infrastructure (collectively, the "Platform").
              </p>
              <p className="font-bold text-slate-900">
                CAREFULLY READ THESE TERMS BEFORE CLICKING "I AGREE", DOWNLOADING THE APP, OR USING THE SERVICES. BY DOING SO, YOU ACKNOWLEDGE THAT YOU HAVE READ, COMPREHENDED, AND EXPRESSLY AGREE TO BE BOUND BY THIS AGREEMENT IN ITS ENTIRETY.
              </p>
            </section>

            <section className="bg-red-50 p-6 md:p-8 rounded-2xl border-2 border-red-200 shadow-sm">
              <h2 className="text-2xl font-extrabold text-red-900 mb-4 uppercase tracking-wider flex items-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                2. Explicit Medical Emergency Disclaimer
              </h2>
              <p className="text-red-900 font-bold text-lg mb-3">
                THE SOUDAMINI HEALTHCARE PLATFORM IS ABSOLUTELY NOT DESIGNED, INTENDED, OR EQUIPPED TO HANDLE MEDICAL EMERGENCIES. 
              </p>
              <p className="text-red-800 font-medium">
                If you are experiencing a medical emergency, severe physical trauma, chest pain, uncontrolled bleeding, severe shortness of breath, loss of consciousness, or suicidal ideation, DO NOT RELY ON THIS APPLICATION. You must immediately contact your local emergency services (e.g., dial 112, 108, 911) or proceed to the nearest hospital emergency department. The Company expressly disclaims any liability arising from the use of the Platform in emergency situations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">3. Nature of Teleconsultation Services and Practitioner Independence</h2>
              <p className="mb-4">
                The Platform acts as an advanced technology intermediary that connects users with qualified, registered medical practitioners ("Practitioners"). You acknowledge and agree to the following limitations inherent to digital healthcare:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><span className="font-semibold">Not a Substitute for Physical Examination:</span> Teleconsultations rely solely on the information, symptoms, and images you provide. It is not a complete substitute for an in-person physical clinical examination.</li>
                <li><span className="font-semibold">Practitioner Discretion:</span> The Practitioner reserves the absolute right to terminate a teleconsultation and advise an in-person clinic visit if they determine that your condition cannot be accurately diagnosed or safely treated remotely.</li>
                <li><span className="font-semibold">Prescription Limitations:</span> Practitioners on the Platform will strictly adhere to the Telemedicine Practice Guidelines issued by the Ministry of Health and Family Welfare. They will not prescribe Schedule X drugs, narcotics, or highly restricted medications via teleconsultation under any circumstances.</li>
                <li><span className="font-semibold">Independent Contractor Status:</span> The medical advice provided is the sole responsibility of the consulting Practitioner. Soudamini Healthcare (as a technology provider) does not practice medicine and assumes no liability for medical misdiagnosis, malpractice, or adverse drug reactions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">4. User Account Obligations and Security</h2>
              <p className="mb-4">To utilize the Platform, you must register for a user account. You represent and warrant that:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>You are at least 18 years of age and possess the legal capacity to enter into a binding contract.</li>
                <li>All profile information, demographic data, and medical history provided by you is truthful, accurate, and current. Falsifying medical records may result in fatal misdiagnosis.</li>
                <li>You are solely responsible for maintaining the strict confidentiality of your login credentials and OTPs. You agree to accept liability for any actions taken under your account, whether authorized by you or not.</li>
                <li>You will immediately notify Soudamini Healthcare of any suspected unauthorized access or account breach.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">5. Prohibited Conduct and Acceptable Use Policy</h2>
              <p className="mb-4">You are granted a limited, non-exclusive, non-transferable, and revocable license to use the App. You strictly agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Use the Platform to request, source, or distribute illegal drugs, narcotics, or non-prescribed controlled substances.</li>
                <li>Abuse, harass, threaten, or use profanity against doctors, nurses, or customer support staff during teleconsultations or in-app chats. (Such actions will result in immediate lifetime account suspension without refund).</li>
                <li>Reverse engineer, decompile, disassemble, or attempt to extract the source code of the mobile application or backend APIs.</li>
                <li>Deploy bots, scrapers, or automated scripts to harvest patient data, doctor directories, or pricing information from the Platform.</li>
                <li>Upload malicious payloads, ransomware, viruses, or corrupted files into the EHR system or chat attachments.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">6. Financial Terms: Payments, Billing, and Refunds</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><span className="font-semibold">Pricing:</span> Consultation fees, lab test charges, and delivery fees are clearly displayed in the App prior to booking. All fees are inclusive of applicable taxes unless stated otherwise.</li>
                <li><span className="font-semibold">Advance Payment:</span> Teleconsultations and home lab sample collections require 100% advance payment via our secure payment gateway to confirm the booking.</li>
                <li><span className="font-semibold">Cancellation & Refund Policy:</span> 
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Cancellations made more than 4 hours prior to a scheduled appointment are eligible for a 100% refund.</li>
                    <li>Cancellations made within 4 hours of the appointment will incur a 50% cancellation fee.</li>
                    <li>"No-shows" (failing to join the video call within 10 minutes of start time) are non-refundable.</li>
                    <li>If a Practitioner cancels the appointment or faces technical failure on their end, a 100% refund will be processed to the original payment method within 5-7 business days.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">7. Disclaimer of Warranties</h2>
              <p className="mb-4 font-bold uppercase">The Platform is provided on an "As Is" and "As Available" basis.</p>
              <p className="mb-4">
                Soudamini Healthcare explicitly disclaims all warranties, whether express, implied, statutory, or otherwise, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The application will be 100% free of bugs, downtime, or network latency.</li>
                <li>The video infrastructure will perfectly support teleconsultations in areas with low cellular bandwidth.</li>
                <li>Any specific medical outcome, cure, or alleviation of symptoms will be achieved through the use of the Platform.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">8. Extensive Limitation of Liability</h2>
              <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE JURISPRUDENCE, SOUDAMINI HEALTHCARE, ITS FOUNDERS, DIRECTORS, EMPLOYEES, AND TECHNOLOGY PARTNERS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, MEDICAL MISDIAGNOSIS, PERSONAL INJURY, WRONGFUL DEATH, OR BUSINESS INTERRUPTION ARISING OUT OF:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-4">
                <li>Your use or inability to use the App.</li>
                <li>Any medical advice, prescription, or treatment plan provided by a Practitioner accessed via the App.</li>
                <li>Any unauthorized access to, or alteration of, your secure medical transmissions.</li>
                <li>Delays in medical response due to server outages, push notification failures, or ISP throttling.</li>
              </ul>
              <p className="font-bold">
                In no event shall the total aggregate liability of Soudamini Healthcare to you for all damages, losses, and causes of action exceed the total amount paid by you to the Company for the specific consultation or service giving rise to the claim in the preceding three (3) months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">9. Indemnification</h2>
              <p className="mb-4">
                You agree to unconditionally defend, indemnify, and hold harmless Soudamini Healthcare, its affiliates, and licensors from and against any and all claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your material violation of these Terms of Service.</li>
                <li>Your provision of false, inaccurate, or deceptive medical history.</li>
                <li>Your infringement of any third-party intellectual property or privacy rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">10. Termination and Account Suspension</h2>
              <p className="mb-4">
                We reserve the unilateral right to suspend, disable, or permanently terminate your account and block your device's IP address or MAC address from accessing the Platform immediately, without prior notice or liability, for any reason whatsoever. Valid reasons include, but are not limited to, suspected fraud, abusive behavior toward doctors, chargeback abuse, or systemic violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">11. Governing Law, Jurisdiction, and Arbitration</h2>
              <p className="mb-4">
                These Terms shall be governed by, construed, and enforced in accordance with the laws of India, specifically excluding its conflict of law principles. 
              </p>
              <p className="mb-4">
                Any dispute, claim, or controversy arising out of or relating to these Terms, including the determination of the scope or applicability of this agreement to arbitrate, shall be determined by binding arbitration in India before a sole arbitrator. The arbitration shall be administered in accordance with the Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be the corporate headquarters city of Soudamini Healthcare in India. The language of the arbitration shall be English.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">12. Severability and Entire Agreement</h2>
              <p className="mb-4">
                If any provision of these Terms is held by a court or tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent necessary such that the remaining provisions of the Terms will continue in full force and effect.
              </p>
              <p>
                These Terms, our Privacy Policy, and any specialized medical consent forms you sign within the App constitute the sole and entire agreement between you and Soudamini Healthcare regarding your use of the Platform.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}