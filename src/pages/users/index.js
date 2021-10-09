import React,{useEffect,useState} from 'react';
import UserTable from '../../components/userTable';

function Users(props) {
    localStorage.setItem("role","user")
const [users, setUserData] = useState([])
    useEffect(()=>{
        fetchdata()
    },[])
    
  const fetchdata = async()=>{
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const json = await res.json();
    setUserData(json)
  }

    return (
        <div>
           <p className = "contentCenter"> Users Data  </p>
            <UserTable userDetails = {users}/>

        </div>
    );
}

export default Users;