import React, { Component } from "react";
import AlbumSongs from "./AlbumSongs";
import MusicKit from "./musickitService";

type Props = {
  album: {},
  onSelected: string,
  isSelected: boolean,
  music: string,
  currentSong: ?string,
  settings: {}
};

// Renders a single album on album view
class Album extends Component<Props> {
  renderSongList = urlFormatted => {
    const {
      album,
      onSelected,
      isSelected,
      music,
      currentSong,
      settings
    } = this.props;

    return (
      <AlbumSongs
        album={album}
        url={urlFormatted}
        music={music}
        currentSong={currentSong}
        settings={settings}
      />
    );
  };

  render() {
    const { album, onSelected, isSelected, music } = this.props;

    // Input w/h params into artwork url
    const url = album.attributes.artwork.url;
    let urlFormatted = url.replace("{w}", 500).replace("{h}", 500);

    let title = album.attributes.name;
    let artist = album.attributes.artistName;
    if (!artist) {
      artist = "Unknown Artist";
    }

    return (
      <div className="album">
        <img
          className="album_art"
          src={urlFormatted}
          onMouseDown={onSelected}
        />
        <div className="album_title">{title}</div>
        <div className="album_artist">{artist}</div>
        {isSelected ? this.renderSongList(urlFormatted) : ""}
      </div>
    );
  }
}

export default Album;
