import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.05 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const imgHoverEffect = {
        scale: 1.5,
        transition: { type: 'spring', duration: 0.2 },
    };

    return (
        <div style={{ position: 'relative' }}>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="h-screen"
            >
                <div className="flex flex-col gap-6">
                    <section className="pb-20">
                        <div className="flex flex-row justify-center px-4 md:gap-24">
                            <motion.div
                                variants={child}
                                className="flex max-w-3xl flex-col gap-4 pt-10 sm:gap-0 sm:pb-24 sm:pt-20 lg:pt-52"
                            >
                                <div className="flex flex-col gap-4">
                                    <h1>
                                        <motion.span
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5, duration: 1.0 }}
                                            className="text-4xl md:text-5xl font-bold lg:text-6xl text-blue-500"
                                        >
                                            Michael James Angelo
                                        </motion.span>
                                        <div></div>
                                        <motion.span
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1, duration: 1.5 }}
                                            className="text-4xl md:text-2xl lg:text-xl"
                                        >
                                            Front-end Developer - Web Developer
                                        </motion.span>
                                    </h1>
                                </div>

                                <p className="pr-4 sm:pr-10 text-base sm:text-lg text-content text-justify">
                                    I specialize in front-end development, primarily using React to
                                    create dynamic and modular user interfaces. Leveraging React's
                                    component-based architecture, I ensure scalability and
                                    maintainability in my code. My focus is on crafting intuitive and
                                    visually appealing designs while optimizing performance for an
                                    enhanced user experience.
                                </p>

                                <div className="flex flex-row flex-wrap items-center gap-2 sm:flex-nowrap sm:gap-4 pt-4">
                                    <motion.a href="https://github.com/mjragon21" whileHover={imgHoverEffect}>
                                        <img className="h-8" src="https://img.icons8.com/color/48/github--v1.png" alt="" />
                                    </motion.a>
                                    <motion.a href="https://www.facebook.com/mjragon21/" whileHover={imgHoverEffect}>
                                        <img className="h-8" src="https://img.icons8.com/color/48/facebook-new.png" alt="" />
                                    </motion.a>
                                    <motion.a href="www.linkedin.com/in/michael-james-angelo-ragon-03034a2a1" whileHover={imgHoverEffect}>
                                        <img className="h-8" src="https://img.icons8.com/color/48/linkedin.png" alt="" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}

export default Header;
