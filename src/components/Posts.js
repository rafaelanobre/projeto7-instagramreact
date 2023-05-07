import Post from './Post.js';

export default function Posts() {
    const posts = [
        {
            id: 1,
            username: "meowed",
            avatar: "assets/img/meowed.svg",
            image: "assets/img/gato-telefone.svg",
            alt: "gato-telefone",
            likesUsername: "respondeai",
            likesAvatar: "assets/img/respondeai.svg",
            likesCount: "101.523",
        },
        {
            id: 2,
            username: "barked",
            avatar: "assets/img/barked.svg",
            image: "assets/img/dog.svg",
            alt: "dog",
            likesUsername: "adorable_animals",
            likesAvatar: "assets/img/adorable_animals.svg",
            likesCount: "99.159",
        },
        {
            id: 3,
            username: "meowed",
            avatar: "assets/img/meowed.svg",
            image: "assets/img/gato-telefone.svg",
            alt: "gato-telefone",
            likesUsername: "respondeai",
            likesAvatar: "assets/img/respondeai.svg",
            likesCount: "101.523",
        }
    ];

    return (
        <div className="posts">
            {posts.map((post) => (
                <Post
                    key={post.id}
                    username={post.username}
                    avatar={post.avatar}
                    image={post.image}
                    alt={post.alt}
                    likesUsername={post.likesUsername}
                    likesAvatar={post.likesAvatar}
                    likesCount={post.likesCount}
                />
            ))}
        </div>
    );
}