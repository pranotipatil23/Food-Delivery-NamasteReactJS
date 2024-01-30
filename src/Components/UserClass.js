import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      avatar_url: "",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/pranotipatil23");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { name, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card p-4 m-4">
        <img src={avatar_url} className="w-40" />
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h3 className="mt-4">Logged In As : {loggedInUser}</h3>
          )}
        </UserContext.Consumer>
        <h3 className="mt-4">Name : {name}</h3>
        <h3 className="mt-4">Address : {this.props.location}</h3>
        <h4 className="mt-4">Instagram : pranoti_patil</h4>
      </div>
    );
  }
}

export default UserClass;
