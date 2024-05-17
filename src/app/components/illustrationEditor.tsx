'use client';

import React,  { RefObject } from 'react';
import Image from 'next/image';
import illustrationImgMobile from '../../../public/images/illustration-editor-mobile.svg';
import illustrationImgDesktop from '../../../public/images/illustration-editor-desktop.svg';
import { motion, useInView } from 'framer-motion';


const IllustrationEditor = () => {
    

    return (
        <motion.section  className='w-full flex flex-col items-center mt-14 relative' 
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity:  1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
            <h2 className='text-2xl font-semibold mb-8 tracking-wider md:absolute md:top-10'>Designed for the future</h2>
            <div className='flex flex-col-reverse w-full relative items-center md:grid md:grid-cols-5 md:h-[700px] md:items-center '>
                <div className='flex flex-col items-center gap-8 w-[80%] md:pl-20 md:col-span-3'>
                    <div className='mt-8 flex flex-col items-center md:items-start'>
                        <h3 className='text-4xl text-center md:text-left'>Introducing an extensible editor</h3>
                        <p className='text-center text-slate-400 mt-4 md:text-left'>
                            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                            change the looks of a blog.
                        </p>
                    </div>

                    <div className='flex flex-col items-center md:items-start'>
                        <h3 className='text-4xl text-center md:text-left'>Robust content management</h3>
                        <p className='text-center text-slate-400 mt-4 md:text-left'>
                            Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                        </p>
                    </div>
                </div>

                {/* image */}
                <div id='illustration-editor' className='relative md:col-span-2 md:h-[800px]'>
                    <Image src={illustrationImgMobile} alt='illustrationImg' className='md:hidden'  />
                </div>
                
            </div>
        </motion.section>
    );
};

export default IllustrationEditor;