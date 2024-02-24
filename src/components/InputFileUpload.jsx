import { useState } from 'react'; // Import useState
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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

export function InputFileUpload() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); 

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
       {imagePreview && (
        <div>
          <img src={imagePreview} alt="Selected File Preview" style={{ maxWidth: "200px" }} /> {/* Adjust max-width as needed */} 
        </div>
      )}
  

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
<button>
  Click me
</button>
    </div>
  );
}