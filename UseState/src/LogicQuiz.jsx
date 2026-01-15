
import { useState } from "react";

const QUESTIONS = [
  {
    text: "Кое число следва логично редицата: 1, 1, 2, 3, 5, ?",
    options: ["6", "8", "13"],
  },
  {
    text:
      "Всички ученици в клас A учат математика. Иван е ученик в клас A. Кое е вярно?",
    options: [
      "Иван учи математика",
      "Иван не учи математика",
      "Няма достатъчно информация",
    ],
  },
  {
    text: "Кое от следните НЕ принадлежи към останалите?",
    options: ["Квадрат", "Триъгълник", "Кръг"],
  },
  {
    text: "Ако днес е сряда, какъв ден ще бъде след 10 дни?",
    options: ["Събота", "Неделя", "Понеделник"],
  },
];

export default function LogicQuiz() {
  const [screen, setScreen] = useState("start"); 
  const [currentIndex, setCurrentIndex] = useState(0);

  const startTest = () => {
    setScreen("question");
    setCurrentIndex(0);
  };

  const restartTest = () => {
    setScreen("start");
    setCurrentIndex(0);
  };

  const answer = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= QUESTIONS.length) {
      setScreen("end");
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const containerStyle = {
    maxWidth: 520,
    margin: "40px auto",
    fontFamily: "system-ui, sans-serif",
  };

  if (screen === "start") {
    return (
      <div style={containerStyle}>
        <h2>Логически тест</h2>
        <button onClick={startTest}>Започни теста</button>
      </div>
    );
  }

  if (screen === "end") {
    return (
      <div style={containerStyle}>
        <h2>Тестът е завършен!</h2>
        <button onClick={restartTest}>Започни отначало</button>
      </div>
    );
  }

  const q = QUESTIONS[currentIndex];

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: 12 }}>
        <strong>
          Въпрос {currentIndex + 1} / {QUESTIONS.length}
        </strong>
      </div>

      <div style={{ marginBottom: 16 }}>{q.text}</div>

      <div style={{ display: "grid", gap: 8 }}>
        {q.options.map((option, index) => (
          <button key={index} onClick={answer}>
            {String.fromCharCode(65 + index)}: {option}
          </button>
        ))}
      </div>
    </div>
  );
}
