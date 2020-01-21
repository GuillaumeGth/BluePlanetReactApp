import React, { useState } from "react";
import TextBox from "../TextBox/TextBox";
import Button from "../Button";
import FormControl from "./style";

const Form = props => {
  const [values, setValues] = useState({});

  const sendMessage = e => {
    if (!values.message) {
      return;
    }
    values.message = values.message.replace(/\n/g, "<br />");
    fetch("http://localhost:3001/message", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      method: "POST",
      body: JSON.stringify(values)
    })
      .then(response => response.json())
      .then(result => {
        debugger;
        if (result.success) {
          setValues({});
        }
      });
  };

  const onChangeHandler = (fieldId, value) => {
    let vals = values;
    vals[fieldId] = value;
    setValues(vals);
  };

  return (
    <FormControl>
      <TextBox
        label="Name"
        icon="AccountCircle"
        value={values["name"]}
        onChange={value => onChangeHandler("name", value)}
      />
      <TextBox
        label="Email"
        icon="MailOutline"
        required={true}
        value={values["email"]}
        type="email"
        onChange={value => onChangeHandler("email", value)}
      />
      <TextBox
        label="Phone"
        icon="Phone"
        type="tel"
        value={values["phone"]}
        onChange={value => onChangeHandler("phone", value)}
      />
      <TextBox
        label="Message"
        multiline={true}
        icon="Message"
        required={true}
        value={values["message"]}
        onChange={value => onChangeHandler("message", value)}
      />
      <Button onClick={sendMessage} />
    </FormControl>
  );
};

export default Form;
