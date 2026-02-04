import { useState } from "react";
import InputComponent from "./components/InputComponent";
import ResultComponent from "./components/ResultComponent";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState("");

  function calculateResult() {
    const a = Number(num1);
    const b = Number(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Моля въведете валидни числа!");
      return;
    }

    if (operation === "/" && b === 0) {
      setResult("Грешка: деление на 0 е невъзможно!");
      return;
    }

    let res;

    if (operation === "+") res = a + b;
    if (operation === "-") res = a - b;
    if (operation === "*") res = a * b;
    if (operation === "/") res = a / b;

    setResult(res);
  }

  return (
    <div className="calculator">
      <h2>Калкулатор</h2>

      <InputComponent
        num1={num1}
        num2={num2}
        operation={operation}
        setNum1={setNum1}
        setNum2={setNum2}
        setOperation={setOperation}
        onCalculate={calculateResult}
      />

      <ResultComponent result={result} />
    </div>
  );
}
