/*eslint-disable*/
import React from "react";
import { withRouter } from 'react-router-dom'

import {
  Col
} from "reactstrap";

const MemberItem = withRouter ((props) => {
  const {image, position, joinedDate, firstName, lastName, rank} = props;
  console.log(rank);
  return (
        <Col md="4" className = "members-row">
            <div className="hvr-grow hvr-grow:hover .hvr-grow:focus .hvr-grow:active">
                <div className="team-player">
                    <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised member-img"
                        src={image}
                    ></img>
                    <h4 className="title">{firstName} {lastName}</h4>
                    <p className="category text-info">{position}</p>
                    <p className="description">
                        Joined Date: {joinedDate}
                    </p>
                </div>
            </div> 
        </Col>

  );
})

export default MemberItem;