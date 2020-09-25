import React from 'react';
import { useState } from 'react';
import { Typography, Button, Form, Message, Input, Icon } from 'antd';
import FileUpload from "../../utils/FileUpload";

const { Title } = Typography
const { TextArea } = Input
const Continets = [
  { key: 1, value: "Africa" },
  { key: 2, value: "Asia" },
  { key: 3, value: "Europa" },
  { key: 4, value: "North America" },
  { key: 5, value: "south America" },
  { key: 6, value: "Oceania" },
];
// import { Container } from './styles';


function UploadProductPage() {

  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0.00);
  const [ContinentsValue, setContinentsValue] = useState(1);
  const [Images, setImages] = useState([])

  const onTitleChange = event => {
    setTitleValue(event.currentTarget.value);
  }
  const onDescriptionChange = event => {
    setDescriptionValue(event.currentTarget.value);
  }
  const onPriceChange = event => {
    setPriceValue(event.currentTarget.value);
  }
  const onContinentChange = event => {
    setContinentsValue(event.currentTarget.value);
  }
  const updateImages = newImages => {
    setImages(newImages)
  }

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>Upload Product</Title>
      </div>
      <FileUpload refreshFunction={updateImages}/>
      <Form onSubmit>
        <br />
        <br />
        <label>Title</label>
        <Input onChange={onTitleChange} value={TitleValue}></Input>
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionChange} value={DescriptionValue}></TextArea>
        <br />
        <br />
        <label>Price($)</label>
        <Input onChange={onPriceChange} value={PriceValue} type="number"></Input>
        <br />
        <br />
        <select style={{position: "right"}}onChange={onContinentChange} value={ContinentsValue}>
          {Continets.map(item => (
            <option key={item.key} value={item.key}>{item.value} </option>
          ))}
        </select>
        <br />
        <br />
        <Button onClick>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;