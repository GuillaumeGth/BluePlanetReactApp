import React, { FunctionComponent, MouseEventHandler } from "react";
import MaterialButton from "@material-ui/core/Button";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
type Props = {
  state: string,
  onClick: MouseEventHandler<HTMLButtonElement>
}
const Button: FunctionComponent<Props> = ({state, onClick}) => {
  const MaterialButtonControl = styled(MaterialButton)`
    background-color: #e5a900 !important;
    width: 150px;
    color: white !important;
    margin: 20px 30px !important;
    font-size: 1.2rem !important;
  `;

  return (
    <div className={`${state === "loading" ? state : ""}`}>
      <MaterialButtonControl
        variant="contained"
        endIcon={<SendIcon />}
        onClick={onClick}
      >
        Send
      </MaterialButtonControl>
    </div>
  );
};

export default Button;
