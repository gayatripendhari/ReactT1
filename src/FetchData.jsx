import React,{useState,useEffect} from 'react'

const FetchData = () => {
    let [FetchData,setFetchedData] = useState("");

    useEffect(()=>{
        let fetchingData = async() =>{
            let response = await fetch("https://api.github.com/users");
            let data = await response.json()
            console.log(data);
           setFetchedData(data)
            
        }
        fetchingData()
    })
  return (
    <div>
        <h1>
            {
                FetchData.length>0 &&  FetchData.map((ele) =>{
                    return <li key={ele.login}>{ele.login}</li>
                })
            }
        </h1>
    </div>
  )
}

export default FetchData