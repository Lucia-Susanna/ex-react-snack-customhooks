import useSwitch from "./UseSwitch";

function App() {
  const { isOn, toggle } = useSwitch(false);

  return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
  );
}

export default App;
