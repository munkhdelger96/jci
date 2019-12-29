import React from "react";
import Markdown from 'markdown-to-jsx';
import {
    Container,
} from "reactstrap";

function NewsDetail({content}) {
  if (content == null) content = '### Хуудас олдсонгүй';

  content = content.replace(/\\n/g, '\r');

  return (
    <div className={"section section-news m-t-10 full-heigh"}>
        <Container>
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
        </Container>
    </div>
  );
}

export default NewsDetail;
