import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "./fierbase.js";
import Poll from "./components/Poll";
function App() {
  return (
    <div className="App">
      <div>
        <Poll />
      </div>
    </div>
  );
}

export default App;
