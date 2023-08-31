import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { Fullname } from "./Fullname";
import { User } from "./User";
import { City } from "./City";

export const Landing=()=>{
    return(
       <BrowserRouter>
       <Nav/>
       <br />
        <Routes>
            <Route path="/Fullname" element={<Fullname/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/User" element={<User/>} />
            <Route path="/City" element={<City/>} />
        </Routes>
       </BrowserRouter>
    )
}