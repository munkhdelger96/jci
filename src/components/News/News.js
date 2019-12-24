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
import LazyList from "components/LazyList";

function News({page = -1, margin = true}) {
  return (
    <div className={"section section-news" + (margin && " m-t-10")}>
      <Container>
        <h2 className="title text-center">Here is our news</h2>
        <row>
        <div className="news">
          <FirestoreCollection
            path="news"
            sort="time:desc"
            render={({ isLoading, data }) => {
              return isLoading ? (
                <div>Уншиж байна</div>
              ) :
                <LazyList list={data} component={NewsItem} page={page}/>
            }}
          />
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
        </row>
      </Container>
    </div>
  );
}

export default News;
