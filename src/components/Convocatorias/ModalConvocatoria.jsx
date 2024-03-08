/* eslint-disable react/prop-types */
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import { formatearFechaHora } from "../../helpers/convertirFecha";


const ModalConvocatoria = ({ convocatoria, modalAbierto, handleClose }) => {
  if (!convocatoria) {
    return null;
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '90%',
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
            <p style={{fontSize: '14px', margin: 0}}>Detalle de la convocatoria: {convocatoria.id_convoca}</p>
            <CloseIcon onClick={handleClose}/>
        </div>
        <Divider/>
        <div className="d-flex flex-column justify-content-center">
            <p style={{fontSize: '16px', margin: '5px 0'}}>Convocatoria Nº: {convocatoria.num_convocatoria} / {convocatoria.anio_convocatoria}</p>
            <p style={{fontSize: '16px', margin: '5px 0'}}>Nivel: {convocatoria.nombre_nivel}</p>
            <p style={{fontSize: '16px', margin: '5px 0'}}>Detalle: {convocatoria.cargo}</p>
            <p style={{fontSize: '16px', margin: '5px 0'}}>Establecimiento: {convocatoria.nombre_establecimiento}</p>
            <p style={{fontSize: '16px', margin: '5px 0'}}>Domicilio: {convocatoria.domicilio}</p>
            <p style={{fontSize: '16px', margin: '5px 0'}}>Localidad: San Miguel de Tucumán</p>
            <p style={{fontSize: '16px', margin: '5px 0'}}>Causal: {convocatoria.nombre_causal} {convocatoria.detalle_causal}</p>
            <p style={{fontSize: '16px', margin: '5px 0'}}>Expediente Nº: {convocatoria.expte}</p>
            <p style={{fontSize: '16px', margin: '5px 0'}}>Caracter: {convocatoria.nombre_caracter}</p>
            <p style={{fontSize: '16px', margin: '5px 0'}}>Fecha / Hora designacion: {fechaHora}</p>
            <p style={{fontSize: '16px', margin: '5px 0'}}>Lugar designacion: Jujuy 259</p>
            <p style={{fontSize: '16px', margin: '5px 0'}}>Texto de la Convocatoria: <a href={convocatoria.archivo}><LaunchIcon/></a></p>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalConvocatoria;
