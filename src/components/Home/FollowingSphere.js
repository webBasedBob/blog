import React from "react";
import Sphere from "../UI/Sphere";
import styles from "./FollowingSphere.module.scss";
const FollowingSphere = ({ text }) => {
  return (
    <div className={styles.sphereContainer}>
      <Sphere />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default FollowingSphere;
