import React from 'react';
import Synonyms from './Synonyms';

export default function Meaning(props){
  console.log(props.meaning);
  return(
      <div className="Meaning">
  <h3>{props.meaning.partofspeech}</h3>
  {props.meaning.definitions.map(function(definition,index)
  {
      return (
          <div key={index}>
              <p>
                <strong> Definition:</strong>{definition.definition}
                  <br/>
                  <strong>Example:</strong>{definition.example}
                  <br/>
                 <em>Synonyms:</em>{definition.Synonyms} 
                  <Synonyms Synonyms={definition.Synonyms}/>
              </p>
          </div>
      );
  })}
  </div>
  );  
}