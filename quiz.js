function checkAnswers() {
    var answers = {
        q1: "b",
        q2: "c",
        q3: "b",
        q4: "b",
        q5: "c"
    };

    var score = 0;

    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    document.getElementById("result").innerHTML =
        "You scored " +score+ " out of 5.";
}