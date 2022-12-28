import React from "react";
import { render } from "react-dom";

const HTML_ROOT_ID = "react-root";

function Popup() {
  return (
    <div>
      <h1>hello from popup.jsx webpack updated</h1>
    </div>
  );
}

render(<Popup />, document.getElementById(HTML_ROOT_ID));
