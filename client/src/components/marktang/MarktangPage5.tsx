

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MarktangPage5() {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('page', '5');
  }, []);

  return (
    <div className="flex justify-center items-start font-[family-name:var(--font-geist-sans)] relative">
      <Image src="/page.png" alt="사진" width={800} height={450} />
      <button 
        onClick={() => router.push('/good')}
        className="bg-red-700 border border-solid border-black px-10 py-5 rounded-[20px] absolute bottom-10 left-[5%] hover:bg-red-900 cursor-pointer">
        공욱재를 믿기
      </button>
      <button 
        onClick={() => router.push('/notgood')}
        className="bg-red-700 border border-solid border-black px-10 py-5 rounded-[20px] absolute bottom-10 right-[5%] hover:bg-red-900 cursor-pointer">
        유튜브를 믿기
      </button>
    </div>
  );
}