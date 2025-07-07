'use client';

import { useRouter } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body>
        <button
          onClick={() => router.push('/')}
          className="fixed top-4 right-4 z-50 px-4 py-2 border border-gray-400 rounded bg-white hover:bg-gray-100 text-sm"
        >
          홈
        </button>
        {children}
      </body>
    </html>
  );
}