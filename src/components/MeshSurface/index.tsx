import styles from "./MeshSurface.module.css";
import { ChildrenProps } from "@/types/component";

export default function MeshSurface({ children }: ChildrenProps) {
  return (
    <div className={styles.root}>
      <div className={styles.meshBlobOne} />
      <div className={styles.meshBlobTwo} />
      <div className={styles.meshBlobThree} />
      <div className={styles.blur} />
      <div className={styles.grain} />
      <div className={styles.content}>{children}</div>

      <svg width="0" height="0">
        <filter id="noise1">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.92"
            numOctaves="4"
            seed="2"
          />
        </filter>
        <filter id="noise2">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.08"
            numOctaves="4"
            seed="2"
          />
        </filter>
      </svg>
    </div>
  );
}
