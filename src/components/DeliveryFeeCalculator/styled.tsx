import styled from "styled-components";

export const DeliveryFeeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  box-sizing: border-box;

  @media screen and (min-width: 600px) {
    max-width: 100%;
  }
  @media screen and (min-width: 900px) {
    max-width: 100%;
  }
`;

export const DeliveryBody = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: #def1f7;
  border: 1px solid black;
  max-width: 90%;

  @media screen and (min-width: 600px) {
    max-width: 80%;
  }
  @media screen and (min-width: 900px) {
    max-width: 60%;
    font-size: 20px;
  }
  @media screen and (min-width: 1920px) {
    max-width: 36%;
  }
`;

export const DeliveryFooter = styled.div`
  height: 50px;
  width: 100%;
`;
