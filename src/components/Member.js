import React from "react";
// Styling
import { useSelector } from "react-redux";

import { Card } from "react-bootstrap";
import { Center1, FlexStyle } from "../styles";
import { Link } from "react-router-dom";

const Member = (props) => {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <Center1>
      <Card>
        <Card.Img
          style={{ padding: "5px" }}
          variant="top"
          src="https://i.pinimg.com/originals/c9/db/04/c9db04ca306f23d1db03820adc99862f.png"
        />
        <Card.Body>
          <Card.Title>{user.first + " " + user.last}</Card.Title>
          <Card.Text>User Name : {user.username}</Card.Text>
          <Card.Text>Role : {user.type}</Card.Text>
        </Card.Body>
        {/* <FlexStyle>
          <Link to="/create/class">
            <button
              style={{ margin: "10px" }}
              type="button"
              class="btn btn-primary"
            >
              Create New Class
            </button>
          </Link>
        </FlexStyle> */}
      </Card>
    </Center1>
  );
};

export default Member;
