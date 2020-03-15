/*eslint-disable*/
import React from "react";

import {
  Button,
  Container,
  Spinner
} from "reactstrap";
import { FirestoreCollection } from "react-firestore";
import LazyList from "components/LazyList";

function DynamicContainer({isHome = true, name, url, component}) {
  let sort = 'time:desc';
  let translation = {
    'news': 'МЭДЭЭ',
    'events': 'АРГА ХЭМЖЭЭ',
    'projects': 'ТӨСЛҮҮД',
    'members': '2020 оны удирдлагын багийн гишүүд',
  }
  if (name == 'members') {
    sort = 'rank:asc';
  }
  return (
    <div id={name} className={"section section-" + name + (!isHome && " m-t-10 full-heigh")}>
      <Container>
        <h2 className="title text-center">{translation[name].toUpperCase()}</h2>
        <div className={name}>
          <FirestoreCollection
            path={name}
            sort= {sort}
            render={({ isLoading, data }) => {
              return isLoading ? (
                <center>
                  <Spinner animation="border" className="m-t-3" color="secondary"/>
                </center>
              ) :
                <LazyList key={data.id} list={data} component={component} isHome={isHome}/>
            }}
          />
        </div>
          {
            isHome && 
            <div className="button container-fluid">
              <Button
                block
                className="btn-round"
                color="info"
                href={url}
                size="lg"
              >
              
                БҮХ {nameRenderer(name)}
              </Button>
            </div>
          }
      </Container>
    </div>
  );
}

function nameRenderer(name) {
  let translation = {
    'news': 'МЭДЭЭ',
    'events': 'АРГА ХЭМЖЭЭ',
    'projects': 'ТӨСЛҮҮД',
    'members': 'гишүүд',
  }
  return translation[name].toUpperCase();
}

export default DynamicContainer;
