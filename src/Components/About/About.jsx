import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: "",
      name: "",
      location: "",
      bio: "",
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/adithyakam")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          avatar_url: res.avatar_url,
          name: res.name,
          location: res.location,
          bio: res.bio,
        });
      });

    console.log("didmount");
  }

  componentDidUpdate() {
    console.log("did update");
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    {
      console.log("render");
    }
    const { name, avatar_url, location, bio } = this.state;

    return (
      <div>
        <h1>About Me</h1>
        <h3>name: {name}</h3>
        <h3>location : {location}</h3>
        <h3>bio : {bio}</h3>
        {/* <h1>pic: {avatar_url}</h1> */}
      </div>
    );
  }
}

export default About;
