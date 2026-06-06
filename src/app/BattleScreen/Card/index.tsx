import type { Card } from "../../../types.ts";
import shieldImg from "../../../assets/shield_1.png";
import swordImg from "../../../assets/sword_1.png";
import cardBg from "../../../assets/card_bg.png";

import styles from "./Card.module.scss";

interface CardProps {
  card: Card;
  onClick?: () => void;
}

export function Card({ card, onClick }: CardProps) {
  const kindClass = styles[card.kind] || "";

  return (
    <div
      className={`${styles.card} ${kindClass}`}
      onClick={onClick}
      style={{ backgroundImage: `url(${cardBg})` }}
    >
      <div className={styles.artFrame}>
        {card.kind === "block" && <img src={shieldImg} alt="" className={styles.art} />}
        {card.kind === "attack" && <img src={swordImg} alt="" className={styles.art} />}
      </div>
      <div className={styles.infoRow}>
        <span className={styles.costBadge}>{card.cost}</span>
        <span className={styles.cardName}>{card.name}</span>
      </div>
      <div className={styles.effect}>
        {card.kind === "attack" && <span>Deal {card.damage} Damage</span>}
        {card.kind === "block" && <span>Gain {card.block} Block</span>}
      </div>
    </div>
  );
}
