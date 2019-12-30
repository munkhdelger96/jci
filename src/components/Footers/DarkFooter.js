/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer footer-default">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()} JCI Ulaanbaatar. All Rights Reserved. Powered by &nbsp;
          <a
            href="https://github.com/luffy1727/my-portfolio/"
            target="_blank"
          >
            TwixDevs Solutions
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
