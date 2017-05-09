import React, { Component } from 'react';
import BoilerRoomVideo from './BoilerRoomVideo.js';

class BoilerRoomList extends Component {
  render() {
    return (
      <div className="container">
        <br/>
        {this.props.videos.map(function(video, index) {
          return <BoilerRoomVideo
            key={index}
            title={video.title}
            artist={video.artist}
            location={video.location}
            video_url={video.video_url}/>
          })}
      </div>
    );
  }
}

export default BoilerRoomList;