let totalCorrect = 0;
let questionsAnswered = 0;

function checkAnswer(selectedOption, isCorrect) {

    const parentGrid = selectedOption.parentElement;
    const allOptions = parentGrid.querySelectorAll(".option");

    allOptions.forEach(option => {
        option.classList.add("disabled");

        if (option.getAttribute("onclick")?.includes("true")) {
            option.classList.add("correct");
        }
    });

    if (isCorrect) {
        totalCorrect++;
    } else {
        selectedOption.classList.remove("correct");
        selectedOption.classList.add("wrong");
    }

    questionsAnswered++;

    if (questionsAnswered === 10) {

        setTimeout(() => {

            document.getElementById("quiz-box").style.display = "none";

            document.getElementById("correct-count").innerText = totalCorrect;

            document.getElementById("result-box").style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 600);

    }

}
