import { Component } from 'react';

import reactImage from '../../assets/react-image.png';
import './SpaceComponent.css';

interface SpaceComponentProps {
  spaceId: string;
  name: string;
  location: string;
  photoUrl?: string;
  reserveSpace: (spaceId: string) => void;
}

export class SpaceComponent extends Component<SpaceComponentProps> {
  private renderImage() {
    return this.props.photoUrl ? (
      <img src={this.props.photoUrl} alt="" />
    ) : (
      <img src={reactImage} alt="" />
    );
  }

  render() {
    return (
      <div className="spaceComponent">
        {this.renderImage()}
        <br />
        <label className="name">{this.props.name}</label>
        <br />
        <label className="spaceId">{this.props.spaceId}</label>
        <br />
        <label className="location">{this.props.location}</label>
        <br />
        <button onClick={() => this.props.reserveSpace(this.props.spaceId)}>
          Reserve
        </button>
      </div>
    );
  }
}
