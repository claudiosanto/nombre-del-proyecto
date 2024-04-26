
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContainerProduct from "./component/container/ContainerProduct";

import Header from "./component/header/Header";

import ContainerDetails from "./component/containerdatails/ContainerDetails";



function app() {
  return (
    <BrowserRouter>
      <Header />
      <ContainerProduct />
      <Routes>
        < Route path='/' element={<ContainerProduct />} />
        <Route path='/product/:productId' element={<ContainerDetails />} />
      </Routes>
    </BrowserRouter>
  )

}
export default app;
