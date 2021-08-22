import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      status: props.status,
      homeMounted: true
    }
    console.log("Constructor")
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted,
    })
  }

  componentWillMount() {
    console.log("Component will mount");
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Component will receive props: ", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should component update: ", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Component will update: ", nextProps, nextState);
  }

  componentDidUpdate(prevProps, nextState) {
    console.log("Component did update: ", prevProps, nextState);
  }

  componentWillUnmount(prevProps, nextState) {
    console.log("Component will unmount.");
  }

  render() {
    let homeCmp = "";
    if (this.state.homeMounted) {
      homeCmp = <div>
        <p>Component status:</p>
        <p>{this.state.status}</p>
      </div>
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <button className="btn btn-info" onClick={this.onChangeHomeMounted.bind(this)}>
              (Un)Mount Home Component
            </button>
            {homeCmp}
          </div>
        </div>
      </div >
    );
  }
}

export default Home;