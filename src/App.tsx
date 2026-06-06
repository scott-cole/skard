import { useState } from "react";
import { drawCard, playCard, endTurn, enemyTurn } from "./game.ts";
import type { GameState } from "./types.ts";
import StartScreen from "./app/StartScreen";
import { BattleScreen } from "./app/BattleScreen";

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
        {
          id: "defend_1",
          name: "block",
          kind: "block",
          cost: 1,
          block: 5,
        },
        {
          id: "defend_2",
          name: "block",
          kind: "block",
          cost: 1,
          block: 5,
        },
        {
          id: "defend_3",
          name: "block",
          kind: "block",
          cost: 1,
          block: 5,
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
          name: "Evil EE",
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
  function handlePlayCard(handIndex: number) {
    setState((prev) => {
      if (!prev || prev.phase !== "player_turn") return prev;
      return playCard(prev, handIndex, 0);
    });
  }

  function handleEndTurn() {
    setState((prev) => {
      if (!prev) return prev;
      const afterEnd = endTurn(prev);
      const afterEnemy = enemyTurn(afterEnd);
      return afterEnemy;
    });
  }

  if (!state) return <StartScreen onStart={startBattle} />;

  if (state.phase === "victory") {
    return (
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", minHeight: "100vh", color: "#fff",
        fontFamily: "inherit", gap: 24,
      }}>
        <h1 style={{ fontSize: "4rem", margin: 0 }}>You Win!</h1>
        <button onClick={startBattle} style={{
          padding: "14px 56px", fontSize: "1.2rem", fontWeight: "bold",
          border: "none", background: "#fffef7", color: "#333",
          cursor: "pointer", fontFamily: "inherit", textTransform: "uppercase",
        }}>
          Play Again
        </button>
      </div>
    );
  }

  if (state.phase === "defeat") {
    return (
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", minHeight: "100vh", color: "#fff",
        fontFamily: "inherit", gap: 24,
      }}>
        <h1 style={{ fontSize: "4rem", margin: 0 }}>Defeated</h1>
        <button onClick={startBattle} style={{
          padding: "14px 56px", fontSize: "1.2rem", fontWeight: "bold",
          border: "none", background: "#fffef7", color: "#333",
          cursor: "pointer", fontFamily: "inherit", textTransform: "uppercase",
        }}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <BattleScreen
      state={state}
      onPlayCard={handlePlayCard}
      onEndTurn={handleEndTurn}
    />
  );
}

export default App;
