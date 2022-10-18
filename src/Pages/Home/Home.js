import React from 'react';
import Typed from 'react-typed';
import Contact from '../Contact/Contact';
import canvas from '../../presets/images/download.png';
import bgHome from '../../presets/images/bgHome.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
const About = React.lazy(() => import('../About/About'));
const Service = React.lazy(() => import('../Service/Service'));

const Home = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#061117' }}>
                <div className='fle justify-evenly hero min-h-screen sm:flex px-6'>
                    <div className='mt-[-14rem] text-white '>
                        <p className="text-xl mb-5">Hello i am</p>
                        <Typed
                            className='text-2xl sm:text-5xl tracking-widest leading-loose font-bold'
                            strings={['Mayinuddin Munna.']}
                            typeSpeed={40}
                        />
                        <h1 className="text-xl sm:text-2xl font-medium mt-5">
                            Native Design & Front-End developer
                        </h1>
                        <div className="d-flex flex gap-4 mt-5 py-5 ">
                            <a href="https://www.linkedin.com/in/mayinuddin-munna-b8b9541a1/" target="_blank" rel="noreferrer" className="avatar"><FaLinkedin /></a>
                            <a href="https://github.com/munnahosssain" target="_blank" rel="noreferrer" className=""><FaGithub /></a>
                            <a href="https://docs.google.com/document/d/1tq4DfzJRoj027lJkkN6W8oaWZASBhfw_Iex119ehRAw/edit?usp=sharing" target="_blank" rel="noreferrer" className="" ><BsFillFileEarmarkTextFill /></a>
                        </div>
                    </div>
                    <div className='mt-[-14rem] hidden lg:block'>
                        <img src={bgHome} alt='database' className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>
                <img className='mt-[-310px]' src={canvas} alt="bottom" />
            </div>
            <About />
            <Service />
            <Contact />
        </div>
    );
};

export default Home;