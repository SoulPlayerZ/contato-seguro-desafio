import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>TESTE H2</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
