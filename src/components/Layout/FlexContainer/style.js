import styled from 'styled-components';
const Flex = styled.div`
    display: flex;
    &.row{
      flex-direction: row;
    }
    &.column{
      flex-direction: column;
    }
    &.full-width{
      width: 100%;
    }
    &.justify-flex-end{
      justify-content: flex-end;
    }
    &.justify-center{
      justify-content: center;
    }
    &.wrap{
      flex-wrap: wrap;
    }
    `;
export default Flex