import ContainerDetails from "./component/containerdatails/ContainerDetails";
import ContainerProduct from "./component/container/ContainerProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import ProductsProvider from "./context/Context";

function app() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ContainerProduct />} />
          <Route path="/product/:productId" element={<ContainerDetails />} />
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
}
export default app;
