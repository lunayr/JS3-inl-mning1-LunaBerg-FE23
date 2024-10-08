import "./App.css";

export default function Clock({ time }: { time: Date }) {
  return (
    <>
      <h1>Current Time: </h1>
      <div className="card">
        <h2>
          {time.getHours().toString().padStart(2, "0")}:
          {time.getMinutes().toString().padStart(2, "0")}:
          {time.getSeconds().toString().padStart(2, "0")}
        </h2>
      </div>
    </>
  );
}
