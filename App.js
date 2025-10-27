import { useEffect } from "react";
import { Provider } from "react-redux";
import Router from "./src/Router/Router";
import { store, loadTodosFromStorage } from "./src/redux/store";

export default function App() {
  useEffect(() => {
    loadTodosFromStorage();
  }, []);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
