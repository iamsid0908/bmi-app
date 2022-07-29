import React, {  useState } from "react";
import './Ideal.css'
import'./Ideal.css'

function Ideal(){


    const [age,setAge]=useState(0);
    const[height,setHeight]=useState(0);
    const[text,setText]=useState('');
    // const calcideal =()=>{
        
    //         if(height<152){
    //             setText("your ideal weight should be 48kg to 52kg");
    //         }else if(height>152){
    //             let a=height-152; //cm
    //             let ans=48+(.91*a);
    //             setText(ans);
    //         }
    //     }
        
   
    

    return (
        <div>
            

          <form>
            <div className="whole">
            <h2 className="title">Ideal weigth of mans</h2>
            <label>Age</label>
                <input type={'text'} placeholder="Age"  className="input" onChange={(e)=>{
                    setAge(e.target.value);
                }}></input>
                <label>Height</label>
                <input type={'text'} placeholder="height"className="input" onChange={(e)=>{
                    setHeight(e.target.value)
                }}></input>
                <button onClick={()=>{
                  if(height<152){
                    setText("your ideal weight should be 48kg to 52kg");
                }else if(height>152){
                    const a=height-152; //cm
                    const ans= 48+(.91*a);
                    setText(ans);
                }  
                }}>submit</button>
               <h1>{text}</h1>
               </div>
            </form>
            
        </div>
    )
}
export default Ideal;