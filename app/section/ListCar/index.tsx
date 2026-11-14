import Image from "next/image";

export default function ListCar() {
  const products = [
    {
      src_image:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS.webp",
      label_image: "2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS"
    },
    {
      src_image:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/desktop/V2/homepage-brand-powersports-desktop.webp",
      label_image: "homepage-brand-powersports-desktop"
    },
    {
      src_image:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/desktop/V2/Honda_Homepage_Menu_Position-03_Acura-Autos_1600x796px.webp",
      label_image: "Honda_Homepage_Menu_Position-03_Acura-Autos_1600x796px"
    },
    {
      src_image:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-mower-desktop-v1.jpg",
      label_image: "homepage-brand-mower-desktop-v1"
    },
    {
      src_image:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-engine-desktop.jpg",
      label_image: "homepage-brand-engine-desktop"
    },
    {
      src_image:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-marine-desktop.avif",
      label_image: "homepage-brand-marine-desktop"
    },
    {
      src_image:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-hondajet-desktop.avif",
      label_image: "homepage-brand-hondajet-desktop"
    },
    {
      src_image:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/2026-honda-aramco-formula-1-aston-martin-car-profile-view-lr.webp",
      label_image:
        "2026-honda-aramco-formula-1-aston-martin-car-profile-view-lr"
    }
  ];

  const logos = [
    {
      text: "Honda Autos",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Autos.avif",
      label_logo: "Logo_Honda_Autos",
      tone: "blue"
    },
    {
      text: "Motorcycles, ATVs, Scooters, SxS",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Powersports.avif",
      label_logo: "Logo_Honda_Powersports",
      tone: "black"
    },
    {
      text: "Acura Autos",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Acura_Logo.avif",
      label_logo: "Logo_Acura_Logo",
      tone: "red"
    },
    {
      text: "Generators, Mowers & Power Equipment",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Corporate_Red.avif",
      label_logo: "Logo_Honda_Corporate_Red",
      tone: "grey"
    },
    {
      text: "General Purpose Engines",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Corporate_White.webp",
      label_logo: "Logo_Honda_Corporate_White",
      tone: "red"
    },
    {
      text: "Outboard Motors",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Marine.avif",
      label_logo: "Logo_Honda_Marine",
      tone: "grey"
    },
    {
      text: "Honda Aircraft Company",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Jet.avif",
      label_logo: "Logo_Honda_Jet",
      tone: "red"
    },
    {
      text: "HPD is now HRC US",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Racing_v3.svg",
      label_logo: "Logo_Honda_Racing_v3",
      tone: "red"
    }
  ];

  return (
    <section>
      <div className="grid grid-cols-3 ">
        <div className="relative">
          <div className="grid grid-cols-2">
          
          <div className="flex flex-col bg-red-500 items-center w-60 h-60">
            <Image
              src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Autos.avif"
              alt="2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
            <span className="text-xl">Honda Autos</span>
            <span className="text-xl">GO</span>
          </div>

          <Image
            src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS.webp"
            alt="2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS"
            width={800}
            height={800}
            className=" object-cover"
          />
            
          </div>
          <div className="flex flex-col bg-red-500 items-center w-60 h-60">
            <Image
              src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Autos.avif"
              alt="2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
            <span className="text-xl">Honda Autos</span>
            <span className="text-xl">GO</span>
          </div>
          <Image
            src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS.webp"
            alt="2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS"
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
