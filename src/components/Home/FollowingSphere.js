import React from "react";
import Sphere from "../UI/Sphere";
import styles from "./FollowingSphere.module.scss";
const FollowingSphere = React.forwardRef(({ text }, ref) => {
  return (
    <div ref={ref} className={styles.sphereContainer}>
      <Sphere />
      <p className={styles.text}>{text}</p>
    </div>
  );
});

export default FollowingSphere;
