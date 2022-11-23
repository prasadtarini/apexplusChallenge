import React from 'react';
import "./Style3.css";
import { AiOutlineBorderInner } from "react-icons/ai";
import { AiOutlineForm } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export default function Allsce(props) {

    let navi= useNavigate();

    let Scena=()=>{
        navi("/Scene");
    }
    let Vehi=()=>{
        navi("/Vehicle");
    }
    let Dele=()=>{

    }

  return (
    <div className='cont31'>
        <div className='d-flex flex-row justify-content-center'>
            <h1 className='head3'>All Scenario</h1>
            <div style={{"marginTop":"35px","marginLeft":"450px"}}>
                <button  onClick={Scena} className='butt21'>New Scenario</button>
                <button onClick={Vehi} className='butt22'>Add Vehicle</button>
                <button onClick={Dele} className='butt23'>Delete All</button>
            </div>
        </div>
        <table className='tab table table-hover'>
            <thead>
                <tr style={{"color":"white", "backgroundColor":"gray"}}>
                    <th>Scenario Id</th>
                    <th>Scenario Name</th>
                    <th>Scenario Time</th>
                    <th>Number of Vehicles</th>
                    <th>Add Vehicle</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.sceDat.map((item, index)=>{
                        return(
                            <tr key={index} style={{backgroundColor: "white"}}>
                                <td style={{border:"1px solid", color:"gray"}}>{index+1}</td>
                                <td style={{border:"1px solid", color:"gray"}}>{item.name}</td>
                                <td style={{border:"1px solid", color:"gray"}}>{item.Time}</td>
                                <td style={{border:"1px solid", color:"gray"}}>{item.noVeh}</td>
                                <td style={{border:"1px solid", color:"gray"}}><AiOutlineBorderInner/></td>
                                <td style={{border:"1px solid", color:"gray"}}><AiOutlineForm/></td>
                                <td style={{border:"1px solid", color:"gray"}}><AiFillDelete/></td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>

        
        
    </div>
  )
}
