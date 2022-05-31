import React, {useState} from 'react';
import axios from 'axios';
import './Search.css';
import Results from './Results';
import Photos from './Photos';

export default function Search(props) {
let [keyword, setKeyword]=useState(props.defaultKeyword);
let [results, setResults]=useState(null);
let [loaded, setLoaded]=useState(false);
let [photos, setPhotos]=useState(null);

function handleSearchResponse(response){
setResults(response.data[0]);
}
function handlePexelsResponse(response){
  setPhotos(response.data.photos);
}

function search(){
  let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleSearchResponse);

  let pexelsApiKey="563492ad6f917000010000010e9958d800c14250a0e4216436f97bc1";
let  pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
let headers={ Authorization: `bearer ${pexelsApiKey}`};
axios.get(pexelsApiUrl,{headers:headers}).then(handlePexelsResponse);
}
function handleSubmit(event){
event.preventDefault();
search();
}
function handleKeywordChange(event){
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
    <h3>Type in the word...</h3>
    <form onSubmit={handleSubmit}>
     <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}  />
    </form>
    <div className="hint">
      Suggested words:tree,sunset, dog, color,human...
    </div>
    </section>
    <Results results={results}/>
    <Photos photos={photos}/>   
    
    </div>
  );
}else {
 load();
  return "loading";
}
}