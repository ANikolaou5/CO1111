function handleLeaderboard(leaderboard) {
    let html = "";
    let leaderboardArray = leaderboard['leaderboard'];
    for (const entry of leaderboardArray) {
        html += "<tr>" +
            "<td>" + entry['player'] + "</td>" +
            "<td>" + entry['score'] + "</td>" +
            "<td>" + entry['completionTime'] + "</td>" +
            "</tr>";
    }
    let leaderboardElement = document.getElementById('leaderboardTable');
    leaderboardElement.innerHTML += html;
}

const TH_API_URL = "https://codecyprus.org/th/test-api/";
function getLeaderBoard(url) {
    fetch(url, {method: "GET"})
        .then(response => response.json())
        .then(json => handleLeaderboard(json));
}

let session = "ag9nfmNvZGVjeXBydXNvcmdyFAsSB1Nlc3Npb24YgICA4OnngggM";
let url = TH_API_URL + "leaderboard?sorted&session=" + session; // form url
getLeaderBoard(url);
