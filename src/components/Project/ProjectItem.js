/*eslint-disable*/
import React from "react";
import { withRouter } from 'react-router-dom'
import moment from "moment";

// reactstrap components
import {
  Col
} from "reactstrap";

const ProjectItem = withRouter ((props) => {
  const history = props.history;
  const {image, title, time, id} = props;
  return (
    <Col md="4">
      <div 
        className="news-item hvr-grow hvr-grow:hover .hvr-grow:focus .hvr-grow:active"
        onClick = {() => {history.push('/projects/'+id)}}
      >
        <img
          alt="..."
          className="img-fluid img-raised"
          src={image}
        ></img>
        <h4 className="bold">{title}</h4>
        <p className="description">
          {moment(new Date(time.seconds*1000)).fromNow(true)}
        </p>
      </div>
    </Col>
  );
})

export default ProjectItem;