import React from 'react';
import { AppBar, Button, Icon, IconButton, makeStyles, Toolbar, Typography } from '@mui/material';
//import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';


function App() {
  return (
    <div>
      {/* hello world by
      <Button variant="contained" color="secondary">Dua MG</Button>
      <br/>
      <br/>
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          Hello World 2
        </Grid>
        <Grid item xs={6}>
          Hello World 3
        </Grid>
        <Grid item xs={6}>
          Hello World 4
        </Grid>
        <Grid item xs={2} style={{backgroundColor:"pink"}}>
          Hello World 5
        </Grid>
        <Grid item xs={8} style={{backgroundColor:"cyan"}}>
          Hello World 6
        </Grid>
        <Grid item xs={2} style={{backgroundColor:"purple"}}>
          Hello World 7
        </Grid>
      </Grid> */}
      <div sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Project by Dua MG
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default App;
