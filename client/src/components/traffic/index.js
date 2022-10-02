import './styles.css';
import React, { useState, useEffect, useCallback } from 'react';

const Traffic = () => {
  let getUpcoming = (light) => {
    switch (light) {
      case 'green':
        return {
          color: 'yellow',
          text: 'The light is yellow.',
          background: '#FFF2C5',
          border: '#FFCD1B',
          fontColor: '#8E7004',
          timeout: 8000,
        };
      case 'yellow':
        return {
          color: 'red',
          text: 'The light is red.',
          background: '#FFD3D3',
          border: '#FF1B1B',
          fontColor: '#930101',
          timeout: 4000,
        };
      case 'red':
        return {
          color: 'green',
          text: 'The light is green.',
          background: '#DDFFE4',
          border: '#00D12E',
          fontColor: '#005012',
          timeout: 8000,
        };

      default:
        return {
          color: 'black',
          text: 'No light match',
          background: 'whitesmoke',
          border: 'black',
          fontColor: 'black',
          timeout: 0,
        };
    }
  };

  const [light, setLight] = useState(getUpcoming('red'));
  const [time, setTime] = useState(getUpcoming('red').timeout / 1000);

  const lightsManager = useCallback(() => {
    // decrease timer
    setTimeout(() => {
      let remaningTime = time;
      if (remaningTime > 0) {
        --remaningTime;
      }
      setTime(remaningTime);

      // Action when timer is 0
      if (remaningTime === 0) {
        let nextLight = getUpcoming(light.color);
        remaningTime = getUpcoming(nextLight.color).timeout / 1000;
        setLight(nextLight);
      }

      // Set new time from next color
      setTime(remaningTime);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  useEffect(() => {
    lightsManager();
  }, [lightsManager]);

  return (
    <div
      style={{
        display: 'flex',
        width: 'inherit',
        border: `1px solid ${light.color}`,
        backgroundColor: light.background,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '6px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
          marginTop: '50px',
        }}
      >
        <div
          id='traffic-light'
          style={{
            height: '144px',
            width: '74px',
            justifyContent: 'center',
            alignItems: 'center',
            border: `1px solid ${light.fontColor}`,
            boxSizing: 'border-box',
          }}
        >
          <div
            className={`bulb ${light?.color === 'red' ? 'red' : '#111'}`}
          ></div>
          <div
            className={`bulb ${light?.color === 'yellow' ? 'yellow' : '#111'}`}
          ></div>
          <div
            className={`bulb ${light?.color === 'green' ? 'green' : '#111'}`}
          ></div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '30px',
            lineHeight: '35px',
            fontWeight: 300,
            color: light.fontColor,
            justifyContent: 'center',
            marginTop: '40px',
            marginBottom: '37px',
          }}
        >
          {light.text}
        </div>
      </div>
    </div>
  );
};

export default Traffic;
