import styled from 'styled-components';
const Img = styled.img`
width: 550px;`
;
const Video = styled.video`
 width: 550px;`
;
const InstagramUnitContainer = styled.div`
 position: relative;
`;
const Mask = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 transition: .4s;
 color: white;
 opacity: 0;
 display: flex;
 &:hover{
   background: rgba(0, 0, 0, .4);
   opacity: 1;
 }
`;
const CaptionContainer = styled.div`
padding: 0 10px 2px;
font-weight: 500;
letter-spacing: 1px;
`;

export {CaptionContainer, Mask, InstagramUnitContainer, Video, Img}