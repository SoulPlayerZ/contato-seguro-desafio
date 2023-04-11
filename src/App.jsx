import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import UserPage from "./pages/UserPage";
import CompanyPage from "./pages/CompanyPage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/usuario" element={<UserPage />} />
        <Route path="/empresa" element={<CompanyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
