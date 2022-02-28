import React, {useState} from 'react';
import axios from 'axios';
import './Search.css';

export default function Search(){
let [keyword, setKeyword]=useState("")

function handleResponse(response){
console.log (response)
}

function Search(event)
{
event.preventDefault();


 let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
 console.log(apiUrl); 
axios.get(apiUrl).then(handleResponse)
  }
function handleKeywordchange(event){
console.log(event.target.value);
setKeyword(event.target.value);
} 


return <div className="Search">
<form onSubmit={Search}>
 <input type="search" onChange={handleKeywordchange} autoFocus={true}/>  
</form>

</div>;
}