import React from 'react';
import profile from '../../presets/images/profile.jpg';
import Slide from 'react-reveal/Slide';
import Button from '../Shared/Button';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="hero min-h-screen mt-[10px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={profile} alt='profile' className="sm:min-w-sm lg:max-w-sm md:max-w-sm rounded-full w-58 shadow-2xl" />
                <div>
                    <div className="card-body lg:mx-20 md:mx-20">
                        <Slide bottom>
                            <h1 className="text-5xl text-black font-bold ">About Me</h1>
                            <p className="py-5 text-green text-current font-medium">Native Design & Front-End developer.</p>
                            <p className="font-serif">I have been developing website more then 2 years. Technologies I use ReactJs. I create responsive website that are displayed on all devices.I have the ability to write semantic, cross-browser compatible, clean code by hand that is re-useable, maintainable, and easy to understand. The main areas of my expertise are HTML, CSS, Bootstrap, JavaScript , React and Redux. I also have intermediate knowledge of Next.js Node.js, Express.js and MongoDB. So if you are looking for a front-end developer for your company, I can be the solution you're looking for. I am very much enthusiastic to show you how my experience and skills meet your needs.</p>
                            <p>You can send email directly from here or contact with me via.</p>
                            <div className='flex lg:gap-5 md:gap-5 sm:gap-1 mt-5'>
                                <Button><Link to='/contact'>Hire me</Link></Button>
                                <a target="_blank" rel="noreferrer" href="https://cloud.mongodb.com/v2/633d6023fa1afb45b3598bbd#metrics/replicaSet/633d6061950e9e69edb83fc3/explorer/own_portfolio/design/find"><Button><FaDownload className='lg:mr-3 md:mr-3 mt-1' />resume</Button></a>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;