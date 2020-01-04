/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input
} from "reactstrap";

function Sponsors() {
    return (
        <div className="sponsors p-b-5">
            <Container>
            <div className="">
            <h2 className="title text-center">Here is our sponsors</h2>
                <div className="sponsor-wrapper">
                    <div className="sponsor-wrapper-item">
                        <a className= "sponsor-item-a">
                            <div className = "sponsor-item" style={{backgroundImage: "url('https://www.remove.bg/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png')" }} />
                        </a>
                    </div>
                    <div className="sponsor-wrapper-item">
                        <a className= "sponsor-item-a">
                            <div className="sponsor-item" style={{backgroundImage: "url('https://www.remove.bg/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png')" }} />
                        </a>
                    </div>
                    <div className="sponsor-wrapper-item">
                        <a className= "sponsor-item-a">
                            <div className="sponsor-item" style={{backgroundImage: "url('https://www.remove.bg/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png')" }} />
                        </a>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
  }
  

export default Sponsors;
