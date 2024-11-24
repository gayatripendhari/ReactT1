import React , {useState} from 'react';
import style from "./style.module.css";

const Sample4 = () => {
    let[car,setCar] = useState("");
  return (
    <div className={style.container}>
      <section>
        <div className={style.Head}> 
          {car !=""?<h1>{car}</h1>:<h1>Choose Your Car</h1>}
        </div>
        <div className={style.body}>
          <button onClick={()=>{setCar("Tesla Model")}}>Tesla Model</button> 
          <button onClick={()=>{setCar("Phantom")}}>Phantom</button>
          <button onClick={()=>{setCar("Hyundai")}}>Hyundai</button>
          <button onClick={()=>{setCar("Mahindra")}}>Mahindra</button>
          <button onClick={()=>{setCar("Honda")}}>Dosa</button>
          <button onClick={()=>{setCar("Skoda")}}>Skoda</button>
          <button onClick={()=>{setCar("Jeep")}}>Jeep</button>
          <button onClick={()=>{setCar("Renault")}}>Renault</button>
          <button onClick={()=>{setCar("Jaguar XJ")}}>Jaguar XJ</button>
          <button onClick={()=>{setCar("Bentley")}}>Bentley</button>
          </div>
      </section>
    </div>
  )
}

export default Sample4;