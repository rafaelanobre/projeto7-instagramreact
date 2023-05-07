import { useState } from "react";

export default function User() {
    const [myUser, setMyUser] = useState('catanacomics');

    function changeUser(){
        prompt('Quer alterar seu nome de usuário? Digite o novo nome')
    }

    return (
        <div className="usuario">
            <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong>{myUser}</strong>
                    <ion-icon name="pencil" onClick={changeUser}></ion-icon>
                </span>
            </div>
        </div>
    )
}