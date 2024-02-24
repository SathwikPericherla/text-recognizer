import React from 'react'
import { useState } from 'react'; // Import useState
import {Loader} from "./Loader"
export const Output = ({response}) => {
    //const [response, setresponse] = useState("");

  return (
    <div>
      <div className='my-10 max-w-full flex justify-center items-center'>
        {!response ? (
          <Loader/>
        ) : false ? (
          <p className='font-inter font-bold text-black text-center'>
            Well, that wasn't supposed to happen...
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
              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray-700'>
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

