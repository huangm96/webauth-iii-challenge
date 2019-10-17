import React from "react";
import { Card } from "semantic-ui-react";

const UserCard = props => {
  console.log(props);
  return (
    <div>
      <Card.Group>
              <Card fluid color="blue" header={`${props.data.userName}: ${props.data.department}`} />
      </Card.Group>
    </div>
  );
};

export default UserCard;
