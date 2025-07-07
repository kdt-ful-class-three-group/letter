import React, { useEffect, useState } from 'react';
import './SquirtleContainer.css';

type Message = {
  content: string;
};

const defaultMessages: Message[] = [
  { content: '안녕! 나는 꼬부기야.' },
  { content: '물총이 특기지!' },
  { content: '우리 친구하자!' }
];

const SquirtleContainer = () => {
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
    <div className="squirtle-container">
      <section>
        <p>{messages[currentIndex]?.content || ''}</p>
      </section>
      <div id="charac" style={{ position: 'absolute', left: getCharacterLeft(), transition: 'left 0.3s' }} onClick={handleClick}>
        <img src="/squirtle.png" alt="squirtle" />
      </div>
    </div>
  );
};

export default SquirtleContainer;