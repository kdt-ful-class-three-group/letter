

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MarktangPage3() {
  const router = useRouter();
  const [page, setPage] = useState('3');

  useEffect(() => {
    localStorage.setItem('page', '3');
    setPage('3');
  }, []);

  return (
    <div className="flex justify-center items-start font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-around h-[70vh]">
        <h1 className="text-3xl font-bold flex flex-col items-center gap-5">
          <p>또 아이디어는 떠오르는 족족 메모해요</p>
          <p>개발 실력은 하면 할수록 늘지만</p>
          <p>그 때 떠오른 아이디어는 그 순간만의 아이디어니까요.</p>
          <p>또 아이디어를 메모하면서</p>
          <p>아이디어가 한번 더 정리된답니다.</p>
        </h1>
        <div className="flex flex-row gap-20">
          <button
            className="text-5xl font-bold cursor-pointer"
            onClick={() => {
              router.push(`/marktang/2`);
            }}
          >
            ◀
          </button>
          <button
            className="text-5xl font-bold cursor-pointer"
            onClick={() => {
              router.push(`/marktang/4`);
            }}
          >
            ▶
          </button>
        </div>
      </main>
    </div>
  );
}