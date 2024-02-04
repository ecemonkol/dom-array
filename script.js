const teams = [
    {
        name: "Fries"
    },
    {
        name: "Michu"
    },
    {
        name: "Mold"
    },
    {
        name: "Swan"
    },
    {
        name: "Kermit"
    },
    {
        name: "Ayran"
    },
    {
        name: "Kebab"
    }

]

// add random score to Each.

teams.forEach(item => item.score = Math.floor(Math.random() * 100));

// Accessing the first element with class 'teamList'
const teamList = document.querySelector('.teamList');
const scoreList = document.querySelector('.scoreList');

// Loop through the teams array and create a <p> element for each team name
teams.forEach(teams => {
    const listItem = document.createElement('p');
    listItem.textContent = teams.name;
    teamList.appendChild(listItem);
});

// Loop through the teams array and create a <p> element for each team score
teams.forEach(teams => {
    const teamScore = document.createElement('p');
    teamScore.textContent = teams.score;
    scoreList.appendChild(teamScore);
    
});

console.log(teamList);
console.log(scoreList);


const toggleButton = document.querySelector('#toggle')
let isScoresVisible = true;


function toggleShowHide() {
    const scoreList = document.querySelector('.scoreList');
    if (isScoresVisible) {
        scoreList.style.display = 'none';
    } else {
        scoreList.style.display = 'grid';
    }
    console.log('button clicked');
    isScoresVisible = !isScoresVisible;
}

function deleteLowestScore() {
    console.log(teams);
    teams.sort((a, b) => b.score - a.score);
    const lowest = teams[6]
    console.log(lowest)
    document.remove(lowest)
}
