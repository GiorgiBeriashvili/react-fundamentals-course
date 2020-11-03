const Post = (props) => <article>
    <br />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    <img src={props.image} alt={`A post about ${props.title}`} />
    <hr style={{ marginTop: 24, width: "25%" }} />
    <br />
</article>

export default Post;
