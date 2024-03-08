/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "../../config/axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModalConvocatoria from "./ModalConvocatoria";
import { formatearFechaHora } from "../../helpers/convertirFecha";

const TablaConvocatorias = ({ idNivel }) => {
  // eslint-disable-next-line no-unused-vars
  const [convocatorias, setConvocatorias] = useState([]);
  const [arrayFiltrado, setArrayFiltrado] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [convocatoriaSeleccionada, setConvocatoriaSeleccionada] = useState(null);

  const obtenerConvocatorias = async () => {
    try {
      const resultado = await axios.get("/educacion/listarConvocatorias");
      setConvocatorias(resultado.data);
      // Filtrar el array de convocatorias después de actualizar el estado
      const convocatoriasFiltradas = resultado.data.convocatorias.filter(
        (convocatoria) =>
          convocatoria.id_nivel === idNivel
      );
      const arrayFiltradoOrdenado = convocatoriasFiltradas.sort((a, b) => b.id - a.id);
      const arrayFiltradoAlReves = arrayFiltradoOrdenado.reverse();
      setArrayFiltrado(arrayFiltradoAlReves);
      console.log(arrayFiltrado)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerConvocatorias();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idNivel]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const abrirModal = (convocatoria) =>{
      setConvocatoriaSeleccionada(convocatoria);
      setModalAbierto(true);
  }


  const handleCloseModal = () => {
    setModalAbierto(false);
  };

  return (
    <>
      <div className="mt-5 mb-5 container">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Nº de Convocatoria</TableCell>
                <TableCell>Se convoca</TableCell>
                <TableCell>Establecimiento</TableCell>
                <TableCell>Fecha designcacion</TableCell>
                <TableCell>Ver más</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? arrayFiltrado.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : arrayFiltrado
              ).map((convocatoria) => (
                <TableRow key={convocatoria.id_convoca} >
                  <TableCell>{convocatoria.id_convoca}</TableCell>
                  <TableCell>{convocatoria.num_convocatoria} / {convocatoria.anio_convocatoria}</TableCell>
                  <TableCell>{convocatoria.cargo}</TableCell>
                  <TableCell>{convocatoria.nombre_establecimiento}</TableCell>
                  <TableCell> {formatearFechaHora(convocatoria.fecha_designa, convocatoria.hora_designa)}</TableCell>
                  <TableCell align="center"><VisibilityIcon onClick={() => abrirModal(convocatoria)}/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            component="div"
            count={arrayFiltrado.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
        <ModalConvocatoria
        convocatoria={convocatoriaSeleccionada}
        modalAbierto={modalAbierto}
        handleClose={handleCloseModal}
      />
      </div>
    </>
  );
};

export default TablaConvocatorias;
