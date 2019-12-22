/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Col
} from "reactstrap";

function ProjectItem(project) {
  return (
    <Col md="4">
      <div className="project-item">
        <img
          alt="..."
          className="img-fluid img-raised"
          src={project.image}
        ></img>
        <p className="category text-info m-t-1 m-b-1 f-w-5">project</p>
        <h4 className="bold">{project.title}</h4>
        <p className="description">
          {project.time}
        </p>
      </div>
    </Col>
  );
}

export default ProjectItem;
