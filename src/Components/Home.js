import React,{useState} from 'react';
import "./style.css";
import { BiCalendarEdit } from "react-icons/bi";
import { BiCoffeeTogo } from "react-icons/bi";

export default function Home(props) {

  let [vehicleDat, setvehicleDat]= useState(props.vehicleDat);
 
  return (
    <div className='cont11'>

      <select id="scenario" className='inp1'>
        <option value="Test Scenario">Test Scenario</option>
        <option value="My Scenario">My Scenario</option>
      </select>
      <table className='tab table table-hover'>
        <thead>
          <tr style={{"color":"white", "backgroundColor":"gray"}}>
            <th>Vehicle id</th>
            <th>Vehicle Name</th>
            <th>Position X</th>
            <th>Position Y</th>
            <th>Speed</th>
            <th>Direction</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {vehicleDat.map((item, index)=>{
            return(
              <tr key={index} style={{backgroundColor: "white"}}>
                <td style={{border:"1px solid", color:"gray"}}>{index+1}</td>
                <td style={{border:"1px solid", color:"gray"}}>{item.name}</td>
                <td style={{border:"1px solid", color:"gray"}}>{item.X}</td>
                <td style={{border:"1px solid", color:"gray"}}>{item.Y}</td>
                <td style={{border:"1px solid", color:"gray"}}>{item.speed}</td>
                <td style={{border:"1px solid", color:"gray"}}>{item.direction}</td>
                <td style={{border:"1px solid", color:"gray"}}><BiCalendarEdit/></td>
                <td style={{border:"1px solid", color:"gray"}}><BiCoffeeTogo/></td>
              </tr>
            )

          })

          }
        </tbody>

      </table>
      <button className='butt1'>Start Simulation</button>
      <button className='butt2'>Stop Simulation</button>
      
    </div>
  )
}
