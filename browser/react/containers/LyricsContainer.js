import React, { Component } from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import {setLyrics, fetchLyrics} from '../action-creators/lyrics';
import axios from 'axios';

export default class LyricsContainer extends Component {

  constructor() {
    super();
    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState());
    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe( () => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setArtist(artistName) {
    this.setState({
      artistQuery: artistName
    });
  }

  setSong(songName) {
    this.setState({
      songQuery: songName
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (this.state.artistQuery && this.state.songQuery) {
      store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
    }

  }

  render() {
    return (
      <Lyrics
        lyric={this.state.lyric}
        setArtist={this.setArtist}
        setSong={this.setSong}
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
        submit={this.handleSubmit}
      />
    );
  }
}
