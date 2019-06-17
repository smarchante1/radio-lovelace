import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: this.props.tracks
    }
  }

  makeFavorite = (songId) => {
    let updatedFavorite = this.state.tracks;
    updatedFavorite
  }


  render() {
    const playlists = {
      morningTracks: props.tracks.slice(0, props.tracks.length / 2),
      eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
    };

    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={playlists.morningTracks}
          />
          <Playlist
            side="Evening"
            tracks={playlists.eveningTracks}
          />
        </section>
      </div>
    );
  }
};

export default RadioSet;