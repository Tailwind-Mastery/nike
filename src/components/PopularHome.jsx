import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import shoes2 from '../assets/shoes2.jpg'
import shoes3 from '../assets/shoes3.jpg'
import shoes4 from '../assets/shoes4.jpg'

export default function PopularHome() {

    const [shoes, setShoes] = useState([]);
    
    useEffect(()=> {
        setShoes([
            {id: 1, name: 'Nike Air Max', img: shoes2, type: 'Kids Shoes'},
            {id: 2, name: 'Nike Air Jordan', img: shoes3, type: 'Mens Shoes'},
            {id: 3, name: 'Nike Air Max', img: shoes4,  type: 'Womens Shoes'},
            {id: 4, name: 'Nike Air Max', img: shoes2, type: 'Kids Shoes'},
            {id: 5, name: 'Nike Air Jordan', img: shoes3, type: 'Mens Shoes'},
            {id: 6, name: 'Nike Air Max', img: shoes4,  type: 'Womens Shoes'},
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

            <div className="overflow-auto flex gap-10 pb-5">

                { shoes.map(({id, name, img, type}) => {
                        return (
                            <div key={id} className="flex flex-col gap-2 min-w-max xl:min-w-fit">
                                <img src={img} alt="nike-shoes-random-looped" className="object-cover w-80 h-96 md:w-[30rem] md:h-[25rem] rounded"/>
                                <div className="flex flex-col px-5">
                                    <Link to={'/'} className="text-lg font-medium">
                                        {name} {id} 
                                    </Link>
                                    <p className="text-slate-500 text-sm">
                                        {type}
                                    </p>
                                </div>
                            </div>
                        )
                    }) }
                            
            </div>

            
        </div>
    )
}