import React from 'react';

import { User } from '../model/Model';
import { AuthService } from '../services/AuthService';
import { Login } from './Login';

interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.setUser = this.setUser.bind(this);
  }

  private authService: AuthService = new AuthService();

  private setUser(user: User) {
    this.setState({ user: user });
    console.log('Setting user: ' + user);
  }

  render() {
    return (
      <div>
        App from Class is alive!!!
        <Login authService={this.authService} setUser={this.setUser} />
      </div>
    );
  }
}

// function App() {
//   return <div>Its Alive!!!!</div>;
// }

// export default App;
