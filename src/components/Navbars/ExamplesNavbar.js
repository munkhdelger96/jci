import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
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
                  <i className="now-ui-icons education_paper mr-1"></i>
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
                  <i className="now-ui-icons business_globe mr-1"></i>
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
                  <i className="now-ui-icons education_hat mr-1"></i>
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
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
