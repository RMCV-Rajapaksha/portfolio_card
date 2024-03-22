import React from 'react';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import {IoCodeWorking, IoMenu, IoLogoGithub} from 'react-icons/io5';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



import May from './images/may.jpg';
import CV from './File/EE3253_L2_4733.pdf';
import { Experience, Projects, SocialLinks ,Logo } from './data';


import {AnimatePresence,motion} from 'framer-motion';

function App() {
  const [isActive, setIsActive] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e04904ae-8ac5-4ac8-a94f-3b6387a2e596");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
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
            <a href="#skill" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>skills</a>
            <a href="#projects" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>Projects</a>
            <a href="#contact" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'>Contact</a>
            <a href={CV} download='chamara_vishwajith' className='ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border-textBase  border-2 px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out'>
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
    <a href="#skill" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'  onClick={()=>setIsActive(false)}>Skills</a>
    <a href="#projects" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'  onClick={()=>setIsActive(false)}>Projects</a>
    <a href="#contact" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out'  onClick={()=>setIsActive(false)}>Contact</a>
    <motion.a 
    whileTap={{scale:0.8}}
    href={CV} download='chamara_vishwajith' className='mx-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border-textBase border-2 px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out' onClick={() => setIsActive(false)}>
  Download
</motion.a>
  </motion.div>
)}
        </div>
      </nav>
      <div className='relative ' id='home'>
      <Spline scene="https://prod.spline.design/j71eySYKUJBmN-Pu/scene.splinecode" />
        <div className='absolute bottom-10 w-full justify-center items-center flex'>
          <div className='shadow-md p-4 flex items-center justify-center bg-black rounded-3xl'>
            <p className='text-white'>Press and drag to orbit</p>
          </div>
        </div>
      </div>

      {/*Main section*/}

      <main className='w-{80%} mt-5 '>

{/*About section*/}

<section class=" text-white ">
<div>
  <div class="flex h-screen items-center justify-center  p-5">
    <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10">
      <div>
        <h1 class="mb-2 text-3xl font-bold text-white"><span class="text-green-500">Hi,</span> I'm Full Stack Developer</h1>
        <p class="mb-6 text-white">"Hello! I'm R.M.C.V Rajapaksha, a computer engineering student at the University of Ruhuna. My passion for coding stems from the belief in its limitless possibilities. Whether it's solving complex problems or exploring new technologies, I find joy in every challenge."</p>
        <div class="flex justify-center space-x-5">
          <button class="flex w-full items-center justify-center gap-1 rounded-2xl bg-rose-500 p-5 py-3 font-semibold text-white hover:bg-rose-700">
            Follow
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
          <button class="flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-5 py-3 font-semibold">
            Resume
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <img src={May} alt="" class="md:size-96 size-72 rounded-full " />
      </div>
    </div>
  </div>
</div>

</section>

{/*skills section*/}

<section className='flex flex-wrap items-center justify-evenly my-24 gap-4 pl-20 pr-20' id='skill'>
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
      <form onSubmit={onSubmit} action="#"  class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="name" name="name" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
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
    key={n.id} href={n.link} className='w-full md:w-auto px-3 md:px-8 py-5 border border-x-zine-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
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