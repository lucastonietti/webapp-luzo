'use client'

import Image from "next/image";
import Link from "next/link";
import NavLinks from "./nav-links";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handlerMenu = () => {
        setShowMenu(!showMenu)
    }

    return ( 
        <nav className="flex px-6 py-2 md:px-44 justify-between items-center bg-white md:h-[7vh] w-full">
            <Link
                className="mb-2 flex items-end justify-start"
                href="/"
            >
                <div className="w-20 text-white md:w-16">
                <Image src="/logo.png" alt="Logo do site" width={90} height={50}/>
                </div>
            </Link>
            <div className="md:hidden z-30">
                <button onClick={handlerMenu}>
                    {showMenu ? <X /> : <AlignJustify />}
                </button>
            </div>
            <NavLinks showMenu={showMenu} />   
        </nav>
     );
}
 
export default NavBar;