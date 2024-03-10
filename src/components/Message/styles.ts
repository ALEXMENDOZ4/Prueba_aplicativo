import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fontWeight } from "../../styles/fontWeight";

export const Message = styled.span`
    color: ${colors.red};
    font-size: 16px;
    font-weight: ${fontWeight[600]};
`;