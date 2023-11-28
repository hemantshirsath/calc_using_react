import styles from "./App.module.css";
import Display from "./components/Display";
import Buttonscontainer from "./components/Buttonscontainer";
import { useState } from "react";
function App() {
  let [display, Setdisplay] = useState("");
  let changedisplay = (val) => {
    console.log(`${val} clicked`);
    if (val === "C") {
      display = "";
      Setdisplay("");
    } else if (val === "=") {
      display = eval(display);
      display = display.toString();
      Setdisplay(display);
    } else if (val === "B") {
      if (display.length > 0) {
        let newdisplay = "";
        for (let i = 0; i < display.length - 1; i++) {
          newdisplay += display[i];
        }
        display = newdisplay;

        console.log(display, typeof display);
        Setdisplay(display);
      }
    } else {
      display = display + val;
      Setdisplay(display);
    }
  };
  return (
    <div className={styles.container}>
      <Display display={display}></Display>
      <Buttonscontainer changedisplay={changedisplay}></Buttonscontainer>
    </div>
  );
}

export default App;
