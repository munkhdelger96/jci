/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
} from "reactstrap";
import ProjectItem from "./ProjectItem";
import { FirestoreCollection } from "react-firestore";
import LazyList from "components/LazyList";

function Project({page = -1, margin = true}) {
  return (
    <div className={"section section-project" + (margin && " m-t-10")}>
      <Container>
        <h2 className="title text-center">БИДНИЙ ТӨСЛҮҮД</h2>
        <div className="project">
          <FirestoreCollection
              path="projects"
              sort="time:desc"
              render={({ isLoading, data }) => {
                return isLoading ? (
                  <div>Уншиж байна</div>
                ) :
                  <LazyList list={data} component={ProjectItem} page={page}/>
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
                href="/projects"
                size="lg"
              >
                БҮХ ТӨСЛҮҮД
              </Button>
            </div>
          }
      </Container>
    </div>
  );
}

export default Project;
