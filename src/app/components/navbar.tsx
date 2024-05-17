import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import Logo from '../../../public/images/logo.svg'
import Menu from '../../../public/images/icon-hamburger.svg';
import CloseMenu from '../../../public/images/icon-close.svg';
import Image from 'next/image';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";


const Navbar: React.FC = () => {
    // menu state
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [pricingState, setPricingState] = useState<boolean> (false);
    const [companyState, setCompanyState] = useState<boolean> (false);
    const [connectState, setConnectState] = useState<boolean>(false)
    const menuRef = useRef<HTMLUListElement>(null);


    const handleMenu = () => {
        setIsOpen(prev => !prev );
        
    }

    const handlePricingState = () => {
        setPricingState(!pricingState)
    }

    const handleCompanyState = () => {
        setCompanyState(!companyState)
    }

    const handleConnectState = () => {
        setConnectState(!connectState);
    }

    // handle click outside menu
    useEffect(() => {
        const handleClickOutsideMenu = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                handleMenu()
                console.log(isOpen);
            }
        }

        document.addEventListener('mousedown', handleClickOutsideMenu);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMenu);
        }
    })


    return (
        <nav className='relative flex justify-between items-center pt-8 w-full max-w-[1440px]'>
            {/* Logo */}
            <motion.svg width="101" height="40" viewBox='0 0 101 40' xmlns='http://www.w3.org/2000/svg'>
                <motion.path
                    d="M0 30.803V1.486h10.653c1.982 0 3.695.31 5.14.93 1.446.619 2.56 1.5 3.345 2.642.785 1.142 1.177 2.484 1.177 4.026 0 1.404-.303 2.636-.909 3.695a6.48 6.48 0 01-2.56 2.498c1.487.578 2.643 1.494 3.469 2.746.826 1.253 1.239 2.732 1.239 4.439 0 1.707-.44 3.18-1.322 4.418-.88 1.239-2.12 2.202-3.716 2.89-1.596.688-3.482 1.033-5.657 1.033H0zM5.946 6.565v6.73h4.046c1.35 0 2.388-.282 3.118-.846.73-.564 1.094-1.397 1.094-2.498 0-1.101-.365-1.94-1.094-2.519-.73-.578-1.769-.867-3.118-.867H5.946zm0 19.159h4.624c1.542 0 2.732-.33 3.572-.991.84-.66 1.26-1.61 1.26-2.85 0-1.238-.42-2.188-1.26-2.848-.84-.66-2.03-.991-3.572-.991H5.946v7.68zm19.282 5.079V0h5.781v30.803h-5.78zm20.893.619c-1.624 0-3.124-.29-4.5-.867a10.94 10.94 0 01-3.593-2.416 10.96 10.96 0 01-2.374-3.654c-.564-1.404-.846-2.931-.846-4.583 0-1.652.289-3.173.867-4.563a11.354 11.354 0 012.415-3.654 10.96 10.96 0 013.634-2.436c1.39-.578 2.91-.867 4.562-.867 1.625 0 3.125.289 4.501.867a10.94 10.94 0 013.592 2.416 11.01 11.01 0 012.375 3.633c.564 1.39.846 2.911.846 4.563 0 1.651-.289 3.179-.867 4.583a11.297 11.297 0 01-2.416 3.675 10.96 10.96 0 01-3.633 2.436c-1.39.578-2.911.867-4.563.867zm.083-5.203c1.046 0 1.982-.275 2.808-.825.825-.551 1.48-1.301 1.96-2.25.483-.95.723-2.03.723-3.242 0-1.211-.24-2.292-.722-3.241-.482-.95-1.136-1.7-1.961-2.25-.826-.551-1.762-.826-2.808-.826-1.046 0-1.982.275-2.808.825-.826.55-1.48 1.301-1.961 2.25-.482.95-.723 2.03-.723 3.242 0 1.211.241 2.292.723 3.241.482.95 1.135 1.7 1.961 2.25.826.551 1.762.826 2.808.826zm24.155 3.964a9.13 9.13 0 01-3.86-.826 9.492 9.492 0 01-3.118-2.291c-.881-.977-1.57-2.12-2.065-3.427-.495-1.308-.743-2.719-.743-4.233 0-1.569.255-3.02.764-4.356a10.614 10.614 0 012.147-3.489 10.174 10.174 0 013.22-2.333c1.225-.564 2.554-.846 3.985-.846 1.404 0 2.67.282 3.799.846a7.402 7.402 0 012.807 2.457l.124-2.684h5.327v19.2c0 1.68-.269 3.207-.805 4.584-.537 1.376-1.301 2.56-2.292 3.55a10.231 10.231 0 01-3.53 2.292c-1.363.537-2.87.805-4.522.805-1.624 0-3.083-.254-4.376-.764a10.468 10.468 0 01-3.386-2.126 10.035 10.035 0 01-2.271-3.18L67.097 32a5.452 5.452 0 001.92 1.879c.784.454 1.672.681 2.663.681 1.074 0 2.003-.24 2.787-.723.785-.481 1.397-1.156 1.838-2.023.44-.867.66-1.879.66-3.035v-1.775a7.793 7.793 0 01-2.828 2.333c-1.143.564-2.402.846-3.778.846zm1.404-5.12c1.018 0 1.92-.254 2.704-.764a5.556 5.556 0 001.879-2.064c.468-.867.702-1.851.702-2.952 0-1.102-.234-2.086-.702-2.953a5.556 5.556 0 00-1.879-2.064c-.784-.51-1.686-.764-2.704-.764-1.019 0-1.92.255-2.705.764a5.556 5.556 0 00-1.879 2.064c-.468.867-.702 1.851-.702 2.953 0 1.1.234 2.085.702 2.952a5.556 5.556 0 001.88 2.064c.784.51 1.685.764 2.704.764zm15.607 5.74V9h5.327l.206 3.304c.55-1.157 1.294-2.044 2.23-2.664.936-.62 2.037-.929 3.303-.929.386 0 .77.035 1.156.103.386.07.73.159 1.033.269l-.62 5.698a4.361 4.361 0 00-.929-.227 7.495 7.495 0 00-.97-.062c-1.597 0-2.822.489-3.675 1.466-.853.977-1.28 2.36-1.28 4.15v10.694h-5.78z"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    fill="#FFF"
                    fillRule="nonzero"
                />
            </motion.svg>

            {/* nav menu desktop */}
            <ul className='hidden md:flex md:items-center gap-x-4 justify-start flex-1 ml-6 cursor-pointer'>
                <li onClick={handlePricingState} className='relative'>
                    <span className='flex items-center gap-x-2'>
                        <p className={`font-semibold text-white  ${pricingState ? 'text-slate-500' : ''}`}>Product</p>
                        { !pricingState ? <FaAngleDown className=' text-white text-sm' /> : <FaAngleUp className=' text-white text-sm' /> }    
                    </span >

                    <AnimatePresence>
                        { pricingState && (
                            <motion.ul className='bg-slate-200 -left-6 p-4 mt-4 rounded-lg flex flex-col items-center gap-y-2 text-slate-600 absolute'
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            >
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Overview</li>
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Pricing</li>
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Marketplace</li>
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Features</li>
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Integrations</li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </li>

                <li onClick={handleCompanyState} className='relative'>
                    <span className='flex items-center gap-x-2'>
                        <p className={`text-white font-semibold  ${companyState ? 'text-slate-500' : ''}`}>Company</p>
                        { !companyState ? <FaAngleDown className=' text-white text-sm' /> : <FaAngleUp className=' text-white text-sm' /> }
                    </span>

                    <AnimatePresence>
                        { companyState && (
                            <motion.ul className='bg-slate-200 left-3 absolute p-4 mt-4 rounded-lg flex flex-col items-center gap-y-2 text-slate-600'
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            >
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>About</li>
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Team</li>
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Blog</li>
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Career</li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </li>

                <li onClick={handleConnectState} className='relative'>
                    <span className='flex items-center gap-x-2'>
                        <p className={`text-white font-semibold  ${connectState ? 'text-slate-500' : ''}`}>Connect</p>
                        { !connectState ?  <FaAngleDown className=' text-white text-sm' /> : <FaAngleUp className=' text-white text-sm' /> }
                    </span>

                    <AnimatePresence>
                        { connectState && (
                            <motion.ul className='bg-slate-200 absolute p-4 mt-4 rounded-lg flex flex-col items-center gap-y-2 text-slate-600'
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            >
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Contact</li>
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Newsteller</li>
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Linkedin</li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </li>
            </ul>

            <div className='hidden md:flex items-center gap-x-4 '>
                <button className='text-white font-medium border border-white py-2 px-4 rounded-full' >Login</button>
                <button className='transiton-all duration-150 ease-in-out text-LightRed font-semibold bg-WhiteText px-6 py-2 rounded-full hover:bg-LightRed hover:text-white hover:border hover:border-white'>Signup</button>
            </div>

            {/* nav menu mobile */}
            <AnimatePresence>
            { isOpen && (
                <motion.ul ref={menuRef} className='absolute bg-white top-28 md:hidden w-full rounded-lg flex flex-col items-center py-6 px-4 shadow-xl'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, scale: 0 }}
                >
                    <li onClick={handlePricingState} className='w-full cursor-pointer mb-6 items-center flex flex-col '>
                        <span className='flex items-center gap-x-2'>
                            <p className={`font-semibold  ${pricingState ? 'text-slate-500' : ''}`}>Product</p>
                            { !pricingState ? <FaAngleDown className=' text-LightRed text-sm' /> : <FaAngleUp className=' text-LightRed text-sm' /> }
                            
                        </span >
                        <AnimatePresence>
                            { pricingState && (
                                <motion.ul className='bg-slate-200 w-full p-4 mt-4 rounded-lg flex flex-col items-center gap-y-2 text-slate-600'
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1 }}
                                >
                                    <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Overview</li>
                                    <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Pricing</li>
                                    <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Marketplace</li>
                                    <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Features</li>
                                    <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Integrations</li>
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </li>

                    <li onClick={handleCompanyState} className='w-full cursor-pointer mb-6 items-center flex flex-col '>
                        <span className='flex items-center gap-x-2'>
                            <p className={`font-semibold  ${companyState ? 'text-slate-500' : ''}`}>Company</p>
                            { !companyState ? <FaAngleDown className=' text-LightRed text-sm' /> : <FaAngleUp className=' text-LightRed text-sm' /> }
                        </span>
                        <AnimatePresence>
                        { companyState && (
                            <motion.ul className='bg-slate-200 w-full p-4 mt-4 rounded-lg flex flex-col items-center gap-y-2 text-slate-600'
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            >
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>About</li>
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Team</li>
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Blog</li>
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Career</li>
                            </motion.ul>
                        )}
                        </AnimatePresence>
                    </li>

                    <li onClick={handleConnectState} className='w-full cursor-pointer mb-6 items-center flex flex-col '>
                        <span className='flex items-center gap-x-2'>
                            <p className={`font-semibold  ${connectState ? 'text-slate-500' : ''}`}>Connect</p>
                            { !connectState ?  <FaAngleDown className=' text-LightRed text-sm' /> : <FaAngleUp className=' text-LightRed text-sm' /> }
                        </span>
                        <AnimatePresence>
                        { connectState && (
                            <motion.ul className='bg-slate-200 w-full p-4 mt-4 rounded-lg flex flex-col items-center gap-y-2 text-slate-600'
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            >
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Contact</li>
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Newsteller</li>
                                <li className='transition-all duration-150 ease-in-out hover:text-black hover:font-semibold'>Linkedin</li>
                            </motion.ul>
                        )}
                        </AnimatePresence>
                    </li>

                    <span className='border h-1 bg-slate-400 w-full mb-6 '></span>

                    <button className='font-semibold mb-2 p-4 px-14 hover:bg-black hover:text-slate-100 rounded-full transition-all duration-150 ease-in'>Login</button>
                    <button className='font-semibold mb-6 bg-gradient-to-r from-VeryLightRed to-LightRed text-slate-100 p-4 rounded-full px-12 hover:from-slate-600 hover:to-slate-800 transition-all duration-150 ease-in-out'>Sign Up</button>
                </motion.ul>
            )}
            </AnimatePresence>
            

            <button onMouseDown={handleMenu} className='md:hidden'>
                { !isOpen ? <Image src={Menu} width={40} height={40} alt='harburger menu' /> : <Image src={CloseMenu} alt='close' width={40} height={40} />}
            </button>
        </nav>
    );
};

export default Navbar;