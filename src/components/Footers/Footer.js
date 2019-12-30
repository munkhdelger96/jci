/*eslint-disable*/
import React from "react";

import {
  Row,
  Col,
  Container,
  Navbar,
  NavItem,
  NavLink,
  UncontrolledTooltip,
  Nav
} from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-default">
      <Container>
        <Row>
          <Col md="4">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h5>
                Холбоо барих
              </h5>

              <a
                href="https://github.com/luffy1727/my-portfolio/"
                target="_blank"
                className="m-t-1"
              >
                contact@jcimongolia.mn
              </a>

              <span className="m-t-1">
                +976 12121212
              </span>

            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center '}} className="m-t-2">
              <span style={{color: '#007bff'}}>
                <NavLink
                  style={{
                    display: 'flex',
                    fontSize: '20px',
                  }}
                  href="https://twitter.com/"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </span>
              <span>
                <NavLink
                  style={{
                    display: 'flex',
                    fontSize: '20px',
                  }}
                  href="https://www.facebook.com/"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </span>
              <span>
                <NavLink
                  style={{
                    display: 'flex',
                    fontSize: '20px',
                  }}
                  href="https://www.instagram.com/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </span>
            </div>

            <hr className="show-me-small"/>
          </Col>
          <Col md="8" style={{display: 'flex', flexDirection: 'column'}} className="center-me-small">
            <h5>
              Хаяг
            </h5>
            <p>Улаанбаатар хот, Чингэлтэй дүүрэг, 3-р хороо, Жуулчны гудамж-34 хаягт байрлах “Pearl tower” барилга</p>
            <span>
              <a
                href="https://map.what3words.com/incoming.finer.diplomats/"
                target="_blank"
              >
                /// incoming.finer.diplomats
              </a>
            </span>
            <span>
              <a
                href="https://map.what3words.com/өндөг.өргөжих.өнжих/"
                target="_blank"
              >
                /// өндөг.өргөжих.өнжих
              </a>
            </span>
          </Col>
        </Row>

        <hr/>

        <div className="copyright text-center" id="copyright" className="m-t-2" style={{display: 'flex', justifyContent: 'center'}} >
          © {new Date().getFullYear()} JCI Ulaanbaatar. All Rights Reserved. Powered by &nbsp;
          <a
            href="https://github.com/luffy1727/my-portfolio/"
            target="_blank"
          >
            TwixDevs Solutions
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
