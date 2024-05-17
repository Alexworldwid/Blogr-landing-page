import React from 'react';
import Navbar from './navbar';

const Header = () => {
    return (
        <header id='header' className='min-h-[600px] bg-LightRed rounded-bl-[100px] items-center flex flex-col w-full gap-y-[100px] px-5' >
            <Navbar />

            <div className='w-full flex flex-col items-center'>
                <div className='w-full flex flex-col items-center'>
                    <h1 className='text-5xl text-center text-white mb-4'>A modern publishing platform</h1>
                    <p className='text-slate-300 text-2xl text-center mb-4'>Grow your audience and build your online brand</p>
                </div>
                <div className='flex items-center gap-x-3 mt-4 '>
                    <button className=' text-LightRedCTAText bg-white py-2 px-4 text-center rounded-full transition-all duration-150 ease-in-out hover:bg-LightRedCTAText hover:text-white hover:border hover:border-white'>Start for Free</button>
                    <button className='text-white border border-white py-2 px-4 rounded-full transition-all duration-150 ease-in-out hover:text-LightRedCTAText hover:bg-white'>Learn More</button>
                </div>
            </div>
        </header>
    );
};

export default Header;