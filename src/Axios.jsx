import React,{useEffect,useState} from 'react';
import axios  from "axios";
const Axios = () => {
    let [fetchedData,setFetchedData] = useState("");

    useEffect(()=>{
        let fetchData = async()=>{
            // let response = await axios.get("https://api.github.com/users");
            // console.log(response);

            let {data} = await axios.get("https://api.github.com/users")
            console.log(data);
            setFetchedData(data);
            
            
        }
        fetchData()
    },[])
  return (
    <div>
    <h1>Axios In React</h1>
    <h1>
        {fetchedData.length>0 &&  fetchedData?.map(ele=>{
            return <li key={ele.login}>{ele.login}</li>
        })}
    </h1>
    </div>
  )
}

export default Axios