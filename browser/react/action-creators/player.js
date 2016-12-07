import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST} from '../constants';
import AUDIO from '../audio';
// import axios from 'axios';

export const startPlaying = function() {
  return {
    type: START_PLAYING,
  }
};

export const stopPlaying = function() {
  return {
    type: STOP_PLAYING,
  }
};

export const setCurrentSong = function(currentSong){
  return {
    type: SET_CURRENT_SONG,
    currentSong: currentSong
  }
};

export const setList = function(currentSongList){
  return {
    type: SET_LIST,
    currentSongList: currentSongList
  }
};

//async action-creators

export const play = function() {
  return dispatch => {
    AUDIO.play();
    dispatch(startPlaying());
  }
};

export const pause = function() {
  return dispatch => {
    AUDIO.pause();
    dispatch(stopPlaying());
  }
};

export const load = function(currentSong, currentSongList){
  return dispatch => {
    AUDIO.src = currentSong.audioUrl;
    AUDIO.load();
    dispatch(setCurrentSong(currentSong));
    dispatch(setList(currentSongList));
  }
};

export const startSong = (song, list) => dispatch => {
  dispatch(pause());
  dispatch(load(song, list));
  dispatch(play());
};

export const toggle = function() {
  return (dispatch, getState) => {
    const { isPlaying } = getState();
    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play());
    }
  }
};

export const toggleOne = function(selectedSong, selectedSongList){
  return (dispatch, getState) => {
    const { currentSong } = getState();
    if (selectedSong.id !== currentSong.id ) {
      dispatch(startSong(selectedSong, selectedSongList));
    } else {
      dispatch(toggle());
    }
  }
};

export const next = function() {
  return (dispatch, getState) => {
    dispatch(startSong(...skip(1, getState())));
  }
};


export const prev = function(){
  return (dispatch, getState) => {
    dispatch(startSong(...skip(-1, getState())));
  }
}



