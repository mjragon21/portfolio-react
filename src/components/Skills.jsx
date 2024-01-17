import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Skills = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0 });
        }
    }, [controls, inView]);


    const imgHoverEffect = {
        scale: 1.09,
        transition: { type: "spring", duration: 0.2 },
    };
    return (
        <div class="">
            <div class="flex flex-col gap-4 p-10">
                <div class="flex flex-col items-center gap-3">
                    <span class="text-center text-4xl font-semibold text-primary">
                        Skills
                    </span>
                </div>
                <div>

                </div>
            </div>


            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -40 }}
                animate={controls}

                className='grid grid-cols-3 gap-5 md:grid-cols-6'>
                <motion.div  whileHover={imgHoverEffect} className='relative max-w-xs overflow-hidden rounded-md bg-gray-100 bg-cover bg-no-repeat p-5 text-center dark:bg-neutral-800'>
                    <div className='flex items-center justify-center' >
                        <img class="h-[52px] w-[52px]" src='https://img.icons8.com/fluency/48/html-5.png' height="1em" viewBox="0 0 448 512">


                        </img>
                        <p class="mt-2 text-sm font-medium  dark:text-gray-300">
                            HTML 5
                        </p>
                    </div>
                </motion.div>
                <motion.div  whileHover={imgHoverEffect} className='relative max-w-xs overflow-hidden rounded-md bg-gray-100 bg-cover bg-no-repeat p-5 text-center dark:bg-neutral-800'>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <img class="h-[52px] w-[52px]" src='https://img.icons8.com/fluency/48/tailwind_css.png' height="1em" viewBox="0 0 448 512">


                            </img>
                            <p class="mt-2 text-sm font-medium  dark:text-gray-300">
                                Tailwind CSS
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div  whileHover={imgHoverEffect} className='relative max-w-xs overflow-hidden rounded-md bg-gray-100 bg-cover bg-no-repeat p-5 text-center dark:bg-neutral-800'>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <img class="h-[52px] w-[52px]" src='https://img.icons8.com/color/48/javascript--v1.png' height="1em" viewBox="0 0 448 512">


                            </img>
                            <p class="mt-2 text-sm font-medium  dark:text-gray-300">
                                Javascript
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div  whileHover={imgHoverEffect} className='relative max-w-xs overflow-hidden rounded-md bg-gray-100 bg-cover bg-no-repeat p-5 text-center dark:bg-neutral-800'>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <img class="h-[52px] w-[52px]" src='https://img.icons8.com/color/48/vite.png' height="1em" viewBox="0 0 448 512">


                            </img>
                            <p class="mt-2 text-sm font-medium  dark:text-gray-300">
                                Vite
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div  whileHover={imgHoverEffect} className='relative max-w-xs overflow-hidden rounded-md bg-gray-100 bg-cover bg-no-repeat p-5 text-center dark:bg-neutral-800'>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <img class="h-[52px] w-[52px]" src='https://img.icons8.com/color/48/github--v1.png' height="1em" viewBox="0 0 448 512">


                            </img>
                            <p class="mt-2 text-sm font-medium  dark:text-gray-300">
                                Git
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div  whileHover={imgHoverEffect} className='relative max-w-xs overflow-hidden rounded-md bg-gray-100 bg-cover bg-no-repeat p-5 text-center dark:bg-neutral-800'>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <img class="h-[52px] w-[52px]" src='https://img.icons8.com/ios/50/php-logo.png' height="1em" viewBox="0 0 448 512">


                            </img>
                            <p class="mt-2 text-sm font-medium  dark:text-gray-300">
                                PHP
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div  whileHover={imgHoverEffect} className='relative max-w-xs overflow-hidden rounded-md bg-gray-100 bg-cover bg-no-repeat p-5 text-center dark:bg-neutral-800'>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <img class="h-[52px] w-[52px]" src='https://img.icons8.com/fluency/48/mysql-logo.png' height="1em" viewBox="0 0 448 512">


                            </img>
                            <p class="mt-2 ml-2 text-sm font-medium  dark:text-gray-300">
                                MySQL
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div  whileHover={imgHoverEffect} className='relative max-w-xs overflow-hidden rounded-md bg-gray-100 bg-cover bg-no-repeat p-5 text-center dark:bg-neutral-800'>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <img class="h-[52px] w-[52px]" src='https://img.icons8.com/color/48/mongodb.png' height="1em" viewBox="0 0 448 512">


                            </img>
                            <p class="mt-2 text-sm font-medium  dark:text-gray-300">
                                MongoDB
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div  whileHover={imgHoverEffect} className='relative max-w-xs overflow-hidden rounded-md bg-gray-100 bg-cover bg-no-repeat p-5 text-center dark:bg-neutral-800'>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <img class="h-[52px] w-[52px]" src='https://img.icons8.com/dusk/256/postman-api.png' height="1em" viewBox="0 0 448 512">


                            </img>
                            <p class="mt-2 text-sm font-medium  dark:text-gray-300">
                                Postman
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div  whileHover={imgHoverEffect} className='relative max-w-xs overflow-hidden rounded-md bg-gray-100 bg-cover bg-no-repeat p-5 text-center dark:bg-neutral-800'>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <img class="h-[52px] w-[52px]" src='https://img.icons8.com/color/48/sass.png' height="1em" viewBox="0 0 448 512">


                            </img>
                            <p class="mt-2 text-sm font-medium  dark:text-gray-300">
                                SASS
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div  whileHover={imgHoverEffect} className='relative max-w-xs overflow-hidden rounded-md bg-gray-100 bg-cover bg-no-repeat p-5 text-center dark:bg-neutral-800'>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <img class="h-[52px] w-[52px]" src='https://img.icons8.com/color/48/firebase.png' height="1em" viewBox="0 0 448 512">


                            </img>
                            <p class="mt-2 text-sm font-medium  dark:text-gray-300">
                                Firebase
                            </p>
                        </div>
                    </div>
                </motion.div>


            </motion.div>
        </div >


    )
}

export default Skills
