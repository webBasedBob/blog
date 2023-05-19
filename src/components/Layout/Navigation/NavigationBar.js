import React, { useState } from "react";
import styles from "./NavigationBar.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Icon from "@/components/UI/Icon";
import { Menu } from "@/assets/icons";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Link from "next/link";
import logo from "../../../assets/logo.png";
const NavigationBar = ({ handleShowOffcanvas, navItemsData, animation }) => {
  const [expandedNavItem, setExpandedNavItem] = useState({
    isVisible: false,
    content: null,
  });

  function CustomToggle({
    children,
    eventKey,
    id,
    className,
    canOpenExtraNav,
    href,
  }) {
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
      <button
        className={className}
        type="button"
        onClick={canOpenExtraNav ? decoratedOnClick : () => {}}
      >
        {canOpenExtraNav ? (
          <div className={styles.navLink}>{children}</div>
        ) : (
          <Link className={styles.navLink} href={href}>
            {children}
          </Link>
        )}
      </button>
    );
  }
  const navItemsJSX = navItemsData.map((item, index) => {
    const isMiddleItem = Math.floor(navItemsData.length / 2) === index;
    return (
      <CustomToggle
        canOpenExtraNav={item.title === "articles" || item.title === "search"}
        eventKey="0"
        href={item.href}
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
  return (
    <Navbar className={styles.navBar} bg="light" expand="md" sticky="top">
      <Container
        className={[styles.extraPadding, animation ? styles.animated : ""]}
      >
        <Navbar.Brand href="/" className={styles.logo}>
          <img src={logo.src} alt="logo" height={50} />

          <Navbar.Brand className={styles.logoBackground} />
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
  );
};

export default NavigationBar;
