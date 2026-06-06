import { Card } from "../Card";
import type { Card as CardType } from "../../../types.ts";

import styles from "./Hand.module.scss";

interface HandProps {
  cards: CardType[];
  onPlayCard: (index: number) => void;
}

const rotations = [-2.5, -1, 0, 1.5, 3, -1.5, 0.5, -2];

export function Hand({ cards, onPlayCard }: HandProps) {
  return (
    <div className={styles.hand}>
      {cards.map((card, i) => (
        <div
          key={card.id}
          className={styles.cardWrapper}
          style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
        >
          <Card card={card} onClick={() => onPlayCard(i)} />
        </div>
      ))}
    </div>
  );
}
