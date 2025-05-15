var saveFile = JSON.parse(localStorage.saveFile || '{"username": "User","levelsFinished": 0,"circuits": {}}');

function checkIfCorrect() {
    if (document.querySelector('input[name="question1"]:checked').value == "Switch") {
        document.getElementById("solution").innerHTML = `
            <div id="solutionExplain">
                <h3>Correct!</h3>
                <p>It is a Switch Gate because it's node is on the right.</p>
            </div>
            <button onclick="next()">Next</button>
        `;
        document.location.href = "#solution";
    } else {
        document.getElementById("solution").innerHTML = `
            <div id="solutionExplain">
                <h3>Incorrect</h3>
                <p>Try Again</p>
            </div>
        `
        document.location.href = "#solution";
    }
}

function next() {
    if (saveFile.levelsFinished < 1) {
        saveFile.levelsFinished = 1;
        localStorage.saveFile = JSON.stringify(saveFile)
    }; 
    window.location.href = 'introToTruthTable.html';
}