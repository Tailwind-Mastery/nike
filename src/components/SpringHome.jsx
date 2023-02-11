import { Link } from "react-router-dom";
import football1 from '../assets/football1.jpg'
import golf1 from '../assets/golf1.jpg'
import baseball1 from '../assets/baseball1.jpg'

export default function SpringHome() {
    return (
        <div className="flex flex-col lg:px-10 px-5 lg:gap-10 gap-5">

            <div className="flex justify-between items-center">
                <h2 className="md:text-3xl text-xl font-medium">
                    Gear Up for Spring Sports
                </h2>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 xl:hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
            </div>

            <div className="overflow-auto flex gap-10 pb-5 xl:overflow-clip xl:grid xl:grid-cols-3">
                <div className="flex flex-col gap-2 min-w-max xl:min-w-fit">
                    <img src={football1} alt="nike-football1" className="object-cover w-80 md:w-[40rem] md:h-[30rem] xl:w-full h-96 xl:h-full xl:w-full rounded"/>
                    <Link to={'/'} className="text-center text-lg font-medium">
                        Football Gear 
                    </Link>
                </div>
                <div className="flex flex-col gap-2 min-w-max xl:min-w-fit">
                    <img src={golf1} alt="nike-golf1" className="object-cover w-80 md:w-[40rem] md:h-[30rem] xl:w-full h-96 xl:h-full xl:w-full rounded"/>
                    <Link to={'/'} className="text-center text-lg font-medium">
                        Golf Gear 
                    </Link>
                </div>
                <div className="flex flex-col gap-2 min-w-max xl:min-w-fit">
                    <img src={baseball1} alt="nike-baseball1" className="object-cover w-80 md:w-[40rem] md:h-[30rem] xl:w-full h-96 xl:h-full xl:w-full rounded"/>
                    <Link to={'/'} className="text-center text-lg font-medium">
                        Baseball Gear 
                    </Link>
                </div>

            </div>
            

            
        </div>
    )
}