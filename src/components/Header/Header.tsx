import * as sc from "./styles";
import Grupo_175 from '../../assets/images/Grupo 175.jpg';
import { BsBoxArrowInRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();  

  const closed = () => {
    navigate("/");
    localStorage.clear();
  }  

  return (
    <sc.Header>
        <div className="title">
            <img src={Grupo_175} alt="" onClick={closed}/>
        </div>
        <div className="close" onClick={closed}>
            <span>Cerrar sesión</span>
            <BsBoxArrowInRight/>
        </div>
    </sc.Header>
  )
}

export default Header;