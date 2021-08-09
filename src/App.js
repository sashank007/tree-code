import logo from "./logo.svg";
import { Provider } from "react-redux";
import "./App.css";
import Main from "./main/Main";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
