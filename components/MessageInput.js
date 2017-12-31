import { string, func } from 'prop-types';

const MessageInput = ({ message, onMessageChange, onSendMessageClick }) => (
  <span>
    <style jsx>{`
      input {
        border: 1px solid #eee;
        padding: 10px 15px;
      }
    `}</style>
    <input
      type="text"
      placeholder="Type a message .."
      value={message}
      onChange={e => onMessageChange(e.target.value)}
      onKeyDown={e => e.which === 13 && onSendMessageClick()}
    />
  </span>
);

MessageInput.propTypes = {
  message: string.isRequired,
  onMessageChange: func.isRequired,
  onSendMessageClick: func.isRequired,
};

export default MessageInput;
