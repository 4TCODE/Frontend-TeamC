import React, { useEffect, useRef, useState } from 'react';


export default function SideNav() {
    const [openNav, setOpenNav] = useState(false);
    const [barwidth, setBarWidth] = useState();
    let test = useRef()
    console.log(barwidth);

    function toggle() {
        setOpenNav(!openNav);
    };

    useEffect(() => {
        console.log(test);
        setBarWidth(test.current.scrollWidth)
    }, [])

    return (
        <nav ref={test} className={`flex flex-col z-50 bg-white shadow-md text-slate-700 border-r-2 w-64 h-full fixed top-0 left-0 bottom-0 transform ${openNav ? 'translate-x-0' : '-translate-x-3/4'} transition-transform duration-300`}>
            <button className="p-6 self-end hover:scale-110 duration-300" onClick={() => toggle()}>
                {openNav ? <i className="fa-solid fa-angles-left"></i> : <i className="fa-solid fa-angles-right"></i>}
            </button>
            <div className='bg-slate-300 w-3/4 h-px absolute top-9 -translate-y-1/2'></div>
            {openNav ? <ul className="mt-10 cursor-pointer overflow-hidden">
                <li className="p-6 hover:bg-gray-300 border-b-2 border-slate-700 border-opacity-5 hover:scale-110 duration-300">
                    <i className="fas fa-home mr-5"></i> Home
                </li>
                <li className="p-6 hover:bg-gray-300 border-b-2 border-slate-700 border-opacity-5 hover:scale-110 duration-300">
                    <i className="fa-solid fa-address-card mr-5"></i> About
                </li>
                <li className="p-6 hover:bg-gray-300 border-b-2 border-slate-700 border-opacity-5 hover:scale-110 duration-300">
                    <i className="fa-brands fa-servicestack mr-5"></i> Services
                </li>
                <li className="p-6 hover:bg-gray-300 hover:scale-110 duration-300">
                    <i className="fa-solid fa-address-book mr-5"></i> Contact
                </li>
            </ul > : <ul className='flex flex-col items-end cursor-pointer mt-10 overflow-hidden'>
                <li className="p-6 hover:bg-gray-300 border-b-2 border-slate-700 border-opacity-5 hover:scale-110 duration-300">
                    <i className="fas fa-home"></i>
                </li>
                <li className="p-6 hover:bg-gray-300 border-b-2 border-slate-700 border-opacity-5 hover:scale-110 duration-300">
                    <i className="fa-solid fa-address-card"></i>
                </li>
                <li className="p-6 hover:bg-gray-300 border-b-2 border-slate-700 border-opacity-5 hover:scale-110 duration-300">
                    <i className="fa-brands fa-servicestack"></i>
                </li>
                <li className="p-6 hover:bg-gray-300 hover:scale-110 duration-300">
                    <i className="fa-solid fa-address-book"></i>
                </li>
            </ul>}
        </nav >
    );
};
