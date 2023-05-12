import classes from "./PageTitle.module.scss";
import { motion } from "framer-motion";
export default function PageTitle({ children, className }) {
  const resolvedClass = `${classes.header} ${className ? className : ""}`;
  return (
    <div className={resolvedClass}>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {children[0]}
      </motion.div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {children[1]}
      </motion.div>
    </div>
  );
}
