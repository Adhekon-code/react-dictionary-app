import React from "react";

export default function Photos(props) {
    if (props.photos){
        console.log(props.photos);
        return (
        <section className="photos">
            <div claaName="row">
            {props.photos.map(function (photo, index)
            {
                return <img src={photo.src.tiny} key={index} />;
        })}
        </div>
        </section>
        );
    }else{
        return null;
    }
}
   