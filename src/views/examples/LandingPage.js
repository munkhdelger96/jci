import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import EventItem from "components/Event/EventItem";
import Member from "components/Member/Member";
import About from "components/About";
import ContactUs from "components/ContactUs";
import NewsItem from "components/News/NewsItem";
import DynamicContainer from "components/DynamicContainer";
import ProjectItem from "components/Project/ProjectItem";
import Footer from "components/Footers/Footer";

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
        {DynamicContainer({
          isHome: true,
          component: ProjectItem,
          url: '/projects',
          name: 'projects'
        })}
        {ContactUs(firstFocus, setFirstFocus, lastFocus, setLastFocus)}
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
