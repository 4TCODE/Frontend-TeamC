import React from 'react'

export default function MainNav() {
    return (
        <div>
            <nav className='fixed top-0 left-0 right-0 p-2 bg-white border border-slate-300 border-opacity-55 border-t-0 z-40 flex items-center justify-evenly'>
                <div className='relative'>
                    <input className='w-96 h-8 p-5 px-7 border-2 border-slate-300 rounded-2xl bg-slate-50' type="text" placeholder='Search...' />
                    <i className="fa-solid text-slate-400 fa-magnifying-glass absolute left-2 top-1/2 -translate-y-1/2"></i>
                </div>
                <ul className='flex gap-x-10 text-slate-500'>
                    <li><i className="fa-solid fa-inbox mr-2 text-lg"></i> inbox</li>
                    <li><i className="fa-solid fa-comments mr-2 text-lg"></i> Chat</li>
                    <li><i className="fa-solid fa-gear fa-spin mr-2 text-lg"></i> Setting</li>
                </ul>
                <ul>
                    <li><i className="fa-regular fa-bell"></i></li>
                </ul>
                <div className='xl:hidden cursor-pointer'>
                    <i className="fa-solid fa-sliders text-2xl"></i>
                </div>
            </nav>
        </div>
    )
}
