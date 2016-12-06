import { SET_LYRICS } from '../constants';

const initialState = {
  text: ''
}

export default function (state = initialState, action) {

  let newState;

  switch(action.type) {

    case SET_LYRICS:
      newState = Object.assign({}, state, { text: action.lyric });

    default:
      return state;
  }
}
