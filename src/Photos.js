import React from "react";

export default function Photos(props) {
    if (props.photos){
        console.log(props.photos);
        return (
        <section className="photos">
            <div className="row">
            {props.photos.map(function (photo, index)
            {
                return <img src={photo.src.tiny} alt="_blank" rel="noreferrer" key={index} />;
        })}
        </div>
        </section>
        );
    }else{
        return null;
    }
}
   