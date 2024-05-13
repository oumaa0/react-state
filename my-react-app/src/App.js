import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Cristiano Ronaldo ',
      bio: 'Talented , Charismatic , Iconic ',
      imgSrc: 'https://www.sportspromedia.com/wp-content/uploads/2021/09/GettyImages-1337497849-1-1-150x150.jpg',
      profession: 'Professional Footballer.'
    },
    show: false,
    timeElapsed: 0
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ timeElapsed: this.state.timeElapsed + 1 });
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeElapsed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time Elapsed: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
