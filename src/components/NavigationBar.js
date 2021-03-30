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
                    'https://omcoinwhitepaper.s3.us-east-2.amazonaws.com/Omcoin_White_Paper.pdf'
                  );
                }}
              >
                Read our white paper
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
                </Nav>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <div className="bottom-fixed-cta">
          <Button
            variant="primary"
            className="rounded-pill"
            target="_blank"
            onClick={() => {
              window.open(
                'https://omcoinwhitepaper.s3.us-east-2.amazonaws.com/Omcoin_White_Paper.pdf'
              );
            }}
          >
            Read our white paper
          </Button>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
