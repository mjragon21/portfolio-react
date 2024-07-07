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
                <motion.div
                    variants={child}
                    className="lg:pt-20"
                >

                    <section>
                        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                                <a href="#" className="group relative block bg-black sm:mt-2 ">
                                    <img
                                        alt=""
                                        src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/394487731_2258597557665522_2027178029109919643_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=X89A8h9En6oQ7kNvgFeL5zu&_nc_ht=scontent.fmnl17-3.fna&oh=00_AYAJAn-Nq__rE9rJXHQzMxNnis2R9U8yuwc_Fh7B3diJSA&oe=6690533A"
                                        className="rounded-lg absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 "
                                    />

                                    <div className="relative p-4 sm:p-6 lg:p-8 rounded-lg">
                                        <p className="text-sm font-medium uppercase tracking-widest text-white">Developer</p>

                                        {/* <p className="text-xl font-bold text-white sm:text-2xl">Michael James Angelo</p> */}

                                        <div className="mt-32 sm:mt-48 lg:mt-64">
                                            <div
                                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                            >
                                                <p className="text-sm text-white">
                                                    I specialize in front-end development, primarily using React to
                                                    create dynamic and modular user interfaces. Leveraging React's
                                                    component-based architecture, I ensure scalability and
                                                    maintainability in my code. My focus is on crafting intuitive and
                                                    visually appealing designs while optimizing performance for an
                                                    enhanced user experience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <div className="lg:py-24">
                                    <h2 className="text-2xl font-bold sm:text-3xl">  <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 1.0 }}
                                        className="text-4xl md:text-5xl font-bold lg:text-5xl text-blue-500"
                                    >

                                        Michael James Angelo
                                    </motion.span></h2>
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1, duration: 1.5 }}
                                        className="text-4xl md:text-2xl lg:text-xl"
                                    >
                                        Front-end Developer - Web Developer
                                    </motion.span>

                                    <p className="mt-4 text-gray-600 dark:text-white">

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
                                        <motion.a href="https://www.instagram.com/rmjaay/" whileHover={imgHoverEffect}>
                                            <img className="h-8" src="https://img.icons8.com/?size=96&id=Xy10Jcu1L2Su&format=png" alt="" />
                                        </motion.a>
                                    </div>
                                    <a
                                        href="../public/Resume_Ragon_2024.pdf"
                                        download="Resume_Ragon_2024.pdf"
                                        className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-white-400">
                                        Download My CV
                                    </a>


                                </div>
                            </div>
                        </div>
                    </section>



                </motion.div>

            </motion.div>
        </div>
    );
}

export default Header;
