export default function Banner() {

    const stats = [
        {
            data: "50+",
            title: "Projects Completed"
        },
        {
            data: "20K+",
            title: "Lives Impacted"
        },
        {
            data: "30+",
            title: "Partner Organizations"
        },
        {
            data: "100+",
            title: "Volunteers"
        },
    ];

    return (
        <section className="py-16 border-t border-white bg-blue-600">
            <div className="max-w-screen-xl mx-auto px-4 text-white gap-x-12 justify-between md:px-8 lg:flex">
                <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0" data-aos="fade-right">
                    <h3 className="text-white text-4xl font-bold sm:text-5xl">
                        Empowering Communities, Transforming Lives
                    </h3>
                    <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg">
                        Our NGO is dedicated to making a lasting impact through a variety of community projects and initiatives. Join us in our mission to create a better future for all.
                    </p>
                </div>
                <div className="mt-12 lg:mt-0" data-aos="fade-left">
                    <ul className="flex flex-col items-start gap-x-12 justify-center divide-y sm:divide-y-0 sm:flex-row lg:grid lg:grid-cols-2">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="text-center w-full px-4 py-6 sm:w-auto lg:py-4">
                                    <h4 className="text-4xl text-white font-bold">{item.data}</h4>
                                    <p className="mt-3 font-medium text-white">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}