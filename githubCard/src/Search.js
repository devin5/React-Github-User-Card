import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.changeUser(this.state.username)
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Form onSubmit={this.handleSubmit} className="form">
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              value={this.state.form}
              type="text"
              name="username"
              id="username"
              placeholder="username here"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </>
    );
  }
}
export default Search;
