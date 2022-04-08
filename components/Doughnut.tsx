import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

// 50% token Burn
// 20% liquidity
// 15% token for sale
// 5% private & presale
// 5% team and founder
// 2% 
// 2% charity
// 1% airdrop
const data = {
    labels: [
        'token Burn',
        'liquidity',
        'token for sale',
        'private & presale',
        'team and founder',
        'marketing',
        'charity',
        'airdrop'
    ],
datasets: [{
  data: [50, 20, 15, 5, 5, 2, 2, 1],
  

  backgroundColor: [
  '#00e600',
  '#ffff4d',
  '#008000'
  ],
  hoverBackgroundColor: [
  '#00b300',
  '#ffff00',
  '#FFCE56'
  ]
}],
options: {
    responsive: true,
    legend: {
        position: 'top',
    },
    title: {
        display: true,
        text: 'Chart.js Doughnut Chart'
    },
    animation: {
        animateScale: true,
        animateRotate: true
    }
},
scales: {
    xAxes: [{
        beginAtZero: true,
        ticks: {
           autoSkip: false
        }
    }]
  }
};



export default function DoughnutComp () {

    return (
        <div className=''>
          {/* <h2>Doughnut Example</h2> */}
          <Doughnut className='text-white'
             data={data}
             width={400}
             height={400}
             
          />
        
        
        </div>
        );
} 