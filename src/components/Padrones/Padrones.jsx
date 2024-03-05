import CardPadrones from "./CardPadrones";

const Padrones = () => {
  const datosInicial = [
    {
      padrones: "Padrón Definitivo 2022 - Ascenso de Jerarquía para Vicedirectores - Nivel Inicial",
      links: "https://educacion.smt.gob.ar/Padrones/PADRON_DEFINITIVO_ASCENSO_JERARQUIA_2022_INICIAL.pdf",
    },
    { 
      padrones: "Padrón Definitivo 2022 - Nivel Inicial - Ascenso de Jerarquía - Interinatos y Suplencias - Maestros Especiales",
      links: 'https://educacion.smt.gob.ar/Padrones/PADRON_DEFINITIVO_NIVEL_INICIAL_2022_ASCENSO_JERARQUIA_INTERINATOS_Y_SUPLENCIAS_MAESTROS_ESPECIALES.pdf',
    },
  ];

  const datosPrimario = [
    {
      padrones: "Padrón Definitivo 2022 - Ascenso de Jerarquía para Vicedirectores - Nivel Primario",
      links: "https://educacion.smt.gob.ar/Padrones/PADRON_DEFINITIVO_VICEDIRECTORES_2022_PRIMARIO.pdf",
    },
    { 
      padrones: "Padrón Definitivo 2022 - - Nivel Primario",
      links: 'https://educacion.smt.gob.ar/Padrones/PADRONES_DEFINITIVOS_2022_PRIMARIO.pdf',
    },
    { 
      padrones: "Padrón Definitivo 2022 - Docente de Apoyo Diferencial",
      links: 'https://educacion.smt.gob.ar/Padrones/PADRON_DEFINITIVO_2022_MAESTRO_APOYO_DIFERENCIAL.pdf',
    },
  ];
  const datosGabinete = [
    {
      padrones: "Padrón Definitivo 2022 - Gabinete Psicopedagógico Interdisciplinario",
      links: "https://educacion.smt.gob.ar/Padrones/PADRON_DEFINITIVO_2022_GABINETE.pdf",
    },
  ];
  const datosSecundario = [
    {
      padrones: "Padrón Definitivo 2022 - Ascenso de Jerarquía para Vicedirectores - Nivel Secundario",
      links: "https://educacion.smt.gob.ar/Padrones/PADRON_DEFINITIVO_VICEDIRECTORES_2022_SECUNDARIO.pdf",
    },
    {
      padrones: "Padrón Definitivo 2022 - Ascenso - Nivel Secundario",
      links: "https://educacion.smt.gob.ar/Padrones/SECUNDARIO_ASCENSO_DEFINITIVO_2022_ExpteNro280162-2023.pdf",
    },
    {
      padrones: "Padrón Definitivo 2022 de Espacios Curriculares - Nivel Secundario",
      links: "https://educacion.smt.gob.ar/Padrones/SECUNDARIO_ASIGNATURAS_DEFINITIVO_2022.pdf",
    },
    {
      padrones: "Padrón Definitivo 2022 de Cargos - Nivel Secundario",
      links: "https://educacion.smt.gob.ar/Padrones/SECUNDARIO_CARGOS_DEFINITIVO_2022.pdf",
    },
  ];

    const datosAsesor = [
      {
        padrones: "Padrón Definitivo 2022 - Asesor Pedagógico",
        links: "https://educacion.smt.gob.ar/Padrones/PADRON_DEFINITIVO_2022_ASESOR_PEDAGOGICO.pdf",
      },
    ];
    const datosCapacitador = [
      {
        padrones: "Padrón Definitivo 2022 - Capacitador Laboral",
        links: "https://educacion.smt.gob.ar/Padrones/CAPACITADOR_LABORAL_DEFINITIVO_2022.pdf",
      },
    ];
  return (
    <>
      <div className=" d-flex flex-column justify-content-center align-items-center mb-5">
        <h2 className="mt-3 mb-3">Padrones</h2>
        <div className=" d-flex flex-wrap justify-content-center gap-3 mt-5 mb-5">
          <CardPadrones
            title={"Inicial"}
            color={"#0A82B4"}
            responsable={"Prof. Mariela Rodríguez mrodriguez@smt.gob.ar"}
            data={datosInicial}
          />
          <CardPadrones
            title={"Primario - Maestra Apoyo Diferencial"}
            color={"#F1EA10"}
            responsable={"Lic. Paola A. Vazquez. avazquez@smt.gob.ar"}
            data={datosPrimario}
          />
          <CardPadrones
            title={"Gabinete Psicopedagógico"}
            color={"#FF9900"}
            responsable={"Lic. Paola A. Vazquez. avazquez@smt.gob.ar"}
            data={datosGabinete}
          />
          <CardPadrones
            title={"Secundario"}
            color={"#07C85F"}
            responsable={"Ing. José Herrera jherrera@smt.gob.ar"}
            data={datosSecundario}
          />
          <CardPadrones
            title={"Asesor Pedagógico"}
            color={"#6666FF"}
            responsable={"Ing. José Herrera jherrera@smt.gob.ar"}
            data={datosAsesor}
          />
          <CardPadrones
            title={"Capacitador Laboral"}
            color={"#FFAC30"}
            responsable={"Ing. José Herrera jherrera@smt.gob.ar"}
            data={datosCapacitador}
          />
        </div>
      </div>
    </>
  );
};

export default Padrones;
