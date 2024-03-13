/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, Divider, InputLabel, MenuItem, Select, Switch, TextField } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { formatearFechaHora } from "../../helpers/convertirFecha";
import { EducaContext } from "../../Context/EducaContext";
import './Convocatorias.css'

const ModalConvocatoria = ({
  convocatoria,
  modalAbierto,
  handleClose,
  modoEdicion,
  handleEditar,
}) => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const { arrayNiveles, obtenerNiveles, arrayEstablecimientos, obtenerEstablecimientos, obtenerCausal, arrayCausal, obtenerCaracter, arrayCaracter, convocatorias, setConvocatorias } = useContext(EducaContext);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await obtenerNiveles();
        await obtenerEstablecimientos();
        await obtenerCausal();
        await obtenerCaracter();
        // El estado se actualiza de manera asíncrona, así que regístralo aquí
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modoEdicion]);
  

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobile = deviceWidth <= 600; 
  if (!convocatoria) {
    return null;
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : "1200px", // Ajusta el ancho según el dispositivo
    height: "95%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const fechaHora = formatearFechaHora(
    convocatoria.fecha_designa,
    convocatoria.hora_designa
  );


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleInputChange = (e)=>{
    const { name, value } = e.target;
    setConvocatorias({
        ...convocatorias,
        [name]: value,
      });
}
  console.log(convocatorias)
  return (
    <Modal open={modalAbierto} onClose={handleClose}>
      <Box sx={style}>
        <div className="d-flex justify-content-around align-items-center mb-3">
          <p style={{ fontSize: "1rem", margin: 0 }}>
            Detalle de la Convocatoria: {convocatoria.id_convoca}
          </p>
        </div>
        <Divider />
        <div className="d-flex flex-column justify-content-center">
          {!modoEdicion ? (
            <>
              <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
                <b>Convocatoria Nº:</b> {convocatoria.num_convocatoria} /{" "}
                {convocatoria.anio_convocatoria}
              </p>
              <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
                <b>Nivel:</b> {convocatoria.nombre_nivel}
              </p>
              <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
                <b>Detalle:</b> {convocatoria.cargo}
              </p>
              <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
                <b>Establecimiento:</b> {convocatoria.nombre_establecimiento}
              </p>
              <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
                <b>Domicilio:</b> {convocatoria.domicilio}
              </p>
              <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
                <b>Localidad:</b> San Miguel de Tucumán
              </p>
              <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
                <b>Causal:</b> {convocatoria.nombre_causal}{" "}
                {convocatoria.detalle_causal}
              </p>
              <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
                <b>Expediente Nº:</b> {convocatoria.expte}
              </p>
              <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
                <b>Caracter:</b> {convocatoria.nombre_caracter}
              </p>
              <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
                <b>Fecha / Hora designacion:</b> {fechaHora}
              </p>
              <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
                <b>Lugar designacion:</b> Jujuy 259
              </p>
              <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
                <b>Texto de la Convocatoria:</b>{" "}
                <a href={convocatoria.archivo}>
                  <LaunchIcon style={{ cursor: "pointer" }} />
                </a>
              </p>
            </>
          ) : (
            <>
              <form className="d-flex justify-content-around">
                <div className="w-50 d-flex flex-column gap-3 p-2">

                <InputLabel id="demo-simple-select-label">{`${convocatoria.nombre_nivel}`}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={convocatorias}
                  onChange={handleInputChange}
                >
                  {Array.isArray(arrayNiveles) && arrayNiveles.map((n) => (
                    <MenuItem key={n.id_nivel} value={n.id_nivel}>{n.nombre_nivel}</MenuItem>
                  ))}

                </Select>
                <InputLabel id="demo-simple-select-label">CARGO</InputLabel>
                <TextField placeholder={`${convocatoria.cargo}`} onChange={handleInputChange}/>
                <InputLabel id="demo-simple-select-label">{`${convocatoria.nombre_establecimiento}`}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={handleInputChange}
                >
                  {Array.isArray(arrayEstablecimientos) && arrayEstablecimientos.map((e) => (
                    <MenuItem key={e.id_establecimiento} value={e.id_establecimiento}>{e.nombre_establecimiento}</MenuItem>
                  ))}

                </Select>
                <InputLabel id="demo-simple-select-label">{`${convocatoria.detalle_causal}`}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                  onChange={handleInputChange}
                >
                  {Array.isArray(arrayCausal) && arrayCausal.map((c) => (
                    <MenuItem key={c.id_causal} value={c.id_causal}>{c.nombre_causal}</MenuItem>
                  ))}

                </Select>
                </div>
                <div className="d-flex flex-column gap-3 w-50 p-2">

                  <InputLabel id="demo-simple-select-label">{`${convocatoria.nombre_caracter}`}</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={1}
                    onChange={handleInputChange}
                  >
                    {Array.isArray(arrayCaracter) && arrayCaracter.map((car) => (
                      <MenuItem key={car.id_caracter} value={car.id_caracter}>{car.nombre_caracter}</MenuItem>
                    ))}

                  </Select>
                  <InputLabel id="demo-simple-select-label">EXPEDIENTE</InputLabel>
                  <TextField placeholder={`${convocatoria.expte}`} onChange={handleInputChange}/>
                  <InputLabel id="demo-simple-select-label">NOMBRE ARCHIVO</InputLabel>
                  <TextField placeholder={`${convocatoria.nombre_archivo}`} onChange={handleInputChange}/>
                  <InputLabel id="demo-simple-select-label">FECHA</InputLabel>
                  <TextField type="date" placeholder={`${convocatoria.fecha_designa}`} onChange={handleInputChange}/>
                  <div className="d-flex align-items-center">
                    <p className="m-0">Habilita:</p>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                      />
                  </div>
                    
                </div>
              </form>
                  <Button
                    onClick={modoEdicion ? handleEditar : handleClose}
                    className="mt-3"
                    variant="outlined"
                  >
                    {modoEdicion ? "Guardar cambios" : "Cerrar"}
                  </Button>
            </>
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default ModalConvocatoria;
