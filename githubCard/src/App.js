import React from 'react';
import './App.css';
import Search from './Search'
import UserCard from './UserCard'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "devin5",
      user: {},
      followers: [],
      counter: 0
    };
  }

  changeUserName = (userName) => {
    this.setState( {userName: userName });
  }

  fetchUser = () => {
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(res => res.json())
      .then(data => this.setState({ user: data }))
      
  }

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(res => res.json())
      .then(data => this.setState({ followers: data }));
  }

  // useEffect(() => {fetch}, [])
  componentDidMount() {
    console.log("First Render (mounting)");
    this.fetchUser();
    this.fetchFollowers();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    // this will cause an infinite loop
    // this.setState({counter: this.state.counter+1 });

    // useEffect(() => {fetch}, [this.state.userName])
    if (prevState.userName !== this.state.userName) {
      this.fetchUser();
      this.fetchFollowers();
    }

  }

  render() {
    return (
      <div className="App">
        <Search changeUserName={this.changeUserName} />
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}



export default App;