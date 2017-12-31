import withRedux from 'next-redux-wrapper';
import initialiseStore from '../store';
import { changeMessage, changeName, confirmName, sendMessage } from '../store/currentUser';
import OnlineUsersList from '../components/OnlineUsersList';
import EnterName from '../components/EnterName';
import MessagesList from '../components/MessagesList';
import MessageInput from '../components/MessageInput';
import Page from '../layout/Page';

const Index = ({
  users,
  messages,
  message,
  name,
  nameConfirmed,
  changeName,
  changeMessage,
  sendMessage,
  confirmName,
}) => (
  <Page>
    <div className="container">
      <div className="chat">
        <div>
          <MessagesList messages={messages} />
          {nameConfirmed && (
            <MessageInput message={message} onMessageChange={changeMessage} onSendMessageClick={sendMessage} />
          )}
        </div>
        {!nameConfirmed && <EnterName name={name} changeName={changeName} onConfirmNameClick={confirmName} />}
      </div>
      <div className="onlineUsers">
        <OnlineUsersList users={users} />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
        }

        .chat,
        .onlineUsers {
          display: flex;
        }

        .chat {
          flex: 1;
        }
      `}</style>
    </div>
  </Page>
);

export default withRedux(
  initialiseStore,
  state => ({
    users: state.users.users,
    messages: state.users.messages,
    name: state.currentUser.name,
    nameConfirmed: state.currentUser.nameConfirmed,
    message: state.currentUser.message,
  }),
  { changeName, confirmName, changeMessage, sendMessage }
)(Index);
