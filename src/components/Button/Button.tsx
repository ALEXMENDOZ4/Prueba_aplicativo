
interface IButton{
  children: JSX.Element | JSX.Element[];
}

const Button = ({ children }: IButton) => {
  return (
    <>
      {children}
    </>
  )
}

export default Button;