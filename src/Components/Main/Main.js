import React,{useState} from "react";
import './main.css';

function Maink(){
    const [message, setMessage] = useState(0);
    const [height,setHeight]=useState(0);
    const [bmi , setBmi]=useState('');
    const [text , setText]=useState('');
    console.log(bmi);


    let calcBmi = (event) => {
      
      event.preventDefault()
  
      if (message === 0 || height === 0) {
        alert('Please enter a valid weight and height')
      } else {
        let bmi = (message / (height * height) * 10000)
        setBmi(bmi.toFixed(2))
        if(bmi<18){
          setText("you are underweight");
        }else if(bmi>=18 && bmi<=25){
          setText("perfec or Normal")
        }else if(bmi>25){
          setText('you are overweight')
        }
    }
  }
    
    return <div className="main-page">
      <h1 className="heading">BMI CALCUKATOR</h1>
      <div className="container2">
      <form >
      <div className="input-btn">
        <label>Weight (kg)</label>
        <input  
        type="text"
        
        id="message"
        name="message"
        placeholder="enter weight"
        onChange={(e)=>{
          setMessage(e.target.value);
        }}
       />
       <label>Height (cm)</label>
      <input type={"text"} className="ht" placeholder="enter height"
      onChange={(e)=>{
        setHeight(e.target.value);
      }}
      />
       <button className="btn"  type="submit" onClick={calcBmi}>Submit</button>
       </div>
       <div className="result">
        <h1>{bmi}</h1>
        <h3>{text}</h3>
        </div>
        </form>
        </div>
    </div>
}
export default Maink;