import React from "react";
import MaterialButton from "@material-ui/core/Button";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

const Button = props => {
  const MaterialButtonControl = styled(MaterialButton)`
    background-color: #e5a900 !important;
    width: 150px;
    color: white !important;
    margin: 20px 30px !important;
    font-size: 1.2rem !important;
  `;

  return (
    <MaterialButtonControl
      variant="contained"
      endIcon={<SendIcon />}
      onClick={props.onClick}
    >
      Send
    </MaterialButtonControl>
  );
};

export default Button;
