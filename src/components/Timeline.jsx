import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';


function Timeline() {
    return (
        <section class="flex flex-col gap-10 bg-backgroundPrimary px-4 md:gap-12 lg:py-28 xl:px-0">
            <div class="flex flex-col items-center gap-3">
                <span class="text-center text-4xl font-semibold text-primary">
                    Timeline
                </span>
                <div className="flex flex-col md:flex-row justify-center my-20">
                    <div className="w-full md:w-7/12">

                        {timeline.map(item => (
                            <TimelineItem
                                year={item.year}
                                title={item.title}
                                duration={item.duration}
                                details={item.details}
                            />
                        ))}
                    </div>
                </div>
            </div >
        </section>
    )
}

export default Timeline;