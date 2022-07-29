import React,{useState,useEffect} from "react";

function Pace(){

    const[time ,setTime]=useState("");
    const[distance ,setdistance]=useState(0);
    const[text ,setText]=useState(0);

    useEffect(()=>{
        var hms=time;
    var a=hms.toString().split(":");
    var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
    setTime(seconds);
    console.log(seconds)

    })
    console.log("s",setTime)
    
    return(
        <div>
            <h2>Pace calculator</h2>
            <form>
                <input type={'text'} placeholder="hh:mm:ss" onChange={(e)=>{
                    setTime(e.target.value);
                }}></input>
                <input type={'text'} placeholder="distance" onChange={(e)=>{
                    setdistance(e.target.value)
                }}></input>
                <button onClick={()=>{
                    let result=(distance/time);
                    setText(result);
                    
                }}>submit</button>
                <h1>{text}</h1>

            </form>

        </div>
    )
}
export default Pace;