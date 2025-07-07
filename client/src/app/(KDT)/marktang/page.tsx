'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function MarktangPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/marktang/0');
  }, []);

  return null;
}