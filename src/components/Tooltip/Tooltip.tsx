import { useState } from "react";
import * as sc from "./styles";
import { IoClose } from "react-icons/io5";

const Tooltip = () => {

  const [view, setView] = useState(true);

  const close = () => {
    setView(!view);
  }

  return (
    <>
      {
        view && 
        (
          <sc.Tooltip hide={!view}>
            <div className="contentTooltip">
              <span>Pedro Pérez ha hecho una compra por valor de</span>
              <br />
              <span>$1.800.000</span>
              <button onClick={close}><IoClose/></button>
            </div>
          </sc.Tooltip>
        )
      }
    </>
  );
};

export default Tooltip;