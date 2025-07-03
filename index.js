const realAnswer = [9, 5, 8, 7, 1, 4, 3, 2, 6];
function checkAnswer(userAnswer) {
  const correct = realAnswer;
  if (correct) {
    return userAnswer.join("") === correct.join("");
  }
  return false;
}

function submitAnswer(answer) {
  if (checkAnswer(answer)) {
    console.log("🎉 정답입니다! 수료 자격을 얻으셨습니다! 자바 꼭 하세요...");
    return true;
  } else {
    console.log("❌ 틀렸습니다. 다시 시도해보세요.");
    return false;
  }
}
window.checkMyAnswer = function (answer) {
  return submitAnswer(answer);
};
function getHint() {
  return "자바스크립트 실행 컨텍스트를 이해하면 풀립니다.";
}
console.log("💡 답 : 콘솔에서 checkMyAnswer([9,5,8,...]) 형태로 입력");
console.log("💡 힌트 : getHint() 입력");

document.addEventListener("DOMContentLoaded", function () {
  const elementsToProtect = document.querySelectorAll("h1, p, .wrap span");

  elementsToProtect.forEach((element) => {
    element.addEventListener("selectstart", function (e) {
      e.preventDefault();
      return false;
    });

    element.addEventListener("dragstart", function (e) {
      e.preventDefault();
      return false;
    });

    element.style.userSelect = "none";
    element.style.webkitUserSelect = "none";
    element.style.mozUserSelect = "none";
    element.style.msUserSelect = "none";
    element.draggable = false;
  });
});
