import React,{useState,useEffect} from 'react'

const UseEffect = () => {
    let [count ,setCount] = useState(0);

    // let increase=()=>{
    //     setTimeout(() => {
    //         setCount(count+!)
    //     }, 3000);
    // }

    // setInterval(() => {
    //     setCount(count+1)
    // }, 1000);

    //useEffect syntax
    //useEffect((setup Function),[])
    //[] - dependency(optional)

    useEffect(()=>{
        let task = setInterval(() => {
            setCount(count+1);
        }, 1000);

        return() =>{
            clearInterval(task)
        }
    })
    

    
  return (

    <div>
        <h1>Count - {count}</h1>
        {/* <buttton>Click to increase</buttton> */}
    </div>
  )
}

export default UseEffect