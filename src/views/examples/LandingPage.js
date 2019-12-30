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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import News from "components/News/News";
import Event from "components/Event/Event";
import EventItem from "components/Event/EventItem";
import Member from "components/Member/Member";
import About from "components/About";
import ContactUs from "components/ContactUs";
import project from "components/Project/Project";
import NewsItem from "components/News/NewsItem";
import DynamicContainer from "components/DynamicContainer";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        {About()}
        {Member()}
        {DynamicContainer({
          isHome: true,
          component: NewsItem,
          url: '/news',
          name: 'news'
        })}
        {DynamicContainer({
          isHome: true,
          component: EventItem,
          url: '/events',
          name: 'events'
        })}
        {project()}
        {ContactUs(firstFocus, setFirstFocus, lastFocus, setLastFocus)}
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
