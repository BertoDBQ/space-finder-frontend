import { Component } from 'react';

import './ConfirmModalComponent.css';

interface ConfirmModalComponentProps {
  show: boolean;
  content: string;
  close: () => void;
}

export class ConfirmModalComponent extends Component<ConfirmModalComponentProps> {
  render() {
    return !this.props.show ? null : (
      <div className="modal">
        <div className="modalContent">
          <h2>You tried to reserve and ...</h2>
          <h3 className="modalText">{this.props.content}</h3>
          <button onClick={() => this.props.close()}>OK, close</button>
        </div>
      </div>
    );
  }
}
