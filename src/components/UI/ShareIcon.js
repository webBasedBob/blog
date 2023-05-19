import React from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {} from "react-share";
const ShareIcon = ({ shareBtn, text }) => {
  const renderTooltip = (props) => (
    <Tooltip id={`tooltip-${text}`} {...props}>
      Share on {text}
    </Tooltip>
  );
  return (
    <OverlayTrigger
      transition={true}
      placement="top"
      delay={{ show: 300, hide: 100 }}
      overlay={renderTooltip}
    >
      {shareBtn}
    </OverlayTrigger>
  );
};

export default ShareIcon;
