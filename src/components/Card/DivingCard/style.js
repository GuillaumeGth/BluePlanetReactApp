import styled from "styled-components";
import isMobile from "react-device-detect";
const Img = styled.img`
  ${isMobile ? "width" : "height"}: 100%;
`;
const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Tag = styled.div`
  margin: 0 20px !important;
  font-size: 1rem;
  margin-left: 1em;
  position: relative;
  padding-left: 1.5em;
  padding-right: 1.5em;
  border-radius: 0 0.28571429rem 0.28571429rem 0;
  -webkit-transition: none;
  transition: none;
  display: inline-block;
  line-height: 1;
  vertical-align: baseline;
  margin: 0 0.14285714em;
  background-color: #3f51b5;
  background-image: none;
  padding: 0.5833em 1.5em;
  color: white;
  text-transform: none;
  font-weight: 700;
  border: 0 solid transparent;
  border-radius: 0.28571429rem;
  -webkit-transition: background 0.1s ease;
  transition: background 0.1s ease;
  &:before {
    position: absolute;
    -webkit-transform: translateY(-50%) translateX(50%) rotate(-45deg);
    transform: translateY(-50%) translateX(50%) rotate(-45deg);
    top: 50%;
    right: 99%;
    content: "";
    background-color: inherit;
    background-image: none;
    width: 1.56em;
    height: 1.56em;
    -webkit-transition: none;
    transition: none;
  }
  &:after {
    position: absolute;
    content: "";
    top: 50%;
    left: -0.25em;
    margin-top: -0.25em;
    background-color: #fff !important;
    width: 0.5em;
    height: 0.5em;
    -webkit-box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.3);
    border-radius: 500rem;
  }
`;
export { Img, TitleContainer, Tag };
