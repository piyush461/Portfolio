import Copyright from './Copyright'
import { IoIosArrowUp } from "react-icons/io";
import SectionHead from '../Header/SectionHead';
import { SiGmail, SiHackerrank } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const navigate = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className='flex items-center flex-col relative footer'>
      <div className='h-60 w-full bg-slate-800 flex flex-col justify-start pt-10 gap-6 items-center'>
        <SectionHead head='Social' />
        <div className='flex gap-6'>
          <a href="https://github.com/piyush461" className="relative transition-transform duration-100 transform hover:text-cyan-400 hover:scale-95">
            <FaGithub size={40} />
            <span className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-150 pointer-events-none group-hover:opacity-100">GitHub</span>
          </a>
          <a href="https://www.hackerrank.com/profile/piyushk461" className="relative transition-transform duration-100 transform hover:text-cyan-400 hover:scale-95">
            <SiHackerrank size={40} />
            <span className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-150 pointer-events-none group-hover:opacity-100">HackerRank</span>
          </a>
          <a href="http://www.linkedin.com/in/piyush461" className="relative transition-transform duration-100 transform hover:text-cyan-400 hover:scale-95">
            <FaLinkedin size={40} />
            <span className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-150 pointer-events-none group-hover:opacity-100">LinkedIn</span>
          </a>
          <a href="#contact" className="relative transition-transform duration-100 transform hover:text-cyan-400 hover:scale-95">
            <SiGmail size={40} />
            <span className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-150 pointer-events-none group-hover:opacity-100">Mail</span>
          </a>
        </div>
      </div>
      <button 
        onClick={navigate} 
        className="navigat absolute bottom-2 left-1/2 transform -translate-x-1/2 hover:bottom-4 transition-all ease-in-out h-24 w-24 rounded-full bg-gray-900 flex justify-center pt-2"
        style={{ cursor: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVR4nO2aPU8bQRCGN1DkV4QmEilQ0gTvHB+pIiQk6kiRaBBV/gW/IRINFUUKJFJ7xggQiK8gSgqU2MxcR4nkgBEEwaE9uMS+2HwY73J33CtNs9Psc+/uzs7qlMqVKzkqFLkXUNaAuKaJVwex/FqlUYC8BSRBFAZGpVEa5bwRRE5VGgV1EFGoNApykIQJckcSJsgdSZggdyRhgtyRFDnSX6q80iiLQFIFkqX3i9yj0ggCxAuNOV6Icua6b27KgHxsbtAFqvQ9GcRdIOYmHMudRTkgWY5B/lCJdQT5sjUknzTkUP5EuX6SN5pk3bilibeduNU2SKyPAeKLfzleaehxUDYTBzJQqgx6JdbxcQNWB3nUakk6BQHk4TCa5VpH3f7hC+fN2gMne2to9D1N/OFJiix0EOS2UDnIs3FkKugqkP8l1SCjWH6piedcQYAtECD5ft8JmLoRP4rDWlLcH7prDGyCFHD/Yztfsp0xsAmiSb5lAgSIOSsgtUyAaOLDTIAAyU4mQDTy14yA+F4mQFQQvNAolfSDqHB5Td4XxFTreI8RVvBYtW82BrZBPs0H3UDy6yFL7JFRVbYE5E+4AtHEe9ZAQleQfzoBQZ5VNuUhjztyZMwqyM1e2bEMsW1OSmVbXpHfmqccOxDyG5DfKVcC9D+bJ8+OQ5R4RLnWdb2Q3Q5BbJifdZxD/NVU0GW+IqBMm7UNyAdNXuT/j+vH6j0gnjEd6GPncQVPsyjsM5IQCAAAAABJRU5ErkJggg=='), auto" }}
      >
        <IoIosArrowUp color='cyan' size={40}  />
      </button>
      <Copyright />
    </div>
  )
}

export default Footer;
