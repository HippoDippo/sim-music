import React from 'react';
import './Songs.css';
import axios from 'axios';

export default class Songs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    axios.get('/api/songs')
    .then(res => {
      this.setState({
        songs: res.data
      });
    });
  }

  render() {

    let songs = this.state.songs.map((e, i , arr) => {
      return ( <div className="song" key={i}>
                 <h3>{arr[i].title}</h3>
                 <h4>{arr[i].artist}</h4>
               </div>
      );
    });

    return (
      <div className="all-songs">
        <div className="nav"></div>
        <div className="songs">
          {songs}
        </div>
        {/* <img /> */}
      </div>
    );
  }
}