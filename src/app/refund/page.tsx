import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Refund Policy | Goed Travels',
  description: 'Understand our refund and cancellation policy for travel bookings, including timelines, charges, and procedures.',
}

export default function RefundPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Refund & Cancellation Policy
          </h1>
          <p className="text-gray-500 mb-8">Last updated: February 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-600 mb-4">
                At Goed Travels, we understand that plans can change. This Refund & Cancellation Policy outlines the terms and conditions for cancellations, modifications, and refunds for travel bookings made through us.
              </p>
              <p className="text-gray-600">
                Please read this policy carefully before making a booking. By confirming a booking with us, you agree to the terms outlined below.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">2. Cancellation by Customer</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Domestic Tour Packages</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left">Cancellation Timeline</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Cancellation Charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">More than 30 days before departure</td>
                      <td className="border border-gray-200 px-4 py-3">20% of total package cost</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">21-30 days before departure</td>
                      <td className="border border-gray-200 px-4 py-3">35% of total package cost</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">15-20 days before departure</td>
                      <td className="border border-gray-200 px-4 py-3">50% of total package cost</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">7-14 days before departure</td>
                      <td className="border border-gray-200 px-4 py-3">75% of total package cost</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Less than 7 days / No-show</td>
                      <td className="border border-gray-200 px-4 py-3">100% (No refund)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 International Tour Packages</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left">Cancellation Timeline</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Cancellation Charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">More than 45 days before departure</td>
                      <td className="border border-gray-200 px-4 py-3">25% of total package cost</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">30-45 days before departure</td>
                      <td className="border border-gray-200 px-4 py-3">50% of total package cost</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">15-29 days before departure</td>
                      <td className="border border-gray-200 px-4 py-3">75% of total package cost</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Less than 15 days / No-show</td>
                      <td className="border border-gray-200 px-4 py-3">100% (No refund)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">3. Special Conditions</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Peak Season Bookings:</strong> Bookings during festivals, holidays, and peak seasons may have stricter cancellation policies with higher charges.</li>
                <li><strong>Non-Refundable Components:</strong> Certain components like visa fees, travel insurance, special permits, and non-refundable hotel bookings cannot be refunded regardless of cancellation timing.</li>
                <li><strong>Group Bookings:</strong> Group bookings (10+ travelers) have separate cancellation terms which will be communicated at the time of booking.</li>
                <li><strong>Charter Flights/Cruises:</strong> Bookings involving charter flights or cruises may have 100% cancellation charges.</li>
                <li><strong>Customized Packages:</strong> Tailor-made itineraries may have different cancellation terms based on supplier policies.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">4. Flight Tickets (Standalone)</h2>
              <p className="text-gray-600 mb-4">
                For standalone flight bookings:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Cancellation and refund are subject to the airline's policy.</li>
                <li>Airlines typically charge cancellation fees ranging from ₹2,500 to ₹5,000 per person for domestic flights.</li>
                <li>International flight cancellation fees can range from ₹5,000 to ₹15,000 or more per person.</li>
                <li>Some promotional or discounted fares are non-refundable.</li>
                <li>A service fee of ₹500 per ticket will be charged in addition to airline penalties.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">5. Hotel Bookings (Standalone)</h2>
              <p className="text-gray-600 mb-4">
                For standalone hotel bookings:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Cancellation policies vary by hotel and room type.</li>
                <li>Free cancellation is typically available up to 24-72 hours before check-in for flexible rates.</li>
                <li>Non-refundable bookings cannot be cancelled or modified.</li>
                <li>A service fee of ₹300-500 per booking applies for cancellations.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">6. Visa Services</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Visa service fees are non-refundable once the application process has started.</li>
                <li>Embassy/Consulate fees are non-refundable regardless of visa outcome.</li>
                <li>In case of visa rejection, only a partial refund of service fees may be considered on a case-by-case basis.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">7. Cancellation by Goed Travels</h2>
              <p className="text-gray-600 mb-4">
                We may cancel a booking under the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Insufficient Participants:</strong> If minimum group size is not met for group tours.</li>
                <li><strong>Force Majeure:</strong> Natural disasters, pandemics, political unrest, or other events beyond our control.</li>
                <li><strong>Safety Concerns:</strong> If travel to the destination is deemed unsafe.</li>
                <li><strong>Operational Issues:</strong> Unavailability of services or suppliers.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                In such cases, you will be offered:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>A full refund of all payments made, OR</li>
                <li>Credit for future travel of equivalent value, OR</li>
                <li>An alternative trip of similar value</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">8. How to Cancel</h2>
              <p className="text-gray-600 mb-4">
                To cancel your booking:
              </p>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>Send a written cancellation request to <strong>enquiry@goed.in</strong> with your booking reference number.</li>
                <li>Cancellation requests via phone will not be accepted.</li>
                <li>The date of receiving the email will be considered as the cancellation date.</li>
                <li>You will receive a confirmation of cancellation within 48 hours.</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">9. Refund Process</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Refunds will be processed within 15-30 business days from the date of cancellation confirmation.</li>
                <li>Refunds will be credited to the original payment method used for booking.</li>
                <li>For credit card payments, refund timelines depend on your bank's processing time.</li>
                <li>Bank transfer refunds may take additional 3-5 business days.</li>
                <li>All refunds are subject to deduction of applicable cancellation charges and processing fees.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">10. Date Changes & Modifications</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Date change requests are subject to availability.</li>
                <li>A modification fee of ₹1,500-3,000 per booking applies.</li>
                <li>Any fare difference (positive or negative) will be adjusted.</li>
                <li>Modifications within 15 days of departure may be treated as cancellation and rebooking.</li>
                <li>Name changes are generally not permitted after booking confirmation.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">11. Travel Insurance</h2>
              <p className="text-gray-600">
                We strongly recommend purchasing comprehensive travel insurance at the time of booking. Travel insurance can cover:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Trip cancellation due to medical emergencies</li>
                <li>Flight delays and missed connections</li>
                <li>Lost or delayed baggage</li>
                <li>Medical emergencies during travel</li>
                <li>Trip interruption</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Insurance can help recover costs that may not be refundable under our standard policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-600">
                For any questions regarding cancellations or refunds, please contact:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                <p className="text-gray-700"><strong>Goed Travels - Cancellations & Refunds</strong></p>
                <p className="text-gray-600">Prince Towers, College Road, Nungambakkam</p>
                <p className="text-gray-600">Chennai - 600034, Tamil Nadu, India</p>
                <p className="text-gray-600">Email: enquiry@goed.in</p>
                <p className="text-gray-600">Phone: +91 95147 74633</p>
                <p className="text-gray-600 mt-2"><em>Working Hours: Mon-Sat, 9:00 AM - 7:00 PM IST</em></p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

