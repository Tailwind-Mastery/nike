import { Link } from "react-router-dom";
import superbowl1 from '../assets/superbowl1.jpg'

export default function SuperBowl() {
    return (
        <div className="flex flex-col lg:px-10 px-5 lg:gap-10 gap-5">

            <h2 className="md:text-3xl text-xl font-medium">
                Super Bowl LVII
            </h2>

            <div className="">
                <img src={superbowl1} alt="nike-superbowl1" className="object-cover w-full md:h-full h-96 rounded 2xl:h-[60rem]"/>
            </div>
            <div className="flex flex-col gap-5 lg:items-center">
                <h2>
                    <Link to={'/'} className="text-6xl font-bold tracking-tight">
                        NEVER DONE
                    </Link>
                </h2>

                <p className="">
                    Get readdy for the biggest show in gridiron
                </p>

                <Link to={'/'} className="rounded-full px-5 py-2 bg-black text-white hover:bg-indigo-700 w-fit">
                    Shop
                </Link>
            </div>
        </div>
    )
}