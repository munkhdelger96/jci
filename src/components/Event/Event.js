/*eslint-disable*/
import React from "react";
import EventItem from "./EventItem";
import { FirestoreCollection } from "react-firestore";
import LazyList from "components/LazyList";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

function Event({page = -1, margin = true}) {
  return (
    <div className={"section section-event" + (margin && " m-t-10")}>
      <Container>
        <h2 className="title text-center">АРГА ХЭМЖЭЭНҮҮД</h2>
        <div className="events">
          <FirestoreCollection
            path="events"
            sort="time:desc"
            render={({ isLoading, data }) => {
              return isLoading ? (
                <div>Уншиж байна</div>
              ) :
                <LazyList list={data} component={EventItem} page={page}/>
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
                href="/events"
                size="lg"
              >
                БҮХ АРГА ХЭМЖЭЭНҮҮД
              </Button>
            </div>
          }
      </Container>
    </div>
  );
}

export default Event;
