import React from 'react';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import {IoCodeWorking, IoMenu} from 'react-icons/io5';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import May from './images/may.jpg';

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex w-screen  min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
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

      {/*Main section*/}

      <main className='w-{80%} mt-5 '>
{/*About section*/}
<section className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24' id="about">
{/*image box*/}
<div className='w-full h-470 flex items-center justify-center'>
<div className='w-275 h-340 bg-emerald-200 rounded-md relative'>
  <img className='w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg' src={May} alt=""/>
</div>
</div>
{/*content box*/}
<div className='w-full h-470 flex flex-col items-center justify-center'>
<p className='text-lg text-textBase text-center p-20'>
Hello, coding enthusiasts! I'm R.M.C.V Rajapaksha, an aspiring computer engineering undergraduate at the University of Ruhuna, and I'm delighted to share a bit about my coding journey with you.I'm a passionate coder who believes in the limitless possibilities of creative thinking and programming knowledge. Currently immersed in the world of computer engineering at the University of Ruhuna, my journey began with a curiosity to solve problems using the power of code.I find immense joy in coding and exploring the vast landscape of computer engineering. Whether I'm tackling complex algorithms, designing innovative solutions, or diving into the latest technologies, my motivation stems from the belief that every problem has a solution waiting to be uncovered through ingenuity and code.I find immense joy in coding and exploring the vast landscape of computer engineering. Whether I'm tackling complex algorithms, designing innovative solutions, or diving into the latest technologies, my motivation stems from the belief that every problem has a solution waiting to be uncovered through ingenuity and code.
</p>
<button
  className='m-10 w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80'
>
<span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Download
</span>

</button>

</div>
</section>

{/*timeline section*/}

<section className='w-full flex items-center justify-center'>
  <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(21, 24, 31)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(21, 24, 31)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(21, 24, 31)', color: '#fff' }}
    icon={<IoCodeWorking />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

  
  </VerticalTimeline>
</section>
      </main>
    </div>
  );
}

export default App;