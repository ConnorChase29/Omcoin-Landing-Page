import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../CSS/NavigationBar.css';

export class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          bg="light"
          expand="lg"
          id="navbar"
          fixed="top"
          className="navbar-menu"
        >
          <div className="container">
            <div className="brandSpacing">
              <Navbar.Brand id="brand" href="/">
                Omcoin
              </Navbar.Brand>
            </div>
            <div className="buttonSpacing">
              <Button
                variant="primary"
                className="rounded-pill"
                target="_blank"
                onClick={() => {
                  window.open(
                    'https://www.bw.com/regGetCommission/ODVCV0ZzV0M1Y08=?lan=en'
                  );
                }}
              >
                Buy Now
              </Button>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="PageLinks">
                <Nav className="mr-auto">
                  <div className="buttonSpacing">
                    <Nav.Link className="nav-links" href="/#Overview">
                      Overview
                    </Nav.Link>
                  </div>
                  <div className="buttonSpacing">
                    <Nav.Link className="nav-links" href="/#Features">
                      Features
                    </Nav.Link>
                  </div>
                  <div className="buttonSpacing">
                    <Nav.Link className="nav-links" onClick={() => {
                       window.open('https://omcoinwhitepaper.s3.us-east-2.amazonaws.com/Omcoin_White_Paper.pdf');
                      }}>
                      White Paper
                    </Nav.Link>
                  </div>
                </Nav>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
