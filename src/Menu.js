import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
//import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import Box from "@mui/material/Box";
import axios from "axios";

const Menu = () => {
  const [imageBase64, setImageBase64] = useState("");
  const [image, setImage] = useState("");

  const handleClick = async () => {
    try {
      const response = await axios.post(
        "http://ec2-3-22-248-128.us-east-2.compute.amazonaws.com/predecir/",

        [
          85, 59, 26, 72, 3, 85, 81, 26, 26, 58, 81, 81, 59, 72, 84, 88, 59, 59,
          72, 72, 3, 85, 81, 26, 88, 58, 81, 88, 85, 84, 58, 58, 26, 84, 26, 84,
          72, 85, 85, 84, 3, 58, 84, 84, 58, 85, 3, 84, 3, 58, 88, 72, 3, 81,
          26, 59, 88, 81, 85, 58, 58, 88, 81, 58, 58, 88, 85, 85, 84, 26, 88,
          59, 59, 72, 58, 3, 85, 72, 3, 85, 59, 81, 58, 59, 84, 3, 58, 26, 81,
          58, 85, 72, 3, 59, 85, 84, 88, 81, 58, 58, 3, 88, 84, 58, 58, 85, 59,
          26, 59, 88, 3, 58, 81, 88, 72, 81, 72, 85, 26, 59, 81, 72, 58, 88, 81,
          26, 59, 59, 81, 58, 58, 72, 85, 85, 58, 58, 58, 26, 58, 58, 26, 88, 3,
          85, 88, 58, 26, 84, 85, 72, 3, 88, 84, 84, 85, 58, 72, 3, 59, 84, 58,
          88, 26, 58, 3, 58, 58, 26, 81, 84, 58, 88, 59, 59, 85, 84, 81, 3, 26,
          88, 58, 81, 58, 84, 59, 26, 85, 72, 72, 3, 58, 59, 72, 81, 3, 72, 26,
          58, 59, 58,
        ]
      );
      const imageData = "data:image/jpeg;base64," + response.data;
      setImageBase64(imageData);
    } catch (error) {
      // Maneja errores si la solicitud falla
      console.error("Error al llamar a la API:", error);
    }
  };
  const handleClick2 = async () => {
    try {
      const response = await axios.post(
        "http://ec2-3-22-248-128.us-east-2.compute.amazonaws.com/probabilidad/",
        [10, 26, 45, 56, 68, 70, 89]
      );
      const image = "data:image/jpeg;base64," + response.data;
      setImage(image);
    } catch (error) {
      // Maneja errores si la solicitud falla
      console.error("Error al llamar a la API:", error);
    }
  };

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item md={12}>
        <div
          style={{
            width: "60%",
            margin: "0 auto",
            justifyContent: "center",
            paddingTop: "100px",
          }}
        >
          <h1>Patient2Patient</h1>
          <Typography>
            Te damos la bienvenida a nuestro proyecto de investigación. El cual
            se centra en la aplicación de modelos de aprendizaje automático para
            abordar el fenómeno de la salud, a través del análisis del conjunto
            de datos “Egresos hospitalarios 2016-2020” proporcionado por el
            gobierno de la provincia de Buenos Aires. Empleando la regresión
            logística como herramienta, relacionamos variables como la edad, el
            sexo, lugar de residencia y patologías del paciente, con los tipos
            de egresos hospitalarios (Alta definitiva, traslado, defunción,
            entre otros). A su vez, exploramos el proceso de clusterización con
            K-Modes para analizar las patologías sufridas en función de la edad.
            A través de estos enfoques, buscamos identificar patrones y
            relaciones que puedan ayudar a predecir si un paciente hospitalizado
            egresará por alta o defunción. Hemos evaluado el desempeño de
            nuestros modelos utilizando métricas como la exactitud, la Curva ROC
            y los errores cuadráticos. Nuestro objetivo es proporcionar una
            herramienta que facilite la selección de datos relacionados con los
            motivos de internación y, a partir de estos, predecir la cantidad de
            defunciones. Además, ofrecemos la posibilidad de ingresar una lista
            de edades para predecir la probabilidad del alta relacionada a estos
            valores.
          </Typography>
        </div>
      </Grid>
      <Grid item md={12} style={{ width: "70%" }}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item md={12} style={{ textAlign: "center", width: "60%"}}>
            <h2>Predecir</h2>
            <Typography>Devuelve la probabilidad de egresos por alta y defunción en función de la edad ingresada.</Typography>
            <img
              src={imageBase64}
              alt=""
              style={{ maxWidth: "100%", height: "auto", paddingTop: "20px" }}
            />
          </Grid>
          <Grid item md={12} style={{ textAlign: "center" }}>
            <Button
              variant="outlined"
              onClick={handleClick}
              style={{ height: "40px" }}
            >
              <h4>Predecir</h4>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12} style={{ width: "70%", paddingBottom: "100px" }}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item md={12} style={{ textAlign: "center", width: "60%" }}>
            <h2>Probabilidad</h2>
            <Typography>Estima la cantidad de defunciones a partir de un conjunto hospitalizaciones en el cluster 0 con sus correspondientes patologías.</Typography>
            <img
              src={image}
              alt=""
              style={{ maxWidth: "100%", height: "auto", paddingTop: "20px" }}
            />
          </Grid>
          <Grid item md={12} style={{ textAlign: "center" }}>
            <Button
              variant="outlined"
              onClick={handleClick2}
              style={{ height: "40px" }}
            >
              <h4>Probabilidad</h4>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Menu;
