import React from "react";
import styles from "./FollowingRectangle.module.scss";
const FollowingRectangle = React.forwardRef(({ text }, ref) => {
  const textJsx = [];
  const charsArr = text.split("");
  for (let i = 0; i < charsArr.length; i++) {
    const char = charsArr[i];
    if (char === " ") {
      if (text.toLowerCase().indexOf("entrepreneur") !== -1) {
        break;
      }
      textJsx.push(
        <strong
          key={char + Math.floor(Math.random() * 100000)}
          style={{ opacity: 0 }}
        >
          a
        </strong>
      );
    }
    if (i === 0) {
      textJsx.push(
        <strong
          style={{ paddingTop: "1rem" }}
          key={char + Math.floor(Math.random() * 100000)}
        >
          {char}
        </strong>
      );
      continue;
    }
    if (i === charsArr.length - 1) {
      textJsx.push(
        <strong
          style={{ paddingBottom: "1rem" }}
          key={char + Math.floor(Math.random() * 100000)}
        >
          {char}
        </strong>
      );
      continue;
    }
    textJsx.push(
      <strong key={char + Math.floor(Math.random() * 100000)}>{char}</strong>
    );
  }
  return (
    <div ref={ref} className={styles.container}>
      {/* <p className={styles.text}>{text}</p> */}
      <div className={styles.text}>{textJsx}</div>
    </div>
  );
});

export default FollowingRectangle;
