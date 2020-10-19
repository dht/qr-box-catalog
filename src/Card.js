import React from 'react';
import './Card.scss';
import QRCode from "react-qr-code";

function Card(props) {
  const {code, title, subtitle} = props;

  return (
      <div className="Card">
        <div className="code">
            {code}
        </div>
        <div className="qr">
        <QRCode value={code || ""} size={150} />
        </div>
        <div className="details">
            <div className="title">
            {title}
            </div>
            <div className="subtitle">
            {subtitle}
            </div>
        </div>
      </div>
  );
}

export default Card;
