import React from 'react';
import PropTypes from 'prop-types'

export class User extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.age,
            homeLink: props.name + "'s home"
        }
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3,
        })
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value,
        });
    }

    render() {
        let name = this.props.name;
        let age = this.state.age;
        return (
            <div className="card">
                <div className="card-body">
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older!</button>
                    <button className="btn btn-info" onClick={this.props.greet}>Greet!</button>
                    <input type="text" value={this.state.homeLink}
                        onChange={(event) => this.onHandleChange(event)}></input>
                    <button className="btn btn-warning" onClick={this.onChangeLink.bind(this)}>Change link</button>

                </div>
            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    greet: PropTypes.func,
    changeLink: PropTypes.func,
    initialLinkName: PropTypes.string,
}