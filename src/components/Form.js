import React from 'react';
import TextBox from './TextBox/TextBox';
import styled from 'styled-components';

const Form = (props) =>{
  const Form = styled.form`
    width: 100%;
    margin: 0 100px;
    display: flex;
    flex-direction: column;`;
  
  return (
    <Form>
      <TextBox label="Name" icon="AccountCircle"/>
      <TextBox label="Email" icon ="MailOutline" required={true}/>
      <TextBox label="Phone" icon="Phone"/>
      <TextBox label="Message" multiline={true} icon="Message"/>
    </Form>
  )
}

export default Form;