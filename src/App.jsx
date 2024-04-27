
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ContainerDetails from "./component/containerdatails/ContainerDetails";
import ContainerProduct from "./component/container/ContainerProduct";



function app() {
  return
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<ContainerProduct />} />
      <Route path='/product/:productId' element={<ContainerDetails />} />
    </Routes>
  </BrowserRouter>


}
export default app;

