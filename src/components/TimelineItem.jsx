import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function TimelineItem({ year, title, duration, details }) {
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
      <motion.ol
         ref={ref}
         initial={{ opacity: 0, x: -40 }}
         animate={controls}
         className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700"
      >
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                  {year}
               </span>
               <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                  {title}
               </h3>
               <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  {duration}
               </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
               {details}
            </p>
         </li>
      </motion.ol>
   );
}

export default TimelineItem;
