import Card from "@/app/ui/card";
import services from "@/data/services";

export default function Services() {
    return (
        <main>
            <section className="w-full py-4 px-6 md:py-24 md:px-44">
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
        </main>
    );
}