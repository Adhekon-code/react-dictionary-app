import React, {useState} from 'react';
import axios from 'axios';
import './Search.css';
import Results from './Results';

export default function Search(props) {
let [keyword, setKeyword]=useState(props.defaultkeyword);
let [results, setResults]=useState(null);
let [loaded, setLoaded]=useState(false);

function handleResponse(response){
setResults(response.data[0]);
}

function search(){
  let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);
}
function handleSubmit(event){
event.preventDefault();
search();
}
function handleKeywordchange(event){
setKeyword(event.target.value);
} 
function load(){
  setLoaded (true);
  search();
}
if (loaded){
  return ( 
    <div className="Search">
      <section>
    <form onSubmit={handleSubmit}>
     <input type="search" onChange={handleKeywordchange} autoFocus={true}/>  
    </form>
    <div className="hint">
      suggested words: sunset ,dog,color,human...
    </div>
    </section>
    <section>
    <Results results={results}/>
    </section>
    </div>
  );
}else {
 load();
  return "loading";
}
}