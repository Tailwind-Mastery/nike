import { Link } from "react-router-dom";
import yoga1 from '../assets/yoga1.jpg'

export default function YogaHome() {
    return (
        <div className="flex flex-col lg:px-10 px-5 lg:gap-10 gap-5">

            <h2 className="md:text-3xl text-xl font-medium">
                Statement Yoga Collection
            </h2>
            
            <div className="">
                <img src={yoga1} alt="nike-yoga1" className="w-full object-cover h-96 md:h-[35rem] lg:h-[45rem] xl:h-[50rem] rounded"/>
            </div>
            <div className="flex flex-col gap-5 lg:items-center">
                <h1>
                    <Link to={'/'} className="text-6xl font-bold tracking-tighter">
                        REACH FUTRTHER
                    </Link>
                </h1>

                <p className="">
                    Elevate your energy in yoga pieces that move and breathe with you.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 items-start lg:justify-center">

                <Link to={'/'} className="rounded-full px-5 py-2 bg-black text-white hover:bg-orange-700">
                    Shop Men's Yoga
                </Link>

                <Link to={'/'} className="rounded-full px-5 py-2 bg-black text-white hover:bg-orange-700">
                Shop Women's Yoga
                </Link>
            </div>
        </div>
    )
}