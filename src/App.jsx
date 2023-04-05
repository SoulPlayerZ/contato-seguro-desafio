import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import UserPage from "./pages/UserPage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/usuario" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
