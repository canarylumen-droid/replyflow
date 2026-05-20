import Image, { type StaticImageData } from 'next/image'
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";

type LogoItem =
  | { src: StaticImageData; alt: string }
  | { href: string; alt: string };

export default function LogoCarousel() {

  const logos: LogoItem[] = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
  { href: "https://audnixai.com", alt: "Audnix AI" },
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            {'href' in logo ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"Open " + logo.alt + " (opens in new tab)"}
                className="inline-flex h-16 min-w-[140px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-center text-sm font-semibold text-white transition hover:border-[#A46EDB] hover:text-[#A46EDB] pointer-events-auto"
              >
                {logo.alt}
              </a>
            ) : (
              <Image src={logo.src} alt={logo.alt} />
            )}
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll pointer-events-none" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            {'href' in logo ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden="true"
                tabIndex={-1}
                className="inline-flex h-16 min-w-[140px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-center text-sm font-semibold text-white transition hover:border-[#A46EDB] hover:text-[#A46EDB]"
              >
                {logo.alt}
              </a>
            ) : (
              <Image src={logo.src} alt={logo.alt} />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}