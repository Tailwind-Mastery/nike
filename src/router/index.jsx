import { Route, Routes } from "react-router-dom";
import Home from "../screens";

export default function MainRouter(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}