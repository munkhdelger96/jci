/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import EventItem from "./EventItem";

const events = [{
  image: "https://jci-production.s3.amazonaws.com/images/events/000/180/542/medium/JCI_Header_Panama_City_1.jpg?1557845841",
  title: "2020 JCI Conference of the Americas",
  location: "Ciudad de Panamá, Panamá",
  day: 20,
  month: "MAY"
}, {
  image: "https://jci-production.s3.amazonaws.com/images/events/000/178/880/medium/JCI_Header_Dublin_3.jpg?1557284441",
  title: "2020 European Conference ",
  location: "Dublin, Ireland",
  day: 5,
  month: "MAY"
}, {
  image: "https://jci-production.s3.amazonaws.com/images/events/000/188/583/medium/JCI_Header_Cambodia_1.jpg?1560179306",
  title: "2020 Asia-Pacific Conference",
  location: "Angkor, Cambodia",
  day: 11,
  month: "JUN"
}];

function Event() {
  return (
    <div className="section section-event">
      <Container>
        <h2 className="title">Upcoming Events</h2>
        <div className="event">
          <Row>
            {EventItem(events[0])}
            {EventItem(events[1])}
            {EventItem(events[2])}
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
            ALL EVENTS
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Event;
