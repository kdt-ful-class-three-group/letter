'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MarktangPage1() {
  const router = useRouter();
  const [page, setPage] = useState('1');

  useEffect(() => {
    localStorage.setItem('page', '1');
    setPage('1');
  }, []);

  return (
    <div className="flex justify-center items-start font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-around h-[70vh]">
        <h1 className="text-3xl font-bold flex flex-col items-center gap-5">
          <p>자바 필요하죠</p>
          <p>근데 어차피 언어는 일맥상통하는게 있어요</p>
          <p>지금 배울 것, 앞으로 배울 것</p>
          <p>사용하는 법을 배우지 말고, 이해하는 법을 배우면,</p>
          <p>어떤 언어라도 금방 배우실 수 있을 거에요.</p>
        </h1>
        <div className="flex flex-row gap-20">
          <button
            className="text-5xl font-bold cursor-pointer"
            onClick={() => {
              router.push(`/0`);
            }}
          >
            ◀
          </button>
          <button
            className="text-5xl font-bold cursor-pointer"
            onClick={() => {
              router.push(`/2`);
            }}
          >
            ▶
          </button>
        </div>
      </main>
    </div>
  );
}