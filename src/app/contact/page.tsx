import FormContact from "@/app/ui/form/form-contact";
import Link from "next/link";

interface ContactProps {

}

export default function Contact(props: ContactProps) {
   return ( 
       <main>
             <section className="w-full py-4 px-6 md:py-24 md:px-44 flex justify-center">
                <div className="flex flex-col justify-center items-center gap-4 text-center">
                    <h1 className="font-extrabold text-4xl text-l1 mb-14">Fale Conosco</h1>
                    <div className="md:w-[85%] py-5 px-4 grid md:grid-cols-3 grid-cols-1 rounded-xl md:divide-x bg-l1">
                        <div className="md:col-span-2 md:pr-10">
                            <FormContact />
                        </div>
                        <div className="col-span-1 flex flex-col justify-center md:items-center gap-5 border-left text-white">
                            <span className="font-bold text-lg">Contato</span>
                            <Link 
                                className="flex flex-col items-start hover:bg-green-600 rounded w-[80%] px-4 py-1" 
                                href="https://api.whatsapp.com/send?phone=5511985916729"
                                target="_blank"
                            >
                                <strong className="">WhatsApp</strong>
                                <span>(11) 98591-6729</span>
                            </Link>
                            <div className="flex flex-col items-start w-[80%] px-4 py-2">
                                <strong className="">E-mail</strong>
                                <span>contato@luzo.eng.br</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </main>
   );
}