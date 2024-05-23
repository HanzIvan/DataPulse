import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Layout from "./components/shared/Layout";
import Transactions from "./components/pages/Transactions";
import ManageTeam from "./components/pages/ManageTeam";
import ProfileForm from "./components/pages/ProfileForm";
import Invoice from "./components/pages/Invoice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="team" element={<ManageTeam />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="profileform" element={<ProfileForm />} />
        </Route>
        <Route path="login" element={<div>this is login page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
