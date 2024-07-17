import Banner from "../components/hero/Banner";
import CoreValues from "../components/hero/CoreValues";
import Hero from "../components/hero/Hero";
import OurTeam from "../components/about/OurTeam";
import History from "../components/about/History";
import Projects from "../components/otherSections/projects";
import Events from "../components/otherSections/events";
import Blogs from "../components/otherSections/blogs";
import Footer from "../components/otherSections/footer";

function Landing() {
    return (
        <>
            <section id="hero">
                <Hero />
                <Banner />
                <CoreValues />
            </section>
            <section id="about">
                <History />
                <OurTeam />
            </section>
            <section id="projects">
                <Projects/>
            </section>
            <section id="events">
                <Events />
            </section>
            <section id="blog">
                <Blogs/>
            </section>
            <section>
                <Footer/>
            </section>
        </>
    )
}

export default Landing