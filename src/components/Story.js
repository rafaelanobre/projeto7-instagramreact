import React from "react";

export default function Story(props){
    return(
        <div className="story">
                <div className="imagem">
                    <img src={props.avatar} alt={props.username} />
                </div>
                <div className="usuario">
                    {props.username}
                </div>
            </div>
    )
}