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
    const lowest = teams[teams.length - 1];
    console.log("Lowest Score Team:", lowest);

    const indexOfLowest = teams.findIndex(item => item === lowest);

    if (indexOfLowest !== -1) {
        teams.splice(indexOfLowest, 1);
        teamList.removeChild(teamList.children[indexOfLowest]);
        scoreList.removeChild(scoreList.children[indexOfLowest]);
    }

    console.log(teams);
}


function doubleScore() {
    const scoreElements = document.querySelectorAll('.scoreList p');
    console.log(scoreElements)
  

    for (let i = 0; i < scoreElements.length; i++) {
        const currentScore = parseInt(scoreElements[i].textContent);
        const doubledScore = currentScore * 2;
        scoreElements[i].textContent = doubledScore;
    }
}


function showFinalists() {
    console.log(teams);
    const sortedTeams = [...teams].sort((a, b) => b.score - a.score);

    // Clear existing elements from the DOM
    teamList.innerHTML = '';
    scoreList.innerHTML = '';

    // Display only the top 3 teams
    for (let i = 0; i < 3; i++) {
        const listItem = document.createElement('p');
        listItem.textContent = sortedTeams[i].name;
        teamList.appendChild(listItem);

        const teamScore = document.createElement('p');
        teamScore.textContent = sortedTeams[i].score;
        scoreList.appendChild(teamScore);
    }
}

const totalDisplay = document.querySelector('#total');
let totalAmount = 0;

function totalScore() {
    const scoreElements = document.querySelectorAll('.scoreList p');

    for (let i = 0; i < scoreElements.length; i++) {
        totalAmount += parseInt(scoreElements[i].textContent);
    }

    console.log(totalAmount);
   
    totalDisplay.textContent = `Total: ${totalAmount}`;
}

function sortByHighest() {
    const sortedTeams = [...teams].sort((a, b) => b.score - a.score);

    // Clear existing elements from the DOM
    teamList.innerHTML = '';
    scoreList.innerHTML = '';

    // Display all teams sorted by highest score
    for (let i = 0; i < sortedTeams.length; i++) {
        const listItem = document.createElement('p');
        listItem.textContent = sortedTeams[i].name;
        teamList.appendChild(listItem);

        const teamScore = document.createElement('p');
        teamScore.textContent = sortedTeams[i].score;
        scoreList.appendChild(teamScore);
    }
}


