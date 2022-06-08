import { useContext } from "react";
import Head from 'next/head';
import { ThemeContext } from "../components/Theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn } from "../components/Animations";

const About = () => {
    const [theme, toggleTheme] = useContext(ThemeContext); 
    
    return (
        <div className={theme}>
            <Head>
                <title>About - Qu1etboy</title>
                <meta content='viewport' device='width=device-width initial-scale=1'/>
            </Head>
            <div className="relative w-full min-h-screen dark:text-white text-black dark:bg-neutral-900 bg-neutral-50 duration-200">
                <Navbar/>
                
                <FadeIn>
                    <div className="flex flex-col justify-center items-center mt-16 md:mt-32">
                        <h className='text-5xl font-bold mb-20'>About me</h>
                        <div className='text-xl p-5'>
                            <p>My name is Weerawong Vonggatunyu or you can call me Non/Qu1etboy</p>
                            <p>Born 5 March 2003, Bangkok Thailand</p>
                            <p>Loving Computer and Technology at a young age but properly learn to code when got to the college.</p>
                            <p>Right now I'm studying in Computer Science at Kasetsart Unversity in Thailand.</p>
                            <p>I like to solving problems and learning new things.</p>
                            <p>I am currently learning about Web Development, Front-end and Back-end.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 mb-32">
                            <div>
                                <h className='ml-5 text-4xl font-bold border-b pb-2'>Education</h>
                                <ul className="text-lg">
                                    <li className="p-5">
                                        <h className='font-bold'>Kasetsart University <span className="font-medium">(2021 - Present)</span></h>
                                        <p>Bachelor's degree (2nd year) of Computer Science</p>
                                        <p>Current GPAX: 3.94</p>
                                    </li>
                                    <li className="p-5">
                                        <h className='font-bold'>St. Francis Xavier School <span className="font-medium">(2015 - 2021)</span></h>
                                        <p>Science-Mathematic, Highschool</p>
                                        <p>GPAX: 3.73</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h className='ml-5 text-4xl font-bold border-b pb-2'>Technology Skills</h>
                                <ul className="text-lg p-5">
                                    <li className="mb-5">
                                        <span className="font-bold">Languages</span>  
                                            <ul className='pl-5'>
                                                <li>- JavaScript ( beginner )</li> 
                                                <li>- Python ( intermediate )</li>
                                                <li>- C++ ( intermediate )</li>
                                            </ul>
                                    </li>
                                    <li className="mb-5">
                                        <span className="font-bold">Frameworks</span>  
                                            <ul className='pl-5'>
                                                <li>- ReactJS ( learning )</li> 
                                                <li>- NextJS ( learning )</li>
                                                <li>- TailwindCSS ( learning )</li>
                                            </ul>
                                    </li>
                                    <li>
                                        <span className="font-bold">Tools</span>  
                                            <ul className='pl-5'>
                                                <li>- Git</li> 
                                            </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </FadeIn>
                <Footer />
            </div>
        </div>
    )
}

export default About;