import { func, string } from 'prop-types';

const EnterName = ({ name, changeName, onConfirmNameClick }) => (
  <div>
    <input type="text" placeholder="Name" onChange={e => changeName(e.target.value)} value={name} />
    <button type="button" onClick={onConfirmNameClick}>
      Enter
    </button>
  </div>
);

EnterName.propTypes = {
  name: string.isRequired,
  changeName: func.isRequired,
  onConfirmNameClick: func.isRequired,
};

export default EnterName;
