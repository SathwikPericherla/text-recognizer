import { useState } from 'react'; // Import useState
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Output } from './Output';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


export const Card = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); 
  const [data, setData] = useState(''); 
  const [btn, setBtn] = useState(false); 
  const getData =async () => {
      const response = await fetch("https://fakestoreapi.com/products/1");
      const res =await response.json()
      setData(res.title)
      console.log(res)
  }
  const handleBtnClick = ()=>{
    setBtn(true)
    getData()
   
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div>
    {!imagePreview &&(<div className= "bg-white shadow-xl flex justify-center py-[80px] w-[300px]  ">
       <div>
       
  

  {!imagePreview && (<Button
    component="label"
    role={undefined}
    variant="contained"
    tabIndex={-1}
    startIcon={<CloudUploadIcon />}

  >
    Upload file
    <VisuallyHiddenInput type="file" accept='image/*' onChange={handleFileChange} />
  </Button>)
}

    </div>
    </div>)}

    <div>
                {imagePreview && ( <div>
                    <div className='w-[500px] h-[500px] flex flex-col justify-center relative '>
                    <img src={imagePreview} alt="Selected File Preview" className='object-fit-contain max-w-full rounded-lg max-h-full '  /> {/* Adjust max-width as needed */} 
                    <div className='absolute bottom-0 left-48'>
                    <Button
                     variant="contained"
                     onClick={handleBtnClick}
                    >< AutoAwesomeIcon/> <span className='ml-2'> Recognize</span></Button>
                    </div>
                    </div>
                    {btn &&(<Output response= {data}/>)}
                    </div>
                    
                )}

           

    </div>
    </div>
  )
}