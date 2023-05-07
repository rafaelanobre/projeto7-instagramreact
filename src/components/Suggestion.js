import React from "react";

export default function Suggestion(props){
    return(
        <div className="sugestao">
                    <div className="usuario">
                        <img src={props.avatar} alt={props.username} />
                        <div className="texto">
                            <div className="nome">{props.username}</div>
                            <div className="razao">{props.reason}</div>
                        </div>
                    </div>

                    <div className="seguir">Seguir</div>
                </div>
    )
}