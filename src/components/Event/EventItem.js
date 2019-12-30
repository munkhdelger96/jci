/*eslint-disable*/
import React from "react";
import { withRouter } from 'react-router-dom'

// reactstrap components
import {
  Button,
  Col
} from "reactstrap";

const EventItem = withRouter ((props) => {
  const history = props.history;
  const {image, location, title, time, id} = props;
  return (
    <Col md="4">
      {/* <div 
        className="news-item hvr-grow hvr-grow:hover .hvr-grow:focus .hvr-grow:active"
        onClick = {() => {history.push('/news/'+id)}}
      >
        <img
          alt="..."
          className="img-fluid img-raised"
          src={image}
        ></img>
        <p className="category text-info m-t-1 m-b-1 f-w-5">News</p>
        <h4 className="bold">{title}</h4>
        <p className="description">
          {moment(new Date(time.seconds*1000)).fromNow(true)}
        </p>
      </div> */}

      <div className="event-item block-index-upcoming-item vr-grow hvr-grow:hover .hvr-grow:focus .hvr-grow:active"  style={{backgroundImage: "url("+image+")", }} onClick = {() => {history.push('/events/'+id)}}>
        <div className="block-index-upcoming-date">
          <div className="block-index-upcoming-day">
            {new Date(time.seconds*1000).getDate()}
          </div>
          <div className="block-index-upcoming-month">
            {new Date(time.seconds*1000).getMonth()}
          </div>
        </div>
        <h4 className="block-index-upcoming-title">{title}</h4>
        {/* <div className="block-index-upcoming-footer">
          <div className="block-index-upcoming-city">
            {location}
          </div>
        </div> */}
      </div>

    </Col>
  );
})

export default EventItem;
