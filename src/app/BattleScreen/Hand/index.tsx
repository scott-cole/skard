import { Card } from "../Card";
import type { Card as CardType } from "../../../types.ts";

import styles from "./Hand.module.scss";

interface HandProps {
  cards: CardType[];
  onPlayCard: (index: number) => void;
}

export function Hand({ cards, onPlayCard }: HandProps) {
  return (
    <div className={styles.hand}>
      {cards.map((card, i) => (
        <Card key={card.id} card={card} onClick={() => onPlayCard(i)} />
      ))}
    </div>
  );
}
