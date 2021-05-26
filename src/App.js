import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pref from './components/pref';
import aboutus from '../src/components/aboutus'
import {BrowserRouter, BrowserRouter as Router,Route,Switch} from 'react-router-dom';
const App =()=>{
 return(
     
   <div>
     
      <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/health" component={Pref}/>
      <Route path="/about" exact component={aboutus}/>
      </BrowserRouter>
   </div>
 )   
}
export default App