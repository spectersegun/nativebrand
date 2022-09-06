import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { UserData } from './Data';
import Chart from 'chart.js/auto';

export default function Graph() {
  const [userData, setUserData] = useState({
    labels: UserData.map(data => data.year),
    datasets: [
      {
        label: 'users gained',
        data: UserData.map(data => data.details),
        backgroundColor: ['#8D08F5', '#3DBF91', '#1255B3', '#FF6600'],
        borderColor: ['#8D08F5', '#3DBF91', '#1255B3', '#FF6600'],
        circumference: 320,
        borderJoinStyle: 'bevel',
        borderAlign: 'inner',
        weight: 2,
        borderWidth: 0,
        offset: -40,
        weight: 40,
        spacing: -10,
        radius: 132,
        rotation: 5,
        cutoutPercentage: 70,
      },
    ],
  });

  let options = {
    responsive: true,
    cutout: 98,
    borderRadius: 50,
    // outerStart: 70,
    clip: 40,
    borderWidth: 40,
    hoverOffset: 0,

    plugins: {
      legend: {
        position: 'right',
        // align: 'center',
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

    // tension: {
    //   duration: 1000,
    //   easing: 'linear',
    //   from: 1,
    //   to: 0,
    //   loop: true,
    // },
    // scales: {
    //   x: {
    //     display: true,
    //     grid: {
    //       display: false,
    //     },
    //     ticks: {
    //       color: '#201666',
    //       font: {
    //         family: 'GilroyBold',
    //         size: 14,
    //       },
    //       major: {
    //         enable: true,
    //       },
    //     },
    //   },
    //   y: {
    //     display: true,
    //     grid: {
    //       display: false,
    //       drawBorder: false,
    //     },
    //     ticks: {
    //       color: '#201666',
    //       font: {
    //         family: 'GilroyBold',
    //         size: 14,
    //       },
    //       major: {
    //         enable: true,
    //       },
    //     },
    //   },
    // },
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
