// leaderboard.js

function fetchLeaderboardData() {
    return [
        { rank: 1, name: "Player 1", score: 100 },
        { rank: 2, name: "Player 2", score: 90 },
        { rank: 3, name: "Player 3", score: 80 },
    ];
}

function generateLeaderboardHTML(leaderboardData) {
    var leaderboardHTML = "<table>";
    leaderboardHTML += "<tr><th>Rank</th><th>Name</th><th>Score</th></tr>";
    leaderboardData.forEach(function(player) {
        leaderboardHTML += "<tr><td>" + player.rank + "</td><td>" + player.name + "</td><td>" + player.score + "</td></tr>";
    });
    leaderboardHTML += "</table>";
    return leaderboardHTML;
}

function displayLeaderboard() {
    var leaderboardContainer = document.getElementById("leaderboard-container");
    var leaderboardData = fetchLeaderboardData();
    var leaderboardHTML = generateLeaderboardHTML(leaderboardData);
    leaderboardContainer.innerHTML = leaderboardHTML;
}

window.onload = displayLeaderboard;
