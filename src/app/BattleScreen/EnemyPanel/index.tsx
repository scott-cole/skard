import type { Enemy } from "../../../types.ts";
import enemyImg from "../../../assets/enemies/enemy1.png";

import styles from "./EnemyPanel.module.scss";

interface EnemyPanelProps {
  enemies: Enemy[];
}
export function EnemyPanel({ enemies }: EnemyPanelProps) {
  return (
    <div className={styles.panel}>
      {enemies.map((enemy) => (
        <div key={enemy.id} className={styles.enemyUnit}>
          <div className={styles.nameBar}>{enemy.name}</div>

          <div className={styles.intentIcon}>
            {enemy.intent === "attack" ? "⚔️" : enemy.intent === "buff" ? "✨" : "💀"}
          </div>

          <div className={styles.characterArea}>
            <div className={styles.artWrapper}>
              <img src={enemyImg} alt={enemy.name} className={styles.art} />
            </div>
          </div>

          <div className={styles.statsBar}>
            <div className={styles.hpBarOuter}>
              <div
                className={styles.hpBarInner}
                style={{ width: `${(enemy.hp / enemy.maxHp) * 100}%` }}
              />
            </div>
            <span className={styles.hpText}>
              {enemy.hp}/{enemy.maxHp}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
