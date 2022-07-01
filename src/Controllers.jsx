import React,{useState,useEffect} from "react";
import axios from "axios";

function Controllers()
  {
   const[ api, setapi ] = (useState([]))
    function getnews(){
      axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=e97b084346f242ae87fd89cdc351174a")
      .then(res=>{
        console.log(res);
      })
      .catch((exception) => {
        console.log(exception);
    })
    }
    
    return(
      <div>
      <button onClick={getnews}>jfuyt </button>
      <div>asd</div>
    </div>
        )
  }

export default Controllers;