import { Button } from "@mui/material";
import CardPadrones from '../Padrones/CardPadrones'
import Migajas from "../Migajas/Migajas";

const Novedades = () => {

    const novedadesInicial = [
        {
          padrones: "Formulario de Inscripción/Reinscripción:",
          links: "https://docs.google.com/forms/d/e/1FAIpQLSc_qUmHTSLHsUZ3Cewa3SoWTMsF5Yz-_IXulmuqM9sNZVu_RA/viewform",
        },
      ];
    const novedadesPrimario = [
        {
          padrones: "Formulario de Inscripción/Reinscripción:",
          links: "https://docs.google.com/forms/d/e/1FAIpQLScygQkMpb3h8j56R6oH9mdqeihNG7pC7x8MS20aP_fJu3V7Xg/viewform",
        },
      ];
    const novedadesAsesor = [
        {
          padrones: "Formulario de Inscripción/Reinscripción:",
          links: "https://docs.google.com/forms/d/e/1FAIpQLSdTNiWTqUvxSGv6tjNcHKBliK4r6az2fb5UthQRXlk8ZA2xQA/viewform",
        },
      ];
    const novedadesSecundario = [
        {
          padrones: "Formulario de Inscripción/Reinscripción:",
          links: "https://docs.google.com/forms/d/e/1FAIpQLSf3U0mI5ZLkrDDxqREFdacAY5xXwxygp7_nRjnM09iyo_pu6g/viewform",
        },
      ];

  return (
    <div className="container mt-3">
      <div className="container mt-3">
      <Migajas componente={'Novedades'}/>
    </div>
      <h2 className="text-center mb-3">Comunicado de Prensa Nº 1-2024</h2>
      <h4 className="text-center">
        CONVOCATORIA A INSCRIPCIÓN/REINSCRIPCIÓN 2024 - PADRONES DOCENTES 2024
      </h4>
      <h6 className="text-center mt-3">
        Llamado a Ejercer la Docencia en Establecimientos Educativos del
        Municipio de San Miguel De Tucumán.
      </h6>
      <p className="text-center mt-5">
        La Sra Intendenta Dra. Rossana Chahla a través de la Dirección de
        Educación
      </p>
      <p className="text-center mt-5">CONVOCA</p>
      <p className="text-center mt-5">
        A realizar la Inscripción/ Reinscripción on-line, ingresando al sitio
        web del Portal de Educación educación.smt.gob.ar a: Docentes
        Municipales, Empleados Municipales, Descendientes en línea recta de
        agentes municipales en actividad y Egresados de establecimientos
        educativos del nivel secundario “Esc. Mcpal. Alfonsina Storni y Esc.
        Mcpal. Coop. Gabriela Mistral” dependientes de la Municipalidad de San
        Miguel de Tucumán, en un todo por la normativa vigente para Ascenso de
        Jerarquía y/o Cobertura de Cargos/Horas Cátedras de Interinatos y
        Suplencias. A los fines de ejercer Docencia en Establecimientos
        Educativos del Municipio de San Miguel De Tucumán.
      </p>
      <div className="mt-5 d-flex flex-wrap gap-2 justify-content-center">
        <Button variant="outlined" color="success">CRONOGRAMA</Button>
        <Button variant="outlined" color="success">COMUNICADO DE PRENSA</Button>
        <Button variant="outlined" color="success">GUIA DE INSCRIPCIONES / REINSCRIPCIONES</Button>
        <Button variant="outlined" color="success">DETALLE DE LA DOCUMENTACION A PRESENTAR</Button>
      </div>
      <div className="mt-5 d-flex flex-wrap gap-2 mb-5 justify-content-center">
        <CardPadrones title={'Inicial'} color={'#0A82B4'} responsable={'Prof. Mariela Rodríguez mrodriguez@smt.gob.ar'} data={novedadesInicial}/>
        <CardPadrones title={'Primario'} color={'#F1EA10'} responsable={'Lic. Alejandra Paola Vazquez avazquez@smt.gob.ar'} data={novedadesPrimario}/>
        <CardPadrones title={'Secundario'} color={'#07C85F'} responsable={'Ing. José Herrera jherrera@smt.gob.ar'} data={novedadesSecundario}/>
        <CardPadrones title={'Asesor Ped. - Cap.Laboral - Gabinete Psicopedagógico - M.Apoyo Diferencial'} color={'#6666FF'} responsable={'Lic. Alejandra Paola Vazquez avazquez@smt.gob.ar'} data={novedadesAsesor}/>
      </div>
    </div>
  );
};

export default Novedades;
