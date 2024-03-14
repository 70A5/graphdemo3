"use client"

import { BarChart } from '@tremor/react';
import { LineChart } from '@tremor/react';
import { DonutChart } from '@tremor/react';

const chartdata = [
  {
    date: 'Jan 22',
    SemiAnalysis: 2890,
    'The Pragmatic Engineer': 2338,
  },
  {
    date: 'Feb 22',
    SemiAnalysis: 2756,
    'The Pragmatic Engineer': 2103,
  },
  {
    date: 'Mar 22',
    SemiAnalysis: 3322,
    'The Pragmatic Engineer': 2194,
  },
  {
    date: 'Apr 22',
    SemiAnalysis: 3470,
    'The Pragmatic Engineer': 2108,
  },
  {
    date: 'May 22',
    SemiAnalysis: 3475,
    'The Pragmatic Engineer': 1812,
  },
  {
    date: 'Jun 22',
    SemiAnalysis: 3129,
    'The Pragmatic Engineer': 1726,
  },
  {
    date: 'Jul 22',
    SemiAnalysis: 3490,
    'The Pragmatic Engineer': 1982,
  },
  {
    date: 'Aug 22',
    SemiAnalysis: 2903,
    'The Pragmatic Engineer': 2012,
  },
  {
    date: 'Sep 22',
    SemiAnalysis: 2643,
    'The Pragmatic Engineer': 2342,
  },
  {
    date: 'Oct 22',
    SemiAnalysis: 2837,
    'The Pragmatic Engineer': 2473,
  },
  {
    date: 'Nov 22',
    SemiAnalysis: 2954,
    'The Pragmatic Engineer': 3848,
  },
  {
    date: 'Dec 22',
    SemiAnalysis: 3239,
    'The Pragmatic Engineer': 3736,
  },
];


const chartdata2 = [
  {
    name: 'Amphibians',
    'Number of threatened species': 2488,
  },
  {
    name: 'Birds',
    'Number of threatened species': 1445,
  },
  {
    name: 'Crustaceans',
    'Number of threatened species': 743,
  },
  {
    name: 'Ferns',
    'Number of threatened species': 281,
  },
  {
    name: 'Arachnids',
    'Number of threatened species': 251,
  },
  {
    name: 'Corals',
    'Number of threatened species': 232,
  },
  {
    name: 'Algae',
    'Number of threatened species': 98,
  },
];

const datahero = [
  {
    name: 'Noche Holding AG',
    value: 9800,
  },
  {
    name: 'Rain Drop AG',
    value: 4567,
  },
  {
    name: 'Push Rail AG',
    value: 3908,
  },
  {
    name: 'Flow Steal AG',
    value: 2400,
  },
  {
    name: 'Tiny Loop Inc.',
    value: 2174,
  },
  {
    name: 'Anton Resorts Holding',
    value: 1398,
  },
]

const dataFormatter = (number: number | bigint ) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function LineChartHero() {
  return (
    <div className='bg-wp-2 h-screen'>
      <div className='w-1/3'>
        <h1 className='font-medium text-3xl'>
          Statistieken
        </h1>
      </div>
    </div>
  );
}