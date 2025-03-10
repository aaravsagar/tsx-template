import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count => count + 1)}
      className="counter-glow relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 
                 text-white text-lg rounded-xl font-bold tracking-wide
                 transition-all duration-300 transform hover:scale-105
                 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]
                 active:scale-95 active:shadow-inner"
    >
      Count is {count}
    </button>
  );
};

export default Counter;