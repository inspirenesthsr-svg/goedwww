import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | Goed Travels',
  description: 'Learn how Goed Travels collects, uses, and protects your personal information when you use our travel services.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-8">Last updated: February 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                At Goed Travels, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our travel services.
              </p>
              <p className="text-gray-600">
                By using our services, you consent to the data practices described in this policy. We encourage you to read this policy carefully to understand our practices regarding your personal data.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-600 mb-4">
                When you make a booking or inquiry, we may collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Full name (as per passport/ID)</li>
                <li>Date of birth</li>
                <li>Contact information (email, phone number, address)</li>
                <li>Passport details and visa information</li>
                <li>Payment information (credit card details, bank account information)</li>
                <li>Travel preferences and special requirements (dietary, accessibility, etc.)</li>
                <li>Emergency contact details</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-600 mb-4">
                When you visit our website, we automatically collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website or source</li>
                <li>Location data (with your consent)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Processing and managing your travel bookings</li>
                <li>Communicating with you about your reservations and travel updates</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Sending promotional offers and newsletters (with your consent)</li>
                <li>Processing payments and preventing fraud</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
                <li>Sharing with third-party service providers (airlines, hotels, etc.) to fulfill your bookings</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We may share your personal information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service Providers:</strong> Airlines, hotels, transport companies, and tour operators necessary to fulfill your booking.</li>
                <li><strong>Payment Processors:</strong> Secure third-party payment gateways for processing transactions.</li>
                <li><strong>Government Authorities:</strong> Immigration, customs, and other authorities as required by law or for visa processing.</li>
                <li><strong>Insurance Companies:</strong> If you purchase travel insurance through us.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We do not sell, trade, or rent your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>SSL encryption for all data transmissions</li>
                <li>Secure servers and firewalls</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal data on a need-to-know basis</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-600 mt-4">
                While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">6. Cookies & Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">
                Our website uses cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Personalize content and advertisements</li>
                <li>Improve website functionality</li>
              </ul>
              <p className="text-gray-600 mt-4">
                You can control cookie settings through your browser. However, disabling cookies may affect your experience on our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements).</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time.</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider.</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise any of these rights, please contact us at enquiry@goed.in.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Typically, booking records are retained for 7 years for legal and tax purposes. You may request deletion of your data, subject to our legal retention requirements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-600">
                As a travel company, your information may be transferred to and processed in countries outside India where our service providers (hotels, airlines, etc.) are located. We ensure that appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children without parental consent. If you are a parent and believe your child has provided us with personal information, please contact us to have it removed.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                <p className="text-gray-700"><strong>Goed Travels - Data Protection</strong></p>
                <p className="text-gray-600">Prince Towers, College Road, Nungambakkam</p>
                <p className="text-gray-600">Chennai - 600034, Tamil Nadu, India</p>
                <p className="text-gray-600">Email: enquiry@goed.in</p>
                <p className="text-gray-600">Phone: +91 95147 74633</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

