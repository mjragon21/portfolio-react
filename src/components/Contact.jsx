import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import human from "../img/human.png"
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4oogt73', 'template_yxbe1gb', form.current, 'm18CqUHIR59yftjA_')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0 });
        }
    }, [controls, inView]);



    return (
        <motion.div

            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={controls}
            className='h-screen mt-52'


        >

            <div class="bg-gray-200 relative rounded-xl p-5 sm:py-2 before:z-0 max-w-screen-sm dark:bg-[#151c2f] ml-52">

                <div className='max-w-xl relative z-10 text-center mx-auto '>


                    <section className="relative flex justify-center ">
                        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                            <div className="mx-auto max-w-lg text-center">
                                <h1 className="text-2xl font-bold sm:text-3xl">Contact me!</h1>

                            </div>

                            <form ref={form} onSubmit={sendEmail} className="mx-auto mb-0 mt-8 max-w-md space-y-4 ">
                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>

                                    <div className="relative">
                                        <input

                                            className="w-full rounded-lg  p-4 pe-12 text-sm shadow-sm dark:text-stone-800"
                                            placeholder="Name"
                                            name="sendername"
                                        />

                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="sr-only">Subject</label>

                                    <div className="relative">
                                        <input

                                            className="w-full rounded-lg  p-4 pe-12 text-sm shadow-sm dark:text-stone-800"
                                            placeholder="Subject"
                                            name="subject"
                                        />

                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>

                                    <div className="relative">
                                        <input
                                            type="email"
                                            className="w-full rounded-lg  p-4 pe-12 text-sm shadow-sm dark:text-stone-800"
                                            placeholder="Enter email"
                                            name="senderemail"
                                        />

                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label for="Message" class="block text-sm font-medium text-gray-700"> </label>

                                    <textarea
                                        name="message"
                                        class="mt-2 w-full rounded-lg  align-top shadow-sm sm:text-sm dark:text-stone-800"
                                        rows="4"
                                        placeholder="Enter any messages..."

                                    ></textarea>
                                </div>


                                <div className="flex items-center justify-between">
                                    <motion.div whileHover={{ scale: 1.15 }}>
                                        <button type="submit" value="Send" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                                            Send
                                        </button>
                                    </motion.div>
                                </div>
                            </form>
                        </div>

                    </section>

                </div>

            </div>



        </motion.div>

    )
}

export default Contact
