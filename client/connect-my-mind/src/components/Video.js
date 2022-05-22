import React, { Component } from 'react';
import './Video.css';
import Room from './Room';
const { connect } = require('twilio-video');

class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      identity: '',
      room: null
    }
    this.inputRef = React.createRef();

    this.joinRoom = this.joinRoom.bind(this);
    this.returnToLobby = this.returnToLobby.bind(this);
    this.updateIdentity = this.updateIdentity.bind(this);
    this.removePlaceholderText = this.removePlaceholderText.bind(this);
  }
  
  async joinRoom() {
    try {
      const resp = await fetch(`http://connectmymind.ddns.net/identity?user=${this.state.identity}`, {mode:'cors'});
      const data = resp.json();
      const room = await connect(data.accessToken.tostring(), {
        name: 'room',
        audio: true,
        video: true
      });
      this.setState({ room: room });
    } catch (err) {
      console.log(err);
    }
  }

  returnToLobby() {
    this.setState({ room: null });
  }

  removePlaceholderText() {
    this.inputRef.current.placeholder = '';
  }

  updateIdentity(event) {
    this.setState({
      identity: event.target.value
    });
  }

  render() {
    const disabled = this.state.identity === ''
    return (
      <div className='video'>
      {
        this.state.room !== null
        // In a video call room
        ? <Room exitRoom={this.returnToLobby} room={this.state.room}/> 
        // Not entered
        : <div className='waiting'>
            <input 
              ref={this.inputRef} 
              value={this.state.identity} 
              onClick={this.removePlaceholderText} 
              onChange={this.updateIdentity}
              placeholder="name"/>
            <button disabled={disabled} onClick={this.joinRoom}>Join</button>
          </div>
      }
      </div>
    )
  }
}

export default Video;