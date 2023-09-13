import "./App.css";
import React from "react";
import { Helmet } from "react-helmet-async";
import { styled } from "@mui/material/styles";
import {
  Link,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Checkbox,
  Toolbar,
  AppBar,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function SelectSmall() {
  const [Sex, setSex] = React.useState("");
  const [prediction, setPrediction] = React.useState(null);

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  const primary = {
    main: "#5E1303",
  };

  async function handleSubmit() {
    // Recolectar datos del formulario
    const data = {
      features: {
        PassengerID: document.getElementById("Passenger ID").value,
        PClass: document.getElementById("PClass").value,
        Name: document.getElementById("Name").value,
        Sex: Sex,
        Age: document.getElementById("Age").value,
        SibSp: document.getElementById("SibSp").value,
        Parch: document.getElementById("Parch").value,
        Ticket: document.getElementById("Ticket").value,
        Fare: document.getElementById("Fare").value,
        Cabin: document.getElementById("Cabin").value,
        Embarked: document.getElementById("Embarked").value,
      },
    };

    console.log(data)

    // Hacer una solicitud POST al servidor Flask
    try {
      const response = await fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.prediction);
      setPrediction(result.prediction[0]); // Actualizar el estado con la predicción
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    }
  }

  return (
    <div className="App">
      <AppBar
        position="static"
        elevation={1}
        style={{ background: "#5E1303" }}
      >
        <Toolbar noWrap>
          <Typography variant="h5" color="inherit" noWrap>
            TITANIC
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3} marginY={2} sm={11} marginLeft={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Passenger ID"
            name="Passenger ID"
            label="Passenger ID"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="PClass"
            name="PClass"
            label="PClass"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">
              Sex
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={Sex}
              label="Sex"
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value={" "}> </MenuItem>
              <MenuItem value={"female"}>Mujer</MenuItem>
              <MenuItem value={"male"}>Hombre</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Age"
            name="Age"
            label="Age"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="SibSp"
            name="SibSp"
            label="SibSp"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Parch"
            name="Parch"
            label="Parch"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Ticket"
            name="Ticket"
            label="Ticket"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="Fare" name="Fare" label="Fare" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="Cabin"
            name="Cabin"
            label="Cabin"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Embarked"
            name="Embarked"
            label="Embarked"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ background: "#5E1303" }}
            onClick={handleSubmit}
          >
            Predecir
          </Button>
        </Grid>
        {/* Renderizar el mensaje basado en la predicción */}
        {prediction !== null && (
          <Typography variant="h6" style={{ marginTop: 20 }}>
            {prediction === 1
              ? "El pasajero sobrevivió al naufragio del Titanic."
              : "Tu pasajero no sobrevivió al naufragio del Titanic."}
          </Typography>
        )}
      </Grid>
    </div>
  );
}
