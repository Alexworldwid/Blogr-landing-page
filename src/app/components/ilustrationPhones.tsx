'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import illustrationPhone from '../../../public/images/illustration-phones.svg';
import { ubuntu } from '@/app/components/fonts'

const IlustrationPhones = () => {
    return (
        <motion.section id='illustation-phone-container' className='mt-80 mb-40 bg-VeryDarkGrayBlue relative rounded-tr-[100px] rounded-bl-[100px] pb-36 md:pb-0 flex flex-col items-center'
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity:  1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
            <div className='md:grid md:items-center md:grid-cols-2 w-full max-w-[1440px]'>
                {/* image */}
                <div id='illustation-phone' className='h-[350px] md:h-[400px] md:top-0 lg:-top-20 relative z-30 -top-[160px]'>
                    <Image src={illustrationPhone } alt='illustrationPhone' className='hidden md:block' />
                </div>

                <div className={`${ubuntu.className} antialiased  w-full flex flex-col px-10 items-center justify-center md:items-start`}>
                    <h2 className='text-center text-white text-4xl mb-8 md:text-left'>State of the Art Infrastructure</h2>
                    <p className='text-center text-slate-400 md:text-left max-w-[600px]'>
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </div>
            </div>
            
        </motion.section>
    );
};

export default IlustrationPhones;