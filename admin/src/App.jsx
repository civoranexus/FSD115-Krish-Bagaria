import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
