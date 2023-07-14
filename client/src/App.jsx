import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, Register, ProtectedRoute } from "./Pages";
import {
  ShareLayout,
  Stats,
  Profile,
  AddExpense,
  AllExpenses,
} from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute>
          <ShareLayout />
        </ProtectedRoute>}>
          <Route index element={<Stats />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add-expense" element={<AddExpense />} />
          <Route path="all-expenses" element={<AllExpenses />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
