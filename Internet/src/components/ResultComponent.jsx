export default function ResultComponent({ result }) {
  const isError = typeof result === "string";

  return (
    <div className="result-box">
      <h3>Резултат:</h3>
      <div className={isError ? "result-error" : "result-value"}>
        {result}
      </div>
    </div>
  );
}
