import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { Container,Button} from '@material-ui/core';
import Wall from './components/Wall'

// base api url being used
const API_URL = "http://localhost:5000";

const classes = {
  root: {
    flexGrow: 1,
    margin:"50px"

  },
  paper: {
    padding: 20,
    textAlign: "center",
    fontFamily: "Roboto"
  }
};

export default function App()
{
  const [images, setImages] = useState([])
  const [imageCounter,setImagecounter]=useState(0)
  
  useEffect(()=>{

    axios.get(`${API_URL}`)
    .then((response)=>{
      var res=response.data
      setImages(res)
      // console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })

  },[imageCounter])
  
  
  function uploadImage(e) {
      // console.log(e.target.files);
      
      // stores a readable instance of 
      let imageFormObj = new FormData();
      imageFormObj.append("imageData", e.target.files[0]);

      // the image being uploaded using multer
      axios.post(`${API_URL}`, imageFormObj)
        .then((data) => {
          if (data.data.success) {
            alert("Image has been successfully uploaded using multer");
            setImagecounter(imageCounter+1)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } 

    return (
      <div>
      <Container style={{marginTop:"5rem"}}>
        <div className={classes.root}>
          <h1>Image Upload Webapp</h1>
          <Button color="primary" variant="contained" component="label"  >
            Upload 
            <input accept="image/*" type="file" hidden onChange={(event)=>{uploadImage(event)}} />
          </Button>
        </div>
        <div className={classes.root}>
          <Wall images={images}/>
        </div>
      </Container>
    </div>
      
    );
}
  


