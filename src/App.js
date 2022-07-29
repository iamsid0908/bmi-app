
import './App.css';
import Feature from './Components/Feature/Feature';
import'./Components/Main/Main';
import Maink from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Bmr from './Components/Feature/BMR/Bmr'
import Pace from './Components/Feature/paceCal/Pace';
import {Route,Routes}from 'react-router-dom';
import React from 'react';
import Ideal from './Components/Feature/Ideal-weight/Ideal';
import Contact from './Components/Contact-us/Contact';



class App extends React.Component{
  constructor(){
    super();

  }

  render(){
    return (
    
      <>
      
      <Navbar/>
      <Routes>
      <Route path="/" element={<Maink/> }/>
       <Route path="/feature" element={<Feature/> }/>
       <Route path="/contact" element={<Contact/> }/>
       <Route path="/feature/bmr" element={<Bmr/> }/> 
       <Route path="/feature/pace" element={<Pace/> }/> 
       <Route path="/feature/ideal" element={<Ideal/> }/> 

      

      </Routes>
      </>
   
  );

  }
}


export default App;
