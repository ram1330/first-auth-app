import React from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRouter />
    </div>
  );
}

export default App;
