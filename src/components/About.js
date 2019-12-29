/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

function About() {
  return (
    <div id="about-us" className="section section-about-us">
        <Container>
            <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record low maximum sea ice extent tihs year down
                    to low ice extent in the Pacific and a late drop in ice extent
                    in the Barents Sea.
                </h5>
                </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
                <Row>
                <Col md="6">
                    <div
                    className="image-container image-left"
                    style={{
                        backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")"
                    }}
                    >
                    <p className="blockquote blockquote-info">
                        "Over the span of the satellite record, Arctic sea ice has
                        been declining significantly, while sea ice in the
                        Antarctichas increased very slightly" <br></br>
                        <br></br>
                        <small>-NOAA</small>
                    </p>
                    </div>
                </Col>
                <Col md="5">
                    <div
                    className="image-container image-right"
                    style={{
                        backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")"
                    }}
                    ></div>
                    <h3>
                    So what does the new record for the lowest level of winter
                    ice actually mean
                    </h3>
                    <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                    </p>
                </Col>
                </Row>
            </div>
        </Container>
    </div>
  );
}

export default About;
