import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Toolbar } from 'react-onsenui';
import { notification } from 'onsenui';
import { observable, autorun, computed, action } from 'mobx'
import axios from 'axios';

function Todos(props) {
    return (
      <div>
        {props.list.map((todo, i) => (
          <p key={i}>{todo.title}</p>
        ))}
      </div>
    );
  }

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {todos: []};
  }

  fetchTodos() {
    axios.get('http://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        //console.log(response.data);
        this.setState({
          todos: response.data
        });
        console.log(this.state.todos);
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            todos: [error.response.data.error]
          });
          console.log(error);
        }
      });
}

  componentDidMount() {
    this.fetchTodos()
  }


  alertPopup() {
    notification.alert('This is an Onsen UI alert notification test.');
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Onsen UI</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Todos list={this.state.todos} />
      </Page>
    );
  }
}