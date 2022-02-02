import React from 'react';
import './App.css';
import GithubLogo from './fork.png'

export default class Header extends React.Component {
    render() {
        const style = {
            backgroundImage: 'linear-gradient(to top, #a1c4fd, #c2e9fb)',
            display: 'flex',
            // justifyContent: 'center',
            width: '100%',
            padding: '0 20px 20px 0',
            height: '130px',

            // textAlign: 'center'
        }

        const img = {

            width: '75px',
            height: '75px',
            paddingTop: '10px',
            paddingRight: '10px',
            marginLeft: '30px',
            marginTop: '20px',
            float: 'left'
        }
        return (
            <header style={style} className="header-gen">
                {/* <a href='https://github.com/MochIsrin068' target='blank'><img src={GithubLogo} style={{ float: 'left' }} /></a> */}
                <center>
                    <img
                        style={img}
                        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                        alt="Problem ?"
                    />&nbsp;&nbsp;
                    <h1 style={{ fontWeight: "bold", color: "#fff", marginLeft: '50px', marginTop: '35px', float: 'left' }}>Meme Generator</h1>
                    <p style={{ float: 'left', marginTop: '80px', marginLeft: '-250px' }}>create your the great jokes image :) </p>
                </center>
            </header>
        );
    }
}