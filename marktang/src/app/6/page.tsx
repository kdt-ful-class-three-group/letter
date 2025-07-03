'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [page, setPage] = useState<string | null>('0');

  useEffect(() => {
    localStorage.setItem('page', '5');
    setPage(localStorage.getItem('page'));
  }, []);


  return (
    <div className="flex justify-center items-start font-[family-name:var(--font-geist-sans)]">
      <Image src="/page.png" alt="사진" width={800} height={450}/>
      <button 
      onClick={() => router.push('/good')}
      className="bg-red-700 border-solid border-[1px] px-10 py-5 rounded-[20px] absolute bottom-10 left-105 hover:bg-red-900 cursor-pointer">공욱재를 믿기</button>
      <button 
      onClick={() => router.push('/notgood')}
      className="bg-red-700 border-solid border-[1px] px-10 py-5 rounded-[20px] absolute bottom-10 right-105 hover:bg-red-900 cursor-pointer">유튜브를 믿기</button>
    </div>
  );
}
