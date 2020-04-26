import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import {Route, BrowserRouter} from "react-router-dom";

const App = (props) => { 
  return ( 
    <BrowserRouter>
      <div className="app-wrapper">  
          <Header/>
          <Navbar/>
          <div className="app-wrapper-content">
            <Route path="/dialogs" render = { () => <Dialogs 
                        state={props.state.messagePage} /> } />
            <Route path="/profile" render = { () => <Profile 
                        state={props.state.profilePage}/> } />     
            <Route path="/news" component = {News} />      
          </div>        
      </div>
    </BrowserRouter>
  );
}

export default App;
