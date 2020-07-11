import React from "react";
import { Container, Row, Col } from "reactstrap";
import NavHeader from "../../_common/Layout/NavHeader";
import HeaderHero from "../../_common/assets/search-hero@2x.jpg";
import HeaderSearch from "./HeaderSearch";

const MainHeader = (props) => {
  return (
    <header className="header-hero">
      <Container>
        <NavHeader />
        <div class="hero-inner">
          <Row class="content-top d-flex align-content-center">
            <Col md="5">
              <div class="left">
                <h1>
                  Find, compare & book <br />
                  road trips with ease.
                </h1>
              </div>
            </Col>
          </Row>
          <HeaderSearch />
        </div>
        <img src={HeaderHero} className="hero" alt="hero" />
      </Container>
    </header>
  );
};
export default MainHeader;
