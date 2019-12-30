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
    image: "data:image/jpeg;base64,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",
    name: "Narmandakh Lkhagvajav",
    title: "Job title here",
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
        <h2 className="title">Бидний хамт олон</h2>
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
