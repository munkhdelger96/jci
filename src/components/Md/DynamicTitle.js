import React from "react";
import Markdown from 'markdown-to-jsx';
import {
    Col,
} from "reactstrap";


class DynamicTitle extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {};
    }
  
    render() {
      return (
        <Markdown
        options={{
            overrides: {
            h2: {
                props: {
                className: 'h2 title',
                style: {
                    fontSize: "30px!important",
                    lineHeight: "38px!important",
                    }
                },
                },
            },
        }}
        >
        {this.props.title}
        </Markdown>
      );
    }
  }

export default DynamicTitle;
