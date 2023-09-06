
import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button, Grid, TextField, Checkbox, Toolbar, AppBar } from '@mui/material';
import { blue } from '@mui/material/colors';


function App() {
  
  return (
    <div className="App">
      <AppBar position="static" color="primary" elevation={1}>
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
          <TextField
            required
            id="Sex"
            name="Sex"
            label="Sex"
            fullWidth
          />
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
            required
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
            color="primary"
          >Predecir
          </Button>
        </Grid>
      </Grid>
    </div>
    
  );
  
}

export default App;
