"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Breakpoint = "mobile" | "tablet" | "desktop";

type Asset = {
  titre: string;
  src: string;
};

type MediaGroup = {
  type: "image" | "video";
  value: Asset[];
};

type SlideData = {
  name: string;
  type: "image" | "video";
  titre: string;
  sous_titre: string;
  button: string[];
  contenue_text: string;
  value: MediaGroup[];
};

function getBreakpoint(asset: Asset): Breakpoint | undefined {
  const label = `${asset.titre} ${asset.src}`.toLowerCase();

  if (/mobile|548x|549x|(?:^|[-_])s(?:[._-]|$)/.test(label)) {
    return "mobile";
  }
  if (/tablet|1022x|1023x|(?:^|[-_])m(?:[._-]|$)/.test(label)) {
    return "tablet";
  }
  if (/desktop|2000x|(?:^|[-_])l(?:[._-]|$)/.test(label)) {
    return "desktop";
  }
}

function getAsset(assets: Asset[], breakpoint: Breakpoint): Asset | undefined {
  return assets.find((asset) => getBreakpoint(asset) === breakpoint) ?? assets[0];
}

function publicPath(src: string): string {
  return src.startsWith("/") ? src : `/${src}`;
}

const media: SlideData[] = [
    {
      name: "Rugged_campaign",
      type: "video",
      titre: "Beyond the Road",
      sous_titre: "Rugged capability for every adventure.",
      button: ["Explore"],
      contenue_text:
        "Passport TrailSport Elite shown with Honda Genuine Accessories. Honda reminds you to properly secure cargo items and follow all applicable load limits and loading guidelines. Closed course. Professional driver. Do not attempt. Please see your Honda dealer for details.",

      value: [
        {
          type: "image",
          value: [
            {
              titre: "2027-honda-passport-trailsport-elite-smoke-blue-pearl-l",
              src: "media/Honda-Homepage/Images/Article-Hero/Rugged-campaign/Thumb/2027-honda-passport-trailsport-elite-smoke-blue-pearl-l.jpg"
            },
            {
              titre: "2027-honda-passport-trailsport-elite-smoke-blue-pearl-m",
              src: "media/Honda-Homepage/Images/Article-Hero/Rugged-campaign/Thumb/2027-honda-passport-trailsport-elite-smoke-blue-pearl-m.jpg"
            },
            {
              titre: "honda-accord-packshot-front-corporate-lot-s",
              src: "media/Honda-Homepage/Images/Article-Hero/Rugged-campaign/Thumb/2027-honda-passport-trailsport-elite-smoke-blue-pearl-s.jpg"
            }
          ]
        },
        {
          type: "video",
          value: [
            {
              titre: "2027-honda-passport-rugged-l",
              src: "media/Honda-Homepage/Videos/Homepage/Hero/Rugged-campaign/v2/2027-honda-passport-rugged-l.mp4"
            },
            {
              titre: "2027-honda-passport-rugged-m",
              src: "media/Honda-Homepage/Videos/Homepage/Hero/Rugged-campaign/v2/2027-honda-passport-rugged-m.mp4"
            },
            {
              titre: "Rugged-campaign/v2/2027-honda-passport-rugged-s",
              src: "media/Honda-Homepage/Videos/Homepage/Hero/Rugged-campaign/v2/2027-honda-passport-rugged-s.mp4"
            }
          ]
        }
      ]
    },
    {
      name: "Accord_50th_Anniversary",
      type: "image",
      titre: "Honda celebrates 50 years of Accord.",
      sous_titre: "",
      button: ["Explore", "SEE PRESS RELEASE"],
      contenue_text: "",

      value: [
        {
          type: "image",
          value: [
            {
              titre: "honda-accord-packshot-front-corporate-lot-l",
              src: "media/Honda-Homepage/Images/Article-Hero/Accord-50th-Anniversary/honda-accord-packshot-front-corporate-lot-l.webp"
            },
            {
              titre: "honda-accord-packshot-front-corporate-lot-m",
              src: "media/Honda-Homepage/Images/Article-Hero/Accord-50th-Anniversary/honda-accord-packshot-front-corporate-lot-m.jpg"
            },
            {
              titre: "2027-honda-passport-trailsport-elite-smoke-blue-pearl-s",
              src: "media/Honda-Homepage/Images/Article-Hero/Accord-50th-Anniversary/honda-accord-packshot-front-corporate-lot-s.avif"
            }
          ]
        }
      ]
    },
    {
      name: "MY26_CR_V_Hybrid",
      type: "image",
      titre: "2026 CR-V",
      sous_titre: "The best-selling vehicle in America.*",
      button: ["Explore", "BUILD"],
      contenue_text:
        "TrailSport Hybrid shown in Ash Green Metallic* with Honda Genuine Accessories.*",

      value: [
        {
          type: "image",
          value: [
            {
              titre: "Honda_Homepage_Hero_MY26_CR-V_Desktop_2000x814px",
              src: "media/Honda-Homepage/Images/Article-Hero/MY26-CR-V-Hybrid/V2/Honda_Homepage_Hero_MY26_CR-V_Desktop_2000x814px.jpg"
            },
            {
              titre: "Honda_Homepage_Hero_MY26_CR-V_Mobile_549x767px",
              src: "media/Honda-Homepage/Images/Article-Hero/MY26-CR-V-Hybrid/V2/Honda_Homepage_Hero_MY26_CR-V_Mobile_549x767px.jpg"
            },
            {
              titre: "Honda_Homepage_Hero_MY26_CR-V_Tablet_1023x866px",
              src: "media/Honda-Homepage/Images/Article-Hero/MY26-CR-V-Hybrid/V2/Honda_Homepage_Hero_MY26_CR-V_Tablet_1023x866px.jpg"
            }
          ]
        }
      ]
    },
    {
      name: "MY26_Ridgeline",
      type: "image",
      titre: "2026 Ridgeline",
      sous_titre: "Built for rugged terrain. Ready for the journey ahead.",
      button: ["Explore", "BUILD"],
      contenue_text:
        "TrailSport shown in Ash Green Metallic* with Honda Genuine Accessories.*",

      value: [
        {
          type: "image",
          value: [
            {
              titre:
                "2026-honda-ridgeline-trailsport-ash-green-metallic-front-dirt-road-l",
              src: "media/Honda-Homepage/Images/Article-Hero/MY26-Ridgeline/2026-honda-ridgeline-trailsport-ash-green-metallic-front-dirt-road-l.webp"
            },
            {
              titre:
                "2026-honda-ridgeline-trailsport-ash-green-metallic-front-dirt-road-m",
              src: "media/Honda-Homepage/Images/Article-Hero/MY26-Ridgeline/2026-honda-ridgeline-trailsport-ash-green-metallic-front-dirt-road-m.webp"
            },
            {
              titre:
                "2026-honda-ridgeline-trailsport-ash-green-metallic-front-dirt-road-s",
              src: "media/Honda-Homepage/Images/Article-Hero/MY26-Ridgeline/2026-honda-ridgeline-trailsport-ash-green-metallic-front-dirt-road-s.webp"
            }
          ]
        }
      ]
    },
    {
      name: "MY26_Odyssey",
      type: "image",
      titre:
        "2026 Odyssey",
      sous_titre: "Versatile design for family adventures.",
      button: ["EXPLORE", "BUILD"],
      contenue_text: "",

      value: [
        {
          type: "image",
          value: [
            {
              titre:
                "2026-honda-odyssey-elite-sonic-gray-pearl-profile-lake-kayak-l",
              src: "media/Honda-Homepage/Images/Article-Hero/MY26-Odyssey/2026-honda-odyssey-elite-sonic-gray-pearl-profile-lake-kayak-l.webp"
            },
            {
              titre:
                "2026-honda-odyssey-elite-sonic-gray-pearl-profile-lake-kayak-m",
              src: "media/Honda-Homepage/Images/Article-Hero/MY26-Odyssey/2026-honda-odyssey-elite-sonic-gray-pearl-profile-lake-kayak-m.webp"
            },
            {
              titre:
                "2026-honda-odyssey-elite-sonic-gray-pearl-profile-lake-kayak-s",
              src: "media/Honda-Homepage/Images/Article-Hero/MY26-Odyssey/2026-honda-odyssey-elite-sonic-gray-pearl-profile-lake-kayak-s.webp"
            }
          ]
        }
      ]
    },
    {
      name: "Hibryd",
      type: "video",
      titre:"",       
      sous_titre:  "Fun-to-drive hybrids from one of America's most fuel-efficient full-line automakers.*",
      button: ["EXPLORE NOW"],
      contenue_text: "",

      value: [
        {
          type: "image",
          value: [
            {
              titre: "2026-honda-hybrid-family-shown-in-front-view-s",
              src: "media/Honda-Homepage/Videos/Homepage/Hero/Hibryd/2026-honda-hybrid-family-shown-in-front-view-s.webp"
            },
            {
              titre: "2026-honda-hybrid-family-shown-in-front-view-l",
              src: "media/Honda-Homepage/Videos/Homepage/Hero/Hibryd/2026-honda-hybrid-family-shown-in-front-view-l.webp"
            },
            {
              titre: "2026-honda-hybrid-family-shown-in-front-view-m",
              src: "media/Honda-Homepage/Videos/Homepage/Hero/Hibryd/2026-honda-hybrid-family-shown-in-front-view-m.webp"
            }
          ]
        },
        {
          type: "video",

          value: [
            {
              titre: "2026-honda-hybrid-family-548x766",
              src: "media/Honda-Homepage/Videos/Homepage/Hero/Hibryd/2026-honda-hybrid-family-548x766.mp4"
            },
            {
              titre: "2026-honda-hybrid-family-1022x866",
              src: "media/Honda-Homepage/Videos/Homepage/Hero/Hibryd/2026-honda-hybrid-family-1022x866.mp4"
            },
            {
              titre: "2026-honda-hybrid-family-2000x814",
              src: "media/Honda-Homepage/Videos/Homepage/Hero/Hibryd/2026-honda-hybrid-family-2000x814.mp4"
            }
          ]
        }
      ]
    }
];

