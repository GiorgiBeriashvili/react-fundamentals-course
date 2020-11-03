import React from "react";
import Post from "./post";

class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.displayCount,
            posts: [
                { title: "Title 01", content: "Content 01" },
                { title: "Title 02", content: "Content 02" },
                { title: "Title 03", content: "Content 03" },
                { title: "Title 04", content: "Content 04" },
                { title: "Title 05", content: "Content 05" },
                { title: "Title 06", content: "Content 06" },
                { title: "Title 07", content: "Content 07" },
                { title: "Title 08", content: "Content 08" },
            ],
        }
    }

    decrementCounter = () => this.setState({ count: this.state.count === "0" ? `${this.state.posts.length}` : `${this.state.count - 1}` });

    incrementCounter = () => this.setState({ count: this.state.count === `${this.state.posts.length}` ? "0" : `${Number(this.state.count) + 1}` });

    render = () => {
        return <section>
            <button onClick={this.decrementCounter}>-</button>
            &nbsp; &nbsp; <p style={{ display: "inline" }}>{this.state.count}</p> &nbsp; &nbsp;
            <button onClick={this.incrementCounter}>+</button>

            {this.state.posts.slice(0, this.state.count).map((post) => (<Post title={post.title} content={post.content} />))}
        </section>;
    }
}

export default Posts;
