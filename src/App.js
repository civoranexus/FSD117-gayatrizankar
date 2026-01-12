import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoleSelect from "./pages/RoleSelect";
import VendorLogin from "./pages/VendorLogin";
import VendorDashboard from "./pages/VendorDashboard";
import ConsumerScan from "./pages/ConsumerScan";
import VendorSignup from "./pages/VendorSignup";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/consumer/scan" element={<ConsumerScan />} />
        <Route path="/vendor/signup" element={<VendorSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
      </Routes>
    </Router>
  );
}

export default App;
