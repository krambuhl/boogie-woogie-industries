import MeshSurface from "@/components/MeshSurface";
import styles from "./page.module.css";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <div className={styles.root}>
      <MeshSurface>
        <div className={styles.marqueeWrapper}>
          <Marquee>Boogie Woogie Industrial Complex</Marquee>
        </div>
      </MeshSurface>
    </div>
  );
}
