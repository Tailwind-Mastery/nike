import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import trail1 from '../assets/trail1.jpg'
import style1 from '../assets/style1.jpg'
import bounce1 from '../assets/bounce1.jpg'
import walk1 from '../assets/walk1.jpg'

export default function FeaturedHome() {

    const [shoes, setShoes] = useState([]);
    
    useEffect(()=> {
        setShoes([
            {id: 1, name: 'Pegasus Trail 4 GORE-TEXT', img: trail1, type: 'Shop Nike Trail'},
            {id: 2, name: 'Walk With Style', img: style1, type: 'Shop Nike Wear'},
            {id: 3, name: 'Bounce And Run', img: bounce1,  type: 'Shop Nike Bounce'},
            {id: 4, name: 'Sophisticated Walk', img: walk1, type: 'Shop Nike Nuclear'},
        ]);
    }, [])
    
    return (
        <div className="flex flex-col lg:px-10 px-5 lg:gap-10 gap-5">

            <div className="flex justify-between items-center">
                <h2 className="md:text-3xl text-xl font-medium">
                    Popular Right Now
                </h2>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                { shoes.map(({id, name, img, type}) => {
                        return (
                            <div key={id} className="flex flex-col gap-2 relative">
                                <img src={img} alt={name} className="object-cover w-full h-96 2xl:h-[40rem] brightness-75"/>
                                <div className="flex flex-col px-5 absolute bottom-10 gap-2 items-start xl:left-10">
                                    <Link to={'/'} className="xl:text-3xl text-2xl font-medium text-white backdrop-blur px-1 py-1.5">
                                        {name} {id} 
                                    </Link>
                                    <Link to={'/'} className="bg-black rounded-full px-5 py-2 text-white hover:bg-green-700">
                                        {type} 
                                    </Link>
                                </div>
                            </div>
                        )
                    }) }
                            
            </div>

            
        </div>
    )
}