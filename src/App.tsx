import Home from "./pages/Home";
import AddressForm from "./pages/AddressForm";
import AddressEdit from "./pages/AddressEdit";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/address-form" element={<AddressForm />} />
        <Route path="/address-edit" element={<AddressEdit />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
