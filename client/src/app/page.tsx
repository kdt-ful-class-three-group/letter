'use client';
import { useRouter } from "next/navigation";
import { Button } from "@/components/rougela/intro/common/Button";


export default function Page() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/rougela');
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        children="루주라"
      />
    </div>
  );
}