document.getElementById('helpButton').addEventListener('click', function() {
    var helpTab = document.getElementById('helpTab');
    helpTab.style.display = 'flex'; // This shows the help tab
});

document.querySelector('.close').addEventListener('click', function() {
    var helpTab = document.getElementById('helpTab');
    helpTab.style.display = 'none'; // This hides the help tab
});
