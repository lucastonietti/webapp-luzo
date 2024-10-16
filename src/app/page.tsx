import Button from "@/app/ui/button";
import Card from "@/app/ui/card";
import FormContact from "@/app/ui/form/form-contact";
import qualities from "@/data/qualities";
import services from "@/data/services";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" h-full">
      <section className="w-full md:h-[93vh] h-[50vh] py-4 px-6 md:py-22 md:px-44 relative h-[] bg-cover bg-center bg-[url('/bg_hero.jpg')]">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative z-10 text-white flex h-full items-center">
          <article className="grid grid-cols-5 gap-6">
            <h1 className="col-start-1 md:col-end-4 col-end-5 font-extrabold md:text-6xl text-3xl">Energia Solar Fotovoltaica</h1>
            <h2 className="col-start-1 md:col-end-4 col-end-5 font-medium md:text-4xl text-lg">Gere sua própria energia elétrica e economize na conta de luz.</h2>
            <Button href="https://api.whatsapp.com/send?phone=5511985916729" cs={'bg-l1 col-start-1 md:col-end-3 col-end-5 md:text-2xl text-lg'}>Economizar na Conta de Luz</Button>
          </article>
        </div>
      </section>
      <section className="relative mb-10 md:mb-0 w-full md:h-[80vh] h-[73vh] py-4 px-6 md:py-22 md:px-44">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:-mt-20">
          {qualities.map((obj, index) => (
            <Card title={obj.title} icon={obj.icon} key={index + 1} >
              {obj.description}
            </Card>
          ))
          }
        </div>
        <div className="mt-5 md:mt-10 grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-1 py-10">
          <div className="w-full flex flex-col gap-6">
            <h1 className="md:text-3xl md:w-3/4 font-bold">Energia Limpa para um Futuro Sustentável</h1>
            <p className="text-xs md:text-sm md:w-4/5">
              Faça parte da mudança para um planeta mais verde. A energia solar não só reduz custos a longo prazo,
              mas também diminui sua pegada de carbono. Descubra como você pode fazer a diferença hoje mesmo.
            </p>
            <Button href="https://api.whatsapp.com/send?phone=5511985916729" cs="bg-l1 text-white md:w-2/3">
              Solicite uma Avaliação Gratuita
            </Button>
          </div>
          <div>
            <Image src="/house_panel.jpg" alt="Imagem ilustrativa de uma casa com painel solar" width={477} height={153} />
          </div>
        </div>
      </section>
      <section className="w-full mt-56 md:mt-0 py-4 px-6 md:pb-2 md:px-44 flex flex-col gap-10 md:gap-12">
        <div className="text-center">
          <span className="text-l1"><strong className="bg-l1 px-4 py-2 rounded text-white">NOSSOS</strong> SERVIÇOS</span>
        </div>
        <div className="text-center">
          <p className="font-bold text-xl">
            Aproveite ao máximo o poder do sol com nossos <br /> serviços personalizados e de alta qualidade.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 auto-cols-max">
          {services.map((obj, index) => (
            <Card
              key={index + 1}
              href={obj.link}
              bt={true} btName="Saiba mais"
              icon={obj.icon}
              title={obj.title} >
              {obj.description}
            </Card>
          ))}
        </div>
      </section>
      <section className="w-full md:mt-0 py-4 px-6 md:py-16 md:px-44 flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col md:flex-row gap-4 p-4 bg-l1 rounded">
          <div className="md:w-[50%]">
            <FormContact />
          </div>
          <div className="flex flex-col justify-center items-center text-white text-center p6 gap-6 md:w-[50%]">
            <p className="text-lg ">Sinta-se livre para nos contatar</p>
            <p className="text-3xl font-bold">Obtenha uma <br /> consulta grátis <br /> (11) 98581-6729</p>
          </div>
        </div>
      </section>
    </main>
  );
}
