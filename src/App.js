import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import {LandingPage} from './LandingPage/LandingPage';
import { ReviewPage } from './Components/ReviewPage/ReviewPage';
import { About } from './Components/About/About';
import { YourDoctor } from './Components/YourDoctorPage/YourDoctorPage';

function App() {
  return (
    <BrowserRouter>
        <div>
            <NavBar />
            <Switch>
              <Route path="/invictus" component={LandingPage}/>
              <Route path="/ReviewPage" component={ReviewPage}/>
              <Route path="/About" component={About}/>
              <Route path="/YourDoctor" component={YourDoctor}/>
           </Switch>
        </div> 
      </BrowserRouter>
  );
}

export default App;
