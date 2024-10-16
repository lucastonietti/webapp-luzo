import Image from "next/image";
import Link from "next/link";

interface FooterProps {

}

export default function Footer(props: FooterProps) {
   return ( 
       <footer className="bg-l1 w-full">
            <div className="md:px-40 md:py-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-6">
                <div className="md:py-4 pt-4 pb-0 px-6 flex justify-center items-center">
                    <Link href="/">
                        <Image src="/white_logo.png" alt="Logo branco" width={100} height={80} />
                    </Link>
                </div>
                <div className="py-4 px-6 text-white flex flex-col items-center">
                    <div className="grid grid-cols-2 md:grid-cols-1 justify-between gap-4">
                        <p className="font-bold text-xl col-span-2 md:col-span-1 text-center md:text-start">Contatos</p>
                        <div className="flex flex-col md:flex-row md:gap-3">
                            <p>Número: </p>
                            <p>11 98591-6729</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-3">
                            <p>E-mail: </p>
                            <p>contato@luzo.eng.br</p>
                        </div>
                    </div>
                </div>
            </div>
       </footer>
   );
}