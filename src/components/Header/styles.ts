import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fontWeight } from "../../styles/fontWeight";

export const Header = styled.div`
    height: 72px;
    width: 100%;
    box-shadow: 0px 3px 16px ${colors.colorBlue};
    display: flex;
    padding: 24px;

    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        cursor: pointer;
        img{
            width: 83px;
            height: 24px;
        }
    }

    .close{
        display: flex;
        align-items: center;
        gap: 12px;
        white-space: nowrap;
        cursor: pointer;

        span{
            font-size: 14px;
            font-weight: ${fontWeight[700]};
            font-family: "Open Sans";
            color: ${colors.colorBlack};
        }

        svg{
            font-size: 24px;
            font-weight: ${fontWeight[300]};
        }
    }
`;
