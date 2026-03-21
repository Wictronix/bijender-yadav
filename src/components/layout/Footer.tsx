import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest text-white/80 py-16 border-t border-surface-variant">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo_footer.jpg"
              alt="INC Logo Footer"
              width={60}
              height={60}
              className="rounded-full shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl text-white tracking-tight leading-none">
                Bijender Yadav
              </span>
              <span className="text-sm text-white/60 mt-1">
                Indian National Congress | Moradabad
              </span>
            </div>
          </Link>
          <p className="max-w-md text-sm leading-relaxed">
            मुरादाबाद का अपना नेता। We are committed to building a progressive, inclusive, and prosperous Moradabad. Join the movement for 2027.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a href="https://www.instagram.com/inc_bijender/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface hover:bg-primary transition-colors hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/Bijenderyadavcongress/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface hover:bg-primary transition-colors hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="font-display font-bold text-lg text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-primary-accent transition-colors">About Bijender Yadav</Link></li>
            <li><Link href="/issues" className="hover:text-primary-accent transition-colors">Core Issues</Link></li>
            <li><Link href="/moradabad" className="hover:text-primary-accent transition-colors">Moradabad History</Link></li>
            <li><Link href="/alliance" className="hover:text-primary-accent transition-colors">INDIA Alliance</Link></li>
            <li><Link href="/join" className="hover:text-primary-accent transition-colors">Join the Movement</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="font-display font-bold text-lg text-white">Media & Updates</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/news" className="hover:text-primary-accent transition-colors">News Feed</Link></li>
            <li><Link href="/videos" className="hover:text-primary-accent transition-colors">Video Gallery</Link></li>
            <li><Link href="/gallery" className="hover:text-primary-accent transition-colors">Photo Gallery</Link></li>
            <li><Link href="/press-releases" className="hover:text-primary-accent transition-colors">Press Releases</Link></li>
            <li><Link href="/blog" className="hover:text-primary-accent transition-colors">Campaign Blog</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="font-display font-bold text-lg text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/50" />
              <span>Moradabad, Uttar Pradesh, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0 text-white/50" />
              <span>Contact via Join page</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0 text-white/50" />
              <span>media@bijenderyadav.in</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-surface flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
        <p>© {new Date().getFullYear()} Bijender Yadav Campaign. All rights reserved.</p>
        <p>Built with ❤️ for Moradabad</p>
      </div>
    </footer>
  );
}
