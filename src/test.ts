import { drawCard, playCard, endTurn, enemyTurn } from "./game";
import type { GameState } from "./types";

const initialState: GameState = {
  phase: "player_turn",
  hand: [],
  deck: [
    { id: "1", name: "Strike", cost: 1, kind: "attack", damage: 6 },
    { id: "2", name: "Strike", cost: 1, kind: "attack", damage: 6 },
    { id: "3", name: "Defend", cost: 1, kind: "block", block: 5 },
    { id: "4", name: "Strike", cost: 1, kind: "attack", damage: 6 },
    { id: "5", name: "Strike", cost: 1, kind: "attack", damage: 6 },
    { id: "6", name: "Defend", cost: 1, kind: "block", block: 5 },
    { id: "7", name: "Strike", cost: 1, kind: "attack", damage: 6 },
    { id: "8", name: "Strike", cost: 1, kind: "attack", damage: 6 },
  ],
  discard: [],
  energy: 3,
  maxEnergy: 3,
  block: 0,
  hp: 80,
  maxHp: 80,
  enemies: [
    { id: 1, name: "Goblin", hp: 20, maxHp: 20, intent: "attack", damage: 6 },
  ],
};

// 1. Draw opening hand
const withHand = drawCard(initialState, 5);
console.log(
  "Hand:",
  withHand.hand.map((c) => c.name),
);

// 2. Play a Strike at enemy index 0
const afterPlay = playCard(withHand, 0, 0);
console.log("Enemy HP:", afterPlay.enemies[0].hp); // should be 14

// 3. End turn
const afterEnd = endTurn(afterPlay);
console.log("Phase:", afterEnd.phase); // should be "enemy_turn"

// 4. Enemy turn
const afterEnemy = enemyTurn(afterEnd);
console.log("Player HP:", afterEnemy.hp); // should be 80 - 6 = 74
console.log("Phase:", afterEnemy.phase); // should be "player_turn"
