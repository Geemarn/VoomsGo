import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import classnames from "classnames";
import { ReactComponent as BusLogo } from "../../_common/assets/bus.svg";
import { ReactComponent as BookLogo } from "../../_common/assets/book.svg";

const HeaderSearch = (props) => {
  //switch tabs
  const [activeTab, setActiveTab] = useState("1");
  //toggle dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div class="search-bar-wrapper">
      <Row>
        <Col md="12">
          <Nav tabs>
            <NavItem>
              <NavLink
                href="#"
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggleTab("1");
                }}
              >
                <BusLogo />
                Book Trips
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggleTab("2");
                }}
              >
                <span className="icon">
                  <BookLogo />
                </span>
                Check Ticket
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col md="12">
                  <Dropdown
                    isOpen={dropdownOpen}
                    toggle={toggle}
                    className=" dropdown vm-dropdown-badge"
                    direction="down"
                    fade
                    show
                    active
                  >
                    <DropdownToggle
                      data-toggle="dropdown"
                      className="btn dropdown-toggle"
                      aria-expanded={dropdownOpen}
                    >
                      ONE-WAY
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <a>ONE-WAY</a>
                        <DropdownItem divider />
                        <a>ROUND TRIP</a>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderSearch;
