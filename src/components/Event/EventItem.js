/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Col
} from "reactstrap";

function EventItem(event) {
  console.log(event);

  return (
    <Col md="4">
      <div className="event-item block-index-upcoming-item"  style={{backgroundImage: "url("+event.image+")"}}>
        <div class="block-index-upcoming-date">
          <div class="block-index-upcoming-day">
            20
          </div>
          <div class="block-index-upcoming-month">
            May
          </div>
        </div>
        <h4 className="block-index-upcoming-title">{event.title}</h4>
        <div className="block-index-upcoming-footer">
          <div className="block-index-upcoming-city">
            {event.location}
          </div>
        </div>
      </div>
    </Col>
  );
}

export default EventItem;
