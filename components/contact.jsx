"use client";

import { useRef, useState } from "react";
import { useInView } from "../hooks/use-in-view";
import { EnvelopeSimple, Phone, MapPin, WhatsappLogo } from "@phosphor-icons/react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office",
    value: "Victoria Heights, Service Rd E, Islamabad, Pakistan",
  },
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: "aqtcpk@gmail.com",
    href: "mailto:aqtcpk@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 321 5118939",
    href: "tel:+923215118939",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1, once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-ink-950 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <div
          ref={ref}
          className={`flex items-end justify-between gap-8 mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-xl">
            <div className="tag-mono text-accent mb-4">06 / Contact</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-fg leading-[1.02] text-balance">
              Get your free consultation.
            </h2>
          </div>
          <p className="hidden sm:block text-fg-dim text-base leading-relaxed max-w-xs border-l border-line-strong pl-5">
            Reach out today. Our team responds within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-line border border-line">
          {/* Contact info */}
          <div
            className={`lg:col-span-2 bg-ink-900 p-8 sm:p-10 flex flex-col gap-8 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div>
              <h3 className="font-display font-semibold text-2xl text-fg mb-2">
                Talk to our experts
              </h3>
              <p className="text-fg-faint text-sm">
                Available Mon–Sat, 9 AM – 7 PM PKT.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <Icon size={18} weight="light" className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="tag-mono text-fg-faint mb-1">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        className="text-fg font-medium text-sm hover:text-accent transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-fg font-medium text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923215118939?text=Hello%20Sir%2C%20I%20need%20tax%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-3 px-6 py-4 font-mono text-[13px] uppercase tracking-[0.08em] font-medium text-white transition-all duration-200 hover:brightness-110 cut-corner-sm"
              style={{ background: "#1e9e52" }}
            >
              <WhatsappLogo size={20} weight="fill" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Map */}
          <div
            className={`relative lg:col-span-3 bg-ink-900 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="absolute top-4 left-4 z-10 tag-mono text-fg-faint bg-ink-950/80 px-3 py-1.5 border border-line">
              Find us
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11726320.4300147!2d68.16429834514129!3d28.802897983430096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeacfe1e5a8dd%3A0x6419f6f1ade3b078!2sVictoria%20Heights!5e0!3m2!1sen!2s!4v1774903187197!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ minHeight: 420, filter: "grayscale(1) invert(0.92) contrast(0.85)" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
