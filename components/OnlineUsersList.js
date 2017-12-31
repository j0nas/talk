import { arrayOf, string } from 'prop-types';

const OnlineUsersList = ({ users }) => (
  <div>
    <style jsx>{`
      .onlineStatus {
        color: #4fad4f;
      }
    `}</style>

    {users &&
      users.map((user, index) => (
        <div key={index}>
          <span className="onlineStatus">&#9679;&nbsp;</span>
          {user}
        </div>
      ))}
  </div>
);

OnlineUsersList.propTypes = {
  users: arrayOf(string).isRequired,
};

export default OnlineUsersList;
