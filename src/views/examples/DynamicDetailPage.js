import React from "react";

import {
    Spinner
} from "reactstrap";

// core components
import ComponentNavbar from "components/Navbars/ComponentNavbar";
import Footer from "components/Footers/Footer.js";
import { FirestoreDocument } from "react-firestore";

class DynamicDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {url} = this.props.match
    const {component} = this.props

    return (
      <>
        <ComponentNavbar />
        <div className="wrapper">
          <div className="full-heigh">
            <FirestoreDocument
                path={url}
                render={({ isLoading, data }) => {
                    return isLoading ? (
                        <center>
                            <Spinner animation="border" className="m-t-10" color="secondary"/>
                        </center>
                    ) : 
                    component(data)
                }}
            />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default DynamicDetailPage;
