import React, { useState } from "react";

export default function Post(props) {
    const [save, setSave] = useState('bookmark-outline');
    const [like, setLike] = useState('heart-outline');
    const [heartColor, setHeartColor] = useState('black');
    const [likesCount, setLikesCount] = useState(Number(props.likesCount));
    const [classHeart, setClassHeart] = useState('heart');

    function savePost(){
        setSave(save === 'bookmark' ? 'bookmark-outline' : 'bookmark');
    }

    function likePost() {
        const newLike = like === 'heart' ? 'heart-outline' : 'heart';
        const newHeartColor = like === 'heart' ? 'black' : 'red';
        setLike(newLike);
        setHeartColor(newHeartColor);

        setLikesCount(prevCount => {
            if (newLike === 'heart') {
                return prevCount + 0.001;
            } else {
                return prevCount - 0.001;
            }
        });
    }

    function likeImagem() {        
        const newLike = 'heart';
        const newHeartColor = 'red';
        setLike(newLike);
        setHeartColor(newHeartColor);

        setLikesCount(prevCount => {
            if (prevCount === Number(props.likesCount)) {
                return prevCount + 0.001;
            } else {
                return prevCount;
            }
        });

        const newClass = 'animation-heart';
        setClassHeart(newClass);

        setTimeout(() => {
            setClassHeart(classHeart);
        }, 800);
    }


    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.avatar} alt={props.username} />
                    {props.username}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
    
            <div className="conteudo" onDoubleClick={likeImagem} onMouseDown={(event) => {
                event.target.onselectstart = function () {
                return false;
                };
            }}
            >
                <div className="wrapper">
                    <img src="assets\img\heart.png" alt="like heart" className={classHeart}/>
                </div>
                <img src={props.image} alt={props.alt}  className="post-image" data-test="post-image" />
            </div>
    
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon onClick={likePost} name={like} data-test="like-post" style={{ color: heartColor }}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={save} onClick={savePost} data-test="save-post"></ion-icon>
                    </div>
                </div>
    
                <div className="curtidas">
                    <img src={props.likesAvatar} alt={props.likesUsername} />
                    <div className="texto" data-test="likes-number">
                        Curtido por <strong>{props.likesUsername}</strong> e <strong>outras {likesCount} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
