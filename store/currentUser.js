import { join, newMessage } from './users';
import { subscribe, emitMessage } from '../api/api';

const types = {
  CHANGE_MESSAGE: 'CHANGE_MESSAGE',
  CHANGE_NAME: 'CHANGE_NAME',
  CONFIRM_NAME: 'CONFIRM_NAME',
  SEND_MESSAGE: 'SEND_MESSAGE',
};

const defaultState = {
  name: '',
  message: '',
  nameConfirmed: false,
};

const currentUserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return { ...state, message: action.message };

    case types.CHANGE_NAME:
      return { ...state, name: action.name };

    case types.CONFIRM_NAME:
      return { ...state, nameConfirmed: true };

    case types.SEND_MESSAGE:
      return { ...state, message: '' };

    default:
      return state;
  }
};

export const changeMessage = message => ({ type: types.CHANGE_MESSAGE, message });
export const changeName = name => ({ type: types.CHANGE_NAME, name });
export const confirmName = () => (dispatch, getState) => {
  const { currentUser: { name } } = getState();
  subscribe(name, ({ message }) => dispatch(newMessage(message)), ({ client }) => dispatch(join(client)));
  dispatch({ type: types.CONFIRM_NAME });
};

export const sendMessage = message => {
  emitMessage(message);
  return { type: types.SEND_MESSAGE };
};

export default currentUserReducer;
