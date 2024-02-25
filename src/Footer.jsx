import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
    const socialIcons = [InstagramIcon, XIcon, GitHubIcon, LinkedInIcon]; // Assuming all icons are imported
    return (
        <div className="relative ">
      <div className="pb-16">
        {/* Your content goes here */}
      </div>

      <div className="fixed bottom-0 flex justify-between w-full bg-slate-100 text-black py-4 px-6">
        <p className="text-sm ml-10">&copy; 2024 Your Company. All rights reserved.</p>
        <div className='flex mr-10'>
        {socialIcons.map((Icon, index) => (
            <li key={index} className="list-none ml-5">
              <Icon /> 
            </li>
          ))}
        </div>
        </div>
        </div>
      );
    };

