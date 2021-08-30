import React from 'react';
import { Link } from 'react-router-dom';

import { User } from '../model/Model';

export class Navbar extends React.Component<{ user: User | undefined }> {
  render() {
    let loginLogOut: any = this.props.user ? (
      <Link to="/logout" style={{ float: 'right' }}>
        {this.props.user.userName}
      </Link>
    ) : (
      <Link to="/login" style={{ float: 'right' }}>
        Login
      </Link>
    );

    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/spaces">Spaces</Link>
        {loginLogOut}
      </div>
    );
  }
}
