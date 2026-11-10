import Image from "next/image";

const brandTones: Record<string, { background: string; arrowToRight: string; arrowToLeft: string }> = {
  blue: {
    background: "bg-[#007CC2]",
    arrowToRight: "after:border-l-[#007CC2]",
    arrowToLeft: "after:border-r-[#007CC2]",
  },
  red: {
    background: "bg-[#C8102E]",
    arrowToRight: "after:border-l-[#C8102E]",
    arrowToLeft: "after:border-r-[#C8102E]",
  },
  black: {
    background: "bg-[#111111]",
    arrowToRight: "after:border-l-[#111111]",
    arrowToLeft: "after:border-r-[#111111]",
  },
};

export default function ListCar() {

  const products = [
    {
      text:"Honda Autos",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Autos.avif",
      label_logo: "Logo_Honda_Autos",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS.webp",
      label_image: "2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS",
      tone: "blue",
    },
    {
    text: "Motorcycles, ATVs, Scooters, SxS",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Powersports.avif",
      label_logo: "Logo_Honda_Powersports",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/desktop/V2/homepage-brand-powersports-desktop.webp",
      label_image: "homepage-brand-powersports-desktop",
      tone: "red",
    },
    {
      text:"Acura Autos",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Acura_Logo.avif",
      label_logo: "Logo_Acura_Logo",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/desktop/V2/Honda_Homepage_Menu_Position-03_Acura-Autos_1600x796px.webp",
      label_image: "Honda_Homepage_Menu_Position-03_Acura-Autos_1600x796px",
      tone: "black",
    },
    {
      text:"Generators, Mowers & Power Equipment",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Corporate_Red.avif",
      label_logo: "Logo_Honda_Corporate_Red",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-mower-desktop-v1.jpg",
      label_image: "homepage-brand-mower-desktop-v1",
      tone: "red",
    },
    {
      text:"General Purpose Engines",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Corporate_White.webp",
      label_logo: "Logo_Honda_Corporate_White",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-engine-desktop.jpg",
      label_image: "homepage-brand-engine-desktop",
      tone: "black",
    },
    {
      text:"Outboard Motors",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Marine.avif",
      label_logo: "Logo_Honda_Marine",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-marine-desktop.avif",
      label_image: "homepage-brand-marine-desktop",
      tone: "blue",
    },
    {
      text:"Honda Aircraft Company",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Jet.avif",
      label_logo: "Logo_Honda_Jet",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-hondajet-desktop.avif",
      label_image: "homepage-brand-hondajet-desktop",
      tone: "red",
    },
    {
      text:"HPD is now HRC US",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Racing_v3.svg",
      label_logo: "Logo_Honda_Racing_v3",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/2026-honda-aramco-formula-1-aston-martin-car-profile-view-lr.webp",
      label_image: "2026-honda-aramco-formula-1-aston-martin-car-profile-view-lr",
      tone: "black",
    },
  ];

  return (
    <section
      aria-label="Honda products"
      className="grid grid-cols-1 gap-3 px-4 py-5 md:grid-flow-dense md:auto-rows-[190px] md:grid-cols-4 md:gap-[14px] md:px-[5vw] md:py-9"
    >
      {products.map((product, index) => {
        const isFeature = index === 0;
        const isWide = index === 1 || index === 5;
        const isTall = index === 2;
        const isReverse = index % 2 === 1;
        const brandTone = brandTones[product.tone];

        return (
          <article
            key={product.label_image}
            className={`flex min-h-[190px] overflow-hidden bg-[#f2f2f2] md:min-h-0 ${isReverse ? "flex-row-reverse" : ""} ${isFeature ? "md:col-span-2 md:row-span-2" : ""} ${isWide ? "md:col-span-2" : ""} ${isTall ? "md:row-span-2" : ""}`}
          >
            <div
              className={`relative z-[1] flex min-w-0 flex-[0_0_42%] flex-col items-start justify-center gap-3 p-4 text-white md:flex-[0_0_38%] md:gap-[14px] md:p-[18px] after:absolute after:top-1/2 after:z-[2] after:h-0 after:w-0 after:-translate-y-1/2 after:border-solid after:border-t-[15px] after:border-b-[15px] after:border-t-transparent after:border-b-transparent after:content-[''] ${brandTone.background} ${isFeature ? "md:flex-[0_0_34%]" : ""} ${isReverse ? `after:left-[-15px] after:border-r-[15px] after:border-l-0 ${brandTone.arrowToLeft}` : `after:right-[-15px] after:border-l-[15px] ${brandTone.arrowToRight}`}`}
            >
              <div className="relative h-11 w-full max-w-[170px]">
                <Image
                  src={`/${product.src_logo}`}
                  alt={product.label_logo}
                  fill
                  sizes="(max-width: 759px) 40vw, 20vw"
                  className="object-contain object-left"
                />
              </div>
              <p className="m-0 break-words text-[0.9rem] font-semibold leading-[1.25]">
                {product.text}
              </p>
              <span className="text-[0.8rem] font-bold underline underline-offset-[3px]">
                GO
              </span>
            </div>
            <div className="relative min-w-0 flex-1">
              <Image
                src={`/${product.src_image}`}
                alt={product.text}
                fill
                sizes="(max-width: 759px) 60vw, (max-width: 1200px) 45vw, 35vw"
                className="object-cover"
              />
            </div>
          </article>
        );
      })}
    </section>
  );
}
