/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import ProjectItem from "./ProjectItem";

const project = [{
  image: "https://jci-production.s3.amazonaws.com/images/news/000/259/420/medium/Alex_and_Itai_Congress_.jpg?1575562037",
  title: "Wish box III /JCI Jeju",
  time: "— 13 days ago"
}, {
  image: "https://jci-production.s3.amazonaws.com/images/news/000/251/448/medium/EUKHT2019.jpg?1570135491",
  title: "Birthday gift",
  time: "— 3 months ago"
}, {
  image: "https://jci-production.s3.amazonaws.com/images/news/000/243/833/medium/2019_Grantees_Anouncement_-_Instagram-06.jpg?1569517308",
  title: "Active Citizen for Global Goals– SDGs",
  time: "— 3 months ago"
}];

function Project() {
  return (
    <div className="section section-project">
      <Container>
        <h2 className="title text-center">Here is our projects</h2>
        <div className="project">
          <Row>
            {ProjectItem(project[0])}
            {ProjectItem(project[1])}
            {ProjectItem(project[2])}
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
            ALL PROJECTS
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Project;
