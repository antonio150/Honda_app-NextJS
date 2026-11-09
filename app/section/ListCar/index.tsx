"use client";

export default function ListCar() {

  const image =[
    {
      text:"Honda Autos",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Autos.avif",
      label_logo: "Logo_Honda_Autos",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS.webp",
      label_image: "2026-honda-prelude-hybrid-boost-blue-pearl-three-quarter-LS",
    },
    {
    text: "Motorcycles, ATVs, Scooters, SxS",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Powersports.avif",
      label_logo: "Logo_Honda_Powersports",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/desktop/V2/homepage-brand-powersports-desktop.webp",
      label_image: "homepage-brand-powersports-desktop",
    },
    {
      text:"Acura Autos",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Acura_Logo.avif",
      label_logo: "Logo_Acura_Logo",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/Honda-Product-offering/desktop/V2/Honda_Homepage_Menu_Position-03_Acura-Autos_1600x796px.webp",
      label_image: "Honda_Homepage_Menu_Position-03_Acura-Autos_1600x796px",
    },
    {
      text:"Generators, Mowers & Power Equipment",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Corporate_Red.avif",
      label_logo: "Logo_Honda_Corporate_Red",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-mower-desktop-v1.jpg",
      label_image: "homepage-brand-mower-desktop-v1",
    },
    {
      text:"General Purpose Engines",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Corporate_White.webp",
      label_logo: "Logo_Honda_Corporate_White",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-engine-desktop.jpg",
      label_image: "homepage-brand-engine-desktop",
    },
    {
      text:"Outboard Motors",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Marine.avif",
      label_logo: "Logo_Honda_Marine",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-marine-desktop.avif",
      label_image: "homepage-brand-marine-desktop",
    },
    {
      text:"Honda Aircraft Company",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Jet.avif",
      label_logo: "Logo_Honda_Jet",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/homepage-brand-hondajet-desktop.avif",
      label_image: "homepage-brand-hondajet-desktop",
    },
    {
      text:"HPD is now HRC US",
      src_logo: "media/Honda-Homepage/Images/Homepage/Product-Offering/Logos/Logo_Honda_Racing_v3.svg",
      label_logo: "Logo_Honda_Racing_v3",
      src_image: "media/Honda-Homepage/Images/Homepage/Product-Offering/Pictures/desktop/2026-honda-aramco-formula-1-aston-martin-car-profile-view-lr.webp",
      label_image: "2026-honda-aramco-formula-1-aston-martin-car-profile-view-lr",
    },
    
  ]
  return (
    <div>
      <div className="product-grid">
        <div className="logo">
          <span
            className="text right honda-blue
      relative inline-block bg-[#007CC2] text-white px-5 py-2 font-bold
      after:content-[''] after:absolute after:block
      after:right-[-13px] after:top-[40%]
      after:w-0 after:border-solid
      after:border-t-[15px] after:border-r-0
      after:border-b-[15px] after:border-l-[15px]
      after:border-t-transparent after:border-b-transparent
      after:border-l-[#007CC2]
      after:z-[1]"
          >
            HONDA
          </span>
        </div>
      </div>

      <div>
        <div>

        </div>
      </div>
      
    </div>
  );
}
