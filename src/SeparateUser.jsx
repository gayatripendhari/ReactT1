import React, { useEffect, useState } from 'react'
import axios from "axios";
import style from "./SP.module.css";
const SeparateUser = () => {
    let [userData,setUserData] = useState("");
    let [userId, setUserId] = useState(1);

    useEffect(()=>{
        let fechData = async()=>{
            let {data}= await axios.get(`https://api.github.com/user/${userId}`);
            console.log(data);
            setUserData(data);
            
        };
        fechData();
    },[userId]);
  return (
    <div className={style.container}>
        <h1>{userData?.login}</h1>
        <img src={userData.avatar_url} alt="Image not Found" height={200} width={200}/>
        <div className={style.btncontainer}>
            <button onClick={() => { setUserId(userId + 1) }} className={style.btn}>Next User</button>
            <button onClick={() => { setUserId(userId > 1 ? userId - 1 : 1) }} className={style.btn}>Previous User</button>
        </div>
    </div>
  )
}

export default SeparateUser