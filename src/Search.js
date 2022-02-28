import React, {useState} from 'react';
import './Search.css';

export default function Search(){
    let [keyword, setKeyword]=useState("")
function Search(event)
{
event.preventDefault();
alert (`Searching for ${keyword} definition...`);
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