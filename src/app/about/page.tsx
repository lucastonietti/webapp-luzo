import Image from "next/image";

interface AboutProps {

}

export default function About(props: AboutProps) {
   return ( 
       <main>
             <section className="w-full py-4 px-6 md:py-24 md:px-44 flex justify-center">
                <div className="flex flex-col justify-center items-center gap-4 md:w-[50%] text-center">
                    <h1 className="font-extrabold text-4xl text-l1 mb-6 md:mb-0">Sobre Nós</h1>
                    <p className="font-medium text-lg">Empresa de engenharia, tecnologia, monitoramento remoto
                         e projetos relacionados a geração e consumo de energia elétrica. </p>
                </div>
            </section>
             <section className="w-full py-4 px-6 md:py-24 md:px-44 bg-l1">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-white p-2 pt-6 md:pt-0">
                            <h1 className="font-bold text-3xl mb-10">Nossa missão</h1>
                            <p className="font-medium text-lg">
                            Oferecer a melhor solução para a necessidade do cliente, com os produtos mais adequados, 
                            com vida útil longa e pós-venda no Brasil para garantir o retorno do investimento realizado. 
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-2">
                        <Image 
                            src="/solar_energy.png" 
                            alt="Imagem ilustrativa de uma fazenda de paineis solares"
                            width={400}
                            height={300}
                        />
                    </div>
                </div>
            </section>
            <section className="w-full py-4 px-6 md:py-24 md:px-44 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center md:mb-16 md:w-[50%] pt-6 md:pt-0 text-center">
                    <h1 className="font-bold text-3xl text-l1">Por que escolher nossa empresa?</h1>
                </div>
                <div className="p-6 grid md:grid-cols-2 grid-cols-1 gap-10">
                    <div className="flex flex-col">
                        <div className="p-2">
                            <ul className="list-disc ml-1 mt-2">
                                <li className="p-4">
                                    <strong className="text-l1 font-bold text-lg">Projeto Personalizado</strong>
                                    <p className="font-medium">Projetos personalizados para atender especificamente suas necessidades.</p>
                                </li>
                                <li className="p-4">
                                    <strong className="text-l1 font-bold text-lg">Qualidade e Capricho</strong>
                                    <p className="font-medium">Qualidade nos equipamentos e capricho na instalação.</p>
                                </li>
                                <li className="p-4">
                                    <strong className="text-l1 font-bold text-lg">Facilidade de Pagamento</strong>
                                    <p className="font-medium">Opções de pagamentos e financiamentos.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-2">
                        <Image 
                            src="/install_panel_solar.png" 
                            alt="Imagem ilustrativa de uma fazenda de paineis solares"
                            width={250}
                            height={200}
                        />
                    </div>
                </div>
            </section>
       </main>
   );
}