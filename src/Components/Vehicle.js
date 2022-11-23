import React from 'react';
import "./style4.css";
import { useNavigate } from 'react-router-dom';
export default function Vehicle(props) {
  
  let navi = useNavigate();
  let Add=()=>{
    let V1= document.getElementById("drop41").value;
    let V2= document.getElementById("drop42").value;
    let V3= document.getElementById("drop43").value;
    let V4= document.getElementById("drop44").value;
    let V6= document.getElementById("drop4").value;
    let V5= document.getElementById("drop45").value;
    let obj= {
      "name": V1, "X": V2, "Y": V3, "speed": V4, "direction": V5
    }
    if(V1==="" || V2==="" || V3==="" || V4==="" || V5==="" ){
      alert("Please fill all the details correctly..");
    }else{
      alert("Successfully added the data..")
      props.vehicleFunc(obj);
      
    }
    

  }

  let Reset=()=>{
    let V1= document.getElementById("drop41");
    let V2= document.getElementById("drop42");
    let V3= document.getElementById("drop43");
    let V4= document.getElementById("drop44");
    V1.value="";
    V2.value="";
    V3.value="";
    V4.value="";
    
  }

  let Back=()=>{
    alert("Going back to Home Page...")
    navi("/");
  }
  let valid1=()=>{
    let inp1= document.getElementById("drop41").value;
    let p1= document.getElementById("para1");
    if(inp1==""){
      p1.innerHTML="Name is Required";
      p1.style.color="white";
      p1.style.backgroundColor="maroon";
    }else{
      p1.innerHTML="";
    }
  }
  let valid2=()=>{
    let inp1= document.getElementById("drop42").value;
    let p1= document.getElementById("para2");
    if(inp1==""){
      p1.innerHTML="Speed is Required";
      p1.style.color="white";
      p1.style.backgroundColor="maroon";
    }else{
      p1.innerHTML="";
    }
  }
  let valid3=()=>{
    let inp1= document.getElementById("drop43").value;
    let p1= document.getElementById("para3");
    if(inp1==""){
      p1.innerHTML="Y is Required";
      p1.style.color="white";
      p1.style.backgroundColor="maroon";
    }else{
      p1.innerHTML="";
    }
  }
  let valid4=()=>{
    let inp1= document.getElementById("drop44").value;
    let p1= document.getElementById("para4");
    if(inp1==""){
      p1.innerHTML="Name is Required";
      p1.style.color="white";
      p1.style.backgroundColor="maroon";
    }else{
      p1.innerHTML="";
    }
  }

  return (
    <div className='cont4'>
        <p className='para4'>Vehicle / add</p>
        <h1 className='head4'>Add Vehicle</h1>
        <div className='cont41'>
          <div className='d-flex flex-row justify-content-center'>
            <div>
              <label style={{"fontWeight": "bold", "marginBottom": "5px"}} for="drop4">Scenario List</label> <br/>
              <select id="drop4" className='cont42'>
                <option value="Test Scenario">Test Scenario</option>
                <option value="My Scenario">My Scenario</option>
              </select>
            </div>
            <div style={{"marginLeft": "170px"}}>
              <label style={{"fontWeight": "bold", "marginBottom": "5px"}} for="drop41">Vehicle Name</label> <br/>
              <input onBlur={valid1} id="drop41" className='cont42' />
              <p id="para1"></p>
              {/* <select id="drop4 " className='cont42'>
                <option value="Test Scenario">Test Scenario</option>
                <option value="My Scenario">My Scenario</option>
              </select> */}
            </div>
            <div style={{"marginLeft": "170px"}}>
              <label style={{"fontWeight": "bold", "marginBottom": "5px"}} for="drop42">Speed</label> <br/>
              <input onBlur={valid2} id="drop42" className='cont42' />
              <p id="para2"></p>
            </div>

          </div>
          <div style={{"marginTop": "30px"}} className='d-flex flex-row justify-content-center'>
            <div>
              <label style={{"fontWeight": "bold", "marginBottom": "5px"}} for="drop43">Position X</label> <br/>
              <input onBlur={valid3} id="drop43" className='cont42' />
              <p id="para3"></p>
            </div>
            <div style={{"marginLeft": "170px"}}>
              <label style={{"fontWeight": "bold", "marginBottom": "5px"}} for="drop44">Position Y</label> <br/>
              <input onBlur={valid4} id="drop44" className='cont42' />
              <p id="para4"></p>
            </div>
            <div style={{"marginLeft": "170px"}}>
              <label style={{"fontWeight": "bold", "marginBottom": "5px"}} for="drop45">Direction</label> <br/>
              <select id="drop45" className='cont42'>
                <option value="Towards">Towards</option>
                <option value="Backwards">Backwards</option>
                <option value="Upwards">Upwards</option>
                <option value="Downwards">Downwards</option>
              </select>
            </div>

          </div>

        </div>
        <div style={{"marginLeft":"15px", "marginTop": "20px"}}>
        <button onClick={Add} className='butt41'>Add</button>
        <button onClick={Reset} className='butt42'>Reset</button>
        <button onClick={Back} className='butt43'>Go Back</button>
        </div>
    </div>
  )
}
