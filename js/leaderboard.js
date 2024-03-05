function handleLeaderboard(leaderboard) {
    let html = "";
    let leaderboardArray = leaderboard['leaderboard'];
    let index= 1;
    for (const entry of leaderboardArray) {
        var time = Math.round(entry['completionTime'] / 60000);
        html += "<tr>" +
            "<td>" + index + ".  " + entry['player'] + "</td>" +
            "<td>" + entry['score'] + "</td>" +
            "<td>" + time + " minutes" + "</td>" +
            "</tr>";
        index++;
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
