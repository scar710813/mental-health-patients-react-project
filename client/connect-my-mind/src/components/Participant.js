import React, {Component} from 'react';
import Track from './Track';

class Participant extends Component {
    constructor(props) {
        super(props);
        
        const tracks =
            Array.from(this.props.participants.tracks.values())
                .map(p => p.track)
                .filter(t => t !== null)
        
        this.state = { tracks: tracks }
    }

    componentDidMount() {
        if (this.props.localParticipant) {
            return;
        }
        this.props.participant.on('trackSubscribed', this.addTrack);
    }

    addTrack(track) {
        this.setState({
            tracks: [...this.state.tracks, track]
        });
    }

    render() {
        return (
            <div className='participant' id={this.props.participant.identity}>
                <div className='identity'>{this.props.participant.identity}</div>
                {
                    this.state.tracks.map(track =>
                        <Track key={track} filter={this.state.filter} track={track}/>)
                }
            </div>
        )
    }
}

export default Participant;