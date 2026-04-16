import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialLinkedin } from 'react-icons/sl';

const Footer = () => {
  return (
    <div className='bg-[#244D3F]' >
            
  <footer className="footer footer-horizontal footer-center text-base-content rounded pt-30 mt-40  container mx-auto ">
         
         <h2 className='font-bold text-4xl '>KeenKeeper</h2>
         <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
          <div>
            <h3>Social Links</h3>

            <div className='flex space-x-2 justify-center items-center'>
              <span className='p-2 bg-white text-black font-bold rounded-full'><FaFacebook/></span>
              <span className='p-2 bg-white text-black font-bold rounded-full'><FaInstagramSquare/></span>
              <span className='p-2 bg-white text-black font-bold rounded-full'><FaXTwitter/></span>
              <span className='p-2 bg-white text-black font-bold rounded-full'><SlSocialLinkedin/></span>
                

            </div>
          </div>
  
  <aside className=' flex justify-between items-center w-full py-10 px-2'>
    <h4>Copyright © {new Date().getFullYear()} - © 2026 KeenKeeper. All rights reserved.</h4>
    <nav className='flex items-center space-x-4'>
      <a href="">Privacy Policy</a>
      <a href="">Terms of service</a>
      <a href="">Cookies</a>
    </nav>
  </aside>
</footer>

    </div>
  );
};

export default Footer;