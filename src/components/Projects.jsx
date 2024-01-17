
import todo from "../img/todo.png"
import weather from "../img/weather.png"
import quiz from "../img/quiz.png"
import chatapp from "../img/chatapp.png"
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Projects = () => {

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
        <div className='h-screen'>

            <div class='flex flex-col md:flex-row items-center justify-center h-screen mt-10'>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col items-center gap-3">
                        <span class="text-center text-4xl font-semibold text-primary">
                            Projects
                        </span>
                    </div>
                    <div>



                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: -40 }}
                            animate={controls}


                            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">


                            <a target="_blank" rel="noopener noreferrer" href='https://mjragon21.github.io/react-todo/' class="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">


                                <img class="w-full h-36 md:h-48 object-fit cursor-pointer " src={todo} alt="todo-list" />
                                <div class="w-full p-4">

                                    <h3 class="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white ">
                                        Todo-list App

                                    </h3>
                                    <div class="flex flex-wrap gap-6 flex-row items-center justify-start">
                                        <img class="h-8" src="https://img.icons8.com/color/48/javascript--v1.png" alt="" />
                                        <img class="h-8" src="https://img.icons8.com/color/48/vite.png" alt="" />
                                        <img class="h-8" src="https://img.icons8.com/color/48/react-native.png" alt="" />
                                        <motion.div
                                            whileHover={{ scale: 1.15 }}

                                        >

                                            <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 ml-16 text-sm text-purple-700">
                                                Demo
                                            </span>
                                        </motion.div>
                                    </div>

                                </div>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href='https://weather-app-nine-olive-10.vercel.app/'
                                class="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
                                <img class="w-full h-36 md:h-48 object-fit cursor-pointer " src={weather} alt="todo-list" />
                                <div class="w-full p-4">
                                    <h3 class="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white ">
                                        Weather App

                                    </h3>
                                    <div class="flex flex-wrap gap-5 flex-row items-center justify-start">
                                        <img class="h-8" src="https://img.icons8.com/color/48/javascript--v1.png" alt="" />
                                        <img class="h-8" src="https://img.icons8.com/color/48/vite.png" alt="" />
                                        <img class="h-8" src="https://img.icons8.com/color/48/react-native.png" alt="" />
                                        <motion.div
                                            whileHover={{ scale: 1.15 }}

                                        >

                                            <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 ml-16 text-sm text-purple-700">
                                                Demo
                                            </span>
                                        </motion.div>
                                    </div>

                                </div>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href='https://react-app-quiz-omega.vercel.app/'
                                class="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
                                <img class="w-full h-36 md:h-48 object-fit cursor-pointer " src={quiz} alt="todo-list" />
                                <div class="w-full p-4">
                                    <h3 class="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white ">
                                        Quiz App

                                    </h3>
                                    <div class="flex flex-wrap gap-5 flex-row items-center justify-start">
                                        <img class="h-8" src="https://img.icons8.com/color/48/javascript--v1.png" alt="" />

                                        <img class="h-8" src="https://img.icons8.com/color/48/react-native.png" alt="" />
                                        <motion.div
                                            whileHover={{ scale: 1.15 }}

                                        >

                                            <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 ml-32 text-sm text-purple-700">
                                                Demo
                                            </span>
                                        </motion.div>
                                    </div>

                                </div>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href='https://chat-react-tawny.vercel.app/'
                                class="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
                                <img class="w-full h-36 md:h-48 object-fit cursor-pointer " src={chatapp} alt="todo-list" />
                                <div class="w-full p-4">
                                    <h3 class="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white ">
                                        Chat App

                                    </h3>
                                    <div class="flex flex-wrap gap-5 flex-row items-center justify-start">
                                        <img class="h-8" src="https://img.icons8.com/color/48/javascript--v1.png" alt="" />
                                        <img class="h-8" src="https://img.icons8.com/color/48/vite.png" alt="" />
                                        <img class="h-8" src="https://img.icons8.com/color/48/react-native.png" alt="" />
                                        <img class="h-8" src="https://img.icons8.com/color/48/firebase.png" alt="" />
                                        <motion.div
                                            whileHover={{ scale: 1.15 }}

                                        >

                                            <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 ml-6 text-sm text-purple-700">
                                                Demo
                                            </span>
                                        </motion.div>
                                    </div>

                                </div>
                            </a>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects
