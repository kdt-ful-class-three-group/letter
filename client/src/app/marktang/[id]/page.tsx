

'use client';

import { useParams } from 'next/navigation';
import MarktangPage0 from '@/components/marktang/MarktangPage0';
import MarktangPage1 from '@/components/marktang/MarktangPage1';
import MarktangPage2 from '@/components/marktang/MarktangPage2';
import MarktangPage3 from '@/components/marktang/MarktangPage3';
import MarktangPage4 from '@/components/marktang/MarktangPage4';
import MarktangPage5 from '@/components/marktang/MarktangPage5';
import MarktangResultGood from '@/components/marktang/good';
import MarktangResultBad from '@/components/marktang/bad';

export default function MarktangDynamicPage() {
  const params = useParams();
  const id = params?.id;

  switch (id) {
    case '0': return <MarktangPage0 />;
    case '1': return <MarktangPage1 />;
    case '2': return <MarktangPage2 />;
    case '3': return <MarktangPage3 />;
    case '4': return <MarktangPage4 />;
    case '5': return <MarktangPage5 />;
    case 'good': return <MarktangResultGood />;
    case 'notgood': return <MarktangResultBad />;
    default: return <div>페이지를 찾을 수 없습니다.</div>;
  }
}