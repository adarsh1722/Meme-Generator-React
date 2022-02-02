import React from 'react';

export default class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randMemeImg = this.state.allMemeImgs[randNum].url

        this.setState({
            randomImg: randMemeImg
        })
    }

    render() {

        return (
            <div>
                <form style={{ textAlign: "center" }} onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Top Text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div style={{ textAlign: "center" }}>
                    <img
                        src={this.state.randomImg}
                        style={{ width: 500, height: 331, marginTop: 10 }}
                    />
                    <h2 style={{ textAlign: "center", color: 'white', marginTop: -330 }}>{this.state.topText}</h2>
                    <h2 style={{ textAlign: "center", color: 'white', marginTop: 250 }}>{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}
