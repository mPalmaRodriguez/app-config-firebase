import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import db from "./Firebase/FirebaseConfig";

const App = () => {
  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getDocs(collection(db, "Usuarios"));
      datos.forEach((documento) => {
        console.log(documento.data());
      });
    };

    obtenerDatos();
  }, []);
  return <h1>Configuración de firebase 9</h1>;
};
export default App;
