import ContainerProduct from "./component/container/ContainerProduct";
import ContainerDetails from "./component/containerdatails/ContainerDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import ProductsProvider from "./context/Context";

function app() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/product/lavarropas/:productId"
            element={<ContainerDetails />}
          />
          <Route path="/" element={<ContainerProduct />} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
}
export default app;
