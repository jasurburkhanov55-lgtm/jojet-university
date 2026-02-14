import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onPageChange?: (page: 'home' | 'about' | 'academics' | 'admissions' | 'student-life' | 'news' | 'contact') => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const { t } = useLanguage();

  const handlePageClick = (page: 'home' | 'about' | 'academics' | 'admissions' | 'student-life' | 'news' | 'contact') => {
    if (onPageChange) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="logo.png" alt="JIU" className="h-12 w-auto" />
              <div>
                <div className="font-bold text-lg">JOJET</div>
                <div className="text-jojet-gold text-xs">INTERNATIONAL</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Excellence in Education, Innovation in Research. Shaping future leaders since 1995.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-jojet-blue hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handlePageClick('about')} className="text-gray-400 hover:text-jojet-gold-light transition-colors text-sm">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('academics')} className="text-gray-400 hover:text-jojet-gold-light transition-colors text-sm">
                  Programs
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('admissions')} className="text-gray-400 hover:text-jojet-gold-light transition-colors text-sm">
                  Admissions
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('news')} className="text-gray-400 hover:text-jojet-gold-light transition-colors text-sm">
                  News & Events
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('contact')} className="text-gray-400 hover:text-jojet-gold-light transition-colors text-sm">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Main Campus */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{(t('footer.campuses.main.name') as string)}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-jojet-gold" />
                <span>{(t('footer.campuses.main.address') as string)}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-jojet-gold" />
                <span>{(t('footer.campuses.main.phone') as string)}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-jojet-gold" />
                <span>{(t('footer.campuses.main.email') as string)}</span>
              </li>
            </ul>
          </div>

          {/* East Campus */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{(t('footer.campuses.east.name') as string)}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-jojet-gold" />
                <span>{(t('footer.campuses.east.address') as string)}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-jojet-gold" />
                <span>{(t('footer.campuses.east.phone') as string)}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            {(t('footer.copyright') as string)}
          </p>
          <div className="flex gap-6">
            <button onClick={() => handlePageClick('contact')} className="text-gray-500 hover:text-jojet-gold-light transition-colors text-sm">
              {(t('footer.links.contact') as string)}
            </button>
            <a href="#" className="text-gray-500 hover:text-jojet-gold-light transition-colors text-sm">
              {(t('footer.links.sitemap') as string)}
            </a>
            <a href="#" className="text-gray-500 hover:text-jojet-gold-light transition-colors text-sm">
              {(t('footer.links.privacy') as string)}
            </a>
            <a href="#" className="text-gray-500 hover:text-jojet-gold-light transition-colors text-sm">
              {(t('footer.links.terms') as string)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
