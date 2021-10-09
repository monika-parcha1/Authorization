import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

function Welcome(props) {
    const [userName, setUserName] = useState("")
    const history = useHistory();
    localStorage.setItem("role","user")
    return (
        <div>
        <p>  Welcome  to Webspero
          Note * 
          enter admin to go to admin page
          </p>
          <input type = "text" 
          value = {userName}
          placeholder = "Enter User Name"
          onChange = {(e)=>{
            setUserName(e.target.value)
          }}/>
          <button onClick = {()=>{
              if(userName){
                  history.push(userName.toLowerCase() == "admin" ? '/protected' : "/users")
                  localStorage.setItem("role","admin")
              }
          }}>Go </button>
        </div>
    );
}

export default Welcome;