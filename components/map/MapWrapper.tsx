'use client'

import { IPData } from '@/types/ip';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false,
});

export default function MapWrapper({data}: {data: IPData | null}) {
  return (
    <Map data={data} />
  );
}