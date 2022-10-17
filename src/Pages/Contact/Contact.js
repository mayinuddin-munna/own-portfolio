import '../Shared/Button.css';
import { Slide } from 'react-reveal';
import emailjs from '@emailjs/browser';
import { HiMail } from 'react-icons/hi';
import { FaGlobe } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { GoLocation } from 'react-icons/go';
import React, { useRef, useState } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import sendMail from '../../presets/images/sentMailIcon.svg';

const Contact = () => {
    const [message, setMessage] = useState(false);
    const { register } = useForm();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setMessage(true);
        setTimeout(() => {
            setMessage(false);
        }, 8000);
        emailjs.sendForm('service_rrppkuy', 'template_jyp87fm', e.target, '4Bw15YiS9HySm79E2')
            .then((result) => {
                console.log(result.text);
            });
    };

    return (
        <Slide bottom>
            <div className='hero min-h-screen'>
                <div className="card lg:card-side">
                    <Slide left>
                        <div className="card-body">
                            <div className=''>
                                <h3 className='text-4xl font-bold leading-loose text-[#040c2c] mb-2'>Contact info</h3>
                                <p className='flex items-center'><GoLocation className='mr-2' />Address: 1207 - Baitul Aman Housing, Adabor Dhaka</p>
                                <a className='flex items-center mb-5 mt-5' href="tel:+8801572394249"><BsTelephoneFill className='mr-2' />Phone: 01572394249</a>
                                <a className='flex items-center' href="mailto:mayinuddin.munna@gmail.com"><HiMail className='mr-2' />Email: mayinuddin.munna@gmail.com</a>
                                <a className='flex items-center mt-5 mb-5' href="https://mayinuddinmunna.web.app/"><FaGlobe className='mr-2' />Website: mayinuddinmunna.web.app</a>
                                <img src={sendMail} alt="" />
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="card-body">
                                <h3 className='text-4xl font-bold leading-loose text-[#040c2c] '>Contact Form</h3>
                                <h5 className="mb-5">Please fill out the form and describe your project needs and I'll contact you as soon as possible.</h5>
                                <div>
                                    <input type="text" placeholder="Your Name*" name="user_name" required className="mr-5 mb-5 input input-bordered input-error w-full max-w-xs" />
                                    <input
                                        required
                                        type="email"
                                        placeholder="Your Email*"
                                        name="user_email"
                                        {...register("email", {
                                            message: 'Email is required'
                                        }, {
                                            value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                            message: 'Provide a valid email'
                                        })}
                                        className="mb-5 input input-bordered input-error w-full max-w-xs"
                                    />
                                </div>
                                <div className=''>
                                    <input type="text" placeholder="Subject*" name="user_subject" required className="mr-5 mb-5 input input-bordered input-error w-full max-w-xs" />
                                    <input
                                        required
                                        type="number"
                                        name="user_phone"
                                        placeholder="Phone*"
                                        className="mb-5 input input-bordered input-error w-full max-w-xs"
                                    />
                                </div>
                                <label className="input-group input-group-lg">
                                    <input type="text" style={{ height: '100px' }} name="message" required placeholder="Your message" className="input input-bordered input-lg max-w-l w-full" />
                                </label>
                                <div className="card-actions mt-5">
                                    <input className="button" type="submit" value="Send message" />
                                    {
                                        message && <p className="text-[#8fbc8f] text-center mt-2">Thanks, I'll replay ASAP :)</p>
                                    }
                                </div>
                            </div>
                        </form>

                    </Slide>
                </div>
            </div>
        </Slide>
    );
};

export default Contact;