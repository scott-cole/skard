import type { Enemy } from "../../../types.ts";

import styles from "./EnemyPanel.module.scss";

interface EnemyPanelProps {
  enemies: Enemy[];
}
export function EnemyPanel({ enemies }: EnemyPanelProps) {
  return (
    <div className={styles.panel}>
      {enemies.map((enemy) => (
        <div key={enemy.id} className={styles.enemyCard}>
          <div> {enemy.name}</div>
          <div className={styles.hpBarOuter}>
            <div
              className={styles.hpBarInner}
              style={{ width: `${(enemy.hp / enemy.maxHp) * 100}%` }}
            />
          </div>
          <span>
            {enemy.hp}/{enemy.maxHp}
          </span>
          <div>{enemy.intent === "attack" ? "⚔️" : enemy.intent === "buff" ? "✨" : "💀"} {enemy.intent}</div>
        </div>
      ))}
    </div>
  );
}
