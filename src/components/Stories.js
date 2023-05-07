import Story from './Story.js';

export default function Stories() {
    const stories = [
        {
            id: 1,
            username: "9gag",
            avatar: "assets/img/9gag.svg"
        },
        {
            id: 2,
            username: "meowed",
            avatar: "assets/img/meowed.svg"
        },
        {
            id: 3,
            username: "barked",
            avatar: "assets/img/barked.svg"
        },
        {
            id: 4,
            username: "nathanwpylestrangeplanet",
            avatar: "assets/img/nathanwpylestrangeplanet.svg"
        },
        {
            id: 5,
            username: "wawawicomics",
            avatar: "assets/img/wawawicomics.svg"
        },
        {
            id: 6,
            username: "respondeai",
            avatar: "assets/img/respondeai.svg"
        },
        {
            id: 7,
            username: "filomoderna",
            avatar: "assets/img/filomoderna.svg"
        },
        {
            id: 8,
            username: "memeriagourmet",
            avatar: "assets/img/memeriagourmet.svg"
        }
    ]
    return (
        <div className="stories">
            {stories.map((story) => (
                <Story
                    key={story.id}
                    username={story.username}
                    avatar={story.avatar}
                />
            ))}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}