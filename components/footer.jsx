"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Why AQTC", href: "#why-us" },
  // { label: "Our Team", href: "#team" },
  // { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Income Tax Filing",
  "Business Tax Consultancy",
  "GST Registration & Filing",
  "Corporate Compliance",
  "Tax Planning & Advisory",
  "NTN Registration",
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="text-white pt-16 pb-8" style={{ background: "#033a4d" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center brand-gradient shadow-md">
                <img src="/logo1.png" alt="AQTC Logo" />
              </div>
              <div>
                <div className="font-bold text-lg font-heading">AQTC</div>
                <div className="text-white/50 text-xs">Tax Consultants</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              AQTC Pakistan — your trusted partner for all tax and compliance
              needs.
            </p>
            {/* <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/50 mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/50 mb-5">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-white/70 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/50 mb-5">
              Contact Info
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-white/40 mt-0.5 flex-shrink-0"
                />
                <span className="text-white/70 text-sm">
                  Victoria Heights, Service Rd E, Islamabad, Pakistan
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail
                  size={16}
                  className="text-white/40 mt-0.5 flex-shrink-0"
                />
                <a
                  href="mailto:info@aqtc.com.pk"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  aqtcpk@gmail.com{" "}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="text-white/40 mt-0.5 flex-shrink-0"
                />
                <a
                  href="tel:+923001234567"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  +92 321 5118939{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} AQTC – Advanced Quality Tax
            Consultants Pakistan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
