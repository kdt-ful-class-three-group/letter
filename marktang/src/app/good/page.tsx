'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();


  return (
    <div className="flex justify-center items-center font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold">취직에 성공하셨습니다.</h1>
    </div>
  );
}
