import React from "react";
import { useState } from "react";

export default function Suggestion(props){
    const [follow, setFollow] = useState('Seguir');

    function seguir(){
        setFollow(follow === 'Seguir' ? 'Seguindo' : 'Seguir');
    }

    return(
        <div className="sugestao">
                    <div className="usuario">
                        <img src={props.avatar} alt={props.username} />
                        <div className="texto">
                            <div className="nome">{props.username}</div>
                            <div className="razao">{props.reason}</div>
                        </div>
                    </div>

                    <div className="seguir" onClick={seguir}>{follow}</div>
                </div>
    )
}