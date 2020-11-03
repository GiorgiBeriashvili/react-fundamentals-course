import Post from "./Post";

const loremPicsum = "https://picsum.photos/600/300";

const posts = [
    { title: "Post 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: loremPicsum },
    { title: "Post 2", text: "Praesent faucibus, orci id consectetur tincidunt, lorem eros consectetur risus, eu aliquet magna leo ut massa.", image: loremPicsum },
    { title: "Post 3", text: "Aenean commodo porta accumsan.", image: loremPicsum },
    { title: "Post 4", text: "Nam sapien nibh, lacinia quis ultrices sed, viverra quis urna.", image: loremPicsum },
    { title: "Post 5", text: "Fusce ac orci ultrices, hendrerit metus quis, euismod nisi.", image: loremPicsum },
];

const Content = (props) => <section className={props.variant}>
    {posts.map((post, index) => (<Post key={index} title={post.title} text={post.text} image={`${post.image}?random=${index}`} />))}
</section>

export default Content;
