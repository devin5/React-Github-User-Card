import React from "react";
import axios from "axios";
import UserCard from "./UserCard";
import Search from "./Search";
import "./App.css";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "devin5",
      user: {},
      folllowers: []
    };
  }


  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => this.setState({ followers: res.data }))
      .catch(err => console.log(err));
  }


  componentDidUpdate(prevProps, prevState){
    if(prevState.username !== this.state.username){
      axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => this.setState({ followers: res.data }))
      .catch(err => console.log(err));
    }
  }

  changeUser = (user) => {
    this.setState({username: user})
  }

  render() {
    return (
      <>
      <h1 data-testid='submitButtonTest'>github</h1>
        <Search changeUser={this.changeUser} />
        <UserCard followers={this.state.followers} user={this.state.user} />
      </>
    );
  }
}
export default App;
