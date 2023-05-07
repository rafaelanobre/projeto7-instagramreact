import { useState } from "react";

export default function User() {
    const [myUser, setMyUser] = useState('catanacomics');
    const [myAvatar, setMyAvatar] = useState('assets/img/catanacomics.svg');

    function changeUser(){
        let newUser = prompt('Quer alterar seu nome de usuário? Digite o novo nome');
        if (newUser && newUser.trim() !== '') {
            setMyUser(newUser.trim());
        } else{
            alert('Vamos manter o nome de usuário então!')
        }
    }

    function changeAvatar(){
        let newAvatar = prompt('Quer alterar sua imagem? Digite o link para a nova imagem');
        if (newAvatar && newAvatar.trim() !== '') {
            setMyAvatar(newAvatar.trim());
        } else{
            alert('Vamos manter a imagem então!')
        }
    }

    return (
        <div className="usuario">
            <img src={myAvatar} onClick={changeAvatar} alt="imagem de perfil" data-test="profile-image"/>
            <div className="texto" data-test="name">
                <span>
                    <strong>{myUser}</strong>
                    <ion-icon name="pencil" onClick={changeUser} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}