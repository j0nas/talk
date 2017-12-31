import React from 'react';
import { string, func } from 'prop-types';

const MessageInput = ({ message, onMessageChange, onSendMessageClick }) => (
  <div>
    <input type="text" value={message} onChange={e => onMessageChange(e.target.value)} />
    <button type="button" onClick={onSendMessageClick}>
      Send!
    </button>
  </div>
);

MessageInput.propTypes = {
  message: string.isRequired,
  onMessageChange: func.isRequired,
  onSendMessageClick: func.isRequired,
};

export default MessageInput;
