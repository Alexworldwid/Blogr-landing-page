'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import illustrationLaptop from '../../../public/images/illustration-laptop-mobile.svg';

const IllustrationLaptop = () => {
    return (
        <motion.section className='w-full flex flex-col items-center mb-32'
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity:  1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
            <div className='w-full flex flex-col items-center md:grid md:grid-cols-2'>
                {/* image container */}
                <div id='illustration-laptop' className='w-full flex items-center justify-center md:h-[800px]'>
                    <Image src={illustrationLaptop} alt='image of a laptop' className='md:hidden'  />
                </div>

                <div className='flex flex-col items-center gap-8'>
                    <div className='flex flex-col items-center gap-4 w-full px-10 md:items-start'>
                        <h2 className='text-3xl font-semibold md:text-left'>Free, open, simple</h2>
                        <p className='text-center md:text-left text-slate-400 max-w-[500px]'>
                            Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                        </p>
                    </div>

                    <div className='flex flex-col items-center gap-4 w-full px-10 md:items-start'>
                        <h2 className='text-3xl font-semibold md:text-left'>  Powerful tooling</h2>
                        <p className='text-center text-slate-400 max-w-[500px] md:text-left'>
                            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                            capable of producing even the most complicated sites.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default IllustrationLaptop;