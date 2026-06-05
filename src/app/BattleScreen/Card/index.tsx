import type { Card } from "../../../types.ts";

import styles from "./Card.module.scss";

interface CardProps {
  card: Card;
  onClick?: () => void;
}

export function Card({ card, onClick }: CardProps) {
  const kindClass = styles[card.kind] || "";

  return (
    <div className={`${styles.card} ${kindClass}`} onClick={onClick}>
      <div className={styles.costBadge}>{card.cost}</div>
      <div className={styles.cardName}>{card.name}</div>
      <div className={styles.effect}>
        {card.kind === "attack" && <span>Deal {card.damage} Damage</span>}
        {card.kind === "block" && <span>Gain {card.block} Block</span>}
      </div>
    </div>
  );
}
