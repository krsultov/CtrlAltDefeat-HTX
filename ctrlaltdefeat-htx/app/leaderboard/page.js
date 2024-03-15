// leaderboard/page.js
import React from 'react';
import { useClient } from 'next/client'; 

function LeaderboardPage() {
  // Wrap your component with useClient
  
  const [leaderboard, setLeaderboard] = useState([
    { id: 1, name: 'Player 1', score: 100 },
    { id: 2, name: 'Player 2', score: 90 },
    { id: 3, name: 'Player 3', score: 80 },
    { id: 4, name: 'Player 4', score: 70 },
    { id: 5, name: 'Player 5', score: 60 }
  ]);
  useEffect(() => {
    // This code will only run in the client-side environment
    setPathname(window.location.pathname);
  }, []); 
  return (
    <div className="LeaderboardPage">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderboardPage;