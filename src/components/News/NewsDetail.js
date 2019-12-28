import React from "react";

import {
    Button,
    Container,
    Spinner
} from "reactstrap";

function NewsDetail({title, body}) {
  return (
    <div className={"section section-news m-t-10"}>
        <Container>
            <h2 className="title text-center">{title}</h2>
        </Container>
    </div>
  );
}

export default NewsDetail;
