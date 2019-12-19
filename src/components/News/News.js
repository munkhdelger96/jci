/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import NewsItem from "./NewsItem";

const news = [{
  image: "https://jci-production.s3.amazonaws.com/images/news/000/259/420/medium/Alex_and_Itai_Congress_.jpg?1575562037",
  title: "The Magic of Tallinn Inspires JCI Members During the 2019 JCI World Congress",
  time: "— 13 days ago"
}, {
  image: "https://jci-production.s3.amazonaws.com/images/news/000/251/448/medium/EUKHT2019.jpg?1570135491",
  title: " JCI European Know-How Transfer: Taking Action for the Global Goals for Sustainable Development ",
  time: "— 3 months ago"
}, {
  image: "https://jci-production.s3.amazonaws.com/images/news/000/243/833/medium/2019_Grantees_Anouncement_-_Instagram-06.jpg?1569517308",
  title: "Global Youth Empowerment Fund Awards New Grantees",
  time: "— 3 months ago"
}];

function News() {
  return (
    <div className="section section-news">
      <Container>
        <h2 className="title">Here is our news</h2>
        <div className="news">
          <Row>
            {NewsItem(news[0])}
            {NewsItem(news[1])}
            {NewsItem(news[2])}
          </Row>
        </div>
        <div className="button container-fluid">
          <Button
            block
            className="btn-round"
            color="info"
            href="#pablo"
            onClick={e => e.preventDefault()}
            size="lg"
          >
            ALL NEWS
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default News;
