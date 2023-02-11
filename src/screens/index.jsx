import BHMHome from "../components/BHMHome";
import FeaturedHome from "../components/FeaturedHome";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import PopularHome from "../components/PopularHome";
import SpringHome from "../components/SpringHome";
import SuperBowl from "../components/SuperBowl";
import TopHeader from "../components/TopHeader";
import TrendingHome from "../components/TrendingHome";
import YogaHome from "../components/YogaHome";

export default function Home(){
    return (
        <div className="">
            <TopHeader />
            <Header />
            <div className="flex flex-col gap-10 mb-10">
                <Landing />
                <SpringHome />
                <SuperBowl />
                <TrendingHome />
                <PopularHome />
                <YogaHome />
                <BHMHome />
                <FeaturedHome />
            </div>
            <Footer />
        </div>
    )
}