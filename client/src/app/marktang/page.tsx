'use client';

import { useRouter } from 'next/navigation';

export default function MarktangPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">마크탕 페이지에 오신 걸 환영합니다!</h1>
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-800"
        onClick={() => router.push('/marktang/0')}
      >
        시작하기
      </button>
    </div>
  );
}