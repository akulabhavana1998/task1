import React from 'react';
import Header from './app/Header';
import Home from './app/Home';
import About from './app/About';
import Coursehtml from './app/Coursehtml';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Course from './app/Course';
import CourseJs from './app/CourseJs';
import List from './app/List';
import Userscreen from './app/Userscreen';
import Layoutscreen from './app/Layoutscreen';
import Hookscreen from './app/Hookscreen';



function App(){
  
  return(
     <BrowserRouter>
    <div className="container">
      <Header/>
      
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/coursehtml' element={<Coursehtml />}/>
        <Route exact path='/course' element={<Course />}/>
        <Route exact path='/coursejs' element={<CourseJs />}/>
        <Route exact path='/list' element={<List />}/>
        <Route exact path='/userscreen' element={<Userscreen />}/>
        <Route exact path='/layoutscreen' element={<Layoutscreen />}/>
        <Route exact path='/hookscreen' element={<Hookscreen />}/>
        
      </Routes> 
      
     
      
     
     </div>
    </BrowserRouter>
  )
   
};

export default App;

