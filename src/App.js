import { Provider } from "react-redux";
import store from "./store/config";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Pomodoro Timer</h1>
      </div>
    </Provider>
  );
}

export default App;
