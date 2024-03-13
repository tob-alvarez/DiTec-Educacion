import { createContext, useState } from "react";
import axios from '../config/axios';

export const EducaContext = createContext();

// eslint-disable-next-line react/prop-types
const ProviderEducacion = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  const [convocatorias, setConvocatorias] = useState([]);
  const [arrayFiltrado, setArrayFiltrado] = useState([]);
  const [arrayNiveles, setArrayNiveles] = useState([]);
  const [arrayEstablecimientos, setArrayEstablecimientos] = useState([]);
  const [arrayCausal, setArrayCausal] = useState([]);
  const [arrayCaracter, setArrayCaracter] = useState([]);
  

//Funcion para listar las convocatorias
const obtenerConvocatorias = async (idNivel) => {
    try {
      const resultado = await axios.get("/educacion/listarConvocatorias");
      const convocatoriasFiltradas = resultado.data.convocatorias.filter(
        (convocatoria) => convocatoria.id_nivel === idNivel
      );
  
      // Ordena las convocatorias por id de forma descendente
      const arrayFiltradoOrdenado = convocatoriasFiltradas.sort(
        (a, b) => b.id - a.id
      );
  
      // Actualiza los estados con las convocatorias filtradas y ordenadas
      setConvocatorias(resultado.data);
      setArrayFiltrado(arrayFiltradoOrdenado);
    } catch (error) {
      console.log(error);
    }
  };

  //Funciona para obtener niveles
    const obtenerNiveles = async () => {
      try {
        const resultado = await axios.get("/educacion/listarNiveles");
      // Actualiza los estados con las convocatorias filtradas y ordenadas
      setArrayNiveles(resultado.data.niveles);
      } catch (error) {
        console.log(error);
      }
    };
    const obtenerEstablecimientos = async () => {
      try {
        const resultado = await axios.get("/educacion/listarEstablecimientos");
      // Actualiza los estados con las convocatorias filtradas y ordenadas
      setArrayEstablecimientos(resultado.data.establecimientos);
      } catch (error) {
        console.log(error);
      }
    };
    const obtenerCausal = async () => {
      try {
        const resultado = await axios.get("/educacion/listarCausal");
      // Actualiza los estados con las convocatorias filtradas y ordenadas
      setArrayCausal(resultado.data.causal);
      } catch (error) {
        console.log(error);
      }
    };
    const obtenerCaracter = async () => {
      try {
        const resultado = await axios.get("/educacion/listarCaracter");
      // Actualiza los estados con las convocatorias filtradas y ordenadas
      setArrayCaracter(resultado.data.caracter);
      } catch (error) {
        console.log(error);
      }
    };

  const getAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return setAuthenticated(false);
      }
      axios.defaults.headers.common["Authorization"] = token;
      const { data } = await axios.get("/usuarios/authStatus");
      setUser(data.usuarioSinContraseña);
      setAuthenticated(true);
    } catch (error) {
      setAuthenticated(false);
      // toast.error("Error de autenticación. Ingrese nuevamente");
    }
    setLoading(false);
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("tokenSet");
    const url = new URL(`http://localhost:5174/`);
    url.searchParams.append("logout", true);
    window.open(url.toString(), '_self');
  };

  return (
    <EducaContext.Provider
      value={{
        user,
        authenticated,
        setAuthenticated,
        loading,
        getAuth,
        setLoading,
        logout,
        selected,
        setSelected,
        convocatorias,
        setConvocatorias,
        arrayFiltrado,
        obtenerConvocatorias,
        obtenerNiveles,
        arrayNiveles,
        obtenerEstablecimientos,
        arrayEstablecimientos,
        obtenerCausal,
        obtenerCaracter,
        arrayCaracter,
        arrayCausal
      }}
    >
      {children}
    </EducaContext.Provider>
  );
};

export default ProviderEducacion;