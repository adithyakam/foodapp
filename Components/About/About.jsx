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
        <h1>name: {name}</h1>
        <h1>location : {location}</h1>
        <h1>bio : {bio}</h1>
        {/* <h1>pic: {avatar_url}</h1> */}
      </div>
    );
  }
}

export default About;
