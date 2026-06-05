import { useState } from "react";
import { drawCard } from "./game.ts";
import type { GameState } from "./types.ts";
import StartScreen from "./app/StartScreen";

function App() {
  const [state, setState] = useState<GameState | null>(null);

  function startBattle() {
    const initialState: GameState = {
      phase: "player_turn",
      hand: [],
      deck: [
        {
          id: "strike_1",
          name: "attack",
          kind: "attack",
          cost: 1,
          damage: 6,
        },
        {
          id: "strike_2",
          name: "attack",
          kind: "attack",
          cost: 1,
          damage: 6,
        },
        {
          id: "strike_3",
          name: "attack",
          kind: "attack",
          cost: 1,
          damage: 6,
        },
        {
          id: "strike_4",
          name: "attack",
          kind: "attack",
          cost: 1,
          damage: 6,
        },
        {
          id: "strike_5",
          name: "attack",
          kind: "attack",
          cost: 1,
          damage: 6,
        },
      ],
      discard: [],
      energy: 3,
      maxEnergy: 3,
      block: 0,
      hp: 80,
      maxHp: 80,
      enemies: [
        {
          id: 1,
          name: "Goblin",
          hp: 20,
          maxHp: 20,
          intent: "attack",
          damage: 6,
        },
      ],
    };
    const withHand = drawCard(initialState, 5);
    setState(withHand);
  }
  if (state) return <div>{JSON.stringify(state)}</div>;
  return <StartScreen onStart={startBattle} />;
}

export default App;
