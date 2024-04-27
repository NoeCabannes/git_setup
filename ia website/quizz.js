document.getElementById('submit-btn').addEventListener('click', function() {
    var answer1 = document.querySelector('input[name="question1"]:checked');
    var answer2 = document.querySelector('input[name="question2"]:checked');
    var answer3 = document.querySelector('input[name="question3"]:checked');
    var answer4 = document.querySelector('input[name="question4"]:checked');
    var answer5 = document.querySelector('input[name="question5"]:checked');
    var answer6 = document.querySelector('input[name="question6"]:checked');
    var resultContainer = document.getElementById('result');
    var correctAnswers = 0;

    if (answer1 && answer1.value === 'a') {
      correctAnswers++;
      showFeedback(answer1, true);
    } else if (answer1) {
      showFeedback(answer1, false);
    }

    if (answer2 && answer2.value === 'a') {
      correctAnswers++;
      showFeedback(answer2, true);
    } else if (answer2) {
      showFeedback(answer2, false);
    }

    if (answer3 && answer3.value === 'b') {
      correctAnswers++;
      showFeedback(answer3, true);
    } else if (answer3) {
      showFeedback(answer3, false);
    }

    if (answer4 && answer4.value === 'b') {
      correctAnswers++;
      showFeedback(answer4, true);
    } else if (answer4) {
      showFeedback(answer4, false);
    }

    if (answer5 && answer5.value === 'c') {
      correctAnswers++;
      showFeedback(answer5, true);
    } else if (answer5) {
      showFeedback(answer5, false);
    }

    if (answer6 && answer6.value === 'c') {
      correctAnswers++;
      showFeedback(answer6, true);
    } else if (answer6) {
      showFeedback(answer6, false);
    }

    animateQuestions();
    animateButton();

    setTimeout(function() {
      resultContainer.style.opacity = '1';
      resultContainer.textContent = 'Vous avez ' + correctAnswers + ' sur 6 au Quiz.';
    }, 500);
  });

  function showFeedback(answer, isCorrect) {
    if (isCorrect) {
      answer.parentElement.classList.add('correct');
    } else {
      answer.parentElement.classList.add('incorrect');
    }
  }

  function animateQuestions() {
    var questions = document.querySelectorAll('.question');
    questions.forEach(function(question) {
      question.style.transform = 'translateX(-20px)';
      setTimeout(function() {
        question.style.transform = 'translateX(0)';
      }, 300);
    });
  }

  function animateButton() {
    var button = document.getElementById('submit-btn');
    button.style.transform = 'translateY(20px)';
    setTimeout(function() {
      button.style.transform = 'translateY(0)';
    }, 300);
  }