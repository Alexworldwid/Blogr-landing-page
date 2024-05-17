import React from 'react';
import Image from 'next/image';


const Footer = () => {
    return (
        <footer className=' bg-VeryDarkBlackBlueFooterBackground rounded-tr-[100px] flex flex-col items-center justify-center transition-all duration-300 ease-in-out'>
            <div className='md:grid md:items-start md:grid-cols-4 w-full px-20 max-w-[1440px]'>
                <div className='w-full flex justify-center py-8 md:justify-start'>
                    <Image src='/images/logo.svg' alt='blogr logo' width={100} height={200} />
                </div>
                <ul className='text-slate-400 w-full flex flex-col items-center md:flex-row md:items-start md:justify-between md:col-span-3'>
                    <li>
                        <p className='text-white font-semibold tracking-wider py-8 text-center'>Product</p>
                        <ul className='flex flex-col items-center gap-2 cursor-pointer'>
                            <li className=' transition-all duration-200 ease-in-out hover:border-b-white hover:border-b '>Overview</li>
                            <li className=' transition-all duration-200 ease-in-out hover:border-b-white hover:border-b '>Pricing</li>
                            <li className=' transition-all duration-200 ease-in-out hover:border-b-white hover:border-b '>Marketplace</li>
                            <li className=' transition-all duration-200 ease-in-out hover:border-b-white hover:border-b '>Features</li>
                            <li className=' transition-all duration-200 ease-in-out hover:border-b-white hover:border-b '>Integrations</li>
                        </ul>
                    </li>

                    <li>
                        <p className='text-white font-semibold tracking-wider py-8 text-center'>Company</p>
                        <ul className='flex flex-col items-center gap-2 cursor-pointer'>
                            <li className=' transition-all duration-200 ease-in-out hover:border-b-white hover:border-b '>About</li>
                            <li className=' transition-all duration-200 ease-in-out hover:border-b-white hover:border-b '>Team</li>
                            <li className=' transition-all duration-200 ease-in-out hover:border-b-white hover:border-b '>Blog</li>
                            <li className=' transition-all duration-200 ease-in-out hover:border-b-white hover:border-b '>Careers</li>
                        </ul>
                    </li>

                    <li>
                        <p className='text-white font-semibold tracking-wider py-8 text-center'>Connect</p>
                        <ul className='flex flex-col items-center gap-2 cursor-pointer pb-8'>
                            <li className=' transition-all duration-200 ease-in-out hover:border-b-white hover:border-b '>Contact</li>
                            <li className=' transition-all duration-200 ease-in-out hover:border-b-white hover:border-b '>Newsletter</li>
                            <li className=' transition-all duration-200 ease-in-out hover:border-b-white hover:border-b '>Linkedin</li>
                        </ul>
                    </li>
                </ul>
            </div>
            
        </footer>
    );
};

export default Footer;