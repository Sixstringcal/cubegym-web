import logo from './logo-round.png';
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import Home from './Home';
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Navbar from './Layout/Navbar.jsx';


function App() {
  return (
    <Navbar/>
  );
}

function menuClicked() {
  return (

    <Drawer anchor='left' open='true' >
    </Drawer>

  );
}

export default App;
