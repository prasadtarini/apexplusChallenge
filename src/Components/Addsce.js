import React from 'react';
import "./style2.css";
import { useNavigate } from 'react-router-dom';

export default function Addsce(props) {

    let navi= useNavigate();

    let Add=()=>{
        let inp1= document.getElementById("drop21").value; 
        let inp2= document.getElementById("drop22").value; 
        if(inp1=="" || inp2==""){
            alert("Please enter all the details correctly..");
        }else{
            let x = Math.floor((Math.random() * 5) + 1);
            let obj={"name":inp1, "Time":inp2, "noVeh": x};
            alert("successfully added the new scenario.");
            props.addScena(obj);
        }

    }

    let Reset=()=>{
        let inp1= document.getElementById("drop21"); 
        let inp2= document.getElementById("drop22"); 
        inp1.value="";
        inp2.value="";
    }

    let Back=()=>{
        navi("/Scene1");
    }

    let valid1=()=>{
        let inp1= document.getElementById("drop21").value; 
        let para1= document.getElementById("para21"); 
        
        if(inp1==""){
            para1.innerHTML="Please enter the Scenario Name";
            para1.style.color="white"
            para1.style.backgroundColor="maroon";
            
        }else{
            para1.innerHTML="";
            
        }
    }
    let valid2=()=>{
        let inp2= document.getElementById("drop22").value; 
        let para2= document.getElementById("para22"); 
        if(inp2==""){
            para2.innerHTML="Scenario is Required";
            para2.style.color="white"
            para2.style.backgroundColor="maroon";
            
        }else{
            para2.innerHTML="";
            
        }
    }

  return (
    <div className='cont21'>
         <p className='para2'>Scenario / add</p>
        <h1 className='head2'>Add Scenario</h1>
        <div className='cont22'>
            <div className='d-flex flex-row justify-content-center'>
                <div>
                <label style={{"fontWeight": "bold", "marginBottom": "5px"}} for="drop41">Scenario Name</label> <br/>
                <input onBlur={valid1} id="drop21" className='cont23' /><br/>
                <p id="para21"></p>
                </div>
                <div style={{"marginLeft": "170px"}}>
                <label style={{"fontWeight": "bold", "marginBottom": "5px"}} for="drop41">Scenario Time(Seconds)</label> <br/>
                <input onBlur={valid2} id="drop22" className='cont23' />
                <p id="para22"></p>
                </div>

            </div>

        </div>
        <div style={{"marginLeft":"15px", "marginTop": "20px"}}>
        <button  onClick={Add} className='butt21'>Add</button>
        <button onClick={Reset} className='butt22'>Reset</button>
        <button onClick={Back} className='butt23'>Go Back</button>
        </div>
        
    </div>
  )
}
