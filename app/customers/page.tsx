"use client"

import { Badge, BadgeDelta, Button } from '@tremor/react';
import Link from 'next/link';
import { Suspense } from 'react';
import Skeleton from '../../components/skeleton';

const dataFormatter = (number: number | bigint ) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function LineChartHero() {
  return (
    <div className='bg-black h-screen'>
      <div className='w-2/3'>
        <h1 className='font-medium text-3xl'>
          Customers
        </h1>
        <Link className='bg-white rounded-md p-2 text-black' href="/dashboard">Terug</Link>
          <div className='flex w-1/2 rounded-md border justify-between border-white border-spacing-2 p-1'>
            <h1>
              Jan de Vries
            </h1>
            <p>
              Vlees en vleeswaren
            </p>
          <Badge
            color={'green'}
          >
            Actief
          </Badge>
          </div>
        <div className='flex w-1/2 rounded-md border justify-between border-white border-spacing-2 p-1'>
          <h1>
            Jan de Vries
          </h1>
          <p>
            Vlees en vleeswaren
          </p>
        <Badge
          color={'red'}
        >
          Inactief
        </Badge>
        <Button>
          Gegevens wijzigen
        </Button>
        </div>
        </div>
    </div>
  );
}