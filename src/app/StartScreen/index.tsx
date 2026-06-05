import styles from "./StartScreen.module.scss";

interface StartScreenProps {
  onStart: () => void;
}
export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className={styles.container}>
      <h1>Skard</h1>
      <h2>Welcome to the card battle game shit</h2>
      <h3>Instructions.....</h3>
      <button type="button" role="button" onClick={onStart}>
        Start Game
      </button>
    </div>
  );
}
