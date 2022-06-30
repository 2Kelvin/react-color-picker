import { useState } from "react";
import ColorPicker from "./Components/ColorPicker";

function App() {
  const [bgColor, setBgColor] = useState("");

  return (
    <div className="app" style={{background:bgColor}}>
      <ColorPicker
        setBgColor={setBgColor}
      />
    </div>
  );
}

export default App;
