import React from "react";

const services = [
  { title: "Ortho", href: "https://www.cda-adc.ca/en/oral_health/talk/procedures/orthodontics/" },
  { title: "Cosmetic Dentistry", href: "https://www.oda.on.ca/cosmetic-dentistry" },
  { title: "Root Canal Treatment", href: "https://www.cda-adc.ca/en/oral_health/talk/procedures/root_canal/" },
  { title: "Bridges & Dentures", href: "https://www.cda-adc.ca/en/oral_health/talk/procedures/bridges_dentures/" },
  { title: "Nutrition", href: "https://www.cda-adc.ca/en/oral_health/cfyt/dental_care/nutrition.asp" },
  { title: "Crowns", href: "https://www.cda-adc.ca/en/oral_health/talk/procedures/crowns/" },
  { title: "Dental Implants", href: "https://www.cda-adc.ca/en/oral_health/talk/procedures/dental_implants/" },
  { title: "Post Operative Care", href: "https://www.cda-adc.ca/en/oral_health/talk/procedures/oral_surgery/" },
];

const socials = {
  google:
    "https://www.google.com/search?q=bradford+dental+care&oq=bradford&aqs=chrome.0.69i59j69i57j0l6.3171j0j8&sourceid=chrome&ie=UTF-8",
  facebook:
    "https://www.facebook.com/Bradford-Dental-Care-107429076417419/?eid=ARCpk6Z0yNg5clejs0yI0bxUi2CkyykFO85WEOc2F6TwHJihztMaI15GTgeIyvAhaX7w5UDXdr1zkV3G",
  instagram: "https://instagram.com/bradford_dental_care?igshid=1m7g39su7xvsu",
};

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22" height="22">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
    <path
      fill="#1877F2"
      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854V15.563H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <path
      fill="url(#ig-grad)"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
    />
  </svg>
);

const Footer = () => {
  const left = services.filter((_, i) => i % 2 === 0);
  const right = services.filter((_, i) => i % 2 === 1);

  return (
    <footer className="bg-purple px-4 sm:px-8 pt-16 pb-8">
      <div className="w-[90%] md:w-[80%] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <h3 className="text-2xl font-bold font-josefin text-yellow-100 mb-6">
              Our Services
            </h3>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="space-y-4">
                {left.map((s) => (
                  <li key={s.title}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-josefin font-semibold text-white hover:text-yellow-100 transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {right.map((s) => (
                  <li key={s.title}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-josefin font-semibold text-white hover:text-yellow-100 transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-josefin text-yellow-100 mb-6">
              Contact Us
            </h3>
            <p className="font-poppins text-white mb-3">905-775-5553</p>
            <p className="font-poppins text-white">info@bradforddental.com</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-josefin text-yellow-100 mb-6">
              Follow Us
            </h3>
            <div className="flex items-center gap-4">
              <a
                href={socials.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="bg-white rounded-full w-11 h-11 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <GoogleIcon />
              </a>
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full w-11 h-11 flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white rounded-full w-11 h-11 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center font-poppins text-sm text-blue-100">
          © 2019 - All Rights Reserved |{" "}
          <a href="#" className="text-yellow-100 hover:underline">
            Articles
          </a>{" "}
          |{" "}
          <a href="#" className="text-yellow-100 hover:underline">
            News
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
