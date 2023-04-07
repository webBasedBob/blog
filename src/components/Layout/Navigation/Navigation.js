import { SearchIcon, Menu } from "@/assets/icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import styles from "./Navigation.module.scss";
import Icon from "@/components/UI/Icon";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
export default function Navigation() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const navItemsData = [
    { title: "home", expandedComponent: <p>home</p> },
    { title: "articles", expandedComponent: <p>articles</p> },
    { title: "about", expandedComponent: <p>about</p> },
    { title: "contact", expandedComponent: <p>contact</p> },
    {
      title: "search",
      expandedComponent: <p>search bar</p>,
      isIcon: true,
      icon: SearchIcon,
    },
  ];

  const [expandedNavItem, setExpandedNavItem] = useState({
    isVisible: false,
    content: null,
  });

  const navItemsJSX = navItemsData.map((item, index) => {
    const isMiddleItem = Math.floor(navItemsData.length / 2) === index;
    return (
      <CustomToggle
        eventKey="0"
        key={item.title}
        id={item.title}
        className={`${styles.navItem} ${
          isMiddleItem ? styles.navItemAutoMargin : ""
        }`}
      >
        {item.isIcon ? <Icon>{item.icon}</Icon> : item.title}
      </CustomToggle>
    );
  });

  const decoratedOnClick = useAccordionButton(
    "0",
    () => callback && callback(eventKey)
  );

  function CustomToggle({ children, eventKey, id, className }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      const content = navItemsData.find((item) => {
        return item.title === id;
      }).expandedComponent;
      setExpandedNavItem((prev) => {
        return {
          content: prev.isVisible ? prev.content : content,
          isVisible: !prev.isVisible,
        };
      });
    });

    return (
      <button className={className} type="button" onClick={decoratedOnClick}>
        {children}
      </button>
    );
  }

  return (
    <>
      <Navbar bg="light" expand="md" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className={styles.logo}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hustlinglogo.png?alt=media&token=b823bc15-10de-414c-84b2-57168d364daa"
              alt="logo"
              height={50}
            />
          </Navbar.Brand>
          <Navbar.Brand className={styles.brandName}>
            Hustling Insights
          </Navbar.Brand>
          <Button
            className={styles.button}
            variant="dark"
            onClick={handleShowOffcanvas}
          >
            <Icon>{Menu}</Icon>
          </Button>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.navItemsContainer}>
              <Accordion className={styles.accordion}>
                <div className={styles.itensWrapper}>{navItemsJSX}</div>
                <Accordion.Item as="div" eventKey="0">
                  <Accordion.Body>{expandedNavItem.content}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
