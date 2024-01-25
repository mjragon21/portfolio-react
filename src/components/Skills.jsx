import React, { useEffect } from 'react';
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
        transition: { type: 'spring', duration: 0.2 },
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -40 }}
                animate={controls}
                className="p-5 md:p-10"
            >
                <div className="flex flex-col items-center gap-3 pb-8">
                    <span className="text-center text-4xl font-semibold text-primary">
                        Skills
                    </span>
                </div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -40 }}
                    animate={controls}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                >
                    {skillsData.map((skill) => (
                        <motion.div
                            key={skill.name}
                            whileHover={imgHoverEffect}
                            className="relative max-w-xs overflow-hidden rounded-md bg-gray-100 bg-cover bg-no-repeat p-5 text-center dark:bg-neutral-800"
                        >
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-[52px] w-[52px]"
                                    src={skill.icon}
                                    alt={skill.name}
                                />
                                <p className="mt-2 text-sm font-medium dark:text-gray-300">
                                    {skill.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>

    );
};

const skillsData = [
    { name: 'HTML 5', icon: 'https://img.icons8.com/fluency/48/html-5.png' },
    { name: 'Tailwind CSS', icon: 'https://img.icons8.com/fluency/48/tailwind_css.png' },
    { name: 'Javascript', icon: 'https://img.icons8.com/color/48/javascript--v1.png' },
    { name: 'Vite', icon: 'https://img.icons8.com/color/48/vite.png' },
    { name: 'Git', icon: 'https://img.icons8.com/color/48/github--v1.png' },
    { name: 'PHP', icon: 'https://img.icons8.com/ios/50/php-logo.png' },
    { name: 'MySQL', icon: 'https://img.icons8.com/fluency/48/mysql-logo.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/mongodb.png' },
    { name: 'Postman', icon: 'https://img.icons8.com/dusk/256/postman-api.png' },
    { name: 'SASS', icon: 'https://img.icons8.com/color/48/sass.png' },
    { name: 'Firebase', icon: 'https://img.icons8.com/color/48/firebase.png' },
];

export default Skills;
