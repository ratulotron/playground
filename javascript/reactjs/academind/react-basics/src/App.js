import React, { Component } from 'react';
import Home from './components/Home';
import { Header } from './components/Header';
import { User } from './components/User'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home"
    };
  }
  onGreet() {
    alert("Hello?")
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName,
    })
  }

  users = [
    { name: "Ratul", age: 12 },
    { name: "Raiyaan", age: 4 }
  ]

  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home status={1} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {this.users.map((user, index) =>
              <User
                name={user.name}
                age={user.age}
                greet={this.onGreet}
                changeLink={this.onChangeLinkName.bind(this)}
                initialLinkName={this.state.homeLink}
                key={index} />
            )}
          </div>
        </div>

      </div>

    );
  }
}

export default App;
