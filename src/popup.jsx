import React from "react";
import { render } from "react-dom";
import "./tailwind.css";

const HTML_ROOT_ID = "react-root";

function Popup() {
  return (
    <div className="w-44">
      <h1 className="text-red-400">hello from popup.jsx webpack updated</h1>
    </div>
  );
}

render(<Popup />, document.getElementById(HTML_ROOT_ID));
