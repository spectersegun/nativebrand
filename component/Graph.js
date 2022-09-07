import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { UserData } from './Data';
import Chart from 'chart.js/auto';

export default function Graph() {
  const userData = {
    labels: UserData.map(data => data.year),
    datasets: [
      {
        label: 'users gained',
        data: UserData.map(data => data.details),
        // backgroundColor: ['#8D08F5', '#3DBF91', '#1255B3', '#FF6600'],
        borderColor: ['#8D08F5', '#3DBF91', '#1255B3', '#FF6600'],
        circumference: 100 * Math.PI,
        borderJoinStyle: 'bevel',
        borderAlign: 'inner',
        weight: 2,
        borderWidth: 0,
        // offset: -40,
        weight: 40,
        // spacing: -40,
        radius: 132,
        cutoutPercentage: 70,
        borderWidth: 0,
        fillStyle: '#8D08F5',
      },
    ],
  };

  let options = {
    responsive: true,
    cutout: 95,
    clip: 40,
    hoverOffset: 0,

    animation: {
      duration: 1500,
      easing: 'easeInOutBack',
      delay: 500,
    },

    elements: {
      arc: {
        radius: 8,
        color: ['red', 'green', 'blue', '#FF6600'],
        rotation: 100,
        backgroundColor: ['#8D08F5', '#3DBF91', '#1255B3', '#FF6600'],
        angle: 'circumference',
        borderColor: 'black',
        borderAlign: 'inner',
        borderRadius: 50,
        borderJoinStyle: 'round',
        spacing: -40,
      },
    },

    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        display: true,
        labels: {
          color: 'rgba(0, 0, 0, 0.75)',
          usePointStyle: true,
          pointStyle: 'circle',
          marginBotton: '160px',
          hoverRadius: 4,
          padding: 30,
          font: {
            size: 16,
            family: 'Lato',
          },
        },
      },
    },
  };

  return (
    <>
      <div className="doughnut-wrapper">
        <Doughnut
          data={userData}
          options={options}
          style={{ padding: '10px' }}
        />
        <div className="summary-inner">
          <h5>$1.2m</h5>
          <p>12 projects completed</p>
        </div>
      </div>
    </>
  );
}
