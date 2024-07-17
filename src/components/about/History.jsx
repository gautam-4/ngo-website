const historyTimeline = [
    {
        year: '2010',
        event: 'Founded with a mission to empower communities.',
    },
    {
        year: '2012',
        event: 'Launched our first community project.',
    },
    {
        year: '2015',
        event: 'Expanded our reach to 10 countries.',
    },
    {
        year: '2018',
        event: 'Achieved 1 million dollars in donations.',
    },
    {
        year: '2021',
        event: 'Partnered with global organizations to enhance our impact.',
    },
    {
        year: '2023',
        event: 'Celebrated 10 years of service.',
    },
];

export default function History() {
    return (
        <section className="py-16 border-t border-white bg-blue-600">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
                <h2 className="text-3xl font-bold text-white sm:text-4xl" data-aos="flip-up">Our History</h2>
                <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {historyTimeline.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4" data-aos="zoom-in">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white text-blue-600 text-lg font-bold rounded-full">
                                {item.year}
                            </div>
                            <p className="text-white">{item.event}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Our Mission</h2>
                    <p className="text-white leading-7">
                        We're dedicated to empowering global communities through sustainable development and collaboration. Our mission focuses on education, health, and environmental stewardship, creating lasting change through partnerships, innovation, and unwavering commitment.
                    </p>
                </div>
            </div>
        </section>
    );
}