import Link from "next/link";
import { ComponentProps } from "react";

interface ButtonProps{
    cs?: string,
    href?: string,
    children?: React.ReactNode
}

export default function Button({cs, children, href = "#"}: ButtonProps ) {

   return ( 
       <Link href={href} target="_blank" className={`${cs} rounded-md px-4 py-1 font-bold hover:bg-blue-900 text-center`}>
            {children}
       </Link>
   );
}