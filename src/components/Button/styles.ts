import styled from "styled-components";
import { colors } from '../../styles/colors';
import { fontWeight } from "../../styles/fontWeight";

export const Button = styled.button`
    border-radius: 24px;
    background-color: ${colors.red};
    color: ${colors.white};
    width: 174px;
    height: 48px;
    padding: 14px 24px;
    font-weight: ${fontWeight[700]};
    border: none;
    cursor: pointer;
    transition: all ease-in-out .3s;

    &:hover{
        opacity: .7;
        transform: scale(1.05);
    }
`;


export const ButtonIcon = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
    margin-right: 20px;
`;