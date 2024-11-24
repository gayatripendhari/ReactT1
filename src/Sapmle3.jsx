import React , {useState} from 'react'

const Sapmle3 = () => {
    let[food,setFood] = useState("");
  return (
    <div>
        <section>
        {food !=""?<h1>{food}</h1>:<h1>choose food</h1>}
        <button onClick={()=>{setFood("Idly")}}>Idly</button>
        <button onClick={()=>{setFood("Dosa")}}>Dosa</button>
        </section>
    </div>
  )
}

export default Sapmle3