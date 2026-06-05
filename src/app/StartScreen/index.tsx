import styles from "./StartScreen.module.scss";

interface StartScreenProps {
  onStart: () => void;
}
export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Skard</h1>
      <p className={styles.subtitle}>A card battle game</p>
      <button className={styles.startBtn} type="button" onClick={onStart}>
        Start Game
      </button>
    </div>
  );
}
