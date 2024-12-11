import React,{useEffect,useState} from 'react'
import axios  from "axios";
const Axios2 = () => {
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
    <h1>Axios in React</h1>
    <table border={2} cellspacing={8}>
        <tr>
            <th>User Name</th>
            <th>User ID</th>
            <th>User Profile</th>
            <th>User Link</th>
        
        </tr>

        {fetchedData.length >0  && fetchedData?.map((ele)=>{
            return(
                <>
                    <tr>
                        <td>{ele.login}</td>
                        <td>{ele.id}</td>
                        <td>{""}
                            <img src={ele.avatar_url} height={150} width={150}/>
                        </td>
                        <td>{ele.url}</td>
                    </tr>
                </>
            )
        })}
    </table>
    </div>
  )
}

export default Axios2