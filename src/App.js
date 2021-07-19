import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

class App extends React.Component {
  state = { user: { firstName: "", lastName: "" } };

  componentDidMount() {
    fetch("https://app-paas-test.azurewebsites.net")
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          user: {
            firstName: user.FirsName,
          },
        });
      });
    Axios.get("/.auth/me", { withCredentials: true }).then((response) => {
      console.log(response);
      this.setState({ user: { firstName: response.data[0].user_id } });
    });
  }

  render() {
    const { firstName, lastName } = this.state.user;

    console.log(process.version, "aa");

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{`Hello ${firstName} ${lastName}!`}</p>
        </header>
      </div>
    );
  }
}

export default App;
