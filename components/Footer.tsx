import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import ScoreboardSection from '@/components/ScoreboardSection';
import { readSiteContent } from '@/lib/content-store';

export default async function Footer() {
  const content = await readSiteContent();

  return (
    <>
      <ScoreboardSection data={content.scoreboard} />
      <footer className="mt-0 bg-[#0a305f] text-white">
        <div className="mx-auto max-w-7xl border-t-4 border-[#da251c] px-4 py-12">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">Army Public School</h3>
              <p className="text-sm text-white/90">
                Providing quality education and holistic development in a safe, supportive environment.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/admissions/rules" className="hover:underline">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="/academics/calendar" className="hover:underline">
                    Academic Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/about/principal" className="hover:underline">
                    Principal&apos;s Message
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:underline">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Information</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about/affiliation" className="hover:underline">
                    Affiliation
                  </Link>
                </li>
                <li>
                  <Link href="/about/rules" className="hover:underline">
                    Rules &amp; Regulations
                  </Link>
                </li>
                <li>
                  <Link href="/academics/circulars" className="hover:underline">
                    Circulars
                  </Link>
                </li>
                <li>
                  <Link href="/recruitment" className="hover:underline">
                    Recruitment
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>Khadakwasla, Pune</span>
                </li>
                <li className="flex gap-2">
                  <Phone size={16} className="shrink-0" />
                  <span>020-25290084</span>
                </li>
                <li className="flex gap-2">
                  <Mail size={16} className="shrink-0" />
                  <span>apskhadakwasla1@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/15 pt-8">
            <div className="mb-6 grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
              <div>
                <span className="font-semibold">Affiliation No:</span> 1180026
              </div>
              <div>
                <span className="font-semibold">School Code:</span> 34114
              </div>
              <div>
                <span className="font-semibold">CBSE Board</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/75 md:flex-row">
              <p>&copy; {new Date().getFullYear()} Army Public School Khadakwasla. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
