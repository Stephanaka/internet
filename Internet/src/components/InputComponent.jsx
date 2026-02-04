export default function InputComponent({
  num1,
  num2,
  operation,
  setNum1,
  setNum2,
  setOperation,
  onCalculate,
}) {
  return (
    <>
      <div className="input-row">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Първо число"
        />

        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Второ число"
        />
      </div>

      <button onClick={onCalculate}>Изчисли</button>
    </>
  );
}
