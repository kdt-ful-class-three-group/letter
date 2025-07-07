'use client';
import { useRouter } from "next/navigation";
import { Button } from "@/components/rougela/intro/common/Button";

const pages = ['yadon', 'rougela', 'squirtle', 'lizard', 'monodo', 'raffle', 'marktang', 'golem', 'js'];

const pageLabels: Record<string, string> = {
  yadon: '야돈',
  rougela: '루주라',
  squirtle: '꼬부기',
  lizard: '리자몽',
  monodo: '모노두',
  raffle: '라플레시아',
  marktang: '마크탕',
  golem: '골렘',
  js:'팽도리'
};

export default function Page() {
  const router = useRouter();

  const handleClick = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-3 gap-x-16 gap-y-12 p-8 justify-items-center">
        {pages.map((page) => (
          <Button 
            key={page}
            onClick={() => handleClick(page)}
            className="w-36 h-16 text-lg font-semibold bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            {pageLabels[page]}
          </Button>
        ))}
      </div>
    </div>
  );
}