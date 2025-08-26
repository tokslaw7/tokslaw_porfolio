import { Outlet } from "react-router";
import React from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

export default function Layout() {
    return (
       <>
           <div>
               <Navbar />
           </div>
           <aside>
               <SideMenu />
           </aside>
           <div>
               <Outlet />
           </div>
       </>


    );
}
