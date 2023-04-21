import React from "react";
import styles from "./SearchBar.module.scss";
import { SearchIcon, Menu } from "@/assets/icons";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { InputText } from "primereact/inputtext";

const SearchBar = ({ offcanvas }) => {
  const resolvedClassWrapper = `${styles.searchWrapper} ${
    offcanvas ? styles.offcanvas : ""
  }`;
  const resolvedClassBtnLink = `${styles.searchBtnLink} ${
    offcanvas ? styles.offcanvas : ""
  }`;
  return (
    <div className={resolvedClassWrapper}>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText className={styles.searchinput} placeholder="Keywords here" />
      </span>
      <Link className={resolvedClassBtnLink} href="/search">
        <Button className={styles.searchBtn} variant="light">
          Search
        </Button>
      </Link>
    </div>
  );
};

export default SearchBar;
