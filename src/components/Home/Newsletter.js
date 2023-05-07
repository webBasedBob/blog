import React, { useRef, useState } from "react";
import styles from "./Newsletter.module.scss";
import CTAButton from "../UI/CTAButton";
import { InputText } from "primereact/inputtext";
import { useInView } from "framer-motion";
// import { InputText } from "primereact/inputtext";
const Newsletter = ({ shouldLoadVideo }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          {shouldLoadVideo && (
            <video
              playsInline={true}
              controls={false}
              loop={true}
              autoPlay={true}
              muted={true}
            >
              <source
                type="video/mp4"
                src="https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/animated_medium20200121-23272-1250mr5.mp4?alt=media&token=2533087b-4729-498a-a662-d25c817ed654"
              />
            </video>
          )}
        </div>
        <div className={styles.textContainer}>
          <h4 className={styles.title}>Sign Up for Our Newsletter</h4>
          <div className={styles.textWrapper}>
            <div className={styles.shape}></div>
            <p className={styles.text}>
              Sign up for our newsletter to be the first to know about newest
              hustling hacks. Our newsletter subscribers always get the inside
              scoop, so join us today and be in the know!
            </p>
          </div>
          <form onSubmit={handleSubmit} className={styles.controls}>
            <span className="p-float-label">
              <InputText
                className={styles.inputText}
                type="email"
                id="email"
                value={email}
                label="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className={styles.inputLabel} htmlFor="email">
                Email
              </label>
            </span>
            <CTAButton label="sign up" config={{ type: "submit" }} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
