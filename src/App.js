import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {   
  return (
        <div className="app-wrapper">  
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
              <Route path="/dialogs" render = { () => <DialogsContainer/> } /> 
              <Route path="/profile" render = { () => <Profile/> } />     
              <Route path="/news" component = {News} />    
              <Route path="/settings" component = {Settings} />   
            </div>        
        </div>   
  );
}

export default App;
