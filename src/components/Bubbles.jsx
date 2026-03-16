import React from 'react';

export default function Bubbles() {
  const bubbleCount = 114;
  const bubbles = Array.from({ length: bubbleCount });

  return (
    <div className="bubbles">
      {bubbles.map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 10}s`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
        />
      ))}
    </div>
  );
}
