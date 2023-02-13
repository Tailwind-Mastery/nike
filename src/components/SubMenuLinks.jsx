import { useEffect, useState } from "react";
import { Link, Navigate, useHref, useNavigate } from "react-router-dom";

export default function SubMenuLinks() {

    const [dataLinks, setDataLinks] = useState([]);
    const [title, setTitle] = useState('');
    
    const href = useHref();
    const navigate = useNavigate();

    const changeData = () => {
        
        if(href == '#/menu/newArrivals') {

            setDataLinks([
                {id: 1, href: '/menu/shop', subTitle: 'Shop All New'},
                {id: 2, href: '/menu/newRunning', subTitle: 'New in Running: Invincible 3'},
                {id: 3, href: '/menu/upcoming', subTitle: 'New And Upcoming Drops'},
                {id: 4, href: '/menu/launch', subTitle: 'SNRKS Launch Calender'},
            ])
            setTitle('New Arrivals')

        } else if(href == '#/menu/men') {

            setDataLinks([
                {id: 1, href: '/menu/newArrivals', subTitle: 'New Arrivals'},
                {id: 2, href: '/menu/newRunning', subTitle: 'New in Running: Invincible 3'},
                {id: 3, href: '/menu/shoes', subTitle: 'Shoes'},
                {id: 4, href: '/menu/clothing', subTitle: 'Clothing'},
                {id: 5, href: '/menu/sport', subTitle: 'Shop By Sport'},
                {id: 6, href: '/menu/customize', subTitle: 'Customize with Nike by you'},
                {id: 7, href: '/menu/sale', subTitle: 'Sale'},
                {id: 8, href: '/menu/bestSeller', subTitle: 'Best Sellers'},
            ])
            setTitle('Men')
            
        } else if(href == '#/menu/women') {

            setDataLinks([
                {id: 1, href: '/menu/newArrivals', subTitle: 'New Arrivals'},
                {id: 2, href: '/menu/newRunning', subTitle: 'New in Running: Invincible 3'},
                {id: 3, href: '/menu/shoes', subTitle: 'Shoes'},
                {id: 4, href: '/menu/clothing', subTitle: 'Clothing'},
                {id: 5, href: '/menu/sport', subTitle: 'Shop By Sport'},
                {id: 6, href: '/menu/customize', subTitle: 'Customize with Nike by you'},
                {id: 7, href: '/menu/sale', subTitle: 'Sale'},
                {id: 8, href: '/menu/bestSeller', subTitle: 'Best Sellers'},
            ])
            setTitle('Women')
            
        } else if(href == '#/menu/kids') {

            setDataLinks([
                {id: 1, href: '/menu/newArrivals', subTitle: 'New Arrivals'},
                {id: 3, href: '/menu/shoes', subTitle: 'Shoes'},
                {id: 4, href: '/menu/clothing', subTitle: 'Clothing'},
                {id: 5, href: '/menu/sport', subTitle: 'Sport And Acticity'},
                {id: 6, href: '/menu/bigKids', subTitle: 'Big Kids'},
                {id: 7, href: '/menu/littleKids', subTitle: 'Little Kids'},
                {id: 8, href: '/menu/baby', subTitle: 'Baby And Toddlers'},
                {id: 9, href: '/menu/extended', subTitle: 'Extended Sizes'},
                {id: 10, href: '/menu/sale', subTitle: 'Sale'},
                {id: 11, href: '/menu/bestSeller', subTitle: 'Best Sellers'},
            ])
            setTitle('Kids')
            
        } else if(href == '#/menu/accesories') {

            setDataLinks([
                {id: 1, href: '/menu/shop', subTitle: 'Shop All'},
                {id: 3, href: '/menu/jordan', subTitle: 'Jordan'},
                {id: 4, href: '/menu/socks', subTitle: 'Socks'},
                {id: 5, href: '/menu/bags', subTitle: 'Bags And Backpack'},
                {id: 6, href: '/menu/hats', subTitle: 'Hats And Headwear'},
                {id: 7, href: '/menu/sunglasses', subTitle: 'Sunglasses And Eyewear'},
                {id: 8, href: '/menu/sport', subTitle: 'Shop By Sport'},
            ])
            setTitle('Accesories')
            
        }  else if(href == '#/menu/sale') {

            setDataLinks([
                {id: 1, href: '/menu/shop', subTitle: 'Shop All'},
                {id: 3, href: '/menu/shoes', subTitle: 'Sale Shoes'},
                {id: 4, href: '/menu/clothing', subTitle: 'Sale Clothing'},
                {id: 5, href: '/menu/last', subTitle: 'Last Chance'},
            ])
            setTitle('Sale')
            
        }
    }

    useEffect(()=> {
        changeData();
    }, [])
    
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="flex flex-col gap-10 lg:px-10 px-5 py-4 border-t">
                
                <div className="flex flex-col gap-5">

                    <Link to={'/menu/'} className="flex items-center gap-10 justify-between">
                        <h3 className="text-xl">
                            Go Back To Menu
                        </h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </Link>

                    <h3 className="text-2xl font-medium">
                        {title}
                    </h3>

                    {
                        dataLinks.map(({id, href, subTitle}) => {
                            return (
                                <Link key={id} to={href} className="flex items-center gap-10 justify-between">
                                    <h3 className="text-xl">
                                        {subTitle}
                                    </h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </Link>
                            )
                        })
                    }

                    

                </div>
                
            </div>
        </div> 
    )
}