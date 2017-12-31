import React from 'react';
import { arrayOf, string } from 'prop-types';

const MessagesList = ({ messages }) => <div>{messages.map((message, index) => <div key={index}>{message}</div>)}</div>;

MessagesList.propTypes = {
  messages: arrayOf(string).isRequired,
};

export default MessagesList;
