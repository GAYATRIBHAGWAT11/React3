import React from 'react';
import './App.css';
import { Greeting } from './components/greeting';
import Landing from './components/Landing';
import { Names } from './components/Names';
// import Maincontent from './components/MainContent/Maincontent';
// import Person from './components/Person';
// import Navbar from './components/Navbar';
// import textForm from './components/textForm';
// import {counter} from './components/counter';
// import Profile from './components/Profile'
import Navbar from './InstaClone/Navbar';

// Toggle=> classname
 function App(){
   return(
     <div>
       {/* <Landing/> */}
       {/* <Names/> */}
       <Greeting/>
     </div>
   );
 }
 export default App;
