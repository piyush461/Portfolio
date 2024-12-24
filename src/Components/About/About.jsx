import '../About/About.css';

const About = () => {
  return (
    <div id='about' className='h-screen max-md:[80%] w-full bg-slate-700 flex items-center justify-center'>
      <div className='aboutDiv p-5 md:h-[70%] max-md:h-[65%] w-[85%] flex flex-col justify-between'>
        <p className='text-white text-xs'>Hi, my name is</p>
        <p className='text-5xl font-bold text-cyan-300'>Piyush Kumar</p>
        <p className='text-5xl font-bold text-cyan-500'>I build things for the web</p>
        <p className='md:text-sm max-md:text-sm mt-4 font-medium text-cyan-300 md:w-[35%] max-md:w-[95%] max-md:h-[40%]'>
          I’m a coding enthusiast with a knack for <br />turning ideas into digital masterpieces,
          ready  <br />to make waves in the tech world and push <br />boundaries. Let’s break the mold and build the <br /> future, one line of code at a time, leading to <font className='text-slate-50'>innovation</font>.
        </p>
        <br />
        
        <a href="#project">
        <button className='checkOut border w-fit px-4 py-2 text-slate-300'>Check out my work!</button>
        </a>
      </div>
      
    </div>
  )
}

export default About