import type { Card } from "../../../types.ts";

import styles from "./Card.module.scss";

interface CardProps {
  card: Card;
  onClick?: () => void;
}

export function Card({ card, onClick }: CardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div>{card.name}</div>
      <div>{card.cost}</div>
      {card.kind === "attack" && <div>Deal {card.damage} Damage</div>}
      {card.kind === "block" && <div>Gain {card.block} Block</div>}
    </div>
  );
}
