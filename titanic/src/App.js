
import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Button, Grid, TextField, Checkbox, Toolbar, AppBar, Select, MenuItem, InputLabel, FormControl} from '@mui/material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function SelectSmall() {
  const [Sex, setSex] = React.useState('');

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  const primary = {
    main: '#5E1303'
  };
  
  return (
    <div className="App">
      <AppBar position="static"  elevation={1} style={{ background: '#5E1303' }}>
      <Toolbar noWrap>
          <Typography variant="h5" color="inherit" noWrap>
            TITANIC
          </Typography>
        </Toolbar>
        </AppBar>
      
      <Grid container spacing={3}  marginY={2} sm={11} marginLeft={2}>
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
          <InputLabel id="demo-simple-select-helper-label">Sex</InputLabel>
          <Select
            required
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={Sex}
            label="Sex"
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value = {" "}> </MenuItem>
            <MenuItem value = {"female"}>Mujer</MenuItem>
            <MenuItem value = {"male"}>Hombre</MenuItem>

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
          <TextField id="SibSp" name="SibSp" label="SibSp" fullWidth />
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
          <Popup trigger={<Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ background: '#5E1303'}}
          >Predecir
          </Button>}  position="right center">
            <div>
              <Grid>
              <Typography variant="h5">Datos del pasajero</Typography>
              <div >Name </div>
              <div>Sex</div>
              <div>Age</div>
              <div>ID</div>
              <div>class</div>
              <div>Ticket</div>
              <div>Fare</div>
              <div>Cabin</div>
              <div>Embarked</div>
              <Typography variant="h5">Prediccion</Typography>
              </Grid>
            </div>
          </Popup>
        </Grid>
      </Grid>
    </div>
    
  );
  
  }