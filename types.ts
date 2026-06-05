export type CardKind =
  | { kind: "attack"; damage: number }
  | { kind: "block"; block: number }
  | {
      kind: "buff";
      target: "self";
      effect: string;
      amount: number;
    }
  | {
      kind: "debuff";
      target: "all_enemies";
      effect: string;
      amount: number;
    };

export type Card = {
  id: string;
  name: string;
  cost: number;
} & CardKind;

export type Enemy = {
  id: number;
  name: string;
  hp: number;
  maxHp: number;
  intent: "attack" | "buff" | "debuff";
  damage: number;
};

export type GamePhase = "player_turn" | "enemy_turn" | "victory" | "defeat";

export type GameState = {
  phase: GamePhase;
  hand: Card[];
  deck: Card[];
  discard: Card[];
  energy: number;
  maxEnergy: number;
  block: number;
  hp: number;
  maxHp: number;
  enemies: Enemy[];
};
