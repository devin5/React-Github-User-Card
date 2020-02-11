import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: false
    };
  }

  render() {
    return (
      <div className="user">
        <Card>
          <CardImg
            top
            width="100%"
            src={this.props.user.avatar_url}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.user.login}</CardTitle>
            <CardSubtitle>{this.props.user.name}</CardSubtitle>
            <CardText>{this.props.user.bio}</CardText>
            {this.state.bool
              ? this.props.followers.map(item => (
                  <CardSubtitle>{item.login}</CardSubtitle>
                ))
              : null}
            <Button onClick={() => this.setState({ bool: !this.state.bool })}>
              Veiw my followers
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UserCard;
