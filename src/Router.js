import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpenseTracker from "screens/expenseTracker";
import Login from "screens/login";


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/expense-tracker" exact element={<ExpenseTracker />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router