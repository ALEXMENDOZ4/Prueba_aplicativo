import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fontWeight } from "../../styles/fontWeight";
import { Label } from "../../components/Input/styles";
import Select from "react-select";
import { Button } from "../../components/Button/styles";

export const Content = styled.div`
  padding: 32px 72px 32px 72px;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span.spanTitle {
      color: ${colors.colorGray};
      font-size: 20px;
      font-weight: ${fontWeight[700]};
      font-family: "Open Sans";
    }
  }
`;

export const ButtonCustom = styled(Button)`

  position: relative;
  width: 176px;
  height: 48px;

  span {
    font-size: 14px;
    font-weight: ${fontWeight[700]};
    color: ${colors.white};
  }

  svg {
    font-weight: ${fontWeight[300]};
    font-size: 24px;
    position: absolute;
    left: 12px;
  }
`;

export const ContentTable = styled.div``;

export const ContentInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: ${colors.colorGray2};
  padding: 16px 0;

  @media (max-width: 1120px) {
    flex-wrap: wrap;
  }
`;

export const LabelCustom = styled(Label)``;

export const ContentSelect = styled.div`
  position: relative;

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
  }
`;

export const StyledSelect = styled(Select)``;

export const Table = styled.div`
  position: relative;
`;

export const Titles = styled.div`
  /* position: sticky;
  top: 0; */
  /* z-index: 1; */
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  background-color: ${colors.white2};
  padding: 16px 72px;

  span {
    font-size: 14px;
    font-family: "Open Sans";
    font-weight: ${fontWeight[700]};
    color: ${colors.colorGray};
  }
`;

export const Information = styled.div<{ registryNumber: string }>`
  height: ${({ registryNumber }) => registryNumber === "15" ? "calc(100vh + 350px)" 
  : registryNumber === "10" ? "calc(100vh + 150px)" : registryNumber === "5" ? "calc(70vh)" : null};
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  .information {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    padding: 16px 72px;

    &:nth-child(odd) {
      background-color: ${colors.white};
    }

    &:nth-child(even) {
      background-color: ${colors.colorGray4};
    }
  }
`;

export const Contentpaginate = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  .boxPaginate {
    box-shadow: 0px 3px 16px ${colors.colorGray3};
    padding: 24px;
    border-radius: 24px 24px 0px 0px;
    display: flex;
    align-items: center;
    background-color: ${colors.white};

    .btnLeft,
    .btnRight {
      background-color: transparent;
      color: ${colors.red};
      font-size: 24px;

      &:disabled {
        opacity: 0.2;
        cursor: not-allowed;
      }
    }

    .numbers {
      display: flex;
      align-items: center;

      span {
        margin: 0 0.2rem;
      }

      span:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        border: 1px solid ${colors.borderGray};
        border-radius: 6px;
      }
    }
  }

  button {
    margin: 0 10px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
`;
