import { Link } from "react-router-dom";
import trending1 from '../assets/trending1.jpg'

export default function TrendingHome() {
    return (
        <div className="flex flex-col lg:px-10 px-5 lg:gap-10 gap-5">

            <h2 className="md:text-3xl text-xl font-medium">
                Trending Now
            </h2>
            
            <div className="">
                <img src={trending1} alt="nike-trending1" className="w-full object-cover h-96 md:h-[35rem] lg:h-[45rem] xl:h-[50rem] rounded"/>
            </div>
            <div className="flex flex-col gap-5 lg:items-center">
                <h1>
                    <Link to={'/'} className="text-6xl font-bold tracking-tighter">
                        THE SWOOSH GOES RUNAWAY
                    </Link>
                </h1>

                <p className="">
                    Shop pieces from bold designers in New York, Loving !
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 items-start lg:justify-center">

                <Link to={'/'} className="rounded-full px-5 py-2 bg-black text-white hover:bg-yellow-700">
                    Shop Runaway Looks
                </Link>
            </div>
        </div>
    )
}