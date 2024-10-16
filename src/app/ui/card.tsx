import Button from "./button";
import { ElementType, ReactNode } from "react";

interface CardProps {
    bt?: boolean,
    btName?: string,
    title?: string,
    children?: ReactNode,
    href?: string,
    icon: ElementType
}

export default function Card({ bt = false, btName, children, title, href, icon: Icon}: CardProps) {
   return ( 
       <div className="p-4 md:p-6 rounded-md shadow-md bg-white flex flex-col gap-6 jsutify-between shrink">
         <Icon className="size-7"/>
         <div className="flex flex-col shrink grow gap-2">
            <h1 className="text-sm font-semibold">{title}</h1>
            <p className="text-xs">{children}</p>
         </div>
         {bt &&(
            <Button href={href} cs="bg-l1 text-white md:w-3/5">
                {btName}
            </Button>)
         }
       </div>
   );
}