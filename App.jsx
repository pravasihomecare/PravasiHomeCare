import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

export default function HomeCareKerala() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-green-700">Pravasi HomeCare – Perumbavoor</h1>
        <p className="text-lg mt-2 text-gray-600">
          Your Trusted Partner for Construction & Home Services in Kerala
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Our Services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Construction Supervision & Consultation</li>
              <li>Home Renovation & Painting</li>
              <li>Electrical & Plumbing Services</li>
              <li>AC & Appliance Maintenance</li>
              <li>Property Check & NRI Monthly Care</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Kerala-based team, UAE-managed operations</li>
              <li>Trusted by Pravasis worldwide</li>
              <li>Transparent pricing and updates</li>
              <li>Quick support via WhatsApp</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="my-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Request a Free Quote</h2>
        <form className="space-y-4 bg-gray-50 p-6 rounded-xl shadow">
          <Input placeholder="Your Name" required />
          <Input placeholder="Phone / WhatsApp" required />
          <Input placeholder="Service Location (e.g. Perumbavoor)" required />
          <Textarea placeholder="What service do you need?" rows={4} required />
          <Button className="w-full bg-green-700 text-white">Submit Request</Button>
        </form>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-10">
        &copy; 2025 Pravasi HomeCare – Serving Kerala from Perumbavoor | All Rights Reserved
      </footer>
    </div>
  );
}
