import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import * as sc from './styles';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { IoClose } from "react-icons/io5";
import * as ic from '../../components/Button/styles';
import { HiDownload } from "react-icons/hi";
import { CSSObjectWithLabel, ControlProps, GroupBase, SingleValue } from 'react-select';
import { colors } from '../../styles/colors';
import { Iuser, user } from '../../data';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Tooltip from '../../components/Tooltip/Tooltip';

interface ITable{
  doc: string,
  numberDoc: string,
  disbursementNumber: string,
  dateFrom: string,
  dateUntil: string,
}

const styles = {
  control: (baseStyles: CSSObjectWithLabel, state: ControlProps<{value: string;label: string;}, false, GroupBase<{value: string;label: string;}>>) => 
  ({
    ...baseStyles,
    borderColor: state.isFocused ? `${colors.colorBlue2}` : `${colors.borderGray}`,
    height: "56px",
    width: "176px",
  }),
}

const Table = () => {

  const options = [
    { value: 'cedula de ciudadania', label: 'Cédula de ciudadania' },
    { value: 'tarjeta de identidad', label: 'Tarjeta de identidad' },
    { value: 'pasaporte', label: 'Pasaporte' }
  ];

  const paginate = [
    {value: "5", label: "5"},
    {value: "10", label: "10"},
    {value: "15", label: "15"},
  ];

  const [selectKey, setSelectKey] = useState(0);
  
  const navigate = useNavigate();
  const [params, setParams] = useState<ITable>({
    doc: "",
    numberDoc: "",
    disbursementNumber: "",
    dateFrom: "",
    dateUntil: "",
  });

  const [number, setNumber] = useState("5");

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = Number(number) || 5;

  const [view, setView] = useState(true);
  
  const isValid = () => {
    const valid = params.doc !== "" || params.numberDoc !== "" || params.disbursementNumber !== ""  || params.dateFrom !== "" || params.dateUntil !== "";
    return valid;
  }

  useEffect(()=>{
    const user = localStorage.getItem("user");
    if(!user){
      navigate("/");
    }
  },[]);

  const send = () => {
  }

  const clear = () => {
    setParams({
      doc: "",
      numberDoc: "",
      disbursementNumber: "",
      dateFrom: "",
      dateUntil: ""
    });

    setView(false);
    setSelectKey(prevKey => prevKey + 1);
  }

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { value, name } = e.target;

    setParams({...params, [name]: value});
  }

  const change2 = (e: SingleValue<{ value: string; label: string; }> | any) => {

    setParams({...params, doc: e?.value});

  }

  const change3 = (e: SingleValue<{ value: string; label: string; }> | any) => {
    setNumber(e?.value);
  }

  const filterData = (data: Iuser[]) => {
    const filteredData = data.filter(item => {
      return (!params.doc || item.typeDocument === params.doc) &&
             (!params.numberDoc || item.numberDocument === params.numberDoc) &&
             (!params.disbursementNumber || item.disbursementNumber === params.disbursementNumber) &&
             (!params.dateFrom || new Date(item.dateFrom).getTime() >= new Date(params.dateFrom).getTime()) &&
             (!params.dateUntil || new Date(item.dateFrom).getTime() <= new Date(params.dateUntil).getTime());
    });

    const startIndex = (currentPage - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  }
  
  const totalPages = Math.ceil(user.length / pageSize);

  return (
    <>
      <Header/>
      <sc.Content>
        <div className="title">
          <span className='spanTitle'>Mis desembolsos</span>
          <Button>
            <div className="download">
              <sc.ButtonCustom onClick={send} type="button">
                <HiDownload/>
                <div className="textDownload">
                  <span>Descargar</span>
                </div>
              </sc.ButtonCustom>
            </div>
          </Button>
        </div>
      </sc.Content>
      <sc.ContentTable>
        <sc.ContentInputs>
          {isValid() && <ic.ButtonIcon onClick={clear}><IoClose/></ic.ButtonIcon>}
          <sc.ContentSelect>
            <sc.StyledSelect key={selectKey} options={options} placeholder="Tipo doc." onChange={(e)=>change2(e)} value={options.find(option => option.value === params.doc)} name="doc" styles={styles as any}/>
            {/* <sc.LabelCustom>Tipo doc.</sc.LabelCustom> */}
          </sc.ContentSelect>
          <Input label="Número de documento" type="text" onChange={(e)=>change(e)} value={params.numberDoc} name="numberDoc" width="272px"/>
          <Input label="Numero de desembolso" type="text" onChange={(e)=>change(e)} value={params.disbursementNumber} name="disbursementNumber" width="272px"/>
          <Input label="Desde" type="text" value={params.dateFrom} onChange={(e)=>change(e)} onFocus={(e)=>e.target.type = "date"} onBlur={(e)=>e.target.type = "text"} name="dateFrom" width="176px" icon={"true"}/>
          <Input label="Hasta" type="text" value={params.dateUntil} onChange={(e)=>change(e)} onFocus={(e)=>e.target.type = "date"} onBlur={(e)=>e.target.type = "text"} name="dateUntil" width="176px" icon={"true"}/>
        </sc.ContentInputs>
        <sc.Table>
          <sc.Titles>
            <span>Fecha y hora</span>
            <span>Número de desembolso</span>
            <span>Tipo de documento</span>
            <span>Número de documento</span>
            <span>Monto</span>
          </sc.Titles>
          <sc.Information registryNumber={number}>
          {
            filterData(user).map((res, index) => (
              <div className="information" key={index}>
                <div>{res.dateFrom} - {res.Dateuntil}</div>
                <div>{res.disbursementNumber}</div>
                <div>{res.typeDocument}</div>
                <div>{res.numberDocument}</div>
                <div>{res.amount}</div>
              </div>
            ))
          }
          </sc.Information>
          <sc.Contentpaginate>
            <div className='boxPaginate'>
              <button className="btnLeft" onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))} disabled={currentPage === 1}><MdKeyboardArrowLeft/></button>
              <div className="numbers">
                <span>{currentPage}</span>
                <span>de</span>
                <span>{totalPages}</span>
              </div>
              <button className="btnRight" onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))} disabled={currentPage === totalPages}><MdKeyboardArrowRight/></button>
              <sc.StyledSelect onChange={(e)=>change3(e)} value={paginate.find(option => option.value === params.doc)} options={paginate} styles={{ control: (styles) => ({ ...styles, width: "268px", height: "56px" }) }} menuPlacement="top" placeholder="Registros por página" name="registryNumber"/>
            </div>
          </sc.Contentpaginate>
          {view && <Tooltip/>}
        </sc.Table>
      </sc.ContentTable>
    </>
  )
}

export default Table;