'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [page, setPage] = useState<string | null>('0');

  useEffect(() => {
    localStorage.setItem('page', '1');
    setPage(localStorage.getItem('page'));
  }, []);


  return (
    <div className="flex justify-center items-start font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-around h-[70vh]">
        <h1 className="text-3xl font-bold flex flex-col items-center gap-5">
          <p>혹시</p>
          <p>"왜 자바 안하지?, 어차피 다 자바하는데.."</p>
          <p>이런 생각 생각하시나요?</p>
        </h1>
        <div className="flex flex-row gap-20">
        <button 
        className="text-5xl font-bold cursor-pointer"         
        onClick={() => {
          router.push(`/`);
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
