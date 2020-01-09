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

function Member({page = -1, margin = true}) {
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
