/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Col
} from "reactstrap";

function MemberItem(member) {
  return (
    <Col md="4">
        <div className="team-player">
            <img
                alt="..."
                className="rounded-circle img-fluid img-raised"
                src={member.image}
            ></img>
            <h4 className="title">{member.name}</h4>
            <p className="category text-info">{member.title}</p>
            <p className="description">
                {member.description}
            </p>
            <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
            >
                <i className="fab fa-google-plus"></i>
            </Button>
            <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
            >
                <i className="fab fa-youtube"></i>
            </Button>
            <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
            >
                <i className="fab fa-twitter"></i>
            </Button>
        </div>
    </Col>
  );
}

export default MemberItem;
