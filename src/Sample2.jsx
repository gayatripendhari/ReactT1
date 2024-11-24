import React, {useState} from 'react'

const Sample2 = () => {
    let [food,setfood] = useState("idly");
  return (
    <div>
        {food =="idly"?<h1>Idly is good food</h1>:<h1>choose food</h1>}
    </div>
  )
}

export default Sample2;