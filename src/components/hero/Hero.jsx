import { useEffect, useState } from 'react';
import handsImg from '../../assets/hands2.png';
import ngoLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Hero() {
    const [state, setState] = useState(false);

    const navigation = [
        { title: "About Us", path: "#about" },
        { title: "Projects", path: "#projects" },
        { title: "Events", path: "#events" },
        { title: "Blog", path: "#blog" },
    ];

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, []);

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <Link to="/">
                <img
                    src={ngoLogo}
                    width={120}
                    height={50}
                    alt="NGO Logo"
                />
            </Link>
            <div className="md:hidden">
                <button className="menu-btn text-gray-500 hover:text-gray-800"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    );

    return (
        <div>
            <div className='absolute inset-0 blur-xl h-[580px]'></div>
            <div className='relative'>
                <header>
                    <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                        <Brand />
                    </div>
                    <nav className={`pb-5 md:text-sm ${state ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 z-50 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                            <Brand />
                            <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                                <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                    {
                                        navigation.map((item, idx) => (
                                            <li key={idx} className="text-gray-700">
                                                <a 
                                                    href={item.path} 
                                                    className="block font-medium hover:text-gray-900 hover:border-b-2 hover:border-blue-600"
                                                >
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                                    <Link to="/get-involved" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-full md:inline-flex">
                                        Donate
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <section>
                    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                        <div className='flex-none space-y-5 max-w-xl' data-aos="fade-right">
                            <a href="#blog" className='inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white'>
                                <span className='inline-block rounded-full px-3 py-1 bg-blue-600 text-white'>
                                    News
                                </span>
                                <p className='flex items-center'>
                                    Read our latest updates
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </p>
                            </a>
                            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                                Empowering Communities, Transforming Lives
                            </h1>
                            <p className="text-gray-600">
                                Join us in making a difference. Our NGO is dedicated to improving lives through various community projects and initiatives.
                            </p>
                            <div className='flex items-center gap-x-3 sm:text-sm'>
                                <Link to="/get-involved" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-600 duration-150 hover:bg-blue-500 active:bg-blue-700 rounded-full md:inline-flex">
                                    Get Involved
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                                <Link to="/contact" className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex bg-slate-50 rounded-full hover:bg-slate-100">
                                    Contact Us
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className='flex-1 hidden md:block' data-aos="fade-left">
                            <img src={handsImg} className="max-w-xl" alt="Helping hands" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Hero;
