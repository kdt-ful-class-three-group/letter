

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MarktangPage4() {
  const router = useRouter();
  const [page, setPage] = useState('4');

  useEffect(() => {
    localStorage.setItem('page', '4');
    setPage('4');
  }, []);

  return (
    <div className="flex justify-center items-start font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-around h-[70vh]">
        <h1 className="text-3xl font-bold flex flex-col items-center gap-5">
          <p>강사님께서 하시는 강의를 들으면서</p>
          <p>왜 코딩하러 와서 글쓰기 연습을 하는지 이해가 안갈 수도 있어요.</p>
          <p>근데 시간이 지나고 나면 다 필요했던 연습이었다. 생각이 들 거에요.</p>
          <p>이게 맞나.. 생각하며 괜히 기싸움 하지 마시고,</p>
          <p>일단 믿고 따라보시기를 추천합니다!</p>
        </h1>
        <div className="flex flex-row gap-20">
          <button
            className="text-5xl font-bold cursor-pointer"
            onClick={() => {
              router.push(`/marktang/3`);
            }}
          >
            ◀
          </button>
          <button
            className="text-5xl font-bold cursor-pointer"
            onClick={() => {
              router.push(`/marktang/5`);
            }}
          >
            ▶
          </button>
        </div>
      </main>
    </div>
  );
}