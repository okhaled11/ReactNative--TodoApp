import Router from "./src/Router/Router";
import { TodoProvider } from "./src/context/TodoContext";

export default function App() {
  return (
    <TodoProvider>
      <Router />
    </TodoProvider>
  );
}
