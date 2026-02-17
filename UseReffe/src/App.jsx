import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTime(0);
  };

  return (
    <div className="card">
      <h1 className="title">Таймер</h1>
      <div className="time">{time} сек</div>
      <div className="buttons">
        <button className="btn start" onClick={startTimer}>Старт</button>
        <button className="btn pause" onClick={pauseTimer}>Пауза</button>
        <button className="btn reset" onClick={resetTimer}>Нулиране</button>
      </div>
    </div>
  );
}

export default App;
