/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Row
} from "reactstrap";

class LazyList extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { numberOfItems : props.page == -1 ? 3 : 6, list : props.list };
    }
  
    render() {
        const { list, numberOfItems } = this.state;
    
        return (
            <div>
                <Row>
                    {list.slice(0, numberOfItems).map(item => this.props.component(item))}
                </Row>
                {
                    list.length > numberOfItems && this.props.page != -1 &&
                    <div className="button container-fluid">
                    <Button
                        block
                        className="btn-round"
                        color="info"
                        onClick={() => this.setState({numberOfItems: numberOfItems + 6})}
                    >
                        MORE
                    </Button>
                    </div>
                }
            </div>
        );
    }
}

export default LazyList;