export default function Slide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");
  const activeSlide = media[activeIndex];
  const imageGroup = activeSlide.value.find((item) => item.type === "image");
  const videoGroup = activeSlide.value.find((item) => item.type === "video");
  const imageAssets = imageGroup?.value ?? [];
  const mobileImage = getAsset(imageAssets, "mobile");
  const tabletImage = getAsset(imageAssets, "tablet");
  const desktopImage = getAsset(imageAssets, "desktop");

  useEffect(() => {
    const updateBreakpoint = () => {
      if (window.innerWidth <= 640) {
        setBreakpoint("mobile");
      } else if (window.innerWidth <= 1024) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("desktop");
      }
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % media.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const changeSlide = (direction: -1 | 1) => {
    setActiveIndex((index) => (index + direction + media.length) % media.length);
  };

  const currentVideo = videoGroup && getAsset(videoGroup.value, breakpoint);
  const currentPoster = getAsset(imageAssets, breakpoint);

  return (
    <section
      aria-label="Diaporama Honda"
      aria-roledescription="carrousel"
      className="relative isolate h-[78vh] min-h-[600px] max-h-[820px] overflow-hidden bg-neutral-950 text-white"
    >
      {activeSlide.type === "video" && currentVideo ? (
        <video
          key={`${activeSlide.name}-${breakpoint}`}
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          poster={currentPoster ? publicPath(currentPoster.src) : undefined}
          src={publicPath(currentVideo.src)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : desktopImage ? (
        <picture className="absolute inset-0">
          {mobileImage && (
            <source
              media="(max-width: 640px)"
              srcSet={publicPath(mobileImage.src)}
            />
          )}
          {tabletImage && (
            <source
              media="(max-width: 1024px)"
              srcSet={publicPath(tabletImage.src)}
            />
          )}
          <Image
            src={publicPath(desktopImage.src)}
            alt={activeSlide.titre}
            fill
            priority={activeIndex === 0}
            sizes="100vw"
            className="object-cover"
          />
        </picture>
      ) : null}

      <div className="absolute  inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent md:from-black/70 md:via-black/20" />
      <div className="absolute inset-0 top-20 flex flex-col items-center justify-center  px-16 pt-29 ">
        <div className="flex max-w-5xl flex-col items-center gap-5">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-4xl">
            {activeSlide.titre}
          </h2>
          {activeSlide.sous_titre && (
            <p className="text-xl font-medium sm:text-3xl">
              {activeSlide.sous_titre}
            </p>
          )}
          {activeSlide.button.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {activeSlide.button.map((label) => (
                <button
                  key={label}
                  type="button"
                  className="rounded-full border border-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors bg-red-600 hover:bg-white hover:text-black"
                >
                  {label}
                </button>
              ))}
            </div>
          )}
          {activeSlide.contenue_text && (
            <p className=" text-[12px] leading-relaxed text-white/85">
              {activeSlide.contenue_text}
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        aria-label="Diapositive précédente"
        onClick={() => changeSlide(-1)}
        className="absolute left-0 top-1/2 z-10 flex h-11 w-10 -translate-y-1/2 items-center justify-center  bg-black/35 text-3xl transition-colors hover:bg-black/65 "
      >
        <ChevronLeft size={35} strokeWidth={2.5} />
      </button>
      <button
        type="button"
        aria-label="Diapositive suivante"
        onClick={() => changeSlide(1)}
        className="absolute right-0 top-1/2 z-10 flex h-11 w-10 -translate-y-1/2 items-center justify-center  bg-black/35 text-3xl transition-colors hover:bg-black/65 "
      >
        <ChevronRight size={35} strokeWidth={2.5} />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {media.map((slide, index) => (
          <button
            key={slide.name}
            type="button"
            aria-label={`Afficher la diapositive ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
