import React, {Component} from 'react';

class BoilerRoomVideo extends Component {
  render() {
    return (
      <div className="box">
        <p>
          <strong>Title: </strong>{ this.props.title }<br/>
          <strong>Artist: </strong>{ this.props.artist }<br/>
          <strong>Location: </strong>{ this.props.location }<br/>
          <strong>Video URL: </strong><a href={ this.props.video_url } target="_blank">{ this.props.video_url }</a><br/>
        </p>
      </div>
    );
  }
}

export default BoilerRoomVideo;