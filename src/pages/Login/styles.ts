import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";
import { fontWeight } from "../../styles/fontWeight";

const slideIn = keyframes`
  0% {
    transform: translateX(-400%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const slideIn_2 = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const slideInBanner = keyframes`
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const slideInForm = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const Background = styled.div`
    position: relative;
    overflow: hidden;

    .background_1,.background_2,.background_3,.background_4,.background_6{
        animation: ${slideIn} 1.5s ease-in-out forwards;
    }

    .background_5{
        animation: ${slideIn_2} 1.5s ease-in-out forwards;
    }

    .background_1{
        position: absolute;
        top: 34%;
        right: 65%;
        z-index: -1;
    }
    
    .background_2{
        position: absolute;
        top: 76%;
        right: 30%;
        z-index: -1;
    }

    .background_3{
        position: absolute;
        top: 70%;
        right: 30%;
        z-index: -1;
    }

    .background_4{
        position: absolute;
        top: 50%;
        right: 70%;
        z-index: -1;
    }

    .background_5{
        position: absolute;
        top: -18%;
        right: -15%;
        z-index: -1;
    }

    .background_6{
        position: absolute;
        top: 55%;
        right: 65%;
        z-index: -1;
    }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.div`
`;

export const ContentSufi = styled.div`
    text-align: center;
    animation: ${slideInBanner} 1s ease-in-out forwards ;

    img{
        margin-bottom: 12px;
        width: 264px;
        height: 76px;
    }
`;

export const Form = styled.form`
    animation: ${slideInForm} 1s ease-in-out forwards;
`;

export const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    span:nth-child(1){
        color: ${colors.colorGray};
        font-size: 40px;
        font-family: "Open Sans";
        font-weight: ${fontWeight[700]};
    }
    
    span:nth-child(2){
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: ${fontWeight[400]};
        color: ${colors.colorGray};
    }
`;

export const ContentInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 156px;
  background-color: ${colors.white};
  box-shadow: 0px 0px 16px ${colors.boxShadowBlack};
  border-radius: 12px;
  padding: 12px;
  
  gap: 12px;
  margin: 32px 0;
`;


export const ContentButton = styled.div`
    text-align: center;
`;


export const Text = styled.div`

    display: flex;
    justify-content: center;
    margin-top: 24px;

    span{
        text-decoration: underline;
        font-size: 12px;
        font-family: "Open Sans";
        font-weight: ${fontWeight[400]};
        color: ${colors.colorGray};
    }
`;