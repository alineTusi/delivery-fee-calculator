import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: azure;
  border-color: black;
  height: 30px;
  padding: 4px;
  border-radius: 4px;
  margin-bottom: 16px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background-color: #c0ffff;
    cursor: pointer; 
    opacity: 0.9;
    box-shadow: 2px 2px #51b1b1;
  }
`;
