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

const tileLayouts = [
  { grid: "sm:col-span-9 md:col-span-6 lg:col-span-6", flow: "flex-row", brand: "basis-1/3", image: "", vertical: "" },
  { grid: "sm:col-span-3 md:col-span-6 lg:col-span-6", flow: "flex-row-reverse sm:flex-col md:flex-row-reverse", brand: "basis-1/3 sm:w-full sm:basis-auto md:w-auto md:basis-1/3", image: "sm:w-full sm:flex-none sm:aspect-[2/1] md:w-auto md:flex-1 md:aspect-auto", vertical: "sm" },
  { grid: "sm:col-span-9 md:col-span-6 lg:col-span-6", flow: "flex-row", brand: "basis-1/3", image: "", vertical: "" },
  { grid: "sm:col-span-6 md:col-span-6 lg:col-span-6", flow: "flex-row-reverse", brand: "basis-1/3 sm:basis-1/2 md:basis-1/2 lg:basis-1/3", image: "", vertical: "" },
  { grid: "sm:col-span-6 md:col-span-6 lg:col-span-6", flow: "flex-row", brand: "basis-1/3 sm:basis-1/2 md:basis-1/2 lg:basis-1/3", image: "", vertical: "" },
  { grid: "sm:col-span-6 md:col-span-4 lg:col-span-4", flow: "flex-row-reverse", brand: "basis-1/3 sm:basis-1/2", image: "", vertical: "" },
  { grid: "sm:col-span-3 md:col-span-2 lg:col-span-2", flow: "flex-row sm:flex-col", brand: "basis-1/3 sm:w-full sm:basis-auto", image: "sm:w-full sm:flex-none sm:aspect-[2/1]", vertical: "sm" },
  { grid: "sm:col-span-6 md:col-span-4 lg:col-span-4", flow: "flex-row-reverse lg:flex-col", brand: "basis-1/3 sm:basis-1/2 md:basis-1/2 lg:w-full lg:basis-auto", image: "lg:w-full lg:flex-none lg:aspect-[2/1]", vertical: "lg" },
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
      tone: "black",
    },
    {
      text:"Acura Autos",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Acura_Logo.avif",
      label_logo: "Logo_Acura_Logo",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/desktop/V2/Honda_Homepage_Menu_Position-03_Acura-Autos_1600x796px.webp",
      label_image: "Honda_Homepage_Menu_Position-03_Acura-Autos_1600x796px",
      tone: "red",
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
      tone: "red",
    },
    {
      text:"Outboard Motors",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Marine.avif",
      label_logo: "Logo_Honda_Marine",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-marine-desktop.avif",
      label_image: "homepage-brand-marine-desktop",
      tone: "grey",
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
      tone: "red",
    },
  ];

  return (
    <section
      aria-label="Honda products"
      className="grid grid-cols-12 gap-0"
    >
      {products.map((product, index) => {
        const layout = tileLayouts[index];
        const isReverse = index % 2 === 1;
        const brandTone = brandTones[product.tone];
        const arrowDirection = layout.vertical === "sm"
          ? `sm:after:left-1/2 sm:after:right-auto sm:after:top-auto sm:after:bottom-[-15px] sm:after:-translate-x-1/2 sm:after:translate-y-0 sm:after:border-t-[15px] sm:after:border-r-[15px] sm:after:border-b-0 sm:after:border-l-[15px] sm:after:border-r-transparent sm:after:border-l-transparent ${brandTone.arrowDown} ${isReverse ? `md:after:left-[-15px] md:after:right-auto md:after:top-1/2 md:after:bottom-auto md:after:translate-x-0 md:after:-translate-y-1/2 md:after:border-r-[15px] md:after:border-l-0 md:after:border-t-transparent md:after:border-b-transparent ${brandTone.arrowToLeft}` : `md:after:right-[-15px] md:after:left-auto md:after:top-1/2 md:after:bottom-auto md:after:translate-x-0 md:after:-translate-y-1/2 md:after:border-l-[15px] md:after:border-r-0 md:after:border-t-transparent md:after:border-b-transparent ${brandTone.arrowToRight}`}`
          : layout.vertical === "lg"
            ? `lg:after:left-1/2 lg:after:right-auto lg:after:top-auto lg:after:bottom-[-15px] lg:after:-translate-x-1/2 lg:after:translate-y-0 lg:after:border-t-[15px] lg:after:border-r-[15px] lg:after:border-b-0 lg:after:border-l-[15px] lg:after:border-r-transparent lg:after:border-l-transparent ${brandTone.arrowDown}`
            : "";

        return (
          <article
            key={product.label_image}
            className={`relative col-span-12 flex min-w-0 overflow-hidden bg-[#f2f2f2] ${layout.grid} ${layout.flow}`}
          >
            <div
              className={`relative z-[1] flex aspect-square min-w-0 shrink-0 self-start flex-col items-start justify-center gap-3 p-4 after:absolute after:top-1/2 after:z-[2] after:h-0 after:w-0 after:-translate-y-1/2 after:border-solid after:border-t-[15px] after:border-b-[15px] after:border-t-transparent after:border-b-transparent after:content-[''] md:gap-[14px] md:p-[18px] ${layout.brand} ${brandTone.background} ${brandTone.textColor} ${isReverse ? `after:left-[-15px] after:border-r-[15px] after:border-l-0 ${brandTone.arrowToLeft}` : `after:right-[-15px] after:border-l-[15px] ${brandTone.arrowToRight}`} ${arrowDirection}`}
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
            <div className={`relative min-w-0 flex-1 bg-[#111111] ${layout.image}`}>
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
