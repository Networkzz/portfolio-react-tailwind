import React, { useState, useEffect } from "react";
//useState to define date + modify date
function Clock() {
  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(() => new Date());
  };
//useEffect to re-render clock
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <span>{date.toLocaleTimeString()}</span>
    </>
  );
}

export default Clock;