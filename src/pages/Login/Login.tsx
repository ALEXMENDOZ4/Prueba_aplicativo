import toast from "react-hot-toast";
import useLimitToasts from "../../hooks/useLimitToasts";
import title from "../../assets/images/Grupo 258.jpg";
import Button from "../../components/Button/Button";
import * as sc from "./styles";
import  Input from "../../components/Input/Input";
import { SubmitHandler, useForm } from 'react-hook-form';
// import Message from "../../components/Message/Message";
import Grupo_36052 from '../../assets/images/Grupo 36052.jpg';
import Grupo_36075 from '../../assets/images/Grupo 36075.jpg';
import Grupo_197 from '../../assets/images/Elipse 197.jpg';
import Grupo_216 from '../../assets/images/Elipse 216.jpg';
import Grupo_32966 from '../../assets/images/Grupo 32966.jpg';
import Grupo_32967 from '../../assets/images/Grupo 32967.jpg';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as ic from '../../components/Button/styles';

export interface Ilogin {
  name: string,
  password: string
}

const Login = () => {

  useLimitToasts();
  const navigate = useNavigate();
  const { register, handleSubmit,formState: { errors } } = useForm<Ilogin>();


  const send: SubmitHandler<Ilogin> = (data) => {

    const isLoggedIn = data.name && data.password;

    if (!isLoggedIn) {
      // toast.error("Campos requeridos");
      return;
    }

    localStorage.setItem("user", data.name);
    toast.success(`Bienvenido, ${data.name}`);
    navigate("/tabla");
  }

  useEffect(()=>{
    localStorage.clear();
  },[]);

  return (
    <sc.Background>
      <img className="background_1" src={Grupo_36052} alt="background_1"/>
      <img className="background_2" src={Grupo_36075} alt="background_2"/>
      <img className="background_3" src={Grupo_197} alt="background_3"/>
      <img className="background_4" src={Grupo_216} alt="background_4"/>
      <img className="background_5" src={Grupo_32966} alt="background_5"/>
      <img className="background_6" src={Grupo_32967} alt="background_6"/>
      <sc.Container>
        <sc.Login>
          <sc.ContentSufi>
            <img src={title} alt="image_2" />
            <sc.ContentText>
              <span>Sufipay</span>
              <span>Administrador comercial</span>
            </sc.ContentText>
          </sc.ContentSufi>
          <sc.Form onSubmit={handleSubmit(send)}>
            <sc.ContentInputs>
              <Input error={errors.name?.type} label="Usuario" type="text" register={{...register("name",{ required: true })}}/>
              {/* {errors.name && <Message/>} */}
              <Input error={errors.password?.type} label="Contraseña" type="password" register={{...register("password",{ required: true })}}/>
              {/* {errors.password && <Message/>} */}
            </sc.ContentInputs>
            <sc.ContentButton>
              <Button>
                <ic.Button type="submit">INGRESAR</ic.Button>
              </Button>
            </sc.ContentButton>
            <sc.Text>
              <span>No recuerdo mi contraseña</span>
            </sc.Text>
          </sc.Form>
        </sc.Login>
      </sc.Container>
    </sc.Background>
  );
};

export default Login;