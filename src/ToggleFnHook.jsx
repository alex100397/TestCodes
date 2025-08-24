import { useState } from 'react';
function useToggle(initialValue = false) {
  const [isOn, toggle] = useState(initialValue);
  const toggleFn = () => toggle((prev) => !prev);
  return [isOn, toggleFn];
}

export default function App() {
  const [isOn, toggle] = useToggle(false);

  return (
    <button data-testid="toggle-button"
      onClick={toggle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}
