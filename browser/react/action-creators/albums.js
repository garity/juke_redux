import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../constants';
import {convertAlbums, convertAlbum} from '../utils';

export const setAlbums = function(albums) {
  return {
    type: RECEIVE_ALBUMS,
    albums: albums
  }
}

export const setAlbum = function(selectedAlbum) {
  return {
    type: RECEIVE_ALBUM,
    selectedAlbum: selectedAlbum
  }
}

export const fetchAlbums = function() {
  return function(dispatch) {
    axios.get('/api/albums/')
      .then(res => res.map(r => r.data))
      .then(data => {
        const albums = convertAlbums(data);
        dispatch(setAlbums(albums));
      })
      .catch(console.err);
  }
}

export const fetchAlbum = function(albumId) {
  return function(dispatch) {
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => {
        const album = convertAlbum(album);
        dispatch(setAlbum(album));
      })
  }
}
