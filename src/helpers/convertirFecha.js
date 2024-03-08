export function formatearFechaHora(fechaISO, hora) {
    // Convertir la fecha de formato ISO a objeto de fecha
    const fecha = new Date(fechaISO);
  
    // Obtener partes de la fecha
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();
    const horas = hora.substring(0, 8);
  
    // Formatear la fecha y hora
    const fechaFormateada = `${dia}-${mes}-${anio}`;
    const horaFormateada = `Hs. ${horas}`;
  
    // Devolver el resultado final
    return `${fechaFormateada} ${horaFormateada}`;
  }