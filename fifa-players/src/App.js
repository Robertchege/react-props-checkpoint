import React from "react";

// Import the PlayerList component
import PlayerList from "./PlayerList";

// Functional component for the main App
export default function App() {
  return (
    <div className="App">
      {/* Heading for the application */}
      <h1>Football Players</h1>

      {/* Render the PlayerList component */}
      <PlayerList />
    </div>
  );
}
