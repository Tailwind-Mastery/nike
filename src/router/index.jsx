import { Route, Routes } from "react-router-dom";
import Home from "../screens";
import Menu from "../screens/Menu";
import SubMenu from "../screens/SubMenu";

export default function MainRouter(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu/" element={<Menu />} />
                <Route path="/menu/:subMenu" element={<SubMenu />} />
            </Routes>
        </div>
    )
}