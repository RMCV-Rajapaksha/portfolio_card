import React from 'react';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import {IoMenu} from 'react-icons/io5';

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      {/*Navigation bar*/}
      <nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center'>
        <div className='w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center'>
          <p className='text-lg text-slate-200 font-medium'>Chamara Vishwajith</p>
          <div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
            <a href="#home" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>Home</a>
            <a href="#about" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>About</a>
            <a href="#projects" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>Projects</a>
            <a href="#contact" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>Contact</a>
            <a href="#" className='ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out '>Download</a>
          </div>
          <div className='block md:hidden ml-auto cursor-pointer'
           onClick={()=>setIsActive(!isActive)}>

            <IoMenu className='text-2xl text-textBase'/>
          </div>
          {isActive && (
 <div className='p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6'>
    <a href="#home" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out' onClick={()=>setIsActive(false)}>Home</a>
    <a href="#about" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>About</a>
    <a href="#projects" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>Projects</a>
    <a href="#contact" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>Contact</a>
    <a href="#" className=' text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out '>Download</a>
  </div>
)}
        </div>
      </nav>
      <div className='relative '>
        <Spline scene="https://prod.spline.design/pfqJo4JN2jZcqmt3/scene.splinecode" />
        <div className='absolute bottom-10 w-full justify-center items-center flex'>
          <div className='shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl'>
            <p className='text-white'>Press and drag to orbit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;