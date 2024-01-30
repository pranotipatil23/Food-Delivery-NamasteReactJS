import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const AboutUs = () => {
//   console.log("inside about us");
//   return (
//     <div>
//       <h2>About US</h2>
//       {/* <User /> */}
//       <UserClass name={"First"} location={"Mumbai"} />
//       <UserClass name={"First"} location={"Mumbai"} />
//       <UserClass name={"First"} location={"Mumbai"} />
//       <UserClass name={"First"} location={"Mumbai"} />
//       <UserClass name={"First"} location={"Mumbai"} />
//       <UserClass name={"First"} location={"Mumbai"} />
//       <UserClass name={"First"} location={"Mumbai"} />
//       <UserClass name={"First"} location={"Mumbai"} />
//       <UserClass name={"First"} location={"Mumbai"} />
//       <UserClass name={"First"} location={"Mumbai"} />
//     </div>
//   );
// };

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent contructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <UserClass name={"First"} location={"Mumbai"} />
      </div>
    );
  }
}

export default AboutUs;
