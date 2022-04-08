import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


const data = {
    labels: [
        'BitCoin',
        'Ethereum',
        'DodgeCoin'
    ],
datasets: [{
  data: [300, 500, 100],
  

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



export default () => (
<div className=''>
  {/* <h2>Doughnut Example</h2> */}
  <Doughnut className='text-white'
     data={data}
     width={400}
     height={400}
     
  />


</div>
);