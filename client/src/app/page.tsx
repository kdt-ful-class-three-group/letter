'use client';
import { useRouter } from "next/navigation";
import { Button } from "@/components/rougela/intro/common/Button";

const pages = ['yadon', 'rougela', 'squirtle', 'lizard', 'monodo', 'raffle', 'marktang', 'golem'];

const pageLabels: Record<string, string> = {
  yadon: '야돈',
  rougela: '루주라',
  squirtle: '꼬부기',
  lizard: '리자몽',
  monodo: '모노두',
  raffle: '라플레시아',
  marktang: '마크탕',
  golem: '골렘'
};

export default function Page() {
  const router = useRouter();

  const handleClick = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <div>
      {pages.map((page) => (
        <Button 
          key={page}
          onClick={() => handleClick(page)}
          children={pageLabels[page]}
        />
      ))}
    </div>
  );
}