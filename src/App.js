
import './App.css';
import '.././node_modules/jquery/dist/jquery';
import '.././node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home';
// import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import Vehicle from './Components/Vehicle';
import {useState} from "react";
import Addsce from './Components/Addsce';
import Allsce from './Components/Allsce';


let vehicleData= [
  {"id":1, "name": "Buggati", "X": 30, "Y": 230, "speed": 3, "direction": "upwards"},
  {"id":2, "name": "Maruthi", "X": 230, "Y": 50, "speed": 5, "direction": "downwards"}
]

let scenarioData=[
  {"id":1, "name": "Test Scenario", "Time": "2s", "noVeh": 2},
  {"id":2, "name": "My Scenario", "Time": "10s", "noVeh": 3},
  {"id":3, "name": "Scenario AQC", "Time": "12s", "noVeh": 0}
]

// localStorage.setItem('items', JSON.stringify(items));
// const items = JSON.parse(localStorage.getItem('items'));

function App() {

  let [vehicDat, setVehicle]= useState(vehicleData);

  let [sceDat, setScenario]= useState(scenarioData);

  const vehicleFunc= (data)=>{
    let Len= vehicDat.length; 
    console.log(Len);
    data["id"]=Len;
    setVehicle([...vehicDat, data]);
    console.log(vehicDat);
    localStorage.setItem('vehicle', JSON.stringify(vehicDat));
    let testt = JSON.parse(localStorage.getItem('vehicle'));
    
    
    // setVehicle(testt);
    
  }

  const addScena=(data)=>{
    setScenario([...sceDat, data]);
  }

  return (
    <Router>
    <div className="App d-flex flex-row justify-content-start">
      <div className='cont1'>
        <Link className='para' to="/">Home</Link> <br/>
        <Link className='para' to="/Scene">AddScenario</Link> <br/>
        <Link className='para' to="/Scene1">AllScenarios</Link> <br/>
        <Link className='para' to="/Vehicle">AddVehicles</Link>
      </div>
     <div className='cont2'>
      <Routes>
        <Route path="/" element={<Home vehicleDat={vehicDat}/>}></Route>
        <Route path="/Scene" element={<Addsce addScena={addScena}/>}></Route>
        <Route path="/Scene1" element={<Allsce sceDat={sceDat}/>} ></Route>
        <Route path="/Vehicle" element={<Vehicle vehicleFunc={vehicleFunc}/>}></Route>
        
      </Routes>


     </div>

     
    </div>
    </Router>
  );
}

export default App;

