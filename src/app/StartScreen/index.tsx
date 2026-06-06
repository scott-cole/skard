import startBg from "../../assets/startscreen.jpg";

import styles from "./StartScreen.module.scss";

interface StartScreenProps {
  onStart: () => void;
}
export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${startBg})` }}>
      <div className={styles.spacer} />
      <button className={styles.startBtn} type="button" onClick={onStart}>
        Start Game
      </button>
    </div>
  );
}
