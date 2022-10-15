import React, { useEffect, useState } from 'react';
import { Slide } from 'react-reveal';
import logo from '../../presets/images/LOGO.png';

const Service = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://safe-forest-62634.herokuapp.com/Services')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className='align-center text-center content-around' style={{ backgroundColor: '#fafafa' }}>
            <Slide bottom>
                <h2 className='text-4xl font-bold leading-loose text-[#040c2c]'>What I'm Doing</h2>
                <p className=''>I love what I do. I take great pride in what I do.</p>
                <div className='lg:mt-[-10px] hero min-h-screen'>
                    <div className="flex grid gap-y-8 gap-x-8 lg:grid-cols-3 md:grid-cols-2 sm:mt-5 px-20">
                        {
                            data.map((item, index) =>
                                <div key={index}>
                                    <figure className="drop-shadow-md sm:96 rounded-xl p-8" style={{ backgroundColor: '#ffffff' }}>
                                        <img className="w-24 h-24 rounded-full mx-auto" src={logo} alt="" width="384" height="512" />
                                        <div className="text-center space-y-4">
                                            <h3 className='text-xl font-medium'>{item.title}</h3>
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