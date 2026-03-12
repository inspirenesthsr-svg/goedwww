import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms & Conditions | Goed Travels',
  description: 'Read the terms and conditions for using Goed Travels services, including booking policies, travel requirements, and user responsibilities.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 mb-8">Last updated: February 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to Goed Travels ("Company", "we", "our", "us"). These Terms and Conditions govern your use of our website, services, and travel bookings. By accessing our website or making a booking, you agree to be bound by these terms.
              </p>
              <p className="text-gray-600">
                Please read these terms carefully before using our services. If you do not agree with any part of these terms, you may not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">2. Booking & Reservations</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>All bookings are subject to availability and confirmation by Goed Travels.</li>
                <li>A booking is confirmed only upon receipt of the required deposit or full payment as specified.</li>
                <li>Booking confirmation will be sent via email within 24-48 hours of payment receipt.</li>
                <li>All prices quoted are in Indian Rupees (INR) unless otherwise specified.</li>
                <li>Prices are subject to change without prior notice until a booking is confirmed.</li>
                <li>Any promotional offers or discounts cannot be combined unless explicitly stated.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>A non-refundable deposit of 25-50% (depending on the package) is required to confirm your booking.</li>
                <li>Full payment must be received at least 30 days before the departure date for domestic travel and 45 days for international travel.</li>
                <li>For bookings made within 30 days of departure, full payment is required at the time of booking.</li>
                <li>We accept payments via bank transfer, credit/debit cards, and UPI.</li>
                <li>Any bank charges or currency conversion fees are the responsibility of the customer.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">4. Travel Documents</h2>
              <p className="text-gray-600 mb-4">
                It is the traveler's responsibility to ensure they possess valid travel documents including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Valid passport with at least 6 months validity beyond the travel dates</li>
                <li>Required visas for destination countries</li>
                <li>Travel insurance (highly recommended)</li>
                <li>Vaccination certificates if required by the destination country</li>
                <li>Any other documents as required by immigration authorities</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Goed Travels is not responsible for denied entry due to insufficient or invalid documents.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">5. Cancellation by Customer</h2>
              <p className="text-gray-600 mb-4">
                Cancellation charges will apply as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>More than 45 days before departure: 25% of total package cost</li>
                <li>30-45 days before departure: 50% of total package cost</li>
                <li>15-30 days before departure: 75% of total package cost</li>
                <li>Less than 15 days before departure: 100% of total package cost (no refund)</li>
                <li>No-show or cancellation after departure: No refund</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Peak season bookings, special events, and certain promotional packages may have stricter cancellation policies which will be communicated at the time of booking.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">6. Changes & Modifications</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Requests for changes to confirmed bookings must be made in writing via email.</li>
                <li>Changes are subject to availability and may incur additional charges.</li>
                <li>Name changes are generally not permitted once tickets are issued.</li>
                <li>Date changes, if permitted, will incur airline/hotel penalties plus our service fee.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">7. Our Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                Goed Travels acts as an intermediary between travelers and service providers (airlines, hotels, transport companies, etc.). While we take utmost care in selecting our partners:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We are not liable for any injury, loss, damage, accident, delay, or irregularity caused by third-party service providers.</li>
                <li>We are not responsible for any loss due to weather conditions, natural disasters, strikes, political unrest, or other force majeure events.</li>
                <li>Itineraries may be modified due to unforeseen circumstances, and we will provide suitable alternatives.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">8. Traveler Conduct</h2>
              <p className="text-gray-600 mb-4">
                Travelers are expected to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Behave responsibly and respectfully towards fellow travelers, guides, and locals.</li>
                <li>Follow all local laws and customs of the destination country.</li>
                <li>Adhere to the itinerary timings and instructions provided by tour guides.</li>
                <li>Not engage in any illegal activities during the trip.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We reserve the right to terminate arrangements for any traveler whose conduct is deemed inappropriate, without any refund.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600">
                To the maximum extent permitted by law, Goed Travels shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or any travel arrangements made through us. Our total liability shall not exceed the amount paid by you for the specific service in question.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-600">
                These terms and conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                <p className="text-gray-700"><strong>Goed Travels</strong></p>
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

