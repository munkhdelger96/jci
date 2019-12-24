import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ComponentNavbar from "components/Navbars/ComponentNavbar";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import DynamicContainer from "components/DynamicContainer";

function DynamicPage({component, name, url}) {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ComponentNavbar />
      <div className="wrapper">
        {/* <LandingPageHeader /> */}
          {DynamicContainer({
            component,
            name, 
            url, 
            isHome: false
          })}
        <DefaultFooter />
      </div>
    </>
  );
}

export default DynamicPage;
