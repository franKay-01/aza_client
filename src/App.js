import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Login, Dashboard, TransactionDetails, Register } from "./pages"

function App() {
  return (
    <div>
      <BrowserRouter>        
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/transaction/:id" element={<TransactionDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
