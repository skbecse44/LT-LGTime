import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Results from "./Results"
import Choose from "./Choose"



ReactDOM.render(
 

 <Router>


    <Switch>
          <Route exact path="/home" component={App}>
            
          </Route>
              <Route exact path="/" component={Choose}>
            
          </Route>
           <Route exact path="/results" component={Results}>
            
          </Route>


         
        </Switch>

 </Router>

 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
