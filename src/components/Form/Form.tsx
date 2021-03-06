import React, { FunctionComponent, useState } from "react";
import TextBox from "../TextBox/TextBox";
import Button from "../Button";
import { FormControl, LoadingMask, SuccessMessage } from "./style";
import Text from "react-text";
import BeatLoader from "react-spinners/BeatLoader";

type Props = {}
type FormKeys = "message" | "name" | "email" | "phone";
type FormValues = {
  message?: string,
  name?: string,
  email?: string,
  phone?: string
}
const Form: FunctionComponent<Props> = ({}) => {
  const [values, setValues] = useState<FormValues>({});
  const [state, setState] = useState("normal");

  const sendMessage = () => {
    if (!values.message) {
      return;
    }
    setState("loading");
    values.message = values.message.replace(/\n/g, "<br />");
    fetch("https://www.blueplanetdiveresort.com/mail.php", {
      // fetch(`${process.env.REACT_APP_API_URL}/message`, {
      // fetch(`http://localhost:4000/message`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setValues({});
        }
        setState("success");
      });
  };

  const onChangeHandler = (fieldId: FormKeys, value: string) => {
    values[fieldId] = value;
  };

  return (
    <FormControl>
      {state === "loading" ? (
        <LoadingMask>
          <BeatLoader color="#e5a900" />
        </LoadingMask>
      ) : null}

      <TextBox
        state={state}
        label="Name"
        icon="AccountCircle"
        // value={values["name"]}
        onChange={(value: string) => onChangeHandler("name", value)}
      />
      <TextBox
        state={state}
        label="Email"
        icon="MailOutline"
        required={true}
        // value={values["email"]}
        type="email"
        onChange={(value: string) => onChangeHandler("email", value)}
      />
      <TextBox
        state={state}
        label="Phone"
        icon="Phone"
        type="tel"
        // value={values["phone"]}
        onChange={(value: string) => onChangeHandler("phone", value)}
      />
      <TextBox
        state={state}
        label="Message"
        multiline={true}
        icon="Message"
        required={true}
        // value={values["message"]}
        onChange={(value : string) => onChangeHandler("message", value)}
      />
      <Button onClick={sendMessage} state={state} />
      {state === "success" ? (
        <SuccessMessage className="sucess">
          <Text id="contactSuccess" />
        </SuccessMessage>
      ) : null}
    </FormControl>
  );
};

export default Form;
