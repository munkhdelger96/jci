/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row
} from "reactstrap";
import NewsItem from "./NewsItem";
import { FirestoreCollection } from "react-firestore";
import IndexNavbar from "components/Navbars/IndexNavbar";

function News({page = -1}) {
  return (
    <div className="section section-news">
      <Container>
        <h2 className="title text-center">Here is our news</h2>
        <div className="news">
          <Row>
            <FirestoreCollection
              path="news"
              render={({ isLoading, data }) => {
                return isLoading ? (
                  <div>Уншиж байна</div>
                ) : 
                  data.map(news => (
                    NewsItem(news)
                  ))
              }}
            />
          </Row>
        </div>
        {
          page == -1 && 
          <div className="button container-fluid">
            <Button
              block
              className="btn-round"
              color="info"
              href="/news"
              size="lg"
            >
              ALL NEWS
            </Button>
          </div>
        }
      </Container>
    </div>
  );
}

export default News;
