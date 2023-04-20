import React, { useRef, useEffect, useState, Children } from "react";
import { Facebook, Linkedin, Twitter } from "@/assets/icons";
import Icon from "../UI/Icon";
import styles from "./SharePanel.module.scss";
import { Container } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const ShareIcon = ({ shareBtn, text }) => {
  return (
    <OverlayTrigger
      transition={true}
      placement="top"
      delay={{ show: 300, hide: 100 }}
      overlay={renderTooltip}
    ></OverlayTrigger>
  );
};
const customFacebookShareBtn = () => {
  const [pageUrl, setPageUrl] = useState("");
  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);
  return (
    <FacebookShareButton url={pageUrl}>
      <div className={styles.icon}>{Facebook}</div>
    </FacebookShareButton>
  );
};

const customLinkedinShareBtn = () => {
  const [pageUrl, setPageUrl] = useState("");
  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);
  return (
    <LinkedinShareButton url={pageUrl} title="" summary="" source="">
      <div className={styles.icon}>{Linkedin}</div>
    </LinkedinShareButton>
  );
};

const ShareBtn = ({ text }) => {
  const renderTooltip = (props) => {
    return (
      <Tooltip id={`tooltip-${text}`} {...props}>
        Share on {text}
      </Tooltip>
    );
  };

  const [pageUrl, setPageUrl] = useState("");
  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  let pula;

  if (text.toLowerCase() === "twitter") {
    pula = (
      <TwitterShareButton
        url={pageUrl}
        title=""
        via=""
        hashtags={[]}
        related={[]}
      >
        <div className={styles.icon}>{Twitter}</div>
      </TwitterShareButton>
    );
  }

  if (text.toLowerCase() === "facebook") {
    pula = (
      <FacebookShareButton url={pageUrl}>
        <div className={styles.icon}>{Facebook}</div>
      </FacebookShareButton>
    );
  }

  if (text.toLowerCase() === "linkedin") {
    pula = (
      <LinkedinShareButton url={pageUrl} title="" summary="" source="">
        <div className={styles.icon}>{Linkedin}</div>
      </LinkedinShareButton>
    );
  }
  return (
    <OverlayTrigger
      trigger={["hover", "focus"]}
      transition={true}
      placement="top"
      delay={{ show: 300, hide: 100 }}
      overlay={renderTooltip}
    >
      {pula}
    </OverlayTrigger>
  );
};

const customTwitterShareBtn = () => {
  const [pageUrl, setPageUrl] = useState("");
  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);
  return (
    <TwitterShareButton
      url={pageUrl}
      title=""
      via=""
      hashtags={[]}
      related={[]}
    >
      <div className={styles.icon}>{Twitter}</div>
    </TwitterShareButton>
  );
};

const pula = React.forwardRef((props, ref) => {
  return <div ref={ref}></div>;
});
const SharePanel = () => {
  const shareIcons = ["Facebook", "Linkedin", "Twitter"];
  return (
    <Container fluid className={styles.container}>
      {shareIcons.map((platform) => {
        return <ShareBtn key={platform} text={platform}></ShareBtn>;
      })}
    </Container>
  );
};

export default SharePanel;
