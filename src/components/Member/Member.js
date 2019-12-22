/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import MemberItem from "./MemberItem";

const members = [{
    image: "https://i.ibb.co/P6Fkg5s/julie.jpg",
    name: "Romina Hadid",
    title: "Model",
    description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site.",
}, {
    image: "https://i.ibb.co/MfKvjwc/ryan.jpg",
    name: "Ryan Tompson",
    title: "Designer",
    description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
}, {
    image: "https://i.ibb.co/Nj00LZs/eva.jpg",
    name: "Eva Jenner",
    title: "Fashion",
    description: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site.",
}];

function Member() {
  return (
    <div className="section section-team text-center">
      <Container>
        <h2 className="title">Here is our members</h2>
        <div className="team">
          <Row>
            {MemberItem(members[0])}
            {MemberItem(members[1])}
            {MemberItem(members[2])}
          </Row>
        </div>
        <div className="button container-fluid">
          <Button
            block
            className="btn-round"
            color="info"
            href="#pablo"
            onClick={e => e.preventDefault()}
            size="lg"
          >
            ALL MEMBERS
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Member;
