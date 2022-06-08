import { useContext } from "react";
import Head from 'next/head';
import { ThemeContext } from "../components/Theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn } from "../components/Animations";
import { WorkGridItem } from "../components/GridItem";

const Works = () => {
    const [theme, toggleTheme] = useContext(ThemeContext); 
    
    return (
        <div className={theme}>
            <Head>
                <title>Works - Qu1etboy</title>
            </Head>
            <div className="relative w-full min-h-screen flex flex-col dark:text-white text-black dark:bg-neutral-900 bg-neutral-50 duration-200">
                <Navbar/>
                <FadeIn>
                    <div className="flex flex-1 flex-col justify-center items-center mt-16 md:mt-32">
                        <h className='text-5xl font-bold mb-20'>My Works</h>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
                            <WorkGridItem />
                            <WorkGridItem />
                            <WorkGridItem />
                            <WorkGridItem />
                            <WorkGridItem />
                            <WorkGridItem />
                            <WorkGridItem />
                        </div>
                    </div>
                </FadeIn>
                <Footer />
            </div>
        </div>
    )
}

export default Works;