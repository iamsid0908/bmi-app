import React,{useState} from "react";
import './Bmr.css';


function Bmr(){
    const[age,setAge]=useState(0);
    const[weight,setWeight]=useState(0);
    const[height,setHeight]=useState(0);
    const[bmr,setBmr]=useState('');
    
    return( 
        <>
        {/* <h2 className="title">BMR for mens</h2> */}
        <div className="big-box">
        <div className="whole">
        <h2 className="title">BMR for mens</h2>
            <label>Age</label>
        <input type="text" placeholder="Age" className="input" onChange={(e)=>{
            setAge(e.target.value);
        }}/>
        <label>Weight</label>
        <input type="text" placeholder="weight" className="input" onChange={(e)=>{
            setWeight(e.target.value);
        }}/>
        <label>Height</label>
        <input type="text" placeholder="height" className="input" onChange={(e)=>{
            setHeight(e.target.value);
        }}/>
        <button onClick={()=>{
             
            let bmr=(88.362+(13.397*weight)+(4.799*height)-5.677*age);
            setBmr(bmr.toFixed(2));
        }}>Calculate</button>
        <h1>{bmr} Calories/day</h1>
        </div>
        </div>
        </>
    )
}
export default Bmr;