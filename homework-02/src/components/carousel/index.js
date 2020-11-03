import React from "react";

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: "0",
            images: [
                "https://picsum.photos/512/256?random=1",
                "https://picsum.photos/512/256?random=0",
                "https://picsum.photos/512/256?random=2",
                "https://picsum.photos/512/256?random=3",
                "https://picsum.photos/512/256?random=4",
            ],
        }
    }

    decrementIndex = () => this.setState({ index: this.state.index === "0" ? `${this.state.images.length - 1}` : `${this.state.index - 1}` });

    incrementIndex = () => this.setState({ index: this.state.index === `${this.state.images.length - 1}` ? "0" : `${Number(this.state.index) + 1}` });

    render = () => {
        return <section>
            <button onClick={this.decrementIndex}>&lt;</button>
            <button onClick={this.incrementIndex}>&gt;</button>
            <br /> <br />
            <img src={this.state.images[this.state.index]} alt="Carousel instance." />
        </section>;
    }
}

export default Carousel;
