export default function CoreValues() {

    const values = [
        {
            title: "Compassion",
            description: "We believe in empathy and kindness towards those in need, striving to make a positive impact on their lives."
        },
        {
            title: "Integrity",
            description: "We uphold the highest standards of integrity and transparency in all our actions and decisions."
        },
        {
            title: "Collaboration",
            description: "We work together with communities, partners, and stakeholders to achieve shared goals and create lasting change."
        },
        {
            title: "Innovation",
            description: "We embrace new ideas and innovative solutions to address the challenges faced by the communities we serve."
        }
    ];

    return (
        <section className="py-16 border-t border-white">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-700 gap-x-12 md:px-8">
                <div className="max-w-2xl mx-auto text-center" data-aos="flip-up">
                    <h3 className="text-gray-800 text-4xl font-bold sm:text-5xl">
                        Our Core Values
                    </h3>
                    <p className="mt-4 max-w-xl mx-auto text-lg">
                        Our core values guide us in our mission to create a better future for communities around the world.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        values.map((value, idx) => (
                            <div key={idx} className="text-center px-6 py-8 border rounded-lg shadow-sm" data-aos="zoom-in-up">
                                <h4 className="text-2xl text-blue-600 font-bold">{value.title}</h4>
                                <p className="mt-3 text-gray-600">{value.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
