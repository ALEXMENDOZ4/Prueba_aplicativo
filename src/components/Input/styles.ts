import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";
import { fontWeight } from "../../styles/fontWeight";

interface IInput {
  $error: string;
  width?: string;
  height?: string;
  $icon?: boolean | string;
}

type Ommit$error = Omit<IInput, "$error">;

export const Content = styled.div<Ommit$error>`
  position: relative;

  ${({ $icon }) => $icon && css`
      svg {
        color: ${colors.red};
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.5rem;
        pointer-events: none;
        cursor: pointer;
      }

      input[type="date"]::-webkit-calendar-picker-indicator {
        background: transparent;
        color: transparent;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        height: auto;
        width: auto;
        cursor: pointer;
      }
    `}
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: ${colors.colorGrayLight};
  font-size: 16px;
  font-family: "Open Sans";
  font-weight: ${fontWeight[400]};
  pointer-events: none;
  transition: all ease-in-out 0.3s;
`;

export const Input = styled.input<IInput>`
  width: ${({ width = "368px" }) => width};
  height: ${({ height = "56px" }) => height};
  border: 1px solid ${colors.borderGray};
  border-radius: 6px;
  padding: 16px;
  color: ${colors.colorGray};
  font-weight: ${fontWeight[400]};
  outline: none;

  &:focus {
    border: 2px solid ${colors.colorBlue2};
  }

  &:focus ~ ${Label} {
    top: 12px;
    left: 16px;
    font-size: 12px;
    font-family: "Open sans";
    font-weight: ${fontWeight[400]};
  }
  
  &:valid ~ ${Label} {
    top: 12px;
    left: 16px;
    font-size: 12px;
  }

  ${({ $error }) =>
    $error === "required" && css`
      border: 1px solid ${colors.red};
    `}
`;