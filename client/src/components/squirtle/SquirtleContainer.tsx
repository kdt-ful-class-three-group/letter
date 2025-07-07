'use client';
import React, { useState } from 'react';
// import './Squirtle.css';

type Message = {
  content: string;
};

const defaultMessages: Message[] = [
  { content: '꼬부기 계속 클릭하기' },
  { content: '오기 전날 까지 걱정들로 생각이 많았는데 막상 해보니 그만큼 어려운 건 아니었음' },
  { content: '처음엔 혼자서만 모르는 것 같아 질문하기 그랬는데, 주변사람들에게 바로바로 물어보는게 오히려 빠르게 해결 가능' },
  { content: '무슨 일이든 그냥 해보는 걸 추천, 해야하는 일이면 어쨌든 언젠간 하게 되어있음, 그렇다면 빠르게 시작하는 게 이득이라고 생각함' },
  { content: '기록을 자세하게 하는 게 좋음, 학습 부분의 기록도 좋지만 진행과정 기록이 도움이 되었음. 나중에 다른 작업할 때 참고하기 좋음' },
  { content: '화이팅!' }
];

export const SquirtleContainer = () => {
  const [messages] = useState<Message[]>(defaultMessages);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    if (currentIndex < messages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log('카드 완료');
    }
  };

  const getCharacterLeft = () => {
    if (messages.length === 0) return '10%';
    const maxRight = 75;
    const step = maxRight / (messages.length - 1);
    const newStep = 10 + currentIndex * step;
    return `${newStep}%`;
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative">
      <section className="w-4/5 h-4/5 shadow-lg rounded-2xl flex justify-center items-center px-8 text-xl">
        <p>{messages[currentIndex]?.content || ''}</p>
      </section>
      <div
        id="charac"
        className="absolute transition-all duration-300 ease-in-out cursor-pointer"
        style={{ left: getCharacterLeft(), top: '3%' }}
        onClick={handleClick}
      >
        <img src="/squirtle.png" alt="squirtle" className="w-[50px]" />
      </div>
    </div>
  );
};

export default SquirtleContainer;