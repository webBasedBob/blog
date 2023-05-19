import React from "react";
import styles from "./SearchBar.module.scss";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "@/store/search";
import { useRouter } from "next/router";

const SearchBar = ({ offcanvas }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const resolvedClassWrapper = `${styles.searchWrapper} ${
    offcanvas ? styles.offcanvas : ""
  }`;

  const searchInput = useSelector((state) => state.search.searchInput);
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchInput) {
      return;
    }
    const href = "/search";
    router.push(href);
    dispatch(searchActions.setMustperformSearch(true));
  };
  return (
    <form onSubmit={handleSearch} className={resolvedClassWrapper}>
      <span className={`p-input-icon-left ${styles.inputWrapper}`}>
        <i className="pi pi-search" />
        <InputText
          className={styles.searchinput}
          placeholder="Keywords here"
          value={searchInput}
          onChange={(e) => {
            dispatch(searchActions.setSearchInput(e.target.value));
          }}
        />
      </span>
      <Button type="submit" className={styles.searchBtn}>
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
