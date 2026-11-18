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
      backgroundColor: "#3b82f6",
      textColor: "#ffffff",
    },
    {
      text: "Motorcycles, ATVs, Scooters, SxS",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Powersports.avif",
      label_logo: "Logo_Honda_Powersports",
      backgroundColor: "#b60202",
      textColor: "#ffffff",
    },
    {
      text: "Acura Autos",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Acura_Logo.avif",
      label_logo: "Logo_Acura_Logo",
      backgroundColor: "#000000",
      textColor: "#ffffff",
    },
    {
      text: "Generators, Mowers & Power Equipment",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Corporate_Red.avif",
      label_logo: "Logo_Honda_Corporate_Red",
      backgroundColor: "#ffffff",
      textColor: "#000000",
    },
    {
      text: "General Purpose Engines",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Corporate_White.webp",
      label_logo: "Logo_Honda_Corporate_White",
      backgroundColor: "#b60202",
      textColor: "#ffffff",
    },
    {
      text: "Outboard Motors",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Marine.avif",
      label_logo: "Logo_Honda_Marine",
      backgroundColor: "#ffffff",
      textColor: "#000000",
    },
    {
      text: "Honda Aircraft Company",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Jet.avif",
      label_logo: "Logo_Honda_Jet",
      backgroundColor: "#b60202",
      textColor: "#ffffff",
    },
    {
      text: "HPD is now HRC US",
      src_logo:
        "/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Racing_v3.svg",
      label_logo: "Logo_Honda_Racing_v3",
      backgroundColor: "#b60202",
      textColor: "#ffffff",

    }
  ];

  return (
    <section className="list-car-viewport">
      <div className="list-car-mobile">
        {logos.map((logo, index) => {
          const product = products[index];

          if (!product) {
            return null;
          }

          return (
            <div
              className={`list-car-mobile-row ${index % 2 === 1 ? "is-reversed" : ""}`}
              key={logo.label_logo}
            >
              <div
                className="list-car-mobile-logo gap-y-5 p-8"
                style={{
                  backgroundColor: logo.backgroundColor,
                  color: logo.textColor,
                }}
              >
                <Image
                  src={logo.src_logo}
                  alt={logo.label_logo}
                  width={154}
                  height={54}
                  sizes="40vw"
                  className="list-car-mobile-logo-image"
                />
                <span className="text-md font-bold">{logo.text}</span>
                <span className="text-xl underline underline-offset-5 font-bold">GO</span>
              </div>
              <div className="list-car-mobile-image">
                <Image
                  src={product.src_image}
                  alt={product.label_image}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="list-car-canvas">
        <div className="flex w-full">
          {/* section 1  */}
          <div className="flex w-1/2 min-w-0">
            <div className="flex flex-col">
              <div
                className="relative  flex flex-col bg-blue-500 p-8 text-center items-center justify-center w-58 h-58 shrink-0
                after:content-[''] after:absolute after:top-1/2 after:-right-3
                after:w-6 after:h-6
                after:border-t-2 after:border-r-2
                after:bg-blue-500
                after:border-blue-500
                after:rotate-45 after:-translate-y-1/2
                gap-y-5
                "
              >
                <Image
                  src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Autos.avif"
                  alt="2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS"
                  width={154}
                  height={54}
                  className=" object-cover"
                />
                <span className="text-md font-bold">Honda Autos</span>
                <span className="text-xl underline underline-offset-5 font-bold">GO</span>
              </div>
              <div className="flex flex-col bg-white text-black text-center items-center justify-center p-8 w-58 h-50 shrink-0
                relative
                after:content-[''] after:absolute 
                after:-bottom-3 after:left-1/2
                after:w-6 after:h-6
                after:border-t-2 after:border-r-2
                after:bg-white
                after:border-white
                after:rotate-45 after:-translate-x-1/2
                gap-y-5
              ">
                <Image
                  src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Corporate_Red.avif"
                  alt="2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS"
                  width={154}
                  height={54}
                  className=" object-cover"
                />
                <span className="text-md font-bold ">
                  Generators, Mowers & Power Equipment
                </span>
                <span className="text-xl underline underline-offset-5 font-bold">GO</span>
              </div>
            </div>

            <Image
              src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS.webp"
              alt="2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS"
              width={490}
              height={400}
              className=" h-[466px] object-cover"
            />
          </div>
          {/* section 1  */}
          <div className="flex w-full flex-col">
            {/* section 2 */}
            <div className="flex ">
              <div className=" flex flex-col  bg-red-700 items-center text-center justify-center p-8 w-58 h-58 shrink-0
                relative
                after:content-[''] after:absolute after:top-1/2 after:-right-3
                after:w-6 after:h-6
                after:border-t-2 after:border-r-2
                after:bg-red-700
                after:border-red-700
                after:rotate-45 after:-translate-y-1/2
                gap-y-5
                ">
                <Image
                  src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Powersports.avif"
                  alt="Honda Powersports"
                  width={154}
                  height={54}
                  className="object-cover"
                />
                <span className="text-md font-bold">
                  Motorcycles, ATVs, Scooters, SxS
                </span>
                <span className="text-xl underline underline-offset-5 font-bold">GO</span>
              </div>

              {/* Deuxième image */}
              <div className="w-full min-w-0 overflow-hidden">
                <Image
                  src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/desktop/V2/homepage-brand-powersports-desktop.webp"
                  alt="Honda Powersports"
                  width={320}
                  height={90}
                  className="w-[450px] h-[233px] max-w-none object-cover"
                />
              </div>
            </div>

            {/* section 2  */}
            <div className="flex  min-w-0">
              {/* Deuxième image */}
              <div className="w-full min-w-0 overflow-hidden">
                <Image
                  src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/desktop/V2/Honda_Homepage_Menu_Position-03_Acura-Autos_1600x796px.webp"
                  alt="Honda_Homepage_Menu_Position-03_Acura-Autos_1600x796px"
                  width={320}
                  height={100}
                  className="w-[450px] h-[233px] max-w-none object-cover"
                />
              </div>
              <div className="flex flex-col bg-black-500 items-center text-center justify-center p-8 w-58 h-58 shrink-0
              relative
                after:content-[''] after:absolute 
                after:top-1/2 after:-left-3
                after:w-6 after:h-6
                after:border-t-2 after:border-r-2
                after:bg-black
                after:border-black
                after:rotate-45 after:-translate-y-1/2
                gap-y-5
              ">
                <Image
                  src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Acura_Logo.avif"
                  alt="Honda Powersports"
                  width={154}
                  height={54}
                  className="object-cover"
                />
                <span className="text-md font-bold">Acura Autos</span>
                <span className="text-xl underline underline-offset-5 font-bold">GO</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <Image
            src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-mower-desktop-v1.jpg"
            alt="2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS"
            width={400}
            height={400}
            className="w-58 h-58 object-cover"
          />
          <div className="flex flex-col bg-red-700 items-center text-center justify-center p-6 w-58 h-58 shrink-0 
          relative
                after:content-[''] after:absolute after:top-1/2 after:-right-3
                after:w-6 after:h-6
                after:border-t-2 after:border-r-2
                after:bg-red-700
                after:border-red-700
                after:rotate-45 after:-translate-y-1/2
                gap-y-5
          ">
            <Image
              src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Jet.avif"
              alt="Honda Powersports"
              width={154}
              height={54}
              className=" object-cover"
            />
            <span className="text-md font-bold">Honda Aircraft Company</span>
            <span className="text-xl underline underline-offset-5 font-bold">GO</span>
          </div>

          <div className="w-1/2 min-w-0 overflow-hidden">
            <Image
              src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-hondajet-desktop.avif"
              alt="Honda Powersports"
              width={320}
              height={100}
              className="w-[450px] h-[232px] max-w-none object-cover"
            />
          </div>
          <div className="w-1/2 min-w-0 overflow-hidden">
            <Image
              src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/2026-honda-aramco-formula-1-aston-martin-car-profile-view-lr.webp"
              alt="Honda Powersports"
              width={320}
              height={100}
              className="w-[450px] h-[232px] max-w-none object-cover"
            />
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col bg-red-700 items-center text-center justify-center p-8 w-58 h-58 shrink-0
                relative
                after:content-[''] after:absolute after:top-1/2 after:-right-3
                after:w-6 after:h-6
                after:border-t-2 after:border-r-2
                after:bg-red-700
                after:border-red-700
                after:rotate-45 after:-translate-y-1/2
                gap-y-5
          ">
            <Image
              src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Corporate_White.webp"
              alt="Honda Powersports"
              width={154}
              height={54}
              className="object-cover"
            />
            <span className="text-md font-bold">General Purpose Engines</span>
            <span className="text-xl underline underline-offset-5 font-bold">GO</span>
          </div>
          <Image
            src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-engine-desktop.jpg"
            alt="2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS"
            width={300}
            height={400}
            className=" w-[202px] h-[232px] object-cover"
          />

          <Image
            src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-marine-desktop.avif"
            alt="Honda Powersports"
            width={300}
            height={100}
            className="w-[444px] h-[232px] max-w-none object-cover"
          />
          <div className="flex w-full">
            <div className="flex flex-col bg-white text-black items-center text-center justify-center p-8 w-1/2 h-58 shrink-0
                relative
                after:content-[''] after:absolute 
                after:top-1/2 after:-left-3
                after:w-6 after:h-6
                after:border-t-2 after:border-r-2
                after:bg-white
                after:border-white
                after:rotate-45 after:-translate-y-1/2
                gap-y-5
            ">
              <Image
                src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Marine.avif"
                alt="Honda Powersports"
                width={154}
                height={54}
                className="object-cover"
              />
              <span className="text-md font-bold">Outboard Motors</span>
              <span className="text-xl underline underline-offset-5 font-bold">GO</span>
            </div>
            <div className="flex flex-col bg-red-700 items-center justify-center text-center p-8 w-1/2 h-58 shrink-0
                relative
                after:content-[''] after:absolute 
                after:-top-3 after:left-1/2
                after:w-6 after:h-6
                after:border-t-2 after:border-r-2
                after:bg-red-700
                after:border-red-700
                after:rotate-45 after:-translate-x-1/2
                gap-y-5
            ">
              <Image
                src="/media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Racing_v3.svg"
                alt="Honda Powersports"
                width={154}
                height={54}
                className="object-cover"
              />
              <span className="text-md font-bold">HPD is now HRC US</span>
              <span className="text-xl underline underline-offset-5 font-bold">GO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
