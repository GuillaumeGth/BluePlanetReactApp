import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StyledLazyLoadImage = styled.img`
  height: 100%;
`;

const MaskImage = styled(LazyLoadImage)`
  width: 60%;
  border: 3px solid white;
  padding: 10px;
  transition: 0.4s;
  border-radius: 50%;
`;
const DescContainer = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 325px;
  left: 20px;
  color: white;
  font-size: 1.5rem;
  display: none;
`;
type props = {tabindex: number}
const AccordionItemControl = styled.li<props>`
  position: relative;
  transition: all 500ms ease;
  height: 450px;
  width: 12.5%;
  cursor: pointer;
  overflow: hidden;
  & .lazy-load-image-loaded {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  &:hover {
    width: 60% !important;
    & ${MaskImage} {
      display: none;
    }
    & ${DescContainer} {
      display: flex !important;
    }
  }
`;

const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
export {
  StyledLazyLoadImage,
  Mask,
  AccordionItemControl,
  MaskImage,
  DescContainer
};
