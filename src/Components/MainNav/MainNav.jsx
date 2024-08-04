import React, { useContext, useState } from 'react'
import { searchTerm } from '../../Context/SearchTerm'

export default function MainNav() {

    const [openToggle, setOpenToggle] = useState(false)
    let { setGetTerm } = useContext(searchTerm)

    function searchKey(e) {
        // console.log(e.target.value);
        setGetTerm(e.target.value)
    }


    return (
        <div>
            <nav className='fixed top-0 left-0 right-0 p-2 bg-white border border-slate-300 border-opacity-55 border-t-0 z-40 flex items-center justify-evenly'>
                <div className='relative hover:scale-105 duration-300'>
                    <input onChange={searchKey} className='md:w-96 h-8 p-5 px-7 border-2 border-slate-300 rounded-2xl bg-slate-50' type="text" placeholder='Search...' />
                    <i className="fa-solid text-slate-400 fa-magnifying-glass absolute left-2 top-1/2 -translate-y-1/2"></i>
                </div>
                <div className={`${openToggle ? 'flex' : 'hidden'} rounded-xl lg:flex lg:static lg:border-none lg:shadow-none lg:w-auto lg:top-auto shadow-xl border-t-2 absolute top-full left-[70%] lg:p-0 bg-white z-10 flex justify-end`}>
                    <ul className={`flex flex-col lg:flex-row lg:gap-x-10 text-slate-500`}>
                        <li className='border-b-2 lg:border-none lg:p-0 p-7 px-10 hover:scale-105 hover:text-emerald-500 hover:bg-yellow-200 lg:hover:bg-transparent rounded-lg duration-300 cursor-pointer'><i className="fa-solid fa-inbox mr-2 text-lg"></i> inbox</li>
                        <li className='border-b-2 lg:border-none lg:p-0 p-7 px-10 hover:scale-105 hover:text-emerald-500 hover:bg-yellow-200 lg:hover:bg-transparent duration-300 cursor-pointer'><i className="fa-solid fa-comments mr-2 text-lg"></i> Chat</li>
                        <li className='p-7 px-10 lg:p-0 hover:scale-105 hover:text-emerald-500 hover:bg-yellow-200 lg:hover:bg-transparent duration-300 cursor-pointer'><i className="fa-solid fa-gear fa-spin mr-2 text-lg"></i> Setting</li>
                    </ul>
                </div>
                <ul>
                    <li className='cursor-pointer hover:scale-110 hover:rotate-[360deg] duration-1000'><i className="fa-regular fa-bell text-lg"></i></li>
                </ul>
                <button onClick={() => setOpenToggle(!openToggle)} className='cursor-pointer flex items-center gap-3'>
                    <img className="w-8 h-8 rounded-full hover:scale-110 duration-300" src="https://dashhub-tail.netlify.app/assets/images/user.png" alt="" />
                    <div className='hidden lg:block hover:scale-105 duration-300'>
                        <h3 className='font-semibold'>Team-C <i class="fa-solid fa-chevron-down"></i></h3>
                        <p className='text-sm font-mono'>Trainning</p>
                    </div>
                </button>

            </nav >
        </div >
    )
}
