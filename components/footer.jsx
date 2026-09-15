"use client";

import { EnvelopeSimple, Phone, MapPin, FacebookLogo, InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Why AQTC", href: "#why-us" },
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
  { icon: FacebookLogo, href: "#", label: "Facebook" },
  { icon: XLogo, href: "#", label: "X" },
  { icon: LinkedinLogo, href: "#", label: "LinkedIn" },
  { icon: InstagramLogo, href: "#", label: "Instagram" },
];

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink-950 text-fg pt-20 pb-8 border-t border-line">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center border border-line overflow-hidden">
                <img src="/logo1.png" alt="AQTC Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">AQTC</div>
                <div className="tag-mono text-fg-faint">Tax Consultants</div>
              </div>
            </div>
            <p className="text-fg-dim text-sm leading-relaxed mb-6">
              AQTC Pakistan — your trusted partner for all tax and compliance
              needs.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-line text-fg-dim hover:text-accent hover:border-accent/50 transition-colors"
                >
                  <Icon size={15} weight="light" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="tag-mono text-fg-faint mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-fg-dim text-sm hover:text-accent transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="tag-mono text-fg-faint mb-6">Our Services</h4>
            <ul className="flex flex-col gap-3.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-fg-dim text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="tag-mono text-fg-faint mb-6">Contact Info</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} weight="light" className="text-fg-faint mt-0.5 flex-shrink-0" />
                <span className="text-fg-dim text-sm">
                  Victoria Heights, Service Rd E, Islamabad, Pakistan
                </span>
              </div>
              <div className="flex items-start gap-3">
                <EnvelopeSimple size={16} weight="light" className="text-fg-faint mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:aqtcpk@gmail.com"
                  className="text-fg-dim text-sm hover:text-accent transition-colors"
                >
                  aqtcpk@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} weight="light" className="text-fg-faint mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+923215118939"
                  className="text-fg-dim text-sm hover:text-accent transition-colors"
                >
                  +92 321 5118939
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-line pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-fg-faint text-xs">
            &copy; {new Date().getFullYear()} AQTC Consultants Pakistan. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-fg-faint text-xs hover:text-fg-dim transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-fg-faint text-xs hover:text-fg-dim transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
