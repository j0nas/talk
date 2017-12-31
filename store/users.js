import timestamp from 'time-stamp';

const types = {
  USER_JOIN: 'USER_JOIN',
  USER_LEAVE: 'USER_LEAVE',
  NEW_MESSAGE: 'NEW_MESSAGE',
};

const defaultState = {
  users: [],
  messages: [],
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.USER_JOIN:
      return { ...state, users: [...state.users, action.user] };

    case types.USER_LEAVE:
      return { ...state, users: state.users.filter(user => user !== action.user) };

    case types.NEW_MESSAGE:
      const { sender, message } = action;
      return {
        ...state,
        messages: [...state.messages, { time: timestamp('HH:MM:ss'), sender, message }],
      };

    default:
      return state;
  }
};

export const join = user => ({ type: types.USER_JOIN, user });
export const leave = user => ({ type: types.USER_LEAVE, user });
export const newMessage = ({ sender, message }) => ({ type: types.NEW_MESSAGE, message, sender });

export default userReducer;
