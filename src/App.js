import { Provider } from "react-redux";
import store from "./store/config";

import Controls from "./components/Controls";
import Options from "./components/Options";
import Display from "./components/Display";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="title">Pomodoro Timer</h1>
        <Options />
        <Display />
        <Controls />
        <h3 className="copy">Made by <a href="https://github.com/rafael-lua">Rafael-Lua</a></h3>
      </div>
    </Provider>
  );
}

export default App;
