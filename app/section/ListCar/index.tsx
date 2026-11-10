import Image from "next/image";

type BrandTone = "blue" | "red" | "black" | "grey";

const brandTones: Record<BrandTone, { background: string; textColor: string; arrowToRight: string; arrowToLeft: string; arrowDown: string }> = {
  blue: {
    background: "bg-[#007CC2]",
    textColor: "text-white",
    arrowToRight: "after:border-l-[#007CC2]",
    arrowToLeft: "after:border-r-[#007CC2]",
    arrowDown: "after:border-t-[#007CC2]",
  },
  red: {
    background: "bg-[#C8102E]",
    textColor: "text-white",
    arrowToRight: "after:border-l-[#C8102E]",
    arrowToLeft: "after:border-r-[#C8102E]",
    arrowDown: "after:border-t-[#C8102E]",
  },
  black: {
    background: "bg-[#111111]",
    textColor: "text-white",
    arrowToRight: "after:border-l-[#111111]",
    arrowToLeft: "after:border-r-[#111111]",
    arrowDown: "after:border-t-[#111111]",
  },
  grey: {
    background: "bg-[#F2F2F2]",
    textColor: "text-[#111111]",
    arrowToRight: "after:border-l-[#F2F2F2]",
    arrowToLeft: "after:border-r-[#F2F2F2]",
    arrowDown: "after:border-t-[#F2F2F2]",
  },
};

const desktopPlacements = [
  "md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-1",
  "md:col-span-2 md:col-start-5 md:row-start-1",
  "md:row-span-2 md:col-start-3 md:row-start-1",
  "md:row-span-2 md:col-start-4 md:row-start-1",
  "md:col-span-2 md:col-start-5 md:row-start-2",
  "md:col-span-2 md:col-start-1 md:row-start-3",
  "md:col-span-2 md:col-start-3 md:row-start-3",
  "md:col-span-2 md:col-start-5 md:row-start-3",
];

export default function ListCar() {

  const products: Array<{
    text: string;
    src_logo: string;
    label_logo: string;
    src_image: string;
    label_image: string;
    tone: BrandTone;
  }> = [
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
      tone: "grey",
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
      className="grid grid-cols-1 gap-0 md:auto-rows-[16.6667vw] md:grid-cols-6 md:gap-0"
    >
      {products.map((product, index) => {
        const isFeature = index === 0;
        const isVertical = index === 2 || index === 3;
        const isReverse = index % 2 === 1;
        const brandTone = brandTones[product.tone];
        const arrowDirection = isVertical
          ? `md:after:left-1/2 md:after:right-auto md:after:top-auto md:after:bottom-[-15px] md:after:-translate-x-1/2 md:after:translate-y-0 md:after:border-t-[15px] md:after:border-r-[15px] md:after:border-b-0 md:after:border-l-[15px] md:after:border-r-transparent md:after:border-l-transparent ${brandTone.arrowDown}`
          : "";

        return (
          <article
            key={product.label_image}
            className={`relative flex aspect-[2/1] overflow-hidden bg-[#f2f2f2] md:aspect-auto ${isReverse ? "flex-row-reverse" : "flex-row"} ${isVertical ? "md:flex-col" : "md:flex-row"} ${desktopPlacements[index]}`}
          >
            <div
              className={`relative z-[1] flex min-w-0 flex-[0_0_50%] flex-col items-start justify-center gap-3 p-4 after:absolute after:top-1/2 after:z-[2] after:h-0 after:w-0 after:-translate-y-1/2 after:border-solid after:border-t-[15px] after:border-b-[15px] after:border-t-transparent after:border-b-transparent after:content-[''] md:flex-[0_0_50%] md:gap-[14px] md:p-[18px] ${brandTone.background} ${brandTone.textColor} ${isFeature ? "md:absolute md:left-0 md:top-0 md:h-1/2 md:w-1/2" : ""} ${isReverse ? `after:left-[-15px] after:border-r-[15px] after:border-l-0 ${brandTone.arrowToLeft}` : `after:right-[-15px] after:border-l-[15px] ${brandTone.arrowToRight}`} ${arrowDirection}`}
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
            <div className={`relative min-w-0 flex-1 bg-[#111111] ${isFeature ? "md:absolute md:inset-0" : ""}`}>
              <Image
                src={`/${product.src_image}`}
                alt={product.text}
                fill
                sizes="(max-width: 759px) 60vw, (max-width: 1200px) 45vw, 35vw"
                className="object-cover md:object-contain"
              />
            </div>
          </article>
        );
      })}
    </section>
  );
}
