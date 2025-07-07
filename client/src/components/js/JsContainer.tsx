'use client';
import React, { useEffect } from 'react';

export const JsContainer = () => {
  useEffect(() => {
    const realAnswer = [9, 5, 8, 7, 1, 4, 3, 2, 6];
    function checkAnswer(userAnswer: number[]) {
      return userAnswer.join('') === realAnswer.join('');
    }

    function submitAnswer(answer: number[]) {
      if (checkAnswer(answer)) {
        console.log("🎉 정답입니다! 수료 자격을 얻으셨습니다! 자바 꼭 하세요...");
        return true;
      } else {
        console.log("❌ 틀렸습니다. 다시 시도해보세요.");
        return false;
      }
    }

    (window as any).checkMyAnswer = function (answer: number[]) {
      return submitAnswer(answer);
    };
    (window as any).getHint = function () {
      return "자바스크립트 실행 컨텍스트를 이해하면 풀립니다.";
    };

    console.log("💡 답 : 콘솔에서 checkMyAnswer([9,5,8,...]) 형태로 입력");
    console.log("💡 힌트 : getHint() 입력");

    const elementsToProtect = document.querySelectorAll("h1, p, .wrap span");
    elementsToProtect.forEach((element) => {
      element.addEventListener("selectstart", (e) => {
        e.preventDefault();
        return false;
      });
      element.addEventListener("dragstart", (e) => {
        e.preventDefault();
        return false;
      });

      if (element instanceof HTMLElement) {
        element.style.userSelect = "none";
        element.draggable = false;
      }
    });
  }, []);

  return (
    <div className="wrap">
      <h1>다음 Promise 코드의 실행 결과를 설명해주세요</h1>
      <p>이걸 푼 당신은 수료 할 자격이 생깁니다.. 콘솔 보세요</p>
      <p>setTimeout(() =&gt; {'{'}</p>
      <span>console.log('1')</span><br />
      <span>setTimeout(() =&gt; {'{'}console.log('2'){'})'}</span><br />
      <span>Promise.resolve().then(() =&gt; console.log('3'))</span><br />
      <span>console.log('4')</span>
      <p>{'}'}</p>
      <p>Promise.resolve().then(() =&gt; {'{'}</p>
      <span>console.log('5')</span><br />
      <span>setTimeout(() =&gt; {'{'}console.log('6'){'}'})</span><br />
      <span>Promise.resolve().then(() =&gt; console.log('7'))</span><br />
      <span>console.log('8')</span>
      <p>{'}'}</p>
      <p>console.log('9')</p>
    </div>
  );
};

export default JsContainer;