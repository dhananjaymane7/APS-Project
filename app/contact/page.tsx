import PageLayout from '@/components/PageLayout';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - Army Public School',
  description: 'Get in touch with Army Public School. Find our contact details and location.',
};

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="We'd love to hear from you"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Contact Us' },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Army Public School, Khadakwasla
                    <br />
                    Pune - 411024
                    <br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+919890290084" className="hover:text-primary transition">
                      020-25290084
                    </a>
                    <br />
                    <a href="tel:+919890290084" className="hover:text-primary transition">
                      +91 9890290084
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:apskhaddakwasla1@gmail.com" className="hover:text-primary transition">
                      apskhaddakwasla1@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">School Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 3:30 PM
                    <br />
                    Saturday: 8:00 AM - 1:00 PM
                    <br />
                    Sunday & Holidays: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent outline-none transition"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent outline-none transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition font-semibold w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar - Important Info */}
        <div>
          <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">School Information</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="font-semibold">Affiliation No:</p>
                <p>1180026</p>
              </li>
              <li>
                <p className="font-semibold">School Code:</p>
                <p>34114</p>
              </li>
              <li>
                <p className="font-semibold">Board:</p>
                <p>CBSE</p>
              </li>
              <li>
                <p className="font-semibold">Founded:</p>
                <p>April 2012</p>
              </li>
            </ul>
          </div>

          <div className="bg-secondary text-secondary-foreground rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-70 transition">
                <span>Facebook</span>
              </a>
              <a href="#" className="hover:opacity-70 transition">
                <span>Instagram</span>
              </a>
              <a href="#" className="hover:opacity-70 transition">
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Location</h2>
        <div className="rounded-lg overflow-hidden shadow-lg bg-muted h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Map view will be displayed here
              <br />
              Army Public School, Khadakwasla, Pune
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
