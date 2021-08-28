import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { User } from '../model/Model';
import { AuthService } from '../services/AuthService';
import { Login } from './Login';
import history from '../utils/history';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Profile } from './Profile';

interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: undefined,
    };
    this.setUser = this.setUser.bind(this);
  }

  private authService: AuthService = new AuthService();

  private setUser(user: User) {
    this.setState({ user: user });
    console.log('Setting user: ' + user);
  }

  render() {
    return (
      <div className="wrapper">
        <Router history={history}>
          <div>
            <Navbar user={this.state.user} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login">
                <Login authService={this.authService} setUser={this.setUser} />
              </Route>
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

// function App() {
//   return <div>Its Alive!!!!</div>;
// }

// export default App;
