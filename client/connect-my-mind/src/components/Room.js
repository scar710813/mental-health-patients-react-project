import React, { Component } from 'react';
import './Room.css';
import Participant from './Participant';

class Room extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      remoteParticipants: Array.from(this.props.room.particpants.values())
    }
  }
  componentDidMount() {
    this.props.room.on('participantConnected', this.addParticipant);
    this.props.room.on('participantDisconnected', this.removeParticipant);

    window.addEventListener("beforeunload", this.leaveRoom)
  }
  componentWillUnmount() {
    this.leaveRoom();
  }

  addParticipant(particpant) {
    this.setState({
      remoteParticipants: [...this.state.remoteParticipants, particpant]
    });
  }

  removeParticipant(particpant) {
    this.setState({
      remoteParticipants: this.state.remoteParticipants.filter(p => p.identity !== particpant.identity)
    });
  }

  leaveRoom() {
    this.props.room.disconnect();
    this.props.returnToLobby();
  }

  render() {
    return (
      <div className='room'>
        <div className='participants'>
          <Participant key={this.props.room.localParticipant.identity} localParticipant="true" participant={this.props.room.localParticipant}/>
          {
            this.state.remoteParticipants.map(p =>
              <Participant key={p.identity} participant={p}/>
            )
          }
        </div>
        <button id='leaveRoom' onClick={this.leaveRoom}>Leave</button>
      </div>
    )
  }
}

export default Room;