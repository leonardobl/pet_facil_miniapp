import { BrowserRouter, Routes } from "react-router-dom";
import { useAppRoutes } from "./routes/useAppRoutes";

function App() {
  const appRoutes = useAppRoutes();

  return (
    <BrowserRouter>
      <Routes>{appRoutes}</Routes>
    </BrowserRouter>
  );
}

export default App;
