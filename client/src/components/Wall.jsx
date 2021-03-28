import React from 'react';
import ImageCard from './ImageCard'
import {Grid} from '@material-ui/core';

export default function Wall({images}) {
    // console.log(images.length);
  return (
    <Grid container spacing={3} >
        {images.length!==0 && images.map((img,idx)=>(
            <Grid key={idx} item md={3} sm={2}>
                <ImageCard data={img}/>
            </Grid>
        ))}
    </Grid>
  );
}
