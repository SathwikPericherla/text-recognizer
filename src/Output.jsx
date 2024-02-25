import React from 'react'
import { useState } from 'react'; // Import useState
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import DoneIcon from '@mui/icons-material/Done';
import {Loader} from "./Loader"
export const Output = ({response}) => {
    const [isclick, setisClick] = useState(false);
    const handleCopyToClipboard = () => {
      navigator.clipboard.writeText(response)
        setisClick(true)
    };

  return (
    <div>
      <div className='my-10 max-w-full flex justify-center items-center'>
        {!response ? (
          <Loader/>
        ) : response.replace(/\s/g, "")=="err"? (
          <p className='font-inter font-bold text-black text-center'>
           Sorry, the text can't be recognized...
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {}
            </span>
          </p>
        ) : (
          response && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
               Recognized <span className='blue_gradient'>Text</span>
              </h2>
              <div className='summary_box relative'>
              <div className='absolute right-0 ml- mr-2 top-3'>
              <Tooltip title={`${isclick?"Copied":"Click to copy"}`}>
              {!isclick?(<ContentCopyIcon 
                  onClick={handleCopyToClipboard}
                  style={{cursor:'pointer'}}
               />):(<DoneIcon />)}
               </Tooltip> 
               
               
                  </div>
                <p className='font-inter text-justify font-medium text-sm text-gray-700 max-w-[480px] '>
                  {response}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

