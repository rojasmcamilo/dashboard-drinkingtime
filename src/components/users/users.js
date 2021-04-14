import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          data: json.length,
        });
      });
  }

  render() {
    return <div className="Products">{this.state.data}</div>;
  }
}

export default Users;
