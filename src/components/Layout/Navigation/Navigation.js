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
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { Accordion as Accordion2 } from "primereact/accordion";
import { AccordionTab as AccordionTab2 } from "primereact/accordion";
export default function Navigation() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const navItemsData = [
    { title: "home", expandedComponent: <p>home</p>, href: "/" },
    {
      title: "articles",
      expandedComponent: (
        <div className={styles.articlesLinksWrapper}>
          <button className={styles.navItem} type="button">
            {" "}
            <Link className={styles.navLink} href="/articles#entrepreneur">
              entrepreneur hustler
            </Link>
          </button>
          {/* <Divider className={styles.divider} layout="vertical"></Divider> */}
          <button className={styles.navItem} type="button">
            {" "}
            <Link className={styles.navLink} href="/articles#side">
              side hustler
            </Link>
          </button>
          {/* <Divider className={styles.divider} layout="vertical"></Divider> */}
          <button className={styles.navItem} type="button">
            {" "}
            <Link className={styles.navLink} href="/articles#employed">
              employed hustler
            </Link>
          </button>
        </div>
      ),
      href: "",
    },
    { title: "about", expandedComponent: <p>about</p>, href: "/about" },
    { title: "contact", expandedComponent: <p>contact</p>, href: "/contact" },
    {
      title: "search",
      expandedComponent: (
        <div className={styles.searchWrapper}>
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              className={styles.searchinput}
              placeholder="Keywords here"
            />
          </span>
          <Link className={styles.searchBtnLink} href="/search">
            <Button className={styles.searchBtn} variant="light">
              Search
            </Button>
          </Link>
        </div>
      ),
      isIcon: true,
      icon: SearchIcon,
      href: "",
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

  const decoratedOnClick = useAccordionButton(
    "0",
    () => callback && callback(eventKey)
  );

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
        {" "}
        <Link className={styles.navLink} href={href}>
          {children}
        </Link>
      </button>
    );
  }

  const offcanvasNavItemsJSX = navItemsData.map((item, index) => {
    const canOpenExtraNav =
      item.title === "articles" || item.title === "search";
    if (canOpenExtraNav) {
      return (
        <Accordion.Item
          key={item.title}
          className={styles.offcanvasAccordionItem}
          eventKey={index}
        >
          <Accordion.Header className={styles.offcanvasAccordionHeader}>
            {item.isIcon ? <Icon>{item.icon}</Icon> : item.title}
          </Accordion.Header>
          <Accordion.Body className={styles.offcanvasAccordionBody}>
            {item.expandedComponent}
          </Accordion.Body>
        </Accordion.Item>
      );
    } else {
      return (
        <Accordion.Item
          className={styles.offcanvasAccordionItem}
          key={item.title}
          eventKey={index}
        >
          <Link className={styles.navLink} href={item.href}>
            {item.isIcon ? <Icon>{item.icon}</Icon> : item.title}
          </Link>
        </Accordion.Item>
      );
    }
  });

  return (
    <>
      <Navbar className={styles.navBar} bg="light" expand="md" sticky="top">
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hustlinglogo.png?alt=media&token=b823bc15-10de-414c-84b2-57168d364daa"
              alt="logo"
              height={50}
            />
            <Navbar.Brand className={styles.logoBackground} />
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
      <Offcanvas
        className={styles.offcanvas}
        show={showOffcanvas}
        onHide={handleCloseOffcanvas}
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            {" "}
            <Navbar.Brand href="/" className={styles.logoOffcanvas}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hustlinglogo.png?alt=media&token=b823bc15-10de-414c-84b2-57168d364daa"
                alt="logo"
                height={50}
              />
              <Navbar.Brand className={styles.logoBackgroundOffcanvas} />
            </Navbar.Brand>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.offcanvasContainer}>
          <Accordion flush className={styles.offcanvasAccordion}>
            {offcanvasNavItemsJSX}
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
