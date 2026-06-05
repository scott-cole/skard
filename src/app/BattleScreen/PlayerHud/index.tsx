import styles from "./PlayerHUD.module.scss";

interface PlayerHUDProps {
  hp: number;
  maxHp: number;
  energy: number;
  maxEnergy: number;
  block: number;
}

export function PlayerHUD({
  hp,
  maxHp,
  energy,
  maxEnergy,
  block,
}: PlayerHUDProps) {
  return (
    <div className={styles.hud}>
      <div className={styles.hpSection}>
        <span>HP</span>
        <div className={styles.hpBarOuter}>
          <div
            className={styles.hpBarInner}
            style={{ width: `${(hp / maxHp) * 100}%` }}
          />
        </div>
        <span>
          {hp}/{maxHp}
        </span>
      </div>

      <div className={styles.energySection}>
        {Array.from({ length: maxEnergy }, (_, i) => (
          <span
            key={i}
            className={i < energy ? styles.energyFilled : styles.energyEmpty}
          >
            ⚡
          </span>
        ))}
      </div>

      {block > 0 && <div className={styles.blockSection}>🛡️ {block}</div>}
    </div>
  );
}
