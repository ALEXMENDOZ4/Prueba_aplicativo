import * as sc from "./styles";
import { FaRegCalendarDays } from "react-icons/fa6";

interface IInput{
    type: React.HTMLInputTypeAttribute | undefined;
    register?: any;
    error?: any;
    label: string;
    name?: string;
    value?: string; 
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
    width?: string;
    height?: string;
    icon?: boolean | string;
}

const Input = ({ register, label, icon, ...props }: IInput) => {
  
  return (
    <sc.Content $icon={icon}>
      <sc.Input {...props} {...register} required/>
      {icon && <FaRegCalendarDays/>}
      <sc.Label>{label}</sc.Label>
    </sc.Content>
  );
};

export default Input;