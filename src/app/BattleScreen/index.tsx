import type { GameState } from "../../types";
import { EnemyPanel } from "./EnemyPanel";
import { PlayerHUD } from "./PlayerHud";
import { Hand } from "./Hand";
import nextImg from "../../assets/next.png";

import styles from "./BattleScreen.module.scss";

interface BattleScreenProps {
  state: GameState;
  onPlayCard: (handIndex: number) => void;
  onEndTurn: () => void;
}

export function BattleScreen({ state, onPlayCard, onEndTurn }: BattleScreenProps) {
  return (
    <div className={styles.battleScreen}>
      <EnemyPanel enemies={state.enemies} />
      <div className={styles.spacer} />
      <Hand cards={state.hand} onPlayCard={onPlayCard} />
      <PlayerHUD
        hp={state.hp}
        maxHp={state.maxHp}
        energy={state.energy}
        maxEnergy={state.maxEnergy}
        block={state.block}
      />
      <button
        className={styles.endTurnBtn}
        onClick={onEndTurn}
        style={{ backgroundImage: `url(${nextImg})` }}
      >
        End Turn
      </button>
    </div>
  );
}
