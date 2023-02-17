import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/logo.png'


export default function NewsletterForm() {

    const navigate = useNavigate();



    return (
        <div className="2xl:container 2xl:mx-auto">

            <div className="lg:w-3/4 lg:mx-auto">

                <div className="flex flex-col items-center py-10 px-5 gap-8">
                    
                    <div className="flex items-center justify-center w-full relative">

                        <img src={Logo} alt="nike-logo" className="w-16"/>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 absolute right-0" onClick={() => navigate(-1)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        
                    </div>

                    <h1 className="font-medium text-2xl">
                        BE THE FIRST TO KNOW
                    </h1>
                    
                    <p className="text-slate-500 text-center">
                        Sign up for Nike emails to be the first to see inspiring content, news and exclusive offers.
                    </p>

                    <div className="flex flex-col gap-3 w-5/6">

                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="tracking-tight">
                                Email Address
                            </label>
                            <input id="email" type="email" className="px-5 py-2 rounded border placeholder:text-neutral-400 outline-none" placeholder="Email Address"/>
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <label htmlFor="date" className="tracking-tight">
                                Date Of Birth
                            </label>
                            <input type="date" id="date" className="px-5 py-2 rounded border text-neutral-400 outline-none"/>
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <label className="tracking-tight">
                                Shopping Preference
                            </label>
                            <select name="shop" className="px-5 py-2 rounded border  text-neutral-400 outline-none">
                                <option value="Choose" selected>
                                    Choose
                                </option>
                                <option value="Men">
                                    Men's
                                </option>
                                <option value="Women">
                                    Women's
                                </option>
                            </select>
                        </div>
                        
                    </div>

                    <Link to={'/'} className="bg-black text-white font-medium text-center py-2 rounded w-5/6 md:w-fit px-5">
                        Sign Up
                    </Link>
                    
                    <p className="text-slate-500 text-center text-sm">
                        By signing up, you agree to Nike's&nbsp;
                        <Link to={'/'} className="underline text-slate-700 text-sm">
                            Privacy Policy
                        </Link> 
                        &nbsp;and&nbsp; 
                        <Link to={'/'} className="underline text-slate-700 text-sm">
                            Terms of Use
                        </Link>.
                    </p>
                    
                </div>

            </div>

        </div> 
    )
}