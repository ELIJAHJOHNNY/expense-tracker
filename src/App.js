import { useEffect } from "react";
import Router from "./Router"

function App() {
  useEffect(() => {
    const ac = new AbortController();
    document.title = "Expense Tracker";
    return function cleanup() {
        ac.abort();
    };
}, [])

  return (
    <div className="font-nunito">
      <Router />
    </div>
  );
}

export default App;
