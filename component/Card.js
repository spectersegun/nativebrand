import React from 'react';
import { Progress } from 'antd';
import {
  CardArchive,
  CardCopy,
  CardStack,
  CardDrawing,
} from '../public/Svg/Svg';

export default function Card() {
  const cardDetails = [
    {
      header: 'My Projects ',
      icon: CardStack,
      background: 'rgba(242, 48, 48, 0.25)',
      progress: 42,
      strokeColor: 'rgba(242, 48, 48, 0.5)',
    },
    {
      header: 'My Proposals ',
      icon: CardCopy,
      background: 'rgba(141, 8, 245, 0.25)',
      progress: 25,
      strokeColor: 'rgba(141, 8, 245, 0.5)',
    },
    {
      header: 'My Designs ',
      icon: CardArchive,
      background: 'rgba(61, 191, 145, 0.25)',
      progress: 15,
      strokeColor: 'rgba(61, 191, 145, 0.5)',
    },
    {
      header: 'My Drawings ',
      icon: CardDrawing,
      background: 'rgba(255, 102, 0, 0.25)',
      progress: 28,
      strokeColor: 'rgba(255, 102, 0, 0.5)',
    },
  ];
  return (
    <>
      <div className="row card-holder">
        {cardDetails.map((cardDetails, index) => (
          <div className="col-lg-3 col-md-6" key={index}>
            <div
              className="card"
              style={{ background: cardDetails.background }}
            >
              <div className="d-flex">
                <p>{cardDetails.header} </p>
                <span>{cardDetails.icon}</span>
              </div>
              <div>
                <Progress
                  type="circle"
                  percent={cardDetails.progress}
                  width={36}
                  strokeColor={cardDetails.strokeColor}
                  format={percent => `${percent} `}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
