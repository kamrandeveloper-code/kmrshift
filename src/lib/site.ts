export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
] as const;

export const servicesHref = "#services";
export const contactHref = "#contact";

// Replace these files in /public with the real assets. Keep width/height in
// sync with each file's intrinsic size so the layout reserves the right space.
export const siteImages = {
  logo: {
    src: "/brand/kmrshift.webp",
    width: 168,
    height: 32,
  },
  legacyApp: {
    src: "/hero/legacy-desktop-app.png",
    width: 1200,
    height: 900,
  },
  modernApp: {
    src: "/hero/modern-web-app.png",
    width: 1600,
    height: 1000,
  },
} as const;

// Replace with the real inbox before launch.
export const contactEmail = "hello@kmrshift.com";

// Same number for calls and WhatsApp.
export const contactPhone = {
  display: "+92 319 6165027",
  tel: "tel:+923196165027",
  whatsapp: "https://wa.me/923196165027",
} as const;

// EmailJS keys are public by design (they ship to the browser). Set them in
// .env.local — see .env.example.
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
} as const;
