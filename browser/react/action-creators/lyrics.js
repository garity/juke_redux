import { SET_LYRICS } from '../constants';

export default function(text) {

  return {
    type: SET_LYRICS,
    lyric: text
  };
}
