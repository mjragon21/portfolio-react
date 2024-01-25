import todo from "../img/todo.png";
import weather from "../img/weather.png";
import quiz from "../img/quiz.png";
import chatapp from "../img/chatapp.png";
import React, { useEffect } from 'react';
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
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={controls}
            className="mt-10"
        >
            <div className="flex flex-col md:flex-row items-center justify-center mt-10">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-center text-4xl font-semibold text-primary">
                            Projects
                        </span>
                    </div>
                    <div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: -40 }}
                            animate={controls}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10"
                        >

                            {[{ link: 'https://mjragon21.github.io/react-todo/', image: todo, title: 'Todo-list App', icons: ['https://img.icons8.com/color/48/javascript--v1.png', 'https://img.icons8.com/color/48/vite.png', 'https://img.icons8.com/color/48/react-native.png'], demoLabel: 'Demo' },
                            { link: 'https://weather-app-nine-olive-10.vercel.app/', image: weather, title: 'Weather App', icons: ['https://img.icons8.com/color/48/javascript--v1.png', 'https://img.icons8.com/color/48/vite.png', 'https://img.icons8.com/color/48/react-native.png'], demoLabel: 'Demo' },
                            { link: 'https://react-app-quiz-omega.vercel.app/', image: quiz, title: 'Quiz App', icons: ['https://img.icons8.com/color/48/javascript--v1.png', 'https://img.icons8.com/color/48/react-native.png'], demoLabel: 'Demo' },
                            { link: 'https://chat-react-tawny.vercel.app/', image: chatapp, title: 'Chat App', icons: ['https://img.icons8.com/color/48/javascript--v1.png', 'https://img.icons8.com/color/48/vite.png', 'https://img.icons8.com/color/48/react-native.png', 'https://img.icons8.com/color/48/firebase.png'], demoLabel: 'Demo' }].map((project, index) => (
                                <a key={index} target="_blank" rel="noopener noreferrer" href={project.link} className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden mb-4">
                                    <img className="w-full h-36 md:h-48 object-fit cursor-pointer " src={project.image} alt={project.title} />
                                    <div className="w-full p-4">
                                        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white ">
                                            {project.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-3 flex-row items-center justify-start">
                                            {project.icons.map((icon, i) => (
                                                <img key={i} className="h-8" src={icon} alt="" />
                                            ))}
                                            <motion.div whileHover={{ scale: 1.15 }}>
                                                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 ml-3 text-sm text-purple-700">
                                                    {project.demoLabel}
                                                </span>
                                            </motion.div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Projects;
