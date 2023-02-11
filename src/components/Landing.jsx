import { Link } from "react-router-dom";
import shoes1 from '../assets/shoes1.jpg'

export default function Landing() {
    return (
        <div className="flex flex-col lg:px-10 px-5 lg:gap-10 gap-5">
            <div className="">
                <img src={shoes1} alt="nike-shoes1" className="w-full object-cover h-96 md:h-[35rem] lg:h-[45rem] xl:h-[50rem] rounded"/>
            </div>
            <div className="flex flex-col gap-5 lg:items-center">
                <h1>
                    <Link to={'/'} className="text-6xl font-bold tracking-tighter">
                        EYE CATCHING AIR
                    </Link>
                </h1>

                <p className="">
                    Bold styles like the neon-popping Air Max SYSTM, add flavour to your fit
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 items-start lg:justify-center">

                <Link to={'/'} className="rounded-full px-5 py-2 bg-black text-white hover:bg-blue-700">
                    Shop Men's Air
                </Link>
                <Link to={'/'} className="rounded-full px-5 py-2 bg-black text-white hover:bg-blue-700">
                    Shop Women's Air
                </Link>
                <Link to={'/'} className="rounded-full px-5 py-2 bg-black text-white hover:bg-blue-700">
                    Shop Kid's Air
                </Link>
            </div>
        </div>
    )
}