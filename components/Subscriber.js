import React, { PureComponent } from 'react';
import { dispatch, subscribe } from '../api/api';

class Subscriber extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      message: '',
    };

    subscribe(message =>
      this.setState({
        messages: [...this.state.messages, message],
      })
    );
  }

  onSendMessageClick = () => {
    dispatch(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <div>
        {this.state.messages.map((message, index) => <div key={index}>{message}</div>)}
        <div>
          <input type="text" value={this.state.message} onChange={e => this.setState({ message: e.target.value })} />
          <button type="button" onClick={this.onSendMessageClick}>
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default Subscriber;
