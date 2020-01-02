import React, {useState} from 'react';
import TextBox from '../TextBox/TextBox';
import Button from '../Button';
import styled from 'styled-components';

const Form = (props) =>{
  const [values, setValues] = useState({});
  const Form = styled.form`
    width: 100%;
    margin: 0 40px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    background: #e1e1e16b;`;

  const sendMessage = (e) => {
    var data = new FormData();
    data.append('params', JSON.stringify( {
      values
    }));
    fetch('http://localhost:3001/message', 
      {
        method: 'POST',
        body: data
      })
    .then(response => response.json())
    .then((result) => {
      console.log(result);
    });
  }
  
  const onChangeHandler = (fieldId, value) => {
    let vals = values;
    vals[fieldId] = value;
    setValues(vals);
  }

  return (
    <Form>
      
      <TextBox label="Name" icon="AccountCircle" id="txtName" onChange={(value) => onChangeHandler('name', value)}/>
      <TextBox label="Email" icon ="MailOutline" required={true} type="email" onChange={(value) => onChangeHandler('email', value)} />
      <TextBox label="Phone" icon="Phone" type="tel" onChange={(value) => onChangeHandler('phone', value)}/>
      <TextBox label="Message" multiline={true} icon="Message" required={true} onChange={(value) => onChangeHandler('message', value)}/>
      <Button onClick={sendMessage}/>
    </Form>
  )
}

export default Form;