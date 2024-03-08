import React from 'react';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import {IoCodeWorking, IoMenu, IoLogoGithub} from 'react-icons/io5';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



import May from './images/may.jpg';
import { Experience, Projects, SocialLinks ,Logo } from './data';


import {AnimatePresence,motion} from 'framer-motion';

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <AnimatePresence initial={false}>
    <div className="flex w-screen  min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      {/*Navigation bar*/}
      <nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center'>
        <div className='w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center'>
          <p className='text-lg text-slate-200 font-medium'>Chamara Vishwajith</p>
          <div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
            <a href="#home" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>Home</a>
            <a href="#about" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>About</a>
            <a href="#projects" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>skills</a>
            <a href="#projects" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>Projects</a>
            <a href="#contact" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>Contact</a>
            <a href="#" className='ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border-textBase  border-2 px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out'>
  Download
</a>

          </div>
          <motion.div 
          whileTap={{scale:0.5}}
          className='block md:hidden ml-auto cursor-pointer'
           onClick={()=>setIsActive(!isActive)}>

            <IoMenu className='text-2xl text-textBase'/>
          </motion.div>
          {isActive && (
 <motion.div
 initial={{opacity:0, scale:0.5}}
 animate={{opacity:1, scale:1.1}}
 exit={{opacity:0, scale:0.5}}
 transition={{delay:0.1 , type:"spring"}}
  className='p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6'>
    <a href="#home" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out' onClick={()=>setIsActive(false)}>Home</a>
    <a href="#about" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'  onClick={()=>setIsActive(false)}>About</a>
    <a href="#about" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'  onClick={()=>setIsActive(false)}>Skills</a>
    <a href="#projects" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'  onClick={()=>setIsActive(false)}>Projects</a>
    <a href="#contact" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'  onClick={()=>setIsActive(false)}>Contact</a>
    <motion.a 
    whileTap={{scale:0.8}}
    href="#" className='mx-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border-textBase border-2 px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out' onClick={() => setIsActive(false)}>
  Download
</motion.a>
  </motion.div>
)}
        </div>
      </nav>
      <div className='relative ' id='home'>
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
<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">About</h2>
<section className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24' id="about">
{/*image box*/}
<div className='w-full h-470 flex items-center justify-center'>
<div className='w-275 h-340 bg-emerald-200 rounded-md relative'>
  <img className='w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg' src={May} alt=""/>
</div>
</div>
{/*content box*/}
<div className='w-full h-470 flex flex-col items-center justify-center pl-10 pr-10'>
<p className='text-lg text-textBase text-center'>
Hello, coding enthusiasts! I'm R.M.C.V Rajapaksha, an aspiring computer engineering undergraduate at the University of Ruhuna, and I'm delighted to share a bit about my coding journey with you.I'm a passionate coder who believes in the limitless possibilities of creative thinking and programming knowledge. Currently immersed in the world of computer engineering at the University of Ruhuna, my journey began with a curiosity to solve problems using the power of code.I find immense joy in coding and exploring the vast landscape of computer engineering. Whether I'm tackling complex algorithms, designing innovative solutions, or diving into the latest technologies, my motivation stems from the belief that every problem has a solution waiting to be uncovered through ingenuity and code.I find immense joy in coding and exploring the vast landscape of computer engineering. Whether I'm tackling complex algorithms, designing innovative solutions, or diving into the latest technologies, my motivation stems from the belief that every problem has a solution waiting to be uncovered through ingenuity and code.
</p>
<motion.button
whileTap={{scale:0.8}}
  className='w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80'
>
<span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Download
</span>

</motion.button>

</div>
</section>
{/*skills section*/}

<section className='flex flex-wrap items-center justify-evenly my-24 gap-4 pl-20 pr-20'>
<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">I'm Familiar With</h2>
<div className='flex flex-row flex-wrap justify-center gap-10 mt-8 mx-4 md:mx-16'>

{Logo && Logo.map((index) => (
    <div key={index} className='mx-auto border border-zinc-800 hover:border-zinc-600 shadow-lg rounded-lg overflow-hidden md:w-16 md:h-16 lg:w-20 lg:h-20 w-12 h-12 hover:scale-110 transition-transform'>
    <img src={index.imageSrc} alt='' />
  </div>
))}


 
</div>

</section>

{/*timeline section*/}

<section className='w-full flex items-center justify-center pl-10 pr-10'>
  <VerticalTimeline>
  {
    Experience && Experience.map((n) => (
    <VerticalTimelineElement
    key={n.id}
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(21, 24, 31)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(21, 24, 31)' }}
      date={n.date}
      iconStyle={{ background: 'rgb(21, 24, 31)', color: '#fff' }}
      icon={n.iconsSrc}
    >
      <h3 className="vertical-timeline-element-title">{n.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
      <p>
        {n.description}
      </p>
    </VerticalTimelineElement>))
  }

  
  </VerticalTimeline>
</section>

{/* Project Section*/}
<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white pt-20">Projects</h2>
<section className=' flex flex-wrap items-center justify-evenly my-24 gap-4 pl-20 pr-20' id='projects'>

 {Projects && Projects.map((n) => (
   <div key={n.id} className='border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>
   <p className='text-md text-textBase font-medium uppercase'>
  {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
</p>

   <img src={n.imageSrc} className='w-full h-full object-cover rounded-md my-4'></img>
   <div className='flex flex-1 items-center justify-between '>
     <p className='text-lg text-gray-300'>{n.techs}
     <span className='block text-sm text-gray-500'>
       {n.techs}

       </span>
       </p>
       <a href={n.github}>
         <motion.div
         whileTap={{scale:0.8}}
          className='text-textBase text-3xl cursor-pointer' >
<IoLogoGithub/>
         </motion.div>
       </a>
   </div>
 </div>

 ) )}
</section>


{/*Contact Section*/}

<section id="contact" className='flex flex-col items-center justify-center w-full my-24 pl-10 pr-10'>
<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>

      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to talk With me? Just put an email here.I will respond as quickly as possible</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
  <p className=' text-2x1 text-gray-400 capitalize'> follow me </p>
  <div className='flex items-center justify-center w-full my-4 flex-wrap  gap-4'>
  {
    SocialLinks && SocialLinks.map((n) => (  
    <motion.a 
    whileTap={{scale:0.8}}
    key={n.id} href='#' className='w-full md:w-auto px-3 md:px-8 py-5 border border-x-zine-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
    {n.iconSrc}
    <p className='text-lg text-textBase'>{n.name}</p>
  </motion.a>))
  }
  </div>

</section>


      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;