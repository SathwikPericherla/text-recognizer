import React from "react";
// import { logo } from "../assets";

export const Hero = () => {
  return (
    <header className='my-5 w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={""} alt='sumz_logo' className='w-28 object-contain ml-12' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Recognize TEXT with
        <span className='blue_gradient ml-5'>AI</span>
      </h1>
      <h2 className='desc'>
      "Empowering seamless digital experiences through advanced AI technology, our Text Recognizer efficiently extracts and interprets textual content from images with precision and speed."
      </h2>
    </header>
  );
};

