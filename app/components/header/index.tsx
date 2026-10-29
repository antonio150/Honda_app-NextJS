import Image from "next/image";


export default function Header(){
    return(
        <main>
            <div className="flex justify-center items-center  ">
            <div className="flex p-4">
                <Image
                    src="/img/header/HondaAutosLogo.svg"
                    alt="Mon logo"
                    width={15}
                    height={15}
                />
                <a href="#">Honda Autos</a>
            </div>
            <div className="flex p-4">
                <Image
                    src="/img/header/AcuraLogo.svg"
                    alt="Mon logo"
                    width={15}
                    height={15}
                />
                <a href="#">Acura Autos</a>
            </div>
            <div className="flex p-4">
                <Image
                    src="/img/header/PowersportsLogo.svg"
                    alt="Mon logo"
                    width={15}
                    height={15}
                />
                <a href="#">Powersports</a>
            </div>
            <div className="flex p-4">
                <Image
                    src="/img/header/PowerEquipmentLogo.svg"
                    alt="Mon logo"
                    width={15}
                    height={15}
                />
                <a href="#">Power Equipement</a>
            </div>
            <div className="flex p-4">
                <Image
                    src="/img/header/EnginesLogo.svg"
                    alt="Mon logo"
                    width={15}
                    height={15}
                />
                <a href="#">Engines</a>
            </div>
            <div className="flex p-4">
                <Image
                    src="/img/header/HondaJetLogo.svg"
                    alt="Mon logo"
                    width={15}
                    height={15}
                />
                <a href="#">Honda Jet</a>
            </div>
            <div className="flex p-4">
                <Image
                    src="/img/header/FinancialServicesLogo.svg"
                    alt="Mon logo"
                    width={15}
                    height={15}
                />
                <a href="#">Financial Services</a>
            </div>
            <div className="flex p-4">
                <Image
                    src="/img/header/MarineLogo.svg"
                    alt="Mon logo"
                    width={15}
                    height={15}
                />
                <a href="#">Marine</a>
            </div>
            <div className="flex p-4">
                <Image
                    src="/img/header/HondaRacingLogo.svg"
                    alt="Mon logo"
                    width={15}
                    height={15}
                />
                <a href="#">Honda Racing</a>
            </div>
            </div>
        </main>
    )
}