import classNames from "classnames";
import styles from "./Marquee.module.css";
import { ChildrenProps } from "@/types/component";

export default function Marquee({ children }: ChildrenProps) {
  return (
    <div className={styles.root}>
      <div className={styles.contentWrapper}>
        <div className={classNames(styles.content, styles.before)} aria-hidden>
          {children} {children}
        </div>
        <div className={classNames(styles.content, styles.main)}>
          {children}
        </div>
        <div className={classNames(styles.content, styles.after)} aria-hidden>
          {children} {children} {children} {children}
        </div>
      </div>
    </div>
  );
}
