'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [page, setPage] = useState<string | null>('0');

  useEffect(() => {
    localStorage.setItem('page', '3');
    setPage(localStorage.getItem('page'));
  }, []);


  return (
    <div className="flex justify-center items-start font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-around h-[70vh]">
        <h1 className="text-3xl font-bold flex flex-col items-center gap-5">
          <p>그리고 계획 세우는 것이 정말 중요합니다.</p>
          <p>나는 계획적인 사람이 아닌데..</p>
          <p>이런 생각 말고, 일단 계획을 세우세요.</p>
          <p>그러다 보면 익숙해 져요.</p>
        </h1>
        <div className="flex flex-row gap-20">
        <button 
        className="text-5xl font-bold cursor-pointer"         
        onClick={() => {
          router.push(`/${String(Number(page) - 1)}`);
        }}>◀</button>
        <button 
        className="text-5xl font-bold cursor-pointer"         
        onClick={() => {
              router.push(`/${String(Number(page) + 1)}`);
        }}>▶</button>
        </div>
      </main>
    </div>
  );
}
