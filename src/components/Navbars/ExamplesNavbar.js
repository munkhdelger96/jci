import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <NavLink className="navbar-translate" href="/index">
            <img
              alt="..."
              className="navbar-img "
              src={require ("../../assets/img/logo.png")}
            />
            <button	
              className="navbar-toggler navbar-toggler"	
              onClick={() => {	
                document.documentElement.classList.toggle("nav-open");	
                setCollapseOpen(!collapseOpen);	
              }}	
              aria-expanded={collapseOpen}	
              type="button"	
            >	
              <span className="navbar-toggler-bar top-bar"></span>	
              <span className="navbar-toggler-bar middle-bar"></span>	
              <span className="navbar-toggler-bar bottom-bar"></span>	
            </button>
          </NavLink>
          <div className="navbar-translate">
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("about-us")
                      .scrollIntoView({behavior: "smooth"});
                  }}
                >
                  <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                  <p>Бидний тухай</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("news")
                      .scrollIntoView({behavior: "smooth"});
                  }}
                >
                  <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                  <p>Мэдээ</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("events")
                      .scrollIntoView({behavior: "smooth"});
                  }}
                >
                  <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                  <p>Aрга хэмжээ</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("projects")
                      .scrollIntoView({behavior: "smooth"});
                  }}
                >
                  <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                  <p>Төслүүд</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Бидний түүх</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    2019
                  </DropdownItem>
                  <DropdownItem
                    href="#"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    2018
                  </DropdownItem>
                  <DropdownItem
                    href="#"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    2017
                  </DropdownItem>
                  <DropdownItem
                    href="#"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    2016
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="https://twitter.com/"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
