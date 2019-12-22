/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Col
} from "reactstrap";
import moment from "moment";

function NewsItem(news) {
  return (
    <Col md="4">
      <div className="news-item">
        <img
          alt="..."
          className="img-fluid img-raised"
          src={news.image}
        ></img>
        <p className="category text-info m-t-1 m-b-1 f-w-5">News</p>
        <h4 className="bold">{news.title}</h4>
        <p className="description">
          {moment(new Date(news.time.seconds*1000)).fromNow(true)}
        </p>
      </div>
    </Col>
  );
}

export default NewsItem;
