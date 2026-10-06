import { useState } from "react";

function Temperature({ temperature }) {
  return (
    <div className="temperature">
      <h2>{temperature}°C</h2>

      {temperature < 15 && <p>It's cold </p>}

      {temperature >= 15 && temperature <= 25 && (
        <p>It's normal </p>
      )}

      {temperature > 25 && <p>It's hot </p>}
    </div>
  );
}

function Controls({ onIncrease, onDecrease }) {
  return (
    <div className="controls">
      <button onClick={onDecrease}>−</button>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}

export default function App() {
  const [temperature, setTemperature] = useState(20);

  function handleIncrease() {
    setTemperature(temperature + 1);
  }

  function handleDecrease() {
    setTemperature(temperature - 1);
  }

  return (
    <div className="container">
      <h1>Temperature Controller</h1>

      <Temperature temperature={temperature} />

      <Controls
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
}