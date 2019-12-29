import React from "react";
import Markdown from 'markdown-to-jsx';
import {
    Row,
    Col,
    Container,
} from "reactstrap";
import moment from "moment";

function NewsDetail({content, time}) {
  if (content == null) content = '### Хуудас олдсонгүй';

  content = content.replace(/\\n/g, '\r');

  return (
    <div className={"section section-news m-t-10 full-heigh"}>
        <Container>
          <Row>
            <Col md="2" className="f-w-7 show-me-small">
              <Row className="m-l-1">
                <img 
                  className="img-fluid h-5 w-5 "
                  src={"http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"}
                />
                <div className="font-color-info-color m-l-1 h-center">
                  Б.Тэлмэн ,
                </div>
                <div className="font-color-info-color m-l-1 h-center">
                 {moment(new Date(time.seconds*1000)).fromNow(true)}
                </div>
              </Row>
              <hr/>
            </Col>
            <Col md="2" className="f-w-7 hide-me-small">
              <div>
                <img 
                  className="img-fluid h-5 w-5 m-t-4"
                  src={"http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"}
                />
                <div className="font-color-info-color">
                  Б.Тэлмэн
                </div>
              </div>
              <div className="p-t-1">
                <div className="font-color-opacity-gray-3">
                  Ангилал
                </div>
                <div className="font-color-dark-background">
                  Үндсэн
                </div>  
              </div>
              <div className="p-t-2">
                <div className="font-color-opacity-gray-3" >
                  Хэзээ
                </div>
                <div className="font-color-dark-background">
                  {moment(new Date(time.seconds*1000)).fromNow(true)}
                </div>  
              </div>
            </Col>
            <Col md="10">
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
                      h3: {
                        props: {
                          className: 'h3 title text-center',
                          style: {
                            fontSize: "26px!important",
                            lineHeight: "26px!important",
                          }
                        },
                      },
                      p: {
                        props: {
                          className: 'content-p'
                        }
                      },
                      ul: {
                        props: {
                          className: 'content-p'
                        }
                      },
                      li: {
                      props: {
                        className: 'content-p'
                      }
                    },
                    img: {
                      props: {
                        className: 'content-img'
                      }
                    },
                    strong: {
                      props: {
                        className: 'f-w-7'
                      }
                    }
                  },
                }}
                >
                {content}
              </Markdown>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default NewsDetail;
