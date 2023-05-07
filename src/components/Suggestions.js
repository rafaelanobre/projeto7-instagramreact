import Suggestion from "./Suggestion"

export default function Suggestions(){
    const suggestions=[
        {
            id: 1,
            username: "bad.vibes.memes",
            avatar: "assets/img/bad.vibes.memes.svg",
            reason: "Segue você"
        },
        {
            id: 2,
            username: "chibirdart",
            avatar: "assets/img/chibirdart.svg",
            reason: "Segue você"
        },
        {
            id: 3,
            username: "razoesparaacreditar",
            avatar: "assets/img/razoesparaacreditar.svg",
            reason: "Novo no Instagram"
        },
        {
            id: 4,
            username: "adorable_animals",
            avatar: "assets/img/adorable_animals.svg",
            reason: "Segue você"
        },
        {
            id: 5,
            username: "smallcutecats",
            avatar: "assets/img/smallcutecats.svg",
            reason: "Segue você"
        }
    ]

    return(
        <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {suggestions.map((suggestion) => (
                <Suggestion
                    key={suggestion.id}
                    username={suggestion.username}
                    avatar={suggestion.avatar}
                    reason={suggestion.reason}
                />
            ))}
        </div>
    )
}