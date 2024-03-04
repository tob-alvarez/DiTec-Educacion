import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import Paper from "@mui/material/Paper";

const Intendencia = () => {
  return (
    <>
      <Paper elevation={6} square={false} className="p-4 mb-5">
        <h2>Intendenta Dra. Rossana Chahla</h2>
        <p>Domicilio: 9 de Julio 570 - San Miguel de Tucumán (C.P. 4000)</p>
        <p>Teléfono: (0381) 4516500</p>
        <p>Correo Electrónico: intendencia@smt.gob.ar</p>
      </Paper>
    </>
  );
};
const SecretariaGeneral = () => {
  return (
    <>
      <Paper elevation={6} square={false} className="p-4 mb-5">
        <h2>Secretaria Mg. Camila Giuliano</h2>
        <p>Domicilio: 9 de Julio 570 - San Miguel de Tucumán (C.P. 4000)</p>
        <p>Teléfono: (0381) 4516500</p>
        <p>Correo Electrónico: sgeneral@smt.gob.ar</p>
      </Paper>
    </>
  );
};
const Subsecretaria = () => {
  return (
    <>
      <Paper elevation={6} square={false} className="p-4 mb-5">
        <h2>Subsecretaria Dra. Graciela Alejandra Trejo</h2>
        <p>Domicilio: 9 de Julio 570 - San Miguel de Tucumán (C.P. 4000)</p>
        <p>Teléfono: (0381) 4516500</p>
        <p>Correo Electrónico: subsdesarrolloh@smt.gob.ar</p>
      </Paper>
    </>
  );
};
const Direccion = () => {
  return (
    <>
      <Paper elevation={6} square={false} className="p-4 mb-5">
        <h6>Directora: Lic. Isabel Cristina Amate Perez</h6>
        <h6>Subdirectora: Prof. Marina Runco</h6>
        <p>Domicilio: Jujuy 259 - San Miguel de Tucumán (C.P. 4000)</p>
        <p>Teléfono: (0381) 4223530</p>
        <p>Correo Electrónico: direccioneducacion.smt@gmail.com</p>
        <h5 className="mt-5">
          Comisión de Administración y Gestión de Padrones Docentes Municipales
        </h5>
        <div className="mt-3">
          <p className="m-0">
            <b>Nivel Inicial </b>
          </p>
          <p className="m-0">Responsable Prof. Mariela Rodríguez</p>
          <p className="m-0">Correo Electrónico: mrodriguez@smt.gob.ar</p>
        </div>
        <div className="mt-3">
          <p className="m-0">
            <b>Nivel Primario </b>
          </p>
          <p className="m-0">Gabinete Psicopedagógico Interdisciplinario
            - Maestra de Apoyo Diferencial</p>
          <p className="m-0">Responsable Lic. Alejandra Paola Vazquez</p>
          <p className="m-0">Correo Electrónico: avazquez@smt.gob.ar</p>
        </div>
        <div className="mt-3">
          <p className="m-0">
            <b>Nivel Secundario </b>
          </p>
          <p className="m-0">Asesor Pedagógico - Capacitador Laboral</p>
          <p className="m-0">Responsable Ing. José Herrera</p>
          <p className="m-0">Correo Electrónico: jherrera@smt.gob.ar</p>
        </div>
      </Paper>
    </>
  );
};

const Autoridades = () => {
  const [value, setValue] = useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const mostrarAutoridad = () => {
    switch (value) {
      case "one":
        return <Intendencia />;
      case "two":
        return <SecretariaGeneral />;
      case "three":
        return <Subsecretaria />;
      case "four":
        return <Direccion />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center mt-3">
        <h2>Autoridades Jerarquicas</h2>
      </div>
      <div className="container d-flex flex-column justify-content-center mt-3">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            <Tab
              value="one"
              label="Intendencia de San Miguel de Tucumán"
              wrapped
              onClick={() => {
                console.log("hola");
              }}
            />
            <Tab value="two" label="Secretaria General" wrapped />
            <Tab
              value="three"
              label="Subsecretaria de Desarrollo humano"
              wrapped
            />
            <Tab value="four" label="Direccion de Educación" wrapped />
          </Tabs>
        </Box>
      </div>
      <div className="container">{mostrarAutoridad()}</div>
    </>
  );
};

export default Autoridades;
