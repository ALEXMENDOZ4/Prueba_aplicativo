import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";
import { fontWeight } from "../../styles/fontWeight";

const slideIn = keyframes`
  0% {
    transform: translateY(36%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const Tooltip = styled.div<{hide: boolean}>`
    position: absolute;
    right: 4rem;
    bottom: -5rem;
    background-color: ${colors.white};
    box-shadow: 0px 3px 10px ${colors.colorGray5};
    border-radius: 14px;
    padding: 20px;
    width: 236px;
    height: 108px;
    /* transition: all ease-in-out .1s; */
    /* visibility: ${({hide}) => hide ? "hidden" : "visible"}; */
    animation: ${slideIn} 1s ease-in-out forwards;

    .contentTooltip{
        position: relative;
        span:nth-child(1){
            font-weight: ${fontWeight[400]};
            font-size: 14px;
            font-family: "Open Sans";
        }

        span:nth-child(3){
            font-weight: ${fontWeight[700]};
            font-size: 14px;
            font-family: "Open Sans";
        }

        button{
            display: inline-flex;
            justify-content: center;
            position: absolute;
            top: -1.8rem;
            right: -1.8rem;
            align-items: center;
            border-radius: 50%;
            border: none;
            width: 24px;
            height: 24px;
            background-color: ${colors.red};
            color: ${colors.white};
            cursor: pointer;
            /* transition: all ease-in-out .1s; */
            /* visibility: ${({hide}) => hide ? "hidden" : "visible"}; */

            &:hover{
                opacity: .7;
                transform: scale(1.05);
            }
        }
    }
`;