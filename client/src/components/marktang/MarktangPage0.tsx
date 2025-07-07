'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MarktangPage0() {
  const router = useRouter();
  const [page, setPage] = useState('0');

  useEffect(() => {
    localStorage.setItem('page', '0');
    setPage('0');
  }, []);

  return (
    <div className="flex justify-center items-start font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-around h-[70vh]">
        <h1 className="text-3xl font-bold flex flex-col items-center gap-5">
          안녕하세요 여러분 선배 마크탕입니다.
        </h1>
        <div className="flex flex-row">
          <button
            className="text-5xl font-bold cursor-pointer"
            onClick={() => {
              router.push(`/1`);
            }}
          >
            ▶
          </button>
        </div>
      </main>
    </div>
  );
}