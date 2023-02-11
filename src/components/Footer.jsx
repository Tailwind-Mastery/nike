import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="bg-black">
            <div className="2xl:container 2xl:mx-auto flex flex-col gap-10 p-10 text-white/75 text-sm tracking-tight">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
                        <div className="flex flex-col gap-5 font-bold text-white">
                            <Link to={'/'}>
                                GIFT CARDS
                            </Link>
                            <Link to={'/'}>
                                PROMOTIONS
                            </Link>
                            <Link to={'/'}>
                                FIND A STORE
                            </Link>
                            <Link to={'/'}>
                                SIGN UP FOR EMAIL
                            </Link>
                            <Link to={'/'}>
                                BECOME A MEMBER
                            </Link>
                            <Link to={'/'}>
                                NIKE JOURNAL
                            </Link>
                            <Link to={'/'}>
                                SEND US FEEDBACK
                            </Link>
                        </div>
                        <div className="flex flex-col gap-5">
                            <Link to={'/'} className="font-bold text-white">
                                GET HELP
                            </Link>
                            <Link to={'/'}>
                                Order Status
                            </Link>
                            <Link to={'/'}>
                                Shipping And Delivery
                            </Link>
                            <Link to={'/'}>
                                Returns
                            </Link>
                            <Link to={'/'}>
                                Payment Options
                            </Link>
                            <Link to={'/'}>
                                Gift Card Balance
                            </Link>
                            <Link to={'/'}>
                                Contact Us
                            </Link>
                        </div>
                        <div className="flex flex-col gap-5 ">
                            <Link to={'/'} className="font-bold text-white">
                                ABOUT NIKE
                            </Link>
                            <Link to={'/'}>
                                News
                            </Link>
                            <Link to={'/'}>
                                Careers
                            </Link>
                            <Link to={'/'}>
                                Investors
                            </Link>
                            <Link to={'/'}>
                                Purpose
                            </Link>
                            <Link to={'/'}>
                                Sustainability
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <Link to={'/'} className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rounded-full p-1 stroke-black bg-white/75 hover:bg-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </Link>
                        <Link to={'/'} className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rounded-full p-1 stroke-black bg-white/75 hover:bg-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </Link>
                        <Link to={'/'} className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rounded-full p-1 stroke-black bg-white/75 hover:bg-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between text-gray-400">
                    <div className="flex flex-col gap-5">
                        <Link to={'/'} className="flex gap-2 items-center hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                            </svg>
                            <p>Pakistan</p>
                        </Link>
                        <p className="">
                            &copy; 2023 Nike, Inc. All Right Reserved
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <Link to={'/'}>
                            Guides
                        </Link>
                        <Link to={'/'}>
                            Terms Of Sale
                        </Link>
                        <Link to={'/'}>
                            Terms Of Use
                        </Link>
                        <Link to={'/'}>
                            Nike Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}