import type { GameState } from "./types.ts";
import { shuffle } from "./utils/shuffle";

export function drawCard(state: GameState, count: number): GameState {
  let deck = [...state.deck];
  let hand = [...state.hand];
  let discard = [...state.discard];
  if (deck.length < count) {
    deck = shuffle([...deck, ...discard]);
    discard = [];
  }

  const drawn = deck.splice(0, count);
  hand.push(...drawn);

  return {
    ...state,
    deck,
    hand,
    discard,
  };
}

export function playCard(
  state: GameState,
  handIndex: number,
  enemyIndex?: number,
): GameState {
  const card = state.hand[handIndex];

  if (!card || state.energy < card.cost) return state;

  const newEnergy = state.energy - card.cost;

  const newHand = state.hand.filter((_, i) => i !== handIndex);

  switch (card.kind) {
    case "block":
      return {
        ...state,
        hand: newHand,
        energy: newEnergy,
        block: state.block + card.block,
        discard: [...state.discard, card],
      };
    case "attack": {
      const newEnemies = state.enemies
        .map((e, i) =>
          i === enemyIndex ? { ...e, hp: Math.max(0, e.hp - card.damage) } : e,
        )
        .filter((e) => e.hp > 0);

      return {
        ...state,
        hand: newHand,
        energy: newEnergy,
        enemies: newEnemies,
        phase: newEnemies.length === 0 ? "victory" : state.phase,
        discard: [...state.discard, card],
      };
    }
    default:
      return {
        ...state,
        hand: newHand,
        energy: newEnergy,
        discard: [...state.discard, card],
      };
  }
}

export function endTurn(state: GameState): GameState {
  const discardedState = {
    ...state,
    hand: [],
    discard: [...state.discard, ...state.hand],
  };
  const afterDraw = drawCard(discardedState, 5);
  return {
    ...afterDraw,
    energy: afterDraw.maxEnergy,
    block: 0,
    phase: "enemy_turn",
  };
}

export function enemyTurn(state: GameState): GameState {
  let newHp = state.hp;
  let newBlock = state.block;

  for (let i = 0; i < state.enemies.length; i++) {
    const enemy = state.enemies[i];
    if (enemy.intent === "attack") {
      const damageAfterBlock = Math.max(0, enemy.damage - newBlock);
      newBlock = Math.max(0, newBlock - enemy.damage);
      newHp = newHp - damageAfterBlock;
    }
  }

  const defeated = Math.max(0, newHp) <= 0;

  return {
    ...state,
    hp: Math.max(0, newHp),
    block: newBlock,
    phase: defeated ? "defeat" : "player_turn",
  };
}
