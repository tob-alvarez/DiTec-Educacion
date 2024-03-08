/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import { formatearFechaHora } from "../../helpers/convertirFecha";

const ModalConvocatoria = ({ convocatoria, modalAbierto, handleClose }) => {
  
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const isMobile = deviceWidth <= 600; // Puedes ajustar este valor según tus necesidades
  
  if (!convocatoria) {
    return null;
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90%' : '600px', // Ajusta el ancho según el dispositivo
    height: '95%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const fechaHora = formatearFechaHora(convocatoria.fecha_designa, convocatoria.hora_designa);


  return (
    <Modal open={modalAbierto} onClose={handleClose}>
      <Box sx={style}>
        <div className="d-flex justify-content-around align-items-center mb-3">
            <p style={{fontSize: '1rem', margin: 0}}>Detalle de la Convocatoria: {convocatoria.id_convoca}</p>
            <CloseIcon onClick={handleClose}/>
        </div>
        <Divider/>
        <div className="d-flex flex-column justify-content-center">
            <p style={{fontSize: '1.2rem', margin: '5px 0'}}><b>Convocatoria Nº:</b> {convocatoria.num_convocatoria} / {convocatoria.anio_convocatoria}</p>
            <p style={{fontSize: '1.2rem', margin: '5px 0'}}><b>Nivel:</b> {convocatoria.nombre_nivel}</p>
            <p style={{fontSize: '1.2rem', margin: '5px 0'}}><b>Detalle:</b> {convocatoria.cargo}</p>
            <p style={{fontSize: '1.2rem', margin: '5px 0'}}><b>Establecimiento:</b> {convocatoria.nombre_establecimiento}</p>
            <p style={{fontSize: '1.2rem', margin: '5px 0'}}><b>Domicilio:</b> {convocatoria.domicilio}</p>
            <p style={{fontSize: '1.2rem', margin: '5px 0'}}><b>Localidad:</b> San Miguel de Tucumán</p>
            <p style={{fontSize: '1.2rem', margin: '5px 0'}}><b>Causal:</b> {convocatoria.nombre_causal} {convocatoria.detalle_causal}</p>
            <p style={{fontSize: '1.2rem', margin: '5px 0'}}><b>Expediente Nº:</b> {convocatoria.expte}</p>
            <p style={{fontSize: '1.2rem', margin: '5px 0'}}><b>Caracter:</b> {convocatoria.nombre_caracter}</p>
            <p style={{fontSize: '1.2rem', margin: '5px 0'}}><b>Fecha / Hora designacion:</b> {fechaHora}</p>
            <p style={{fontSize: '1.2rem', margin: '5px 0'}}><b>Lugar designacion:</b> Jujuy 259</p>
            <p style={{fontSize: '1.2rem', margin: '5px 0'}}><b>Texto de la Convocatoria:</b> <a href={convocatoria.archivo}><LaunchIcon style={{cursor: 'pointer'}}/></a></p>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalConvocatoria;
