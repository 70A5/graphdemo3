"use client"

import { BarChart } from '@tremor/react';
import { LineChart } from '@tremor/react';
import { DonutChart } from '@tremor/react';
import { BadgeDelta, Card } from '@tremor/react';
import { AreaChart } from '@tremor/react';


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
    name: 'Snacks en Zoetwaren',
    'Number of threatened species': 2488,
  },
  {
    name: 'Kaas en Zuivel',
    'Number of threatened species': 1445,
  },
  {
    name: 'Vleeswaren',
    'Number of threatened species': 743,
  },
  {
    name: 'Sap en Dranken',
    'Number of threatened species': 281,
  },
  {
    name: 'Koffie en Thee',
    'Number of threatened species': 251,
  },
  {
    name: 'Groente',
    'Number of threatened species': 232,
  },
  {
    name: 'Fruit',
    'Number of threatened species': 98,
  },
  {
    name: 'Brood en Banket',
    'Number of threatened species': 232,
  },
  {
    name: 'Broodbeleg',
    'Number of threatened species': 98,
  },
];

const chartdata3 = [
  {
    name: 'Snacks B.V.',
    'Snackgroothandel': 2488,
  },
  {
    name: 'Snackgigant B.V.',
    'Snackgroothandel': 2488,
  },
  {
    name: 'Sap en Dranken B.V.',
    'Dranken': 1445,
  },
  {
    name: 'GetrankeMeister B.V.',
    'Dranken': 945,
  },
  {
    name: 'Slagerij uden B.V.',
    'Slagerij': 743,
  },
  {
    name: 'VleeswarenNL B.V',
    'Slagerij': 250,
  },
  {
    name: 'Groente en Fruit B.V.',
    'Groenteboer': 281,
  },
  {
    name: 'De Fruitige Fruitmand B.V.',
    'Groenteboer': 852,
  },
  {
    name: 'Ambachtelijke bakkerij B.V.',
    'Bakkerij': 251,
  },
  {
    name: 'De Zoute Zeeuwse Bolus B.V.',
    'Bakkerij': 251,
  }
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
    <div className='bg-wp-2 flex h-screen p-5'>
      <div className='w-1/3'>
        <h1 className='font-medium text-3xl'>
          Statistieken
        </h1>
      </div>
      <div className='w-2/3'>
        <div className='grid grid-cols-3 gap-5'>
          <div className='items-center bg-blur-xl bg-white/60 backdrop-blur-md shadow-lg ring-1 ring-black/5 rounded-2xl p-3'>
            <div className=''>
              <LineChart
                className=''
                data={chartdata}
                index="date"
                categories={['SemiAnalysis', 'The Pragmatic Engineer']}
                colors={['emerald', 'indigo']}
                valueFormatter={dataFormatter}
                yAxisWidth={60}
                onValueChange={(v) => console.log(v)}
                showAnimation={true}
                animationDuration={1500}
                />
            </div>
          </div>
          <div className='items-center bg-blur-xl bg-white/60 backdrop-blur-md shadow-lg ring-1 ring-black/5 rounded-2xl p-3'>
          <BarChart
              data={chartdata3}
              index="name"
              categories={['Number of threatened species']}
              colors={['red']}
              valueFormatter={dataFormatter}
              yAxisWidth={48}
              onValueChange={(v) => console.log(v)}
              showAnimation={true}
              animationDuration={1500}
              />
          </div>
          <div className='items-center bg-blur-xl bg-white/60 backdrop-blur-md shadow-lg ring-1 ring-black/5 rounded-2xl p-3'>
            <DonutChart
              data={datahero}
              variant="pie"
              valueFormatter={dataFormatter}
              onValueChange={(v) => console.log(v)}
              showAnimation={true}
              animationDuration={1500}
              />
            <Card className="mx-auto max-w-sm">
              <div className="flex items-center justify-between">
                <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Actieve klanten</h4>
                <BadgeDelta
                  deltaType="moderateIncrease"
                  isIncreasePositive={true}
                  size="xs"
                  >
                  +9.3%
                </BadgeDelta>
              </div>
              <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">23</p>
            </Card>
          </div>
        </div>
        <div className='mt-5 flex flex-row'>
          <div className='items-center bg-blur-xl mr-2.5 w-2/3 bg-white/60 backdrop-blur-md shadow-lg ring-1 ring-black/5 rounded-2xl p-3'>
            <h1 className='text-2xl text-gray-600 font-semibold'>
              Leveranciers per categorie
            </h1>
            <div className='text-tremor-brand-inverted'>
            <BarChart
              data={chartdata3}
              index="name"
              categories={['Snackgroothandel', 'Dranken', 'Slagerij', 'Groenteboer', 'Bakkerij']}
              colors={['orange', 'green', 'cyan', 'violet', 'rose']}
              valueFormatter={dataFormatter}
              yAxisWidth={48}
              onValueChange={(v) => console.log(v)}
              showAnimation={true}
              animationDuration={1500}
              />
            </div>
          </div>
          <div className='items-center bg-blur-xl ml-2.5 w-1/3 bg-white/60 backdrop-blur-md shadow-lg ring-1 ring-black/5 rounded-2xl p-3'>
            <div className='text-tremor-brand-inverted'>
            <BarChart
              data={chartdata2}
              index="name"
              categories={['Number of threatened species']}
              colors={['red']}
              valueFormatter={dataFormatter}
              yAxisWidth={48}
              onValueChange={(v) => console.log(v)}
              showAnimation={true}
              animationDuration={1500}
              />
            </div>
          </div>   
        </div>
      </div>
    </div>

  );
}