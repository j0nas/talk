import { arrayOf, shape, string } from 'prop-types';

const MessagesList = ({ messages }) => (
  <div>
    <style jsx>{`
      .time {
        color: #ddd;
      }

      .sender {
        color: #bbb;
      }
    `}</style>
    {messages.map(({ time, sender, message }, index) => (
      <div key={index}>
        <span className="time">[{time}] </span>
        <span className="sender">{sender}: </span>
        <span className="message">{message}</span>
      </div>
    ))}
  </div>
);

MessagesList.propTypes = {
  messages: arrayOf(
    shape({
      time: string.isRequired,
      sender: string.isRequired,
      message: string.isRequired,
    })
  ).isRequired,
};

export default MessagesList;
