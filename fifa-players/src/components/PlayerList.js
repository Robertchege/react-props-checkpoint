import React from "react";

// Import the Player component
import Player from "./Player";

// Import the array of player data
import playersData from "../players";

// Functional component for displaying a list of players
const PlayerList = () => {
  return (
    // Styling for centering and wrapping the player cards
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {/* Map through the player data and render a Player component for each player */}
      {playersData.map((player, index) => (
        <Player
          key={index} // Key prop is set to the index, ensure each item has a unique key
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))}
    </div>
  );
};

// Export the PlayerList component for use in other parts of the application
export default PlayerList;