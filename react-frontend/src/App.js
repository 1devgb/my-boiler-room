import React, { Component } from 'react';
import Client from './Client';
import BoilerRoomList from './BoilerRoomList.js';

class App extends Component {
  state = {videos: []};

  componentDidMount() {
    Client.getVideos((videos) => {
      this.setState({
        videos: videos
      });
    });
  }

  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                My Boiler Room
              </h1>
              <h2 className="subtitle">
                API driven list of my 3 favourite Boiler Room videos
              </h2>
            </div>
          </div>
        </section>

        <BoilerRoomList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
