import React, { useEffect, useState } from 'react';
import { Slide } from 'react-reveal';
import design from '../../presets/images/design.png';
import responsive from '../../presets/images/responsive.png';
import development from '../../presets/images/development.png';
import Strategy from '../../presets/images/Strategy.png';
import support from '../../presets/images/support.png';
import experienced from '../../presets/images/experienced.png';

const Service = () => {
    const data = [
        {
            _id: 1,
            title: "App & Web Design",
            description: "Your website will be build with React & React Native technologies. Visual design and customization. Professional looking user attractive fully responsive.",
            img: design
        },
        {
            _id: 1,
            title: "Responsive Design",
            description: "PSD/Figma/Sketch to HTML fully responsive web design, professional & visual webpage design .All browser comfortable. clean and organized code.",
            img: responsive
        },
        {
            _id: 1,
            title: "Web Development",
            description: "Your website will be build with an new proven technologies. Build high iterative React Web App. Full responsive and attractive design with Material-UI.",
            img: development
        },
        {
            _id: 1,
            title: "Strategy",
            description: "A successful website does three things: It attracts the right kinds of visitors.Guides them to the main services or products you offer Collect Contact details for future ongoing relations.",
            img: Strategy
        },
        {
            _id: 1,
            title: "Support",
            description: "Along with its various services in the development and design of websites, also offers round the clock maintenance and support to all its registered clients and associates.",
            img: support
        },
        {
            _id: 1,
            title: "Experienced",
            description: "User experience enjoyable with a site that is easy to navigate to find more of what the visitor is looking for. So, before to create a website, think of the experienced developer.",
            img: experienced
        }
    ];

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://safe-forest-62634.herokuapp.com/Services')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, []);

    return (
        <div className='align-center text-center content-around' style={{ backgroundColor: '#fafafa' }}>
            <Slide bottom>
                <h2 className='text-4xl font-bold leading-loose text-[#040c2c]'>What I'm Doing</h2>
                <p className=''>I love what I do. I take great pride in what I do.</p>
                <div className='lg:mt-[-10px] hero min-h-screen'>
                    <div className="flex grid gap-y-8 gap-x-8 lg:grid-cols-3 md:grid-cols-2 sm:mt-5 px-20">
                        {
                            data.map(item =>
                                <div key={item._id}>
                                    <figure className="drop-shadow-md rounded-xl p-8" style={{ backgroundColor: '#ffffff' }}>
                                        <img className="w-28 h-28 rounded-full mx-auto" src={item.img} alt="serviceIcon" width="384" height="512" />
                                        <div className="text-center space-y-4">
                                            <h3 className='text-xl font-medium mt-2'>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </figure>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Service;