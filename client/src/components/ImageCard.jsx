import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const API_URL = "http://localhost:5000";

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
        width: "100%" ,
    },
  });
  

export default function ImageCard({data}) {
    var url=data.imageData
    // console.log(`${API_URL}`+`/`+`${url}`);
    const classes = useStyles();
    return (
      <Card id={data.id}>
          <img className={classes.media} src={`${API_URL}`+`/`+`${url}`} alt=""/>
        </Card> 
    
  );
}
