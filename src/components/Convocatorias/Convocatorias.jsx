import { Button } from "@mui/material";
import "./Convocatorias.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Migajas from "../Migajas/Migajas";
import TablaConvocatorias from "./TablaConvocatorias";
import { useState } from "react";

const Convocatorias = () => {
  const theme = createTheme({
    palette: {
      inicial: {
        main: "#007bff",
      },
      primario: {
        main: "#f1ea10",
      },
      secundario: {
        main: "#07c85f",
      },
      gabinete: {
        main: "#ff9900",
      },
      maestra: {
        main: "#d6db2a",
      },
      asesor: {
        main: "#6666ff",
      },
      capacitador: {
        main: "#ffac30",
      },
    },
  });
  const [idNivelSeleccionado, setIdNivelSeleccionado] = useState(null);


  return (
    <>
      <div className="container mt-3">
        <Migajas componente={"Convocatorias"} />
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center mb-5">
        <h4 className="mt-3 mb-5">
          Convocatorias para cubrir Cargos y/o Horas Cátedras
        </h4>
        <ThemeProvider theme={theme}>
          <div className="d-flex flex-wrap gap-3">
            <Button variant="contained" color="inicial" onClick={() => setIdNivelSeleccionado(1)}>
              Inicial
            </Button>
            <Button variant="contained" color="primario"  onClick={() => setIdNivelSeleccionado(2)}>
              Primario
            </Button>
            <Button variant="contained" color="secundario"  onClick={() => setIdNivelSeleccionado(3)}>
              Secundario
            </Button>
            <Button variant="contained" color="gabinete"  onClick={() => setIdNivelSeleccionado(4)}>
              Gabinete Psicopedagógico
            </Button>
            <Button variant="contained" color="maestra" onClick={() => setIdNivelSeleccionado(5)}>
              Maestra Apoyo Diferencial
            </Button>
            <Button variant="contained" color="asesor" onClick={() => setIdNivelSeleccionado(6)}>
              Asesor Pedagógico
            </Button>
            <Button variant="contained" color="capacitador" onClick={() => setIdNivelSeleccionado(7)}>
              Capacitador Laboral
            </Button>
          </div>
        </ThemeProvider>
        <div className="mt-5">
          <p className="px-3">
            En esta sección se publican todos las convocatorias, de los
            distintos niveles educativos, en donde se especifican todos los
            detalles. Seleccione el Nivel Educativo de su interés, y obtendrá el
            listado completo de las mismas, donde se consigna de manera general
            la convocatoria y la Fecha y Hora de Designación (en Jujuy 259).{" "}
            <br />
            Para mayor información, presione el botón Ver Más.
          </p>
          <div className="d-flex align-items-center px-3">
            <p className="m-0 pe-2">Acceda aqui para obtener la</p>
            <Button variant="outlined">
              <a
                href="https://educacion.smt.gob.ar/Convocatorias/DD.JJ.pdf"
                target="_blank"
                className="text-decoration-none"
              >
                Declaracion Jurada de Cargos
              </a>
            </Button>
          </div>
        </div>
        { idNivelSeleccionado === null ? <></> : <TablaConvocatorias idNivel={idNivelSeleccionado} /> }
      </div>
    </>
  );
};

export default Convocatorias;
