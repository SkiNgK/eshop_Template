import React from 'react';
import { useState } from 'react';
import Dropzone from "react-dropzone";
import { Icon } from 'antd';
import Axios from 'axios';
// import { Container } from './styles';

function FileUpload(props) {

  //more than one image
  const [Images, setImages] = useState([]);

  const onDrop = files => {
    let formData = new FormData();
    const config  = {
      header: {'content-type': 'multpart/formData'}
    }
    formData.append("file", files[0]);
  
    Axios.post('/api/product/uploadImage', formData, config)
    .then(response => {
      if(response.data.success){
        setImages([...Images, response.date.image]);
        props.refreshFunction([...Images, response.date.image])
      }else {
        alert('Failed to save the image');
      }
    })
  }

  return (
  <div>
    <Dropzone onDrop={onDrop} multiple maxsize>
      {({getRootProps, getInputProps}) => (
        <div style={{width: '300px', height: '240px', border:'1px solid lightgray', 
        display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        {...getRootProps()}>
          <input {...getInputProps()}/>
          <Icon type="plus" style={{fontSize: '3rem'}}></Icon>
        </div>
      )}
    </Dropzone>
    <div style={{display: 'flex', width: '350px', height: '240px', overflowX: 'scroll'}}>

    </div>
  </div>
  );
}

export default FileUpload;