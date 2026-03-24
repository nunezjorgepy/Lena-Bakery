import { Routes, Route } from "react-router";
// Import Screens
import HomePageScreen from "./Screens/HomePageScreen/HomePageScreen";
import OurProductsScreen from "./Screens/OurProductsScreens/OurProductsScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen/PlaceOrderScreen";
import LogInScreen from "./Screens/LogInScreen/LogInScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import AddProductScreen from "./Screens/AddProductScreen/AddProductScreen";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePageScreen />} />
        <Route path="/our-products" element={<OurProductsScreen />} />
        <Route path="/place-order" element={<PlaceOrderScreen />} />
        <Route path="/log-in" element={<LogInScreen />} />
        <Route path="/register" element={<RegisterScreen />} />

        {/* Admin Routes */}
        <Route path="/admin/add-product" element={<AddProductScreen />} />
      </Routes>
    </>
  )
}

export default App
