import { SearchIcon } from "@/assets/icons";
import { useState } from "react";
import OffcanvasNav from "./OffcanvasNav";
import NavigationBar from "./NavigationBar";
import SearchBar from "./SearchBar";
import LinksToArticles from "./LinksToArticles";
export default function Navigation() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const navItemsData = [
    { title: "home", href: "/" },
    {
      title: "articles",
      expandedComponent: <LinksToArticles />,
      expandedComponentOffcanvas: <LinksToArticles offcanvas={true} />,
      href: "",
    },
    { title: "about", href: "/about" },
    { title: "contact", href: "/contact" },
    {
      title: "search",
      expandedComponent: <SearchBar />,
      expandedComponentOffcanvas: <SearchBar offcanvas={true} />,
      isIcon: true,
      icon: SearchIcon,
      href: "",
    },
  ];

  return (
    <>
      <NavigationBar
        handleShowOffcanvas={handleShowOffcanvas}
        navItemsData={navItemsData}
      />
      <OffcanvasNav
        showOffcanvas={showOffcanvas}
        handleCloseOffcanvas={handleCloseOffcanvas}
        navItemsData={navItemsData}
      />
    </>
  );
}
