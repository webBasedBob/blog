import React from "react";
import styles from "./Animation.module.scss";
import FollowingSphere from "@/components/Home/FollowingSphere";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FollowingRectangle from "@/components/Home/FollowingRectangle";
import { useDispatch, useSelector } from "react-redux";
import { animationActions } from "@/store/home-animation";

const Animation = () => {
  const dispatch = useDispatch();
  const presentState = useSelector((state) => state.homeAnimation.presentState);
  const nextState = useSelector((state) => state.homeAnimation.nextState);
  const placeholderRef = useRef();
  const isPlaceholderInView = useInView(placeholderRef);
  const [animationEnded, setAnimationEnded] = useState(true);
  const [isSSR, setIsSSR] = useState(true);

  const rectangleRef = useRef();
  const sphereRef = useRef();

  let viewportWidth;

  useEffect(() => {
    setIsSSR(false);
    if (animationEnded && isPlaceholderInView) {
      dispatch(animationActions.setPresentState(nextState));
    }
  }, [animationEnded, nextState]);

  if (typeof window !== "undefined") {
    viewportWidth = window.innerWidth;
  }
  return (
    <>
      <div
        style={{
          opacity: 0,
          height: sphereRef.current?.scrollHeight
            ? sphereRef.current?.scrollHeight
            : rectangleRef.current?.scrollHeight + 20,
          width: sphereRef.current?.scrollWidth
            ? sphereRef.current?.scrollWidth
            : rectangleRef.current?.scrollWidth + 20,
          position: "absolute",
          top:
            nextState.Y +
            nextState.carouselHeight / 2 -
            (sphereRef.current?.scrollHeight
              ? sphereRef.current?.scrollHeight
              : rectangleRef.current?.scrollHeight) /
              10,
        }}
        ref={placeholderRef}
      ></div>
      {!isSSR && viewportWidth >= 750 ? (
        <motion.div
          key={"sphere"}
          className={styles.absolutePos}
          initial={{ y: null, x: null, opacity: 0 }}
          onAnimationStart={() => {
            setAnimationEnded(false);
          }}
          onAnimationComplete={() => {
            setAnimationEnded(true);
            if (isPlaceholderInView) {
              dispatch(animationActions.setPresentState(nextState));
            }
          }}
          animate={{
            y:
              presentState.Y +
              presentState.carouselHeight / 2 -
              sphereRef.current?.scrollHeight / 5,
            x:
              presentState.X +
              (viewportWidth - 1200 > 0 ? (viewportWidth - 1300) / 2 : 0) +
              (presentState.widthToFill - sphereRef.current?.scrollHeight) / 2,
            opacity: presentState.Y ? 1 : 0,
          }}
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        >
          <FollowingSphere ref={sphereRef} text={presentState.text} />
        </motion.div>
      ) : (
        <motion.div
          key={"rectangle"}
          className={styles.absolutePos}
          initial={{ y: null, x: null, opacity: 0 }}
          onAnimationStart={() => {
            setAnimationEnded(false);
          }}
          onAnimationComplete={() => {
            setAnimationEnded(true);
            dispatch(animationActions.setPresentState(nextState));
          }}
          animate={{
            y: presentState.Y + presentState.carouselHeight / 6.5,
            opacity: presentState.Y ? 1 : 0,
          }}
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        >
          <div
            className={styles.rectangleWrapper}
            style={{ height: nextState.carouselHeight }}
          >
            <FollowingRectangle ref={rectangleRef} text={presentState.text} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Animation;
