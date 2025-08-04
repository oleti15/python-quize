document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quiz-form");
  const resultBox = document.getElementById("result");
  const toggle = document.getElementById("toggle-dark");

  const correctAnswers = {
    q1: "C",
    q2: "B",
    q3: "B",
    q4: "C",
    q5: "D",
    q6: "B"
  };

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    let score = 0;
    let total = Object.keys(correctAnswers).length;

    for (let question in correctAnswers) {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === correctAnswers[question]) {
        score++;
      }
    }

    resultBox.innerHTML = `
      <h2>Your Score: ${score} / ${total}</h2>
      <p>${score === total ? "🎉 Excellent! All correct." : "👍 Keep practicing and try again!"}</p>
    `;
  });

  toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });
});
