'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"

const links = [
    { name: 'Home', href: '/' },
    { name: 'Serviços', href: '/services' },
    { name: 'Sobre', href: '/about' },
    { name: 'Contato', href: '/contact' },
  ];

interface NavLinksProps {
    showMenu: boolean
}

const NavLinks = (props: NavLinksProps) => {
    const pathName = usePathname()
    return ( 
        <div className={`${props.showMenu? 'flex' : 'hidden'} flex-col absolute gap-1 top-0 pt-24 min-h-screen w-[65vw] right-0 bg-white z-20 md:flex md:flex-row md:static md:w-auto md:min-h-0 md:pt-0`}>
            {
                links?.map(link => {
                    return (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            className={clsx(
                                'flex px-2 py-1 md:rounded-md items-center justify-center font-medium text-sm hover:bg-blue-900 hover:text-white',
                                {
                                  'bg-l1 text-white': pathName === link.href
                                }
                              )}
                        >
                            <p>{link.name}</p>
                        </Link>
                    )
                })
            }
        </div>
     );
}
 
export default NavLinks;