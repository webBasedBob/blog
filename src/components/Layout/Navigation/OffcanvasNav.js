import React from "react";
import styles from "./OffcanvasNav.module.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import Icon from "@/components/UI/Icon";

const OffcanvasNav = ({
  showOffcanvas,
  handleCloseOffcanvas,
  navItemsData,
}) => {
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
            {item.expandedComponentOffcanvas}
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
    <Offcanvas
      className={styles.offcanvas}
      show={showOffcanvas}
      onHide={handleCloseOffcanvas}
    >
      <Offcanvas.Header closeButton closeVariant="white">
        <Offcanvas.Title>
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
  );
};

export default OffcanvasNav;